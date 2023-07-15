package com.be_case05_blog.services.impl;

import com.be_case05_blog.models.Comment;
import com.be_case05_blog.repositories.CommentRepo;
import com.be_case05_blog.services.ICommentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements ICommentServices {
    @Autowired
    CommentRepo commentRepo;

    @Override
    public List<Comment> findAll() {
        return (List<Comment>) commentRepo.findAll();
    }

    @Override
    public void save(Comment comment) {
        commentRepo.save(comment);
    }

    @Override
    public void delete(int id) {
        commentRepo.deleteById(id);
    }

    @Override
    public Comment findById(int id) {
        return commentRepo.findById(id).get();
    }
}
