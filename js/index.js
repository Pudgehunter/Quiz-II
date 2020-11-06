const database = firebase.database();

const nuevaTarea = document.getElementById('nuevaTarea');
const textView = document.getElementById('textView');

const toDoList = document.getElementById('toDoList');
const doingList = document.getElementById('doingList');
const doneList = document.getElementById('doneList');



var arrayListTask;

//Button
const tareasTask = ()=> {
    var date = new Date();

    let referencia = database.ref('ToDo').push();

    let taskTarea = {
        id: referencia.key,
        fecha: date.toString(),
        descripcionTarea: textView.value,
    };
    referencia.set(taskTarea);

    textView.value='';

}

nuevaTarea.addEventListener('click', tareasTask);

//Lectura
database.ref('ToDo').on('value', function(data) {
    toDoList.innerHTML = ''; //Este metodo esta para vaciar
    data.forEach(
        taskList => {
            
            let a = taskList.val();
            let taskToDo = new TareaClase(a);
            toDoList.appendChild(taskToDo.render());
        }
    );
});

database.ref('Doing').on('value', function(data) {
    doingList.innerHTML = ''; //Este metodo esta para vaciar
    data.forEach(
        taskList => {
            
            let a = taskList.val();
            let taskToDo = new TareaClase(a);
            doingList.appendChild(taskToDo.renderDoing());
        }
    );
});

database.ref('Done').on('value', function(data) {
    doneList.innerHTML = ''; //Este metodo esta para vaciar
    data.forEach(
        taskList => {
            
            let a = taskList.val();
            let taskToDo = new TareaClase(a);
            doneList.appendChild(taskToDo.renderDone());
        }
    );
});
