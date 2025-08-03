# My To-Do React Application

A comprehensive task management application built with React, featuring user authentication, task CRUD operations, filtering, sorting, and pagination.

## 🚀 Features

### Authentication

- ✅ User registration with validation
- ✅ Secure login with Formik and Yup validation
- ✅ Protected routes for authenticated users
- ✅ Persistent authentication state
- ✅ Toast notifications for auth actions

### Task Management

- ✅ Create tasks with name, description, priority, and due date
- ✅ Edit existing tasks inline
- ✅ Delete tasks with confirmation
- ✅ Mark tasks as completed/pending
- ✅ Priority levels: High, Medium, Low
- ✅ Due date tracking with overdue indicators

### Task Display & Organization

- ✅ Search tasks by name or description
- ✅ Filter by status (All, Pending, Completed)
- ✅ Filter by priority (All, High, Medium, Low)
- ✅ Sort by due date, priority, name, or status
- ✅ Pagination for better performance
- ✅ Task statistics dashboard

### User Experience

- ✅ Responsive design for all screen sizes
- ✅ Modern UI with Tailwind CSS
- ✅ Loading states and error handling
- ✅ Toast notifications for all actions
- ✅ Intuitive navigation and layout

## 🛠️ Technologies Used

- **Frontend:** React 19, Vite, Tailwind CSS
- **Forms:** Formik, Yup validation
- **Routing:** React Router v7
- **State Management:** React Context API
- **Icons:** Lucide React
- **Notifications:** React Toastify
- **Backend:** JSON Server (for development)
- **HTTP Client:** Axios

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd graduation-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   **Option A: Frontend only (with mock data):**

   ```bash
   npm run dev
   ```

   **Option B: Full stack (frontend + JSON server):**

   ```bash
   npm run dev:full
   ```

   **Option C: Run separately:**

   ```bash
   # Terminal 1 - Backend server
   npm run server

   # Terminal 2 - Frontend
   npm run dev
   ```

4. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

### Test Accounts

When using the mock authentication (backend not running), you can use:

- **Email:** john@example.com | **Password:** 123456
- **Email:** jane@example.com | **Password:** 123456
- **Email:** test@example.com | **Password:** 123456

Or register a new account!

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AddTaskForm.jsx  # Task creation form
│   ├── InputFields.jsx  # Custom input component
│   ├── Navbar.jsx       # Navigation bar
│   ├── Task.jsx         # Individual task item
│   └── TaskList.jsx     # Task list with filters
├── contexts/            # React Context providers
│   └── AuthContext.jsx  # Authentication context
├── hooks/               # Custom React hooks
│   └── useAuth.jsx      # Authentication hook
├── HOCS/               # Higher-Order Components
│   └── unAuthorizedHOC.jsx
├── Layout/             # Layout components
│   └── RootLayout.jsx  # Main app layout
├── pages/              # Page components
│   ├── Landing.jsx     # Landing/home page
│   ├── Login.jsx       # Login page
│   ├── Register.jsx    # Registration page
│   ├── Tasks.jsx       # Tasks page
│   └── NotFound.jsx    # 404 error page
├── services/           # API services
│   ├── Auth.jsx        # Authentication API
│   └── Tasks.js        # Task management API
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🎯 Usage Guide

### For Anonymous Users

1. **Landing Page:** View app features and benefits
2. **Register:** Create a new account with name, email, and password
3. **Login:** Access your account

### For Authenticated Users

1. **Dashboard:** View task statistics and overview
2. **Create Tasks:** Use the form to add new tasks with priority and due dates
3. **Manage Tasks:**
   - Click the checkbox to mark as completed/pending
   - Click edit icon to modify task details
   - Click delete icon to remove tasks
4. **Filter & Search:**
   - Use search bar to find specific tasks
   - Filter by status or priority
   - Sort by different criteria
5. **Navigation:** Use pagination for large task lists

## 🔧 API Endpoints

When JSON Server is running, the following endpoints are available:

### Users

- `GET /users` - Get all users
- `POST /users` - Create new user
- `GET /users?email={email}&password={password}` - User login

### Tasks

- `GET /tasks?userId={userId}` - Get user's tasks
- `POST /tasks` - Create new task
- `PUT /tasks/{id}` - Update task
- `DELETE /tasks/{id}` - Delete task
- `GET /tasks?userId={userId}&name_like={search}` - Search tasks

## 🎨 Styling

The application uses Tailwind CSS for styling with:

- Responsive design for mobile, tablet, and desktop
- Modern color scheme with blue/indigo theme
- Smooth animations and transitions
- Accessible form controls and interactions

## 🔒 Security Features

- Input validation with Yup schemas
- Protected routes for authenticated content
- Error handling for API failures
- Secure password handling (excluded from responses)

## 🚀 Performance Optimizations

- Pagination for large task lists
- Optimistic updates for better UX
- Lazy loading and code splitting
- Efficient state management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All the open-source libraries that made this project possible

---

**Happy Task Managing! 📝✅**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
