package com.repositories;

import com.models.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductRepo extends PagingAndSortingRepository<Product, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM product WHERE name = :name")
    Product getCheckedName(String name);
}