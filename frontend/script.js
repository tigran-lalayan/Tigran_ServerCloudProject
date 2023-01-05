const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    // Create a to-do item
    const createTodoItem = (text) => {
      const todoItem = document.createElement("li");
      todoItem.innerHTML = text;
      
      // Add a "remove" button
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.addEventListener("click", () => {
        todoList.removeChild(todoItem);
      });
      todoItem.appendChild(removeButton);
      
      return todoItem;
    }
    
    // Add a to-do item to the list
    const addTodoItem = (text) => {
      const todoItem = createTodoItem(text);
      todoList.appendChild(todoItem);
    }
  
    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (todoInput.value === "") return;
      
      // Add the to-do item to the list
      addTodoItem(todoInput.value);
      
      // Send request to backend
      fetch("/todos", {
        method: "POST",
        body: JSON.stringify({ item: todoInput.value }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
      
      todoInput.value = "";
    });