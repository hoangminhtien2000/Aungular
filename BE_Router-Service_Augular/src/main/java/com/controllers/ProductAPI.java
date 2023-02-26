package com.controllers;

import com.models.Product;
import com.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductAPI {
    @Autowired
    IProductService iProductService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List <Product>>findAll(){
       return new ResponseEntity<>(iProductService.findAll(), HttpStatus.OK) ;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable Long id){
        return new ResponseEntity<>(iProductService.findById(id),HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Product product){
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> edit(@RequestBody Product product){
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        iProductService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
