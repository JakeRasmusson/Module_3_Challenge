// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Creating the Empty Employees Array
  const employeesArray = [];
  //While loop if the user keeps choosing to add employees
  let whileloop = true;
  while (whileloop == true) {
      let firstName = prompt('Employee First name');
      let lastName = prompt('Employee Last name');
      let salary = prompt('Salary') / 1; //Divide by one to force str to int
      if (isNaN(salary)) {
        //check if salary is valid, if not sal = 0
          salary = 0;
      }
      //Pushing employee object into the array
      employeesArray.push({ 'firstName': firstName, 'lastName': lastName, 'salary': salary });

      let userContinue = confirm("Would you like to continue?");
      //if the user chooses to continue else end loop and return the array
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
  //looping through the employees array
  employeesArray.forEach(employee => {
      employeeSalary = employee['salary']
      //adding each salary to total, and incrementing the employee count
      total += employeeSalary
      count++
  });
  //calculating the average salary
  averageSalary = total / count;
  //Making the average into a currency
  let dollarAmount = averageSalary.toLocaleString("en-US", {style:"currency", currency:"USD"});
  console.log(`The average salary of all employees is ${dollarAmount}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  //getting a random number between zero and number of employees
  let randomNum = Math.floor(Math.random() * employeesArray.length);
  //selecting random employee
  let newEmployee = employeesArray[randomNum]
  let randomFirstName = newEmployee.firstName
  let randomLastName = newEmployee.lastName
  //logging random employee to console
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
