package com.mfahmy.snippetsapi.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="tbl_snippets")
@Data
public class Snippet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String body;
    private String category;

    @Column(name="created_at",nullable = false,updatable = false)
    @CreationTimestamp
    private Date createdAt;

    @Column(name="updated_at",nullable = false)
    @UpdateTimestamp
    private Date updatedAt;



}
