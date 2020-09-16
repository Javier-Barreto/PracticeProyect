const { Router } = require('express')
const router = Router();

const { getTask, createTask, getOneDate, updateDate, deleteTask }= require('../controllers/tasks.controller')

router.get('/dates', getTask);
router.get('/dates/:id', getOneDate);
router.post('/dates', createTask);
router.put('/dates/:id', updateDate);
router.delete('/dates/:id', deleteTask);

module.exports = router