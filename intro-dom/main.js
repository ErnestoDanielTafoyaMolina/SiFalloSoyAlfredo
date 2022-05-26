const todos=[];//array donde se agregaran las listas
window.onload=()=>{//espera a que cargue la pagina

    const form=document.getElementById('todo-form');//obtiene lo que hay en el formulario
    form.onsubmit=(e)=>{
        e.preventDefault();//evita que la pagina se refresque y perdamos todo
        
        const todo = document.getElementById('todo');//almacena lo que hay en el elemento todo
        const todoText = todo.value;//guarda en una variable el valor de todo
        todo.value='';//limpia el valor de todo
        todos.push(todoText);//introduce el valor que hay en el todotext al array

        const todoList=document.getElementById('todo-list');//entra en la lista y almacena sus datos

        // todoList.innerHTML='';// limpiar el inner para insertar algo nuevo

        // for(let i=0;i<todos.length;i++){
        //     todoList.innerHTML += '<li>'+todos[i]+'</li>'//mientras el tamaño del arreglo sea menor introducira lo que haya en todos
        // }
        // hay una manera de simplificar lo anterior con map

        const todosTemplate=todos.map(t=>'<li>'+t+'</li>');
        todoList.innerHTML=todosTemplate.join('');

        console.log(todosTemplate);
    }
}