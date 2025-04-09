function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList(chapters) {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapters));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList(chaptersArray);
}

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
    
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.firstChild.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
  console.log('Chapter added:', item); // Debugging line to check if the chapter is added correctly
}


// Get references to the input field, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Ensure this references the unordered list in HTML
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => displayList(chapter));


// Add event listener to the "Add Chapter" button
button.addEventListener('click', ( ) => {
    // Check if input is not blank
    if (input.value !== '') {
        const newChapter = input.value; // Get the new chapter name// Create a new chapter object
        // Call displayList to display the new chapter
        displayList(input.value);

        // Push the new chapter into the chaptersArray
        chaptersArray.push(chapter);

        // Update the localStorage with the new array
        setChapterList(chaptersArray);

        // Clear the input field after adding the chapter
        input.value = '';

        // Refocus the input field
        input.focus();
    }
});



  
