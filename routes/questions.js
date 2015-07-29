/**
 * Created by Yugandhar Nanda on 29-07-2015.
 */
var router = require('express').Router;


/**
 * Add question
 *  body : question, options, auth info
 */
router.post('/', function(req, res, next){

});


/**
 * get question details
 *  query: auth info
 */
router.get('/:questionId', function(req, res, next){

});


/**
 * Update the question (including adding the option - not deletion of option)
 *  body: question, options, auth info
 */
router.put('/:questionId', function(req, res, next){

});


/**
 * delete the question
 *  body: auth info
 */
router.delete('/:questionId', function(req, res, next){

});