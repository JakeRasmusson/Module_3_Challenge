addEmployee.onclick = function () {
    const employeesArray = [];
    let whileloop = true;
    while (whileloop == true) {
        let firstName = prompt('Employee First name');
        let lastName = prompt('Employee Last name');
        let salary = prompt('Salary');
        if (isNaN(salary)) {
            salary = 0;
        }
        employeesArray.push({ 'First Name': firstName, 'Last Name': lastName, 'Salary': salary });

        let userContinue = confirm("Would you like to continue?");

        if (userContinue == true) {
            whileloop = true
        } else {
            whileloop = false
            console.log(employeesArray)
            displayAverageSalary(employeesArray)
            return employeesArray
        }

    }
}

const displayAverageSalary = function(employeesArray) {
    let total = 0;
    let count = 0;
    let employeeSalary = 0;
    employeesArray.forEach(employee => {
        employeeSalary = employee['Salary'] / 1
        total += employeeSalary
        count++
    });
    console.log(total / count)
}