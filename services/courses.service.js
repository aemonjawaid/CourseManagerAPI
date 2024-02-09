const { courses } = require('../constants/courses.constant');
const Joi = require('joi');
const errorMsg = require('../constants/error-messages');
const statusCode = require('../utils/enum/http-status-code');

function addCourse(courseObj) {
    const { error } = validateCourse(courseObj);
    if (error) return res.status(statusCode.BAD_REQUEST).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: courseObj.name
    };
    courses.push(course);
    // courseDao.save(save)
    return course;
}

function updateCourse(req, res) {
    const { error } = validateCourse(req.body);
    if (error) res.status(statusCode.BAD_REQUEST).send(error.details[0].message);

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(statusCode.NOT_FOUND).send(errorMsg.COURSE_NOT_FOUND_FOR_GIVEN_ID);
    course.name = req.body.name;
    return course;
}

function deleteCourseById(req, res) {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(statusCode.NOT_FOUND).send(errorMsg.COURSE_NOT_FOUND_FOR_GIVEN_ID);

    const courseIndex = courses.indexOf(course);
    courses.splice(courseIndex, 1);
    res.send(course);
}

function getCourses() {
    if (!courses) return res.status(statusCode.NOT_FOUND).send(errorMsg.COURSES_NOT_FOUND);
    return courses;
}

function getCourseById(req, res) {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(statusCode.NOT_FOUND).send(errorMsg.COURSE_NOT_FOUND_FOR_GIVEN_ID);
    return course;
}


function validateCourse(course) {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

module.exports = {
    addCourse: addCourse,
    getCourses: getCourses,
    getCourseById: getCourseById,
    updateCourse: updateCourse,
    deleteCourseById: deleteCourseById
}