// Sample data
const teams = [
    { 
        teamName: 'Development', 
        employees: [
            { name: 'Alice', tasks: 5, completed: 3 },
            { name: 'Bob', tasks: 8, completed: 5 }
        ]
    },
    { 
        teamName: 'Marketing', 
        employees: [
            { name: 'Charlie', tasks: 4, completed: 4 },
            { name: 'David', tasks: 6, completed: 2 }
        ]
    }
];

// Function to dynamically add employee progress rows
function loadEmployeeProgress() {
    const employeeTable = document.getElementById('employeeTable');
    
    teams.forEach(team => {
        team.employees.forEach(employee => {
            const row = document.createElement('tr');
            const progress = (employee.completed / employee.tasks) * 100;

            row.innerHTML = `
                <td>${team.teamName}</td>
                <td>${employee.name}</td>
                <td>${employee.completed}/${employee.tasks}</td>
                <td>
                    <progress value="${progress}" max="100"></progress>
                </td>
                <td>
                    <button class="btn addTaskBtn" data-employee="${employee.name}">Add Task</button>
                </td>
            `;
            employeeTable.appendChild(row);
        });
    });

    // Add event listeners to "Add Task" buttons
    document.querySelectorAll('.addTaskBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const employeeName = e.target.getAttribute('data-employee');
            const task = prompt(`Add a task for ${employeeName}`);
            if (task) {
                alert(`New task '${task}' added for ${employeeName}`);
                // You can further integrate this with a task form or backend API
            }
        });
    });
}

// Load employee progress on page load
window.onload = loadEmployeeProgress;
