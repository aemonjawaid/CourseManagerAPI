const express = require('express');
const router = express.Router();
const { courseController } = require('../controllers');
router.post('/', courseController.addCourse);
router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourseById);

// router.delete('/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send('Course not found for given id');

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     res.send(course);
// })



module.exports = router;