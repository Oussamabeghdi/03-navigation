// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import path from "path";

// const app = express();
// // const PORT = 5000;

// //on configure le fichier .env pour le serveur.js dans le répertoire src/server/.env
// dotenv.config({ path: path.resolve(__dirname, ".env") });

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 5002;
// // MongoDB connection
// // mongoose
// //   .connect("mongodb://localhost:27017/tasks",
// mongoose.set("strictQuery", true);

// mongoose
//   .connect(process.env.MONGO_DB_SERVER as string, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// // Task Schema and Model
// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   date: String,
//   done: Boolean,
// });

// const Task = mongoose.model("Task", taskSchema);

// // Routes
// app.get("/tasks", async (req, res) => {
//   console.log("ok");

//   const tasks = await Task.find();

//   res.json(tasks);
// });

// app.post("/task", async (req, res) => {
//   const task = new Task(req.body);
//   await task.save();
//   res.json(task);
// });
// app.get("/gettask/:id", async (req, res) => {
//   await Task.findById(req.params.id);
//   res.json({ message: "Get task" });
// });

// app.put("/task/:id", async (req, res) => {
//   const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(task);
// });

// app.put("/updatetaskdone", async (req, res) => {
//   const myquery = { _id: req.body._id };
//   var newvalues = { $set: { done: req.body.done } };

//   const task = await Task.updateOne(myquery, newvalues);
//   res.json(task);
// });

// app.delete("/removetask/:id", async (req, res) => {
//   await Task.findByIdAndDelete(req.params.id);
//   res.json({ message: "Task deleted" });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
