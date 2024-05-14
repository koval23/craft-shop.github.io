package com.example.craftshop.product.service;

import com.example.craftshop.product.dao.ProductRepository;
import com.example.craftshop.product.dto.ProductDto;
import com.example.craftshop.product.dto.RegisterProductDto;
import com.example.craftshop.product.model.Product;
import com.example.craftshop.user.exceptions.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProducteServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final S3Service s3Service;
    private final ModelMapper modelMapper;


    @Override
    public ProductDto addProduct(MultipartFile file, RegisterProductDto productDto) {
        String url = s3Service.uploadFile(file);
        Product product = modelMapper.map(productDto, Product.class);
        product.setProductUrl(url);
        return modelMapper.map(productRepository.save(product), ProductDto.class);
    }

    @Override
    public ProductDto findProductById(String id) {
        return modelMapper.map(productRepository.findById(id).orElseThrow(EntityNotFoundException::new), ProductDto.class);
    }

    @Override
    public ProductDto updateProductById(String id, MultipartFile file, RegisterProductDto productDto) {
        return null;
    }

    @Override
    public ProductDto removeProductById(String id) {
        Product product = productRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        productRepository.delete(product);
        return modelMapper.map(product, ProductDto.class);
    }

    //---------------------------------------------------------------

    @Override
    public List<ProductDto> findAllProduct() {
        return productRepository.findAll().stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .toList();
    }

    @Override
    public Iterable<ProductDto> findProductsByName(String name) {
        return null;
    }

    @Override
    public Iterable<ProductDto> findProductsBetweenPrice(BigDecimal min, BigDecimal max) {
        return null;
    }

    @Override
    public Iterable<ProductDto> findProductsByCategoria(String categoria) {
        return null;
    }

}