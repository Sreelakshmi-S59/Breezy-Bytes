// SECTION 1: SELECTING ELEMENTS FROM THE HTML
// We use 'document' to access the webpage and 'querySelectorAll' to find elements
const tabs = document.querySelectorAll('.tab'); // Gets all buttons with class 'tab'
const tabContents = document.querySelectorAll('.tab-content'); // Gets all divs with class 'tab-content'
const dishCards = document.querySelectorAll('.dish-card'); // Gets all divs with class 'dish-card'

// SECTION 2: FUNCTION TO SHOW THE SELECTED TAB CONTENT
// This function will run when a tab button is clicked
function showTabContent(tabName) {
    // Loop through all tab contents to hide them
    tabContents.forEach(content => {
        // If the content's ID matches tabName, show it, else hide it
        if (content.id === tabName) {
            content.classList.remove('hidden'); // Show the content
        } else {
            content.classList.add('hidden'); // Hide the content
        }
    });

    // Loop through all tabs to update their active state
    tabs.forEach(tab => {
        // If the tab's data-tab attribute matches tabName, make it active
        if (tab.getAttribute('data-tab') === tabName) {
            tab.classList.add('active'); // Add active class to highlight tab
        } else {
            tab.classList.remove('active'); // Remove active class from other tabs
        }
    });
}

// SECTION 3: ADDING CLICK EVENT TO TABS
// This makes the tabs respond when clicked
tabs.forEach(tab => {
    // Add a 'click' event listener to each tab button
    tab.addEventListener('click', () => {
        // Get the tab name from the 'data-tab' attribute
        const tabName = tab.getAttribute('data-tab');
        // Call the function to show the correct tab content
        showTabContent(tabName);
    });
});
