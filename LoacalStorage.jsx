const employees = [
  {
    id: 1,
    firstName: "Rohit",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Design and implement login UI",
        taskDate: "2025-01-10",
        category: "Frontend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve navbar alignment issue",
        taskDate: "2025-01-05",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment API",
        taskDate: "2025-01-02",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ananya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Create dashboard layout",
        taskDate: "2025-01-12",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "User Authentication",
        taskDescription: "Implement JWT authentication",
        taskDate: "2025-01-06",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare project documentation",
        taskDate: "2025-01-08",
        category: "Documentation"
      }
    ]
  },
  {
    id: 3,
    firstName: "Karthik",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Design",
        taskDescription: "Design MongoDB schema",
        taskDate: "2025-01-11",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "CRUD Operations",
        taskDescription: "Implement CRUD APIs",
        taskDate: "2025-01-04",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Optimization",
        taskDescription: "Optimize API response time",
        taskDate: "2025-01-03",
        category: "Optimization"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Mobile Responsiveness",
        taskDescription: "Make UI responsive for mobile",
        taskDate: "2025-01-13",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "CSS Refactoring",
        taskDescription: "Clean and optimize CSS code",
        taskDate: "2025-01-07",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility Check",
        taskDescription: "Ensure accessibility standards",
        taskDate: "2025-01-09",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Unit Testing",
        taskDescription: "Write unit tests",
        taskDate: "2025-01-14",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Error Handling",
        taskDescription: "Implement global error handling",
        taskDate: "2025-01-06",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deployment",
        taskDescription: "Deploy app to server",
        taskDate: "2025-01-01",
        category: "DevOps"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin=JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}
