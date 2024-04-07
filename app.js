import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const start = async () => {
  try {
    console.log(`Application Connected to the Port : ${port}`);
  } catch (error) {
    console.error("Error starting application: ", error);
  }
};

app.listen(port, () => console.log(`Example app listening on port ${port} !`));

start();
