package com.example.craftshop.product.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.Set;

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

    private String title;
    private BigDecimal price;
    private String description;
    private String categoriea;
    private String productUrl;

}
