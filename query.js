const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
// Sample user data (in a real app, you'd use a database)
const users = [
  { email: "abubakar@gmail.com", password: "k123" },
  { email: "rafique@gmail.com", password: "h123" },
  { email: "abc@gmail.com", password: "a123" },
  { email: "xyz@gmail.com", password: "a123" },
  { email: "ali@gmail.com", password: "m123" },
  { email: "ahad@gmail.com", password: "x123" },
];
app.use(bodyParser.json());
app.post("/login", (req, res) => {
  const  email = req.query.email;
  // Check if user exists
  // const user = users.find(u => u.email === email );
  let user = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      user = true;
    }
  }
  if (user) {
    res
      .status(201)
      .json({ message: "Email Already exsit", token: "Some token data" });
  } else {
    res.status(401).json({ error: "Invalid Email id" });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});






