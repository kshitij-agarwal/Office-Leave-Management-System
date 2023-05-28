package com.kshitij.officeLeave;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public List<EmployeeClass> allEmployees() {
		return employeeRepository.findAll();
	}

	public Optional<EmployeeClass> getEmployeeById(ObjectId id) {
		return employeeRepository.findById(id);
	}

	public List<EmployeeClass> updateEmployee(List<EmployeeClass> employees) {
		employeeRepository.insert(employees);
		// employeeRepository.u
		// employeeRepository.saveAll(employees);
		return employees;
	}
}
