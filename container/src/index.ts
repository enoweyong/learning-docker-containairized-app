import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hi! ECS + ECR + FARGATE!");
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`The app is listening on port ${port}.`);
});