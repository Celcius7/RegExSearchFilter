const express = require("express");
const app = express();

const users = [
  { name: "Rajhans", email: "raj@xyz.com" },
  { name: "Abhay", email: "avi@xyz.com" },
];

app.get("/users", (req, res) => {
  const { name, email } = req.query;

  // for creating regex patterns
  const namePattern = new RegExp(name, "i");
  const emailPattern = new RegExp(email, "i");

  // search based on the provided name or email
  const results = users.filter(
    (user) =>
      (name && namePattern.test(user.name)) ||
      (email && emailPattern.test(user.email))
  );

  res.json(results);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
