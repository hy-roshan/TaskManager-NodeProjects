//Routes for basic CRUD
const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controllers/tasks");
//Get all tasks
// GET /api/v1/tasks
router.route("/").get(getAllTasks).post(createTask);
//Get single task
// GET /api/v1/tasks/:id

//Create tasks
// POST /api/v1/tasks

//Update tasks
// PATCH /api/v1/tasks/:id

//Delete tasks
// DELETE /api/v1/tasks/:id

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
