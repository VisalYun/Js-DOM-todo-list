document.addEventListener('DOMContentLoaded', function(e){
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

        const li = document.createElement('li');
        const todo = document.createElement('span');
        const deleteBtn = document.createElement('span');

        todo.classList.add('name');
        deleteBtn.classList.add('delete');

        todo.textContent = value;
        deleteBtn.textContent = 'Delete';

        li.appendChild(todo);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    })

    const hideCheckBox = document.querySelector('#hide');
    hideCheckBox.addEventListener('change', function(e){
        if(hideCheckBox.checked){
            list.style.display = "none";
        }
        else{
            list.style.display = "initial";
        }
    })

    const searchBar = document.forms['search-todos'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const book = document.getElementsByTagName('li');
        Array.from(book).forEach(function(book){
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1){
                book.style.display = 'block';
            }
            else{
                book.style.display = 'none';
            }
        })
    });
});