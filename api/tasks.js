import fs from "fs";
import path from "path";

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

export default function handler(req, res) {
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
  const { userId, name_like, _sort, _order } = req.query;
  const taskId = req.query.id || req.url.split("/").pop();

  if (req.method === "GET") {
    let tasks = db.tasks;

    // Filter by userId
    if (userId) {
      tasks = tasks.filter((task) => task.userId === userId);
    }

    // Filter by name (search)
    if (name_like) {
      tasks = tasks.filter((task) =>
        task.name
          .toLowerCase()
          .includes(decodeURIComponent(name_like).toLowerCase())
      );
    }

    // Sort tasks
    if (_sort) {
      tasks.sort((a, b) => {
        let comparison = 0;
        if (_sort === "dueDate") {
          comparison = new Date(a.dueDate) - new Date(b.dueDate);
        } else {
          comparison = a[_sort] > b[_sort] ? 1 : -1;
        }
        return _order === "desc" ? -comparison : comparison;
      });
    }

    res.status(200).json(tasks);
  } else if (req.method === "POST") {
    // Create new task
    const newTask = {
      id: Math.random().toString(16).substr(2, 4),
      ...req.body,
    };
    db.tasks.push(newTask);
    writeDB(db);
    res.status(201).json(newTask);
  } else if (req.method === "PUT") {
    // Update task
    const taskIndex = db.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      db.tasks[taskIndex] = { ...db.tasks[taskIndex], ...req.body };
      writeDB(db);
      res.status(200).json(db.tasks[taskIndex]);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } else if (req.method === "DELETE") {
    // Delete task
    const taskIndex = db.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const deletedTask = db.tasks.splice(taskIndex, 1)[0];
      writeDB(db);
      res.status(200).json(deletedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
