// Write your solution in this file!
// Step 1: Initialize the employee object
const employee = {
    name: "Bonnie Kim",
    streetAddress: "1023 Koinange St"
};

// Step 2: Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, //spread operator
        [key]: value
    };
}

// Step 3: Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; //destructive
    return employee;
}

// Step 4: Function to delete a key from employee non-destructively
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; //spread operator
    delete newEmployee[key];
    return newEmployee;
}

// Step 5: Function to delete a key from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; //destructivegit 
    return employee;
}
