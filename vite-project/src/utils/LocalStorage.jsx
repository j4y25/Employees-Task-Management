
export const employees = [
  {
    id: 1,
    fname: "Aman",
    email: "e@e.com",
    password: "123",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        title: "Design Landing Page",
        description: "Create responsive landing page UI",
        date: "2026-03-22",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve mobile navbar issue",
        date: "2026-03-21",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss project requirements",
        date: "2026-03-20",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    fname: "Ravi",
    email: "employee2@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        title: "Build Login Page",
        description: "Create authentication UI",
        date: "2026-03-22",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect frontend with backend",
        date: "2026-03-21",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS Issues",
        description: "Resolve UI inconsistencies",
        date: "2026-03-19",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Prepare project docs",
        date: "2026-03-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    fname: "Sita",
    email: "employee3@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Create Dashboard",
        description: "Develop admin dashboard",
        date: "2026-03-22",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Test Features",
        description: "Perform UI testing",
        date: "2026-03-21",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Bugs",
        description: "Resolve reported bugs",
        date: "2026-03-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    fname: "Neha",
    email: "employee4@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        title: "Setup Database",
        description: "Configure MongoDB",
        date: "2026-03-22",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Queries",
        description: "Improve DB performance",
        date: "2026-03-21",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Backup Data",
        description: "Perform system backup",
        date: "2026-03-20",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Server Setup",
        description: "Deploy server environment",
        date: "2026-03-19",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    fname: "Amit",
    email: "employee5@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Create Logo",
        description: "Design brand logo",
        date: "2026-03-22",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Social Media Post",
        description: "Design Instagram creatives",
        date: "2026-03-21",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Edit Video",
        description: "Create promo video",
        date: "2026-03-20",
        category: "Media",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];


// Admin
export const admin = {
  id: 100,
  email: "admin@example.com",
  password: "123"
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
const employees = JSON.parse(localStorage.getItem('employees',))
const admin = JSON.parse(localStorage.getItem('admin',))

return {employees,admin}
}