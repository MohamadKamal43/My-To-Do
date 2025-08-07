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
  const taskId = req.url.split("/").pop();

  if (req.method === "PUT") {
    // Update specific task
    const taskIndex = db.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      db.tasks[taskIndex] = { ...db.tasks[taskIndex], ...req.body };
      writeDB(db);
      res.status(200).json(db.tasks[taskIndex]);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } else if (req.method === "DELETE") {
    // Delete specific task
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
