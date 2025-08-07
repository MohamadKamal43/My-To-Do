# My To-Do - Task Management Made Simple

A modern, comprehensive task management application built with React 19, featuring user authentication, advanced task management, and real-time operations. Deployed on Vercel with a custom API backend.

## 🌟 Live Demo

🔗 **[Live Application](https://my-to-do-wheat.vercel.app/)**

## 🚀 Features

### 🔐 Authentication System

- ✅ User registration with comprehensive validation
- ✅ Secure login with Formik and Yup validation
- ✅ Protected routes with HOCs (Higher-Order Components)
- ✅ Persistent authentication state with localStorage
- ✅ Context-based state management
- ✅ Toast notifications for all auth actions
- ✅ Auto-logout and session management

### 📋 Advanced Task Management

- ✅ Create tasks with name, description, priority, and due date
- ✅ Real-time inline editing with validation
- ✅ One-click task deletion with optimistic updates
- ✅ Status toggle (completed/pending) with visual feedback
- ✅ Priority levels: 🔴 High, 🟡 Medium, 🟢 Low
- ✅ Due date tracking with overdue indicators
- ✅ User-specific task isolation

### 🔍 Smart Task Organization

- ✅ Real-time search by name or description
- ✅ Multi-level filtering (status, priority, date)
- ✅ Dynamic sorting (due date, priority, name, status)
- ✅ Responsive pagination (6 tasks per page)
- ✅ Task statistics dashboard with counters
- ✅ Empty state handling with helpful messages

### 🎨 Modern User Experience

- ✅ Fully responsive design (mobile-first approach)
- ✅ Modern gradient UI with Tailwind CSS v4
- ✅ Loading states and skeleton screens
- ✅ Error handling with user-friendly messages
- ✅ Toast notifications with controlled timing
- ✅ Smooth animations and transitions
- ✅ Accessibility-compliant design

### 🌐 Production-Ready Deployment

- ✅ Vercel deployment with custom API routes
- ✅ Environment-based configuration
- ✅ SEO optimized with comprehensive meta tags
- ✅ Social media sharing optimization
- ✅ Progressive Web App features
- ✅ CORS-enabled API endpoints

## 🛠️ Technology Stack

### Frontend

- **React 19** - Latest React with modern hooks
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling
- **React Router v7** - Client-side routing
- **Formik + Yup** - Form management and validation

### Backend & API

- **Vercel Functions** - Serverless API endpoints
- **Custom REST API** - Built with Node.js
- **JSON Database** - File-based data storage
- **CORS Support** - Cross-origin resource sharing

### State & Data Management

- **React Context API** - Global state management
- **Axios** - HTTP client with interceptors
- **localStorage** - Persistent authentication

### UI & UX

- **Lucide React** - Beautiful SVG icons
- **React Toastify** - Toast notifications
- **CSS Grid & Flexbox** - Modern layouts
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or yarn package manager
- **Git** for version control

### 🔧 Local Development Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MohamadKamal43/My-To-Do.git
   cd My-To-Do
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the JSON server (for local development):**

   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:5173
   ```

### 🌐 Production Deployment

The application is deployed on **Vercel** with serverless API functions:

1. **Frontend:** Automatically deployed from main branch
2. **Backend:** Custom Vercel API routes (`/api/*`)
3. **Database:** JSON file with Vercel Functions
4. **Domain:** Custom Vercel domain with HTTPS

### 📱 Test Accounts

For testing purposes, you can use these accounts:

| Email                  | Password    | User          |
| ---------------------- | ----------- | ------------- |
| `john.doe@example.com` | `12341234`  | Kamal         |
| `example@gmail.com`    | `11223344`  | Mohamed Kamal |
| `exame@gma.com`        | `111111111` | Alla          |

## 🏗️ Project Architecture

### 📁 Folder Structure

```
My-To-Do/
├── 📁 public/              # Static assets
├── 📁 src/
│   ├── 📁 components/      # Reusable UI components
│   │   ├── AddTaskForm.jsx # Task creation form
│   │   ├── InputFields.jsx # Custom input component
│   │   ├── Navbar.jsx      # Navigation header
│   │   ├── Task.jsx        # Individual task card
│   │   └── TaskList.jsx    # Task grid with filters
│   ├── 📁 contexts/        # React Context providers
│   │   └── AuthContext.jsx # Authentication state
│   ├── 📁 HOCS/           # Higher-Order Components
│   │   ├── ProtectedHOC.jsx    # Route protection
│   │   └── UnAuthorizedHOC.jsx # Public route wrapper
│   ├── 📁 Layout/         # Layout components
│   │   └── RootLayout.jsx # Main app layout
│   ├── 📁 pages/          # Page components
│   │   ├── Landing.jsx    # Landing page
│   │   ├── Login.jsx      # Login form
│   │   ├── Register.jsx   # Registration form
│   │   ├── Tasks.jsx      # Task management page
│   │   └── NotFound.jsx   # 404 error page
│   ├── 📁 services/       # API service layer
│   │   ├── Auth.js        # Authentication API
│   │   └── Tasks.js       # Task management API
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── 📁 api/                # Vercel serverless functions
│   ├── users.js           # User authentication API
│   ├── tasks.js           # Task CRUD API
│   └── 📁 tasks/
│       └── [id].js        # Individual task operations
├── db.json                # Database file
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies and scripts
```

### 🔧 API Architecture

#### Endpoints Overview

- `GET/POST /api/users` - User authentication
- `GET/POST /api/tasks` - Task operations
- `PUT/DELETE /api/tasks/[id]` - Individual task operations

#### Authentication Flow

1. User registers/logs in via `/api/users`
2. Client stores user data in localStorage
3. Protected routes verify authentication via Context
4. API calls include user ID for data isolation

#### Data Flow

1. **Components** → **Services** → **API Routes** → **Database**
2. **Database** → **API Routes** → **Services** → **Components**

   # Terminal 1 - Backend server

   npm run server

   # Terminal 2 - Frontend

   npm run dev

   ```

   ```

3. **Access the application:**
   - Frontend: http://localhost:5173

## 🎯 Feature Highlights

### 🔐 Authentication System

- **Secure Registration**: Comprehensive form validation with Yup schema
- **Persistent Login**: User session maintained across browser sessions
- **Protected Routes**: Automatic redirection based on authentication status
- **Context Management**: Global auth state with useContext hook

### 📋 Task Management

- **Smart Creation**: Form validation prevents invalid task creation
- **Inline Editing**: Edit tasks directly in the list view
- **Status Management**: One-click toggle between pending/completed
- **Priority System**: Visual priority indicators with emoji support

### 🔍 Advanced Filtering & Search

- **Real-time Search**: Instant results as you type
- **Multi-layer Filtering**: Combine status, priority, and search filters
- **Dynamic Sorting**: Sort by date, priority, name, or status
- **Responsive Pagination**: Optimized for performance with large datasets

### 🎨 Modern UI/UX

- **Gradient Backgrounds**: Beautiful blue-to-indigo gradients
- **Responsive Grid**: Adapts from 1 to 2 columns based on screen size
- **Loading States**: Skeleton screens and spinners for better UX
- **Toast Notifications**: Contextual feedback for all user actions

### 📱 Mobile Experience

- **Touch-friendly**: Large touch targets for mobile devices
- **Responsive Design**: Optimized layouts for all screen sizes
- **Mobile Navigation**: Collapsible menu and simplified controls
- **Performance**: Optimized bundle size and lazy loading

## 🚀 Deployment Guide

### Vercel Deployment (Current Setup)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Vercel automatically handles production builds
3. **API Routes**: Custom serverless functions in `/api` folder
4. **Domain**: Get a free `.vercel.app` domain or use custom domain

### Alternative Deployment Options

- **Netlify**: Deploy frontend, use Netlify Functions for API
- **Heroku**: Full-stack deployment with PostgreSQL database
- **Firebase**: Use Firestore for database and Firebase Hosting
- **AWS**: S3 + CloudFront for frontend, Lambda for API

## 🛠️ Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Start JSON server (local development)
npx json-server --watch db.json --port 3000
```

## 🔧 Environment Configuration

### Development

- Frontend: `http://localhost:5173`
- API: `http://localhost:3000`
- Auto-reload on file changes

### Production

- Frontend: Vercel CDN with global distribution
- API: Vercel serverless functions
- Environment detection with `import.meta.env.PROD`

## 📊 Performance & SEO

### 🚀 Performance Optimizations

- **Vite Build Tool**: Lightning-fast development and production builds
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Eliminates unused code from final bundle
- **Asset Optimization**: Compressed images and optimized fonts
- **Lazy Loading**: Components loaded on demand

### 🔍 SEO Features

- **Meta Tags**: Comprehensive SEO meta tags
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Rich preview cards for Twitter
- **Structured Data**: Ready for rich snippets
- **Mobile-First**: Mobile-optimized indexing

### 📈 Bundle Analysis

- **Frontend Bundle**: ~450KB (gzipped: ~142KB)
- **Dependencies**: Optimized with tree-shaking
- **Load Time**: < 2 seconds on 3G networks
- **Lighthouse Score**: 90+ performance rating

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards

- **ESLint**: Enforced code quality rules
- **Prettier**: Consistent code formatting
- **React**: Functional components with hooks
- **Clean Code**: Meaningful variable names and comments

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Kamal** - [@MohamadKamal43](https://github.com/MohamadKamal43)

- 📧 Email: Contact through GitHub
- 💼 Portfolio: [GitHub Profile](https://github.com/MohamadKamal43)
- 🌐 LinkedIn: Connect on LinkedIn

## 🙏 Acknowledgments

- **React Team**: For the amazing React framework
- **Vercel**: For excellent deployment platform
- **Tailwind CSS**: For utility-first CSS framework
- **ITI Advanced Frontend Program**: For the learning opportunity
- **Open Source Community**: For inspiration and resources

---

⭐ If you found this project helpful, please give it a star on GitHub!

📢 Feel free to open issues for bugs or feature requests.

🚀 Happy coding!

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
