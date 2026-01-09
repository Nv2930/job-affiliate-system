package com.example.server.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;


    @Column(nullable = false, unique = true)
    private String slug;

    @Column(nullable = false)
    private String role;

    @Column(nullable = false)
    private String company;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false, columnDefinition = "LONGTEXT")
    private String overview;

    @Column(nullable = false, columnDefinition = "LONGTEXT")
    private String description;

    @Column(nullable = false, columnDefinition = "LONGTEXT")
    private String skills;

    @Column(nullable = false)
    private String degree;

    @Column(nullable = false)
    private String experience;

    @Column(nullable = false)
    private String salary;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private String url;

    // getter methods-
    public long getId() {
        return id;
    }
    public String getRole() {
        return role;
    }

    public String getCompany() {
        return company;
    }

    public String getType() {
        return type;
    }

    public String getCategory() {
        return category;
    }

    public String getOverview() {
        return overview;
    }

    public String getDescription() {
        return description;
    }

    public String getSkills() {
        return skills;
    }

    public String getExperience() {
        return experience;
    }

    public String getDegree() {
        return degree;
    }

    public String getSalary() {
        return salary;
    }

    public String getLocation() {
        return location;
    }

    public String getStatus() {
        return status;
    }

    public String getUrl() {
        return url;
    }


    public void setSlug(String slug) {
        this.slug = slug;
    }
    public String getSlug() {
        return slug;
    }
}