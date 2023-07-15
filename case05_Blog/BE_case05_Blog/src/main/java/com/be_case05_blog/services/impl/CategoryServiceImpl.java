package com.be_case05_blog.services.impl;

import com.be_case05_blog.models.Category;
import com.be_case05_blog.repositories.CategoryRepo;
import com.be_case05_blog.services.ICategoryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements ICategoryServices {
    @Autowired
    CategoryRepo categoryRepo;

    @Override
    public List<Category> findAll() {
        return (List<Category>) categoryRepo.findAll();
    }

    @Override
    public void save(Category category) {
        categoryRepo.save(category);
    }

    @Override
    public void delete(int id) {
        categoryRepo.deleteById(id);
    }

    @Override
    public Category findById(int id) {
        return categoryRepo.findById(id).get();
    }
}
