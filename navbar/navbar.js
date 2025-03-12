// Dropdown color selector for tags.
function selectTag() {
    const tags = document.querySelector(".tags-input").innerHTML
    console.log(tags);
}






const tags = document.getElementById('tags');
const input = document.getElementById('input-tag');

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
    
        event.preventDefault();
    
        // Create a new list item element for the tag
        const tag = document.createElement('li');
    
        // Get the trimmed value of the input element
        const tagContent = input.value.trim();
    
        // If the trimmed value is not an empty string
        if (tagContent !== '') {
    
            // Set the text content of the tag to 
            // the trimmed value
            tag.innerText = tagContent;
            
            // Append the tag to the tags list
            tags.appendChild(tag);
            
            // Clear the input element's value
            input.value = '';
        }
    }
});

// Add an event listener for click on the tags list
tags.addEventListener('click', function (event) {

    // If the clicked element has the class 'delete-button'
    if (event.target.classList.contains('delete-button')) {
    
        // Remove the parent element (the tag)
        event.target.parentNode.remove();
    }
});