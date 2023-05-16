package com.kshitij.officeLeave;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	public List<EmployeeClass> allEmployees(){
		return employeeRepository.findAll();
	}
}
