package com.kshitij.officeLeave;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
	
	@Autowired
	private MovieService movieService;
	
	@GetMapping
	public ResponseEntity<List<EmployeeClass>> getAllEmployees(){
		return new ResponseEntity<List<EmployeeClass>>(movieService.allEmployees(), HttpStatus.OK);
	}
}
