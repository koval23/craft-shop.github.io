package com.example.craftshop.product.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "price", nullable = false)
    private BigDecimal price;
    @Column(name = "description")
    private String description;
    @Column(name = "categoria")
    private String categoria;
    @Column(name = "productUrl")
    private String productUrl = "";

}
