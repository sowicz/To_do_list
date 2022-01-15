// selectory
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filtrOpcja = document.querySelector('.filtrowanie');

// eventy listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', koszzrobione);
filtrOpcja.addEventListener('click', filtrTodo);

//function

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
  
    // todo DIV - make new todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
  
    // create LI - 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
  
    // zrobione - przycisk
    const zrobioneButton = document.createElement('button');
    zrobioneButton.innerHTML = '<i class="fas fa-check"></i>'
    zrobioneButton.classList.add("zrobione-btn")
    todoDiv.appendChild(zrobioneButton);

    // kosz - przycisk
    const koszButton = document.createElement('button');
    koszButton.innerHTML = '<i class="fas fa-trash"></i>'
    koszButton.classList.add("kosz-btn")
    todoDiv.appendChild(koszButton);

    // append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";


}

function koszzrobione(e) {
    const item = e.target;

    // kosz todo
    if (item.classList[0] === 'kosz-btn') {
        const a = item.parentElement;
        // animacja ruchu opadania
        a.classList.add('fall');
        a.addEventListener('transitionend', function(){
            a.remove();
        });
    }

    // zrobione
    if (item.classList[0] === 'zrobione-btn') {
        const a = item.parentElement;
        a.classList.toggle("completed");
    }

}

function filtrTodo(c) {
    const x = todoList.childNodes;
    x.forEach(function(x){
        switch(c.target.value){
            case "wszystkie":
                x.style.display = 'flex';
                break;
            case "zrobione":
                if(x.classList.contains('completed')){
                   x.style.display = 'flex'; 
                }
                else {
                    x.style.display = 'none'
                }
            /*case "niezrobione":
                if(x.classList.contains('todo')){
                    x.style.display = 'flex';
                }
                else {
                    x.style.display = 'none'
                }*/
            }
        })
    }


