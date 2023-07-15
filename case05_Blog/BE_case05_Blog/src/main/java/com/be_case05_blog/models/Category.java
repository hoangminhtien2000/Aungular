package com.be_case05_blog.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    private Integer id_category;

    @Column(name = "name_category", columnDefinition = "VARCHAR(30)", unique = true)
    private String name_category;

    @Column(name = "img_category", columnDefinition = "LONGTEXT")
    private String img_category;


}
