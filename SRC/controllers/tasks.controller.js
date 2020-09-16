const { getConnection } =require('../database');
const {v4} = require('uuid');

const getTask = (req, res) => {
  const dates = getConnection().get('dates').value();
  res.json(dates);
};

const getOneDate = (req, res) =>{
  const date = getConnection().get('dates').find({id: req.params.id}).value();
  res.send(date);
};

const createTask = (req, res) => {
  const NewDate={
    id: v4(),
    name: req.body.name,
    day: req.body.day
  }
  getConnection().get('dates').push(NewDate).write();
  res.send("Recivido")
};

const updateDate = async (req, res) => {
  const result = await getConnection().get('dates').find({id: req.params.id})
    .assign(req.body)
    .write();
  res.json(result)
};

const deleteTask = (req, res) =>{
  const result = getConnection().get('dates').remove({id: req.params.id}).write();
  res.json(result);
};

module.exports = {
  getTask,
  createTask,
  getOneDate,
  updateDate,
  deleteTask
}