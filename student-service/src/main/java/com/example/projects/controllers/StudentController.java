package com.example.projects.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projects.models.Student;
import com.example.projects.repos.StudentRepo;

@RestController
@CrossOrigin("*")
@RequestMapping("/students")
public class StudentController {

	@Autowired
	private StudentRepo sr;
	
	@GetMapping()
	public List<Student> getAllStudents() {
		return sr.findAll();
	}
	
	@PostMapping()
	public Student createStudent(@RequestBody Student s) {
		return sr.save(s);
	}
	
	@PutMapping()
	public Student updateStudent(@RequestBody Student s) {
		return sr.save(s);
	}
	
	@DeleteMapping("/{id}")
	public void updateStudent(@PathVariable long id) {
		sr.deleteById(id);
	}
}
