const list = document.querySelector('#todo-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentNode;
        list.removeChild(li);
    }
});

const add_todo = document.forms['add-todo'];

add_todo.addEventListener('submit', function(e){
    e.preventDefault();
    const value = add_todo.querySelector('input[type="text"]').value;
    console.log(value);
})