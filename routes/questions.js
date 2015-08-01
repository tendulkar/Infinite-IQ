/**
 * Created by Yugandhar Nanda on 29-07-2015.
 */
var router = require('express').Router();


/**
 * Add question
 *  body : question, options, auth info
 */
router.post('/', function(req, res, next){
    var question =  Question(req.body.question),
        options = req.body.options;
        user = req.body.user;

    QuestionHandler.add(question, options, user, function(err, result){
        if(err){
            res.status(err.code).json({'error': 'unable to create the question'});
        }
        res.status(201).json({'success': 'true'});
    });
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

module.exports = router;