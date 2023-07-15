package com.be_case05_blog.repositories;

import com.be_case05_blog.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepo extends JpaRepository<Comment,Integer> {

}
