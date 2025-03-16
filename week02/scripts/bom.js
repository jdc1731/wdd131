// Get references to the input field, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Ensure this references the unordered list in HTML

// Add event listener to the "Add Chapter" button
button.addEventListener('click', function () {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = input.value; // Set the text to the input value

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Append delete button to the <li>
        li.append(deleteButton);

        // Append <li> to the <ul> list
        list.append(li);

        // Add event listener to delete the chapter when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Refocus input after deleting an item
        });

        // Clear the input field
        input.value = '';
    } 
    
    // Refocus input field, whether or not a chapter was added
    input.focus();
});
