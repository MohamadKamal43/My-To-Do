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
  const { email, password } = req.query;

  if (req.method === "GET") {
    if (email && password) {
      // Login - find user with email and password
      const user = db.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        res.status(200).json([user]); // Return as array to match json-server format
      } else {
        res.status(200).json([]); // Return empty array if no user found
      }
    } else {
      // Return all users
      res.status(200).json(db.users);
    }
  } else if (req.method === "POST") {
    // Register new user
    const newUser = {
      id: Math.random().toString(16).substr(2, 4),
      ...req.body,
    };
    db.users.push(newUser);
    writeDB(db);
    res.status(201).json(newUser);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
