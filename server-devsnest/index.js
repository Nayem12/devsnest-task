const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { json } = require("express");
const port = process.env.PORT || 8080;
require("dotenv").config();

const app = express();
app.use(cors());
app.use(json());
const uri = `mongodb+srv://${process.env.dbUser}:${process.env.dbUserPass}@cluster0.mzbzmmm.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    const usersCollection = client.db("devsnest").collection("users");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const users = await usersCollection.find({}).toArray();
      res.send(users);
    });
    // j
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server running on Port");
});

app.listen(port, () => {
  console.log(`Server running on Port:${port}`);
});
