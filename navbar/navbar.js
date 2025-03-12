// Dropdown color selector for tags.

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("tag-dropdown"); 
    const dropdownIcons = dropdown.querySelectorAll(".dropdown-icon"); 
    let selectedTag = null; 


    function showDropdown(event, tagElement) {
        event.stopPropagation(); 

        selectedTag = tagElement; 


        const rect = tagElement.getBoundingClientRect();

   
        dropdown.style.display = "block";
        dropdown.style.position = "absolute";
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom}px`;
    }

    
    document.querySelectorAll(".navbar-todays-tasks-tags img").forEach(tagIcon => {
        tagIcon.addEventListener("click", function (event) {
            showDropdown(event, this); 
        });
    });


    dropdownIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            if (selectedTag) {
                selectedTag.src = this.src; 
            }
            dropdown.style.display = "none"; 
        });
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});



// Input filters 

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