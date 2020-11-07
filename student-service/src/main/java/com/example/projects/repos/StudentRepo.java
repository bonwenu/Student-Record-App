package com.example.projects.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projects.models.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

}
