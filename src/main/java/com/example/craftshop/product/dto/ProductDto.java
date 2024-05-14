package com.example.craftshop.product.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

    private String id;
    private String title;
    private BigDecimal price;
    private String description;
    private String categoria;
    private String productUrl;

}
