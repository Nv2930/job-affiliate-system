package com.example.server.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.server.entity.Jobs;
import com.example.server.repository.JobsRepository;

@Service
public class JobsServiceImpl implements JobsService {
    @Autowired
    JobsRepository jobRepo;

    @Override
    public Jobs insertJob(Jobs job) {
        return jobRepo.save(job);
    }

    @Override
    public Jobs getJobBySlug(String slug) {
        List<Jobs> jobsList=jobRepo.findAll();
        
        for (Jobs j : jobsList) {
            if(slug.toLowerCase().equals(j.getSlug())){
                return j;
            }
        }
        return null;
    }

    @Override
    public List<Jobs> getAllJobs() {
        return jobRepo.findAll();
    }

    @Override
    public List<Jobs> deleteJobBySlug(Long id) {
        List<Jobs> jobList=jobRepo.findAll();
        
        for(Jobs job: jobList){
            if(id==job.getId()){
                jobRepo.delete(job);
                return jobRepo.findAll();
            }
        }

        return null;  
    }

    @Override
    public List<Jobs> getJobByCategory(String category) {
        return jobRepo.findByCategory(category);
    }

    // @Override
    // public List<Jobs> findByExperience(String experience) {
        
    // }
}