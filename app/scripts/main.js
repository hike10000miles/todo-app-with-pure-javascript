'use strict';


//App var
var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');
//App function
var createNewTaskElement = function(taskString) {
	var listItem = document.createElement('li');
	var checkBox = document.createElement('input');
	var label = document.createElement('label');
	var editInpt = document.createElement('input');
	var editButton = document.createElement('button');
	var deleteButton = document.createElement('button');
	checkBox.type = 'checkbox';
	editInpt.type = 'text';
	label.innerText = taskString;
	editButton.innerText = 'Edit';
	editButton.className = 'edit';
	deleteButton.innerText = 'Delete';
	deleteButton.className = 'delete';
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInpt);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
};
var addTask = function() {
	console.log('Things are happening!');
	if (taskInput.value === true) {
		var listItem = createNewTaskElement(taskInput.value);
		incompleteTasksHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskCompleted);
		taskInput.value = '';
	} else {
		alert('Please enter a task!');
	}
};
var editTask = function() {
	console.log('Things are happening!');
	var listItem = this.parentNode;
	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector('label');
	var containsClass = listItem.classList.contains('editMode');
	if(containsClass) {
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}
	listItem.classList.toggle('editMode');
};
var deleteTask = function() {
	console.log('Things are happening!');
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
};
var taskCompleted = function() {
	console.log('Things are happening!');
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
};
var taskIncomplete = function() {
	console.log('Things are happening!');
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
};
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	var checkBox = taskListItem.querySelector('input[type=checkbox]');
	var editButton = taskListItem.querySelector('button.edit');
	var deleteButton = taskListItem.querySelector('button.delete');
	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;

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

