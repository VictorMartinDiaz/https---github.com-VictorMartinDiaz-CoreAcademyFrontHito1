
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
    
    if(wrapper.classList.contains('wrapperDarkMode'))
        wrapper.classList.remove('wrapperDarkMode');
    else 
        wrapper.classList.add('wrapperDarkMode');
}