
// Function to toggle the visibility of the Python Categories
// function toggleCategories() {
//     var categoriesRow = document.getElementsByClassName("pyCategories");
    
//     // Check the current display style and toggle between 'none' and 'table-row'
//     if (categoriesRow.style.display === "none") {
//         categoriesRow.style.display = "table-row";  // Make the row visible
//     } else {
//         categoriesRow.style.display = "none";  // Hide the row
//     }
// }


// Function to toggle the visibility of all Python category rows
function toggleCategories() {
    // Get all rows with the class 'pyCategories'
    var categoriesRows = document.querySelectorAll('.pyCategories');
    
    // Loop through all rows and toggle the 'show' class
    categoriesRows.forEach(function(row) {
        // If the row has the 'show' class, remove it (hides the row)
        if (row.classList.contains('show')) {
            row.classList.remove('show');
            // Set the display to 'none' after the transition ends
            setTimeout(() => row.style.display = 'none', 500); // Matching the transition time
        } else {
            // If the row does not have the 'show' class, add it (shows the row)
            row.style.display = 'table-row'; // Ensure it's visible before transitioning
            setTimeout(() => row.classList.add('show'), 10); // Add class after a brief moment
        }
    });
}