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
    // Login - check if user exists with email and password
    const { email, password } = req.query;
    
    if (email && password) {
      const user = db.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        const { password: _, ...userWithoutPassword } = user;
        res.status(200).json(userWithoutPassword);
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(400).json({ message: "Email and password required" });
    }
  } else if (req.method === "POST") {
    // Register new user
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // Check if user already exists
    const existingUser = db.users.find((u) => u.email === email);
    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      return;
    }

    // Create new user
    const newUser = {
      id: generateId(),
      name,
      email,
      password,
    };

    db.users.push(newUser);
    writeDB(db);

    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json(userWithoutPassword);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
