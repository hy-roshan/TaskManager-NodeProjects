const Task = require("../models/Tasks");
const asyncHandler = require("../middleware/asyncHandler");
//Gets All Tasks

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.json({ tasks });
});

//Gets a single Task
const getTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOne({ _id: id });
  if (!task) {
    return res.status(500).json(`No such id`);
  }
  res.json({ task: task });
});

//Create a Task
const createTask = asyncHandler(async (req, res) => {
  const { name, completed } = req.body;
  const task = await Task.create({ name, completed });
  res.json({ tasks: task });
});

// Update a Task
const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate(
    {
      _id: id,
    },
    req.body,
    { new: true, runValidators: true }
  );
  res.json({ task });
});

//Delete Task
const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return res.status(500).json(`No such id`);
  }
  res.json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
