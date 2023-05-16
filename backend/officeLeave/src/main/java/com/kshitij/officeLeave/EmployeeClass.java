package com.kshitij.officeLeave;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "employees")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeClass {
	
	@Id
	private ObjectId id;
	private String empID;
	private String firstName;
	private String middleName;
	private String lastName;
	private String email;
	private long phoneNumber;
	private String department;
	private String empType;
	private Object leave;
	private List<Object> leaveHistory;
	
	
}
