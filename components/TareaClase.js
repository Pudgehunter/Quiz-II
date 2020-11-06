class TareaClase {

    constructor(taskList){
        this.taskList = taskList;
    }

    render =() =>{
        let component = document.createElement('div');
        component.className = 'taskGroup';

        let descripcionTareas = document.createElement('div');
        descripcionTareas.innerHTML = this.taskList.descripcionTarea;

        let fechita = document.createElement('div');
        fechita.innerHTML = this.taskList.fecha;
        fechita.className = 'fechaClass';

        let botonRojo = document.createElement('button'); //<button></button>
        botonRojo.className = 'botonRojoClass'; //<button id="deleteBtn"></button>

        let botonAzul = document.createElement('button'); //<button></button>
        botonAzul.className = 'botonAzulClass'; //<button id="deleteBtn"></button>

        component.appendChild(fechita);
        component.appendChild(descripcionTareas);
        component.appendChild(botonRojo);
        component.appendChild(botonAzul);

        botonRojo.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('ToDo/'+this.taskList.id).set(null);
        });


        //Esto es una carreta de modo Dios y ojala funcione
        botonAzul.addEventListener('click', ()=> {

            let referencia = database.ref('Doing').push();

            let taskTarea = {
                id: referencia.key,
                fecha: this.taskList.fecha,
                descripcionTarea: this.taskList.descripcionTarea,
            };
            referencia.set(taskTarea);

            textView.value='';
            
            return component;
        });


        return component;
    }

    renderDoing =() => {
        let component = document.createElement('div');
        component.className = 'taskGroup';

        let descripcionTareas = document.createElement('div');
        descripcionTareas.innerHTML = this.taskList.descripcionTarea;

        let fechita = document.createElement('div');
        fechita.innerHTML = this.taskList.fecha;
        fechita.className = 'fechaClass';

        let botonRojo = document.createElement('button'); //<button></button>
        botonRojo.className = 'botonRojoClass'; //<button id="botonRojoClass"></button>

        let botonAzul = document.createElement('button'); //<button></button>
        botonAzul.className = 'botonAzulClass'; //<button id="botonAzulClass"></button>
    
        let botonAmarillo = document.createElement('button'); //<button></button>
        botonAmarillo.className = 'botonAmarilloClass'; //<button id="botonAmarilloClass"></button>

        component.appendChild(fechita);
        component.appendChild(descripcionTareas);
        component.appendChild(botonRojo);
        component.appendChild(botonAzul);
        component.appendChild(botonAmarillo);

        botonRojo.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('Doing/'+this.taskList.id).set(null);
        });

        //Esto es una carreta de modo Dios y ojala funcione
        botonAzul.addEventListener('click', ()=> {

            const databasee = firebase.database();

            let referencia = database.ref('Done').push();

            let taskTarea = {
                id:  referencia.key,
                fecha: this.taskList.fecha,
                descripcionTarea:  this.taskList.descripcionTarea,
            };
            referencia.set(taskTarea);

            databasee.ref('Doing/'+this.taskList.id).set(null);
        });

        botonAmarillo.addEventListener('click', ()=> {

            let referencia = database.ref('ToDo').push();

            let taskTarea = {
                id: referencia.key,
                fecha: this.taskList.fecha,
                descripcionTarea: this.taskList.descripcionTarea,
            };
            referencia.set(taskTarea);

            textView.value='';
        });

        
        return component;
    }

    renderDone =() => {

        let component = document.createElement('div');
        component.className = 'taskGroup';

        let descripcionTareas = document.createElement('div');
        descripcionTareas.innerHTML = this.taskList.descripcionTarea;

        let fechita = document.createElement('div');
        fechita.innerHTML = this.taskList.fecha;
        fechita.className = 'fechaClass';

        let botonRojo = document.createElement('button'); //<button></button>
        botonRojo.className = 'botonRojoClass'; //<button id="botonRojoClass"></button>
    
        let botonAmarillo = document.createElement('button'); //<button></button>
        botonAmarillo.className = 'botonAmarilloClass'; //<button id="botonAmarilloClass"></button>

        component.appendChild(fechita);
        component.appendChild(descripcionTareas);
        component.appendChild(botonRojo);
        component.appendChild(botonAmarillo);

        botonRojo.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('Done/'+this.taskList.id).set(null);
        });

        //Esto es una carreta de modo Dios y ojala funcione
        botonAmarillo.addEventListener('click', ()=> {

            let referencia = database.ref('Doing').push();

            let taskTarea = {
                id: referencia.key,
                fecha: this.taskList.fecha,
                descripcionTarea: this.taskList.descripcionTarea,
            };
            referencia.set(taskTarea);

            textView.value='';
        });

        return component;
    }


}