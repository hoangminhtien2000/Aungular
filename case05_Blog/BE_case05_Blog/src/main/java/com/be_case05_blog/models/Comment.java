package com.be_case05_blog.models;

import lombok.Data;

import javax.persistence.*;


@Entity
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_comment;
    @Column(name = "content_comment", columnDefinition = "LONGTEXT")
    private String content_comment;

}
