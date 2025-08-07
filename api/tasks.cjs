const fs = require("fs");
const path = require("path");

// Read database
const readDB = () => {
  const dbPath = path.join(process.cwd(), "db.json");
  const data = fs.readFileSync(dbPath, "utf8");
  return JSON.parse(data);
};

// Write database
const writeDB = (data) => {
  const dbPath = path.join(process.cwd(), "db.json");
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Generate random ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 4);
};

module.exports = function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const db = readDB();

  if (req.method === "GET") {
    const {
      userId,
      search,
      priority,
      status,
      sort,
      page = 1,
      limit = 10,
    } = req.query;

    let tasks = db.tasks;

    // Filter by user
    if (userId) {
      tasks = tasks.filter((task) => task.userId === userId);
    }

    // Filter by search
    if (search) {
      tasks = tasks.filter(
        (task) =>
          task.name.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by priority
    if (priority) {
      tasks = tasks.filter((task) => task.priority === priority);
    }

    // Filter by status
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    // Sort tasks
    if (sort) {
      switch (sort) {
        case "dueDate":
          tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
          break;
        case "priority":
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          tasks.sort(
            (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
          );
          break;
        case "name":
          tasks.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          // Default sort by creation order (newest first)
          tasks.reverse();
      }
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedTasks = tasks.slice(startIndex, endIndex);

    res.status(200).json({
      tasks: paginatedTasks,
      totalTasks: tasks.length,
      currentPage: parseInt(page),
      totalPages: Math.ceil(tasks.length / limit),
    });
  } else if (req.method === "POST") {
    const { name, description, priority, dueDate, userId } = req.body;

    if (!name || !description || !priority || !dueDate || !userId) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const newTask = {
      id: generateId(),
      name,
      description,
      priority,
      dueDate,
      userId,
      status: "pending",
    };

    db.tasks.push(newTask);
    writeDB(db);

    res.status(201).json(newTask);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
