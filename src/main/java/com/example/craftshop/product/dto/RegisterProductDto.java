package com.example.craftshop.product.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterProductDto {

    private String title;
    private BigDecimal price;
    private String description;
    private String categoria;

}
