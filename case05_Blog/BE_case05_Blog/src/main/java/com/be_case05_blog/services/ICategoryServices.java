package com.be_case05_blog.services;


import com.be_case05_blog.models.Category;

import java.util.List;

public interface ICategoryServices {
    List<Category> findAll();

    void save(Category category);

    void delete(int id);

    Category findById(int id);
}
