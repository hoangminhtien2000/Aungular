package com.be_case05_blog.controllers;

import com.be_case05_blog.models.Blog;
import com.be_case05_blog.models.Category;
import com.be_case05_blog.models.Comment;
import com.be_case05_blog.services.IBlogServices;
import com.be_case05_blog.services.ICategoryServices;
import com.be_case05_blog.services.ICommentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/blogs")
public class BlogAPI {
    @Autowired
    IBlogServices iBlogServices;
    @Autowired
    ICategoryServices iCategoryServices;
    @Autowired
    ICommentServices iCommentServices;

//--------------------------------------------Blog-------------------------------------------------------------

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List <Blog>> findAllBlog() {
        return new ResponseEntity<>(iBlogServices.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Blog> findById(@PathVariable Integer id) {
        return new ResponseEntity<>(iBlogServices.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Blog blog) {
        iBlogServices.save(blog);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> edit(@RequestBody Blog blog) {
        iBlogServices.save(blog);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        iBlogServices.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//--------------------------------------------Comment-------------------------------------------------------------

    @GetMapping("/comment")
    public ResponseEntity<List<Comment>> findAllComment(){
        return new ResponseEntity<>(iCommentServices.findAll(), HttpStatus.OK) ;
    }

    @GetMapping("/comment/{id}")
    public ResponseEntity<Comment> findByIdComment(@PathVariable Integer id) {
        return new ResponseEntity<>(iCommentServices.findById(id), HttpStatus.OK);
    }

    @PostMapping("/comment")
    public ResponseEntity<?> saveComment(@RequestBody Comment comment) {
        iCommentServices.save(comment);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/comment")
    public ResponseEntity<?> editComment(@RequestBody Comment comment) {
        iCommentServices.save(comment);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/comment/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable Integer id) {
        iCommentServices.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //--------------------------------------------Category-------------------------------------------------------------

    @GetMapping("/category")
    public ResponseEntity<List<Category>> findAllCategory(){
        return new ResponseEntity<>(iCategoryServices.findAll(), HttpStatus.OK) ;
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Category> findByIdCategory(@PathVariable Integer id) {
        return new ResponseEntity<>(iCategoryServices.findById(id), HttpStatus.OK);
    }

    @PostMapping("/category")
    public ResponseEntity<?> saveCategory(@RequestBody Category category) {
        iCategoryServices.save(category);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/category")
    public ResponseEntity<?> editCategory(@RequestBody Category category) {
        iCategoryServices.save(category);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/category/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Integer id) {
        iCategoryServices.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
