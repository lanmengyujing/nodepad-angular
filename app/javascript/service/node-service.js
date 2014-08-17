define(["../pad-app"], function (app) {
    app.service('notesService', function () {
        this.storeNote = function (note) {
            var key = 'note' + note.id;
            localStorage.setItem(key, JSON.stringify(note));

            return this.getAll();
        };

        this.get = function (index) {
            return JSON.parse(localStorage.getItem('note' + index));
        };

        this.getAll = function () {
            var notes = [];
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('note') !== -1) {
                    var note = localStorage.getItem(localStorage.key(i));
                    notes.push(JSON.parse(note));
                }
            }
            return notes;
        }
    });

    app.service('testService', function(){
        this.sayHello= function(text){
            return "Service says \"Hello " + text + "\"";
        };
        this.sayGoodbye = function(text){
            return "Service says \"Goodbye " + text + "\"";
        };
    });

});