// import the data from data.js
var tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// 11.5.1 Introduction to Dynamic Tables
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // 11.5.2 Add forEach to your table
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Add a function to use D3 (Data-Driven Documents) to handle an action from a user, such as a button click
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // set default filter and create a new variable
    let filteredData = tableData;

    // add IF statement to check for a date filter, otherwise use default
    // A triple equal sign (===) is checking for strict equality. 
    // This means that the type and value have to match perfectly.
    // A double equals sign (==) is checking for loose equality
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      }
    
       // Rebuild the table using the filtered data
      // @NOTE: If no date was entered, then filteredData will
      // just be the original tableData.
      buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

