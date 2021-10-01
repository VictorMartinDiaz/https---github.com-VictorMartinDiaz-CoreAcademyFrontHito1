
//Add task by pushing "Add TO-DO" button
function addTask() {
    let newTask = document.getElementById("taskText").value;
    
    if(newTask.length < 6){
        alert("task minumum length must be 6 characters");
    }
    else {
        //create variables
        let list = document.getElementById('list');
        let newElem = document.createElement('div');
        let input = document.createElement('input');
        let label = document.createElement('label');
        let button = document.createElement('button');

        //create and manage newElem
        if(list.lastElementChild) list.lastElementChild.classList.add('notLastChild');
        list.appendChild(newElem);
        newElem.classList.add('elem');
        
        //create and manage checkbox
        newElem.appendChild(input);
        input.type = 'checkbox';
        input.classList.add('checkbox');
        newElem.appendChild(label);
        label.append(newTask);
        input.setAttribute('onclick', 'finisedTaskMark(this.parentElement)');
        
        //create and manage X button
        newElem.appendChild(button);
        button.append('X');
        button.classList.add('xButton');
        button.type = "button";
        button.setAttribute('onclick', 'deleteTask(this.parentElement)');
    }
}

function deleteTask(elem) {
        console.log(elem);
        elem.remove();
}

function finisedTaskMark(elem) {
    if(elem.classList.contains('finished'))
        elem.classList.remove('finished');
    else
        elem.classList.add('finished');
}

function switchDarkMode(){
    let wrapper = document.getElementById('wrapper');
    let header = document.getElementById('header');
    let tableHeader = document.getElementById('tableHeader');
    let inputButton = document.getElementById('inputButton');
    let taskText = document.getElementById('taskText');
    
    if(wrapper.classList.contains('wrapperDarkMode')){
        wrapper.classList.remove('wrapperDarkMode');
        document.getElementById('inputLabel').setAttribute('style', 'color:gray;');
    }
    else{
        wrapper.classList.add('wrapperDarkMode');
        document.getElementById('inputLabel').setAttribute('style', 'color:white;');
    }

    if(header.classList.contains('headerDarkMode')){
        header.classList.remove('headerDarkMode');
    }
    else{
        header.classList.add('headerDarkMode');
    }
    
    if(tableHeader.classList.contains('headerDarkMode')){
        tableHeader.classList.remove('headerDarkMode');
        tableHeader.setAttribute('style', 'color:white;');
    }
    else{
        tableHeader.classList.add('headerDarkMode');
    }

    if(taskText.classList.contains('taskTextDarkMode')){
        taskText.classList.remove('taskTextDarkMode');
    }
    else{
        taskText.classList.add('taskTextDarkMode');
    }

    if(inputButton.classList.contains('headerDarkMode')){
        inputButton.classList.remove('headerDarkMode');
        inputButton.classList.add('inputButton');
    }
    else{
        inputButton.classList.add('headerDarkMode');
        inputButton.classList.remove('inputButton');
    }
}