document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("tag-dropdown");
    const dropdownIcons = dropdown.querySelectorAll(".dropdown-icon");
    const tagsList = document.getElementById("tags");
    const input = document.getElementById("input-tag");
    let selectedTag = null;
    let selectedIconSrc = "/assets/tag-grey.png"; 

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
            
        
            selectedIconSrc = this.src;
            
            dropdown.style.display = "none";
        });
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();

            const tagContent = input.value.trim();

            if (tagContent !== "") {
        
                const tagItem = document.createElement("li");

     
                const tagIcon = document.createElement("img");
                tagIcon.src = selectedIconSrc;
                tagIcon.classList.add("filter-tag-icon");
                tagIcon.addEventListener("click", function (event) {
                    showDropdown(event, this);
                });

    
                const tagText = document.createElement("p");
                tagText.innerText = tagContent;


                tagItem.appendChild(tagIcon);
                tagItem.appendChild(tagText);
                tagsList.appendChild(tagItem);

            
                input.value = "";
            }
        }
    });

    tagsList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.parentNode.remove();
        }
    });
});
