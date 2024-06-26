package com.example.craftshop.product.controller;

import com.example.craftshop.product.dto.ProductDto;
import com.example.craftshop.product.dto.RegisterProductDto;
import com.example.craftshop.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;

    @PostMapping("/add")
    public ProductDto addProduct(@RequestParam(value = "file") MultipartFile file,
                                 @RequestParam("title") String title,
                                 @RequestParam("description") String description,
                                 @RequestParam("price") BigDecimal price,
                                 @RequestParam("categories") String categoria
    ) {
        RegisterProductDto product = new RegisterProductDto(
                title, price, description, categoria
        );
        return productService.addProduct(file, product);
    }

//    @PutMapping("/update/{id}")
//    public ProductDto addProduct(@RequestParam(value = "file") MultipartFile file,
//                                 @RequestParam("title") String title,
//                                 @RequestParam("description") String description,
//                                 @RequestParam("price") BigDecimal price,
//                                 @RequestParam("categories") String categoria,
//                                 @RequestParam("id") String id
//    ) {
//        RegisterProductDto product = new RegisterProductDto(
//                title, price, description, categoria
//        );
//        return productService.updateProduct(id, file, product);
//    }

    @GetMapping("/all")
    public Iterable<ProductDto> findAllProducts() {
        return productService.findAllProduct();
    }

}
