// IEFE
(() => {
    // State variables
    let toDoListArray = [];
    
    // UI variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form input");
    const ul = document.querySelector(".toDoList");
    
    // Event listeners
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default behavior (page reload)
        
        // Give item a unique ID
        let itemId = String(Date.now());
        
        // Get/assign input value
        let toDoItem = input.value;
        
        // Add item to DOM
        addItemToDOM(itemId, toDoItem);
        
        // Add item to array
        addItemToArray(itemId, toDoItem);
        
        // Clear the input box
        input.value = "";
    });
    
    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return; // User clicked on something else
        
        // Pass ID to functions to remove item
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });
    
    // Functions
    function addItemToDOM(itemId, toDoItem) {
        // Create an li
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        
        // Add toDoItem text to li
        li.innerText = toDoItem;
        
        // Add li to the DOM
        ul.appendChild(li);
    }
    
    function addItemToArray(itemId, toDoItem) {
        // Add item to array as an object with an ID
        toDoListArray.push({itemId, toDoItem});
        console.log(toDoListArray);
    }
    
    function removeItemFromDOM(id) {
        // Get the list item by data ID
        const li = document.querySelector(`[data-id="${id}"]`);
        
        // Remove list item
        if (li) {
            ul.removeChild(li);
        }
    }
    
    function removeItemFromArray(id) {
        // Create a new array without the item with the specified ID
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }
})();
