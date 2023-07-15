package com.be_case05_blog.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_blog")
    private Integer id_blog;

    @Column(name = "name_blog")
    private String name_blog;

    @Column(name = "content")
    private String content;

    @Column(name = "content_full", columnDefinition = "LONGTEXT")
    private String content_full;

    @Column(name = "img_blog", columnDefinition = "LONGTEXT")
    private String img_blog;

    @Column(name = "like1",columnDefinition = " INT  default 0")
    private int like1;

    @ManyToOne
    @JoinColumn(name = "category", referencedColumnName = "id_category",nullable = false)
    private Category category;

    @OneToMany

    private List<Comment> comments;



}
