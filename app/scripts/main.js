'use strict';


//App var
var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('complete-tasks');
//App funtion
var addTask = function() {
	console.log('Things are happening!');
};
var editTask = function() {
	console.log('Things are happening!');
};
var deleteTask = function() {
	console.log('Things are happening!');
};
var taskCompleted = function() {
	console.log('Things are happening!');
};
var taskIncomplete = function() {
	console.log('Things are happening!');
};
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	var checkBox = taskListItem.querySelector('input[type=checkbox]');
	var editButton = taskListItem.querySelector('button.edit');
	var deleteButton = taskListItem.querySelector('button.delete');
	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;

};
//App event handlers
addButton.onclick = addTask;

for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(var i = 0; i < completedTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}






//jQuery
(function($) {
  $(document).ready(function() {
    
  });
})(jQuery);

