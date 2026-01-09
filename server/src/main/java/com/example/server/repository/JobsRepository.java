package com.example.server.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.server.entity.Jobs;

public interface JobsRepository extends JpaRepository<Jobs, Integer>{
    List<Jobs> findByCategory(String category);

}