// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employeesArray = [];
  let whileloop = true;
  while (whileloop == true) {
      let firstName = prompt('Employee First name');
      let lastName = prompt('Employee Last name');
      let salary = prompt('Salary') / 1;
      if (isNaN(salary)) {
          salary = 0;
      }
      employeesArray.push({ 'firstName': firstName, 'lastName': lastName, 'salary': salary });

      let userContinue = confirm("Would you like to continue?");

      if (userContinue == true) {
          whileloop = true
      } else {
          whileloop = false
          return employeesArray
      }

  }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let total = 0;
  let count = 0;
  let employeeSalary = 0;
  let averageSalary = 0;
  employeesArray.forEach(employee => {
      employeeSalary = employee['salary'] / 1
      total += employeeSalary
      count++
  });
  averageSalary = total / count;
  let dollarAmount = averageSalary.toLocaleString("en-US", {style:"currency", currency:"USD"});
  console.log(`The average salary of all employees is ${dollarAmount}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomNum = Math.floor(Math.random() * employeesArray.length);
  let newEmployee = employeesArray[randomNum]
  let randomFirstName = newEmployee.firstName
  let randomLastName = newEmployee.lastName
  console.log(`Random employee is ${randomFirstName} ${randomLastName}!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
