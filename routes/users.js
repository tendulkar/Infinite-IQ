var express = require('express');
var router = express.Router();

/**
 *  add user to system
 * parse the body params, retreive the object
 */
router.post('/', function(req, res, next) {

});


/**
 * Update user profile, get the user profile details, like name, password, and update it
 */
router.put('/:userId/', function(req, res, next){

});


/**
 * Authenticate user
 */
router.post('/:userId/', function(req, res, next){

});


/**
 * Get Authenticate token, for validating specific role
 */
router.get('/:userId/role/:roleId', function(req, res, next){

});


/**
 * Add user to the role
 * @param :userId contains the userId of user, who'll get the role
 * admin, who is granting the role - userId will in the post request body.
 */
router.post('/:userId/role/:roleId', function(req, res, next){

});
module.exports = router;
