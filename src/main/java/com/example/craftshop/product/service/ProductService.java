package com.example.craftshop.product.service;

import com.example.craftshop.product.dto.ProductDto;
import com.example.craftshop.product.dto.RegisterProductDto;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

public interface ProductService {

    ProductDto addProduct(MultipartFile file, RegisterProductDto productDto);

    ProductDto findProductById(String id);

    ProductDto updateProductById(String id, MultipartFile file, RegisterProductDto productDto);

    ProductDto removeProductById(String id);


    // ---------------------------------------------

    Iterable<ProductDto> findAllProduct();

    Iterable<ProductDto> findProductsByName(String name);

    Iterable<ProductDto> findProductsBetweenPrice(BigDecimal min, BigDecimal max);

    Iterable<ProductDto> findProductsByCategoria(String categoria);

}
