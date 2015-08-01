/**
 * Created by Yugandhar Nanda on 31-07-2015.
 */

function QuestionHandler() {
}


/**
 * Add questions with the options
 * @param ques {JSON}
 * @param options {JSON}
 * @param user {JSON}
 * @param context {JSON}
 */
QuestionHandler.prototype.addQuestion = function(ques, options, user, callback) {
    var question = new Question(ques),
        options = new Options(options, question),
        user = User(user);

    user.isAuthenticated('USER', function(err, result) {
        if(err) {
            var error = new Error("ACCESS_ERROR:::: Unable to authenticate the " + user + " for 'user' action");
            callback(error);
            return;
        }

        question.persist(function (err, result) {
            if (err) {
                var error = new Error("INTERNAL_SERVER_ERROR::::Unable to add question");
                callback(error);
                return;
            }
            options.persist(function (err, res) {
                if (err) {
                    question.delete(function (err, r) {
                        if (err) {
                            var error = new Error("INTERNAL_SERVER_ERROR::::Unable to revert the adding question");
                            callback(error);
                            return;
                        }
                        var error = new Error("INTERNAL_SERVER_ERROR::::Unable to add options, reverted the question");
                        callback(error);
                        return;
                    });
                    return;
                }
                callback(null, res);
            });
        });
    });
};


/**
 * Get the questions of an user
 * @param user {JSON}
 */
QuestionHandler.prototype.myQuestions = function(user){
    var user = User(user);
    user.isAuthenticated('USER', function(err, result) {
        if(err) {
            var error = new Error("ACCESS_ERROR:::: Unable to authenticate the " + user + " for 'user' action");
            callback(error);
            return;
        }


    });
};


/**
 * delete the questions of an user
 * @param user {JSON}
 */
QuestionHandler.prototype.myQuestions = function(user){
    var user = User(user);
    user.isAuthenticated('USER', function(err, result) {
        if(err) {
            var error = new Error("ACCESS_ERROR:::: Unable to authenticate the " + user + " for 'user' action");
            callback(error);
            return;
        }


    });
};