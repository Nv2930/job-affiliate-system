package com.example.server.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.server.entity.Jobs;
import com.example.server.service.JobsServiceImpl;

@RestController // @Controller + @ResponseBody
public class JobsController {
    @Autowired
    JobsServiceImpl jobService;

    @GetMapping("/api/job/{slug}")
    public ResponseEntity<Jobs> viewJobBySlug(@PathVariable String slug) {
        try {
            Jobs searchedJob = jobService.getJobBySlug(slug);
            if (searchedJob != null) {
                return ResponseEntity.ok(searchedJob);
            }
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/api/jobs")
    public ResponseEntity<List<Jobs>> viewAllJobs_client() {
        try {
            return ResponseEntity.ok(jobService.getAllJobs());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/api/admin/jobs")
    public ResponseEntity<List<Jobs>> viewAllJobs_admin() {
        try {
            return ResponseEntity.ok(jobService.getAllJobs());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/api/admin/jobs/{category}")
    public ResponseEntity<List<Jobs>> getJobs(@PathVariable String category) {
        try {
            List<Jobs> categorizedJobs=jobService.getJobByCategory(category);
            if(!categorizedJobs.isEmpty()){
                return ResponseEntity.ok(categorizedJobs);
            }
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/api/admin/job")
    public ResponseEntity<Jobs> createJobs(@RequestBody Jobs job) {
        String slug = job.getRole().toLowerCase().replace(" ", "-") + "-" + job.getCompany().toLowerCase();
        job.setSlug(slug);

        try {
            return ResponseEntity.ok(jobService.insertJob(job));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/api/admin/jobs/{id}")
    public ResponseEntity<List<Jobs>> deleteJobController(@PathVariable Long id) {
        try {
            List<Jobs> jobList = jobService.deleteJobBySlug(id);
            if (!jobList.isEmpty()) {
                return ResponseEntity.ok(jobList);
            }
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}