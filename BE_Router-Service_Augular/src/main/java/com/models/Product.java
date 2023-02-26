package com.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Product {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "name", columnDefinition = "VARCHAR(128)", unique = true)
    private String name;

    @Column(name = "status", columnDefinition = "VARCHAR(20) default 'true'")
    private String status="true";

    @Column(name = "img", columnDefinition = "LONGTEXT")
    private String img;

    @Column(name = "price",columnDefinition = " DOUBLE  default 0")
    private double price;


}
