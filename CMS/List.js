const employees = [
    { name: "Rugved Narvenker", id: "696969", startDate: "2023-06-05", endDate: "2023-07-05" },
    { name: "Aarushi Trivedi", id: "123456", startDate: "2023-06-20", endDate: "2023-08-20" },
    { name: "Kshitij Trivedi", id: "789101", startDate: "2023-06-20", endDate: "2023-08-20" },
    { name: "Vandita Pathak", id: "246810", startDate: "2023-05-04", endDate: "2023-08-04" },
  ];
  
  function generateEmployeeList() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = ""; 
  
    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));
  
    sortedEmployees.forEach((employee) => {
      const li = document.createElement("li");
      li.classList.add("employee-item");
  
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = employee.name;
      li.appendChild(link);
  
      const idSpan = document.createElement("span");
      idSpan.textContent = "ID: " + employee.id;
      li.appendChild(idSpan);
  
      const startDateSpan = document.createElement("span");
      startDateSpan.textContent = "Start Date: " + employee.startDate;
      li.appendChild(startDateSpan);
  
      const endDateSpan = document.createElement("span");
      endDateSpan.textContent = "End Date: " + employee.endDate;
      li.appendChild(endDateSpan);
  
      employeeList.appendChild(li);
    });
  }
  
  function filterList() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const startDateInput = document.getElementById("startDateInput").value;
    const endDateInput = document.getElementById("endDateInput").value;
  
    const filteredEmployees = employees.filter((employee) => {
      const nameMatch = employee.name.toLowerCase().includes(searchInput);
      const startDateMatch = startDateInput ? employee.startDate >= startDateInput : true;
      const endDateMatch = endDateInput ? employee.endDate <= endDateInput : true;
  
      return nameMatch && startDateMatch && endDateMatch;
    });
  
    employees.length = 0; 
    filteredEmployees.forEach((employee) => {
      employees.push(employee); 
    });
  
    generateEmployeeList();
  }
  
  generateEmployeeList();
  