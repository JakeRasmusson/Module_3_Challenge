addEmployee.onclick =  function() {
    const employeesArray = [];
    let whileloop = true;
    while (whileloop == true){
        let firstName = prompt('Employee First name');
        let lastName = prompt('Employee Last name');
        let salary = prompt('Salary');
        if (isNaN(salary)) {
            salary = 0;
        }
        employeesArray.push({'First Name':firstName,'Last Name':lastName,'Salary':salary});

        let userContinue = confirm("Would you like to continue?");

        if (userContinue == true) {
            whileloop = true
        } else {
            whileloop = false
            displayAverageSalary(employeesArray)
            return employeesArray
        }

    }
}


function displayAverageSalary(employeesArray) {
    console.log(employeesArray)
}