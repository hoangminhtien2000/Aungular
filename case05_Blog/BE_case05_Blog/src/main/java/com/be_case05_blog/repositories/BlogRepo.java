package com.be_case05_blog.repositories;


import com.be_case05_blog.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepo extends JpaRepository<Blog,Integer> {
}
