package com.be_case05_blog.repositories;

import com.be_case05_blog.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
}
