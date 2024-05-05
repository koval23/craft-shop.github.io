package com.example.craftshop.product.dao;

import com.example.craftshop.product.model.Product;
import com.example.craftshop.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
