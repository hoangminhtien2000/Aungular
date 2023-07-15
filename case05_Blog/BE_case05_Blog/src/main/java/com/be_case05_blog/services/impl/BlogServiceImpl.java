package com.be_case05_blog.services.impl;

import com.be_case05_blog.models.Blog;
import com.be_case05_blog.repositories.BlogRepo;
import com.be_case05_blog.services.IBlogServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BlogServiceImpl implements IBlogServices {
    @Autowired
   private BlogRepo blogRepo;

    @Override
    public List<Blog> findAll() {
        return (List<Blog>) blogRepo.findAll();
    }

    @Override
    public void save(Blog blog) {
        blogRepo.save(blog);
    }

    @Override
    public void delete(int id) {
        blogRepo.deleteById(id);
    }

    @Override
    public Blog findById(int id) {
        return blogRepo.findById(id).get();
    }
}
