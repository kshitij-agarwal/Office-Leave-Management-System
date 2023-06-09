package com.kshitij.officeLeave;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
// @CrossOrigin(origins = "3")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping()
	public ResponseEntity<List<EmployeeClass>> getAllEmployees() {
		return new ResponseEntity<List<EmployeeClass>>(employeeService.allEmployees(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<EmployeeClass>> getEmployeeById(@PathVariable("id") ObjectId id) {
		return new ResponseEntity<Optional<EmployeeClass>>(employeeService.getEmployeeById(id), HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<EmployeeClass> updateEmployeeData(
			@RequestBody EmployeeClass employees,
			@PathVariable("id") ObjectId id) {
		return new ResponseEntity<EmployeeClass>(employeeService.updateEmployee(employees), HttpStatus.CREATED);
	}
}
