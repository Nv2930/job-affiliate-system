package com.example.server.service;

import java.util.List;

import com.example.server.entity.Jobs;

public interface JobsService {
    Jobs insertJob(Jobs job);                           
    Jobs getJobBySlug(String slug);              
    List<Jobs> getAllJobs();                 
    List<Jobs> deleteJobBySlug(Long id);

    List<Jobs> getJobByCategory(String category);
    // List<Jobs> findByExperience(String experience);
}