define(["../pad-app"], function (app) {
    app.directive('notepad', ['notesFactory', 'testService', function (notesFactory, testService) {
        return {
            restrict: 'AE',
            scope: {},
            link: function (scope, elem, attrs) {
                scope.openEditor = function (index) {
                    scope.editMode = true;
                    if (index !== undefined) {
                        scope.noteText = notesFactory.get(index).content;
                        scope.index = index;
                    } else
                        scope.noteText = undefined;
                };
                scope.save = function () {
                    if (scope.noteText !== "" && scope.noteText !== undefined) {
                        var note = {};
                        note.title = scope.noteText.length > 10 ? scope.noteText.substring(0, 10) + '. . .' : scope.noteText;
                        note.content = scope.noteText;
                        note.id = scope.index != -1 ? scope.index : localStorage.length;
                        scope.notes = notesFactory.storeNote(note);
                    }
                    scope.restore();
                };


                scope.restore = function () {
                    scope.editMode = false;
                    scope.index = -1;
                    scope.noteText = "";
                };

                var editor = elem.find('#input');

                editor.bind('keyup keydown', function () {
                    scope.noteText = editor.text().trim();
                });

                scope.restore();

                scope.notes = notesFactory.getAll();
            },
            templateUrl: '../view/node-template.html'
        };
    }]);
});

