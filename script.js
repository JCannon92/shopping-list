const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', (event) => {  
        event.preventDefault();
        let inputValue = input.value;
        if (!inputValue) {return;}
        input.value = "";

        listItem = document.createElement('li');
        span = document.createElement('span');
        span.textContent = inputValue;

        listItem.appendChild(span);

        deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', (event) => event.target.parentNode.remove());

        listItem.appendChild(deleteButton);

        list.appendChild(listItem);

        input.focus();
    }

)