package com.be_case05_blog.services;

import com.be_case05_blog.models.Comment;

import java.util.List;

public interface ICommentServices {
    List<Comment> findAll();

    void save(Comment comment);

    void delete(int id);

    Comment findById(int id);

}
