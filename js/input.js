document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.getElementById("timePicker");
    const timeBtn = document.getElementById("time-picker-button");
    const displayTime = document.querySelector(".display-time-input");
    const dateBtn = document.getElementById("date");
    const dateInput = document.getElementById("datePicker");

    function openTimePicker() {
        if (timeInput.showPicker) {
            timeInput.showPicker(); // Modern browsers
        } else {
            timeInput.focus(); // Fallback for older browsers
        }
    }

    function updateTimeDisplay() {
        const timeInputValue = timeInput.value;
        if (timeInputValue) {
            displayTime.innerHTML = timeInputValue; // Update the display
            console.log("Selected Time:", timeInputValue);
        }
    }

    function openDatePicker() {
        if (dateInput.showPicker) {
            dateInput.showPicker();
        } else {
            dateInput.focus();
        }
    }

    function updateDateDisplay() {
        const dateInputValue = dateInput.value;
        if (dateInputValue) {
            updateDateDisplay.innerHTML = dateInputValue;
            console.log("Selected Time:", dateInputValue);
        }
    }

    timeBtn.addEventListener("click", openTimePicker);
    timeInput.addEventListener("change", updateTimeDisplay);
    dateBtn.addEventListener("click", openDatePicker);
    dateInput.addEventListener("change", updateDateDisplay);

});
