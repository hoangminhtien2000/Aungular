package com.be_case05_blog.services;


import com.be_case05_blog.models.Blog;

import java.util.List;

public interface IBlogServices {
    List<Blog> findAll();

    void save(Blog blog);

    void delete(int id);

    Blog findById(int id);
}
