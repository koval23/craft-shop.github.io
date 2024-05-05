package com.example.craftshop.product.service;

import com.example.craftshop.product.dto.ProductDto;
import com.example.craftshop.product.dto.RegisterProductDto;
import com.example.craftshop.product.model.Product;
import org.springframework.web.multipart.MultipartFile;

public interface ProductService {

    Product addProduct(MultipartFile file, RegisterProductDto productDto);

    Iterable<ProductDto> findAllProduct();

}
