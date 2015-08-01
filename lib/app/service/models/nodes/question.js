/**
 * Created by Yugandhar Nanda on 12-07-2015.
 */


var Question = function(quesJson) {
    this._store = QuestionStore();
    this.title = quesJson["title"];
    this.text = quesJson["text"];
    this.tags = quesJson["title"];
    this.created_at = quesJson["created"] || Date.now();
    this.updated_at = quesJson["updated"] || Date.now();
    this.id = UIDGenarator.getId();
};


Question.prototype.persist = function() {

};