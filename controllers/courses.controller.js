const { courseService } = require('../services');
const errorMsg = require('../constants/error-messages');
const statusCode = require('../utils/enum/http-status-code');
const httpStatusCode = require('../utils/enum/http-status-code');

function addCourse(req, res) {
    try {
        const body = req.body;
        const course = courseService.addCourse(body);
        res.status(statusCode.OK).send(course);
    }
    catch (error) { throwError(res, error); }
}

function updateCourse(req, res) {
    try {
        const updatedCourse = courseService.updateCourse(req, res);
        res.status(httpStatusCode.OK).send(updatedCourse);
    }
    catch (error) { throwError(res, error); }
}

function deleteCourseById(req, res) {
    try {
        const deletedCourse = courseService.deleteCourseById(req, res);
        res.status(httpStatusCode.OK).send(deletedCourse);
    }
    catch (error) { throwError(res, error); }
}

function getCourses(req, res) {
    try {
        const courses = courseService.getCourses();
        res.status(statusCode.OK).send(courses);
    }
    catch (error) { throwError(res, error); }
}

function getCourse(req, res) {
    try {
        const course = courseService.getCourseById(req, res);
        res.status(statusCode.OK).send(course);
    }
    catch (error) { throwError(res, error); }
}

function throwError(res, error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER).send(errorMsg.INTERNAL_SERVER_ERROR);
}

module.exports = {
    addCourse: addCourse,
    getCourses: getCourses,
    getCourse: getCourse,
    updateCourse: updateCourse,
    deleteCourseById: deleteCourseById
}