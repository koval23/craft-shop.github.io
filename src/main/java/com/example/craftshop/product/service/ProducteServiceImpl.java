package com.example.craftshop.product.service;

import com.example.craftshop.product.dao.ProductRepository;
import com.example.craftshop.product.dto.ProductDto;
import com.example.craftshop.product.dto.RegisterProductDto;
import com.example.craftshop.product.model.Product;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProducteServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final S3Service s3Service;
    private final ModelMapper modelMapper;


    @Override
    public Product addProduct(MultipartFile file, RegisterProductDto productDto) {
        String url = s3Service.uploadFile(file);
        Product product = modelMapper.map(productDto, Product.class);
        product.setProductUrl(url);
        return productRepository.save(product);
    }

    @Override
    public List<ProductDto> findAllProduct() {
        return productRepository.findAll().stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .toList();
    }

}