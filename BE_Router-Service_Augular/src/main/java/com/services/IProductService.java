package com.services;

import com.models.Product;

import java.util.List;

public interface IProductService {
    List<Product> findAll();

    void save(Product product);

    void delete(Long id);

    Product findById(Long id);
}
