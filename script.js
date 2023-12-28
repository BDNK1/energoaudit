document.addEventListener('DOMContentLoaded', function () {
    // Load CSV and create chart when the page is loaded
    parseCSVAndCreateChart();
});


// Function to parse CSV data and create a chart
function parseCSVAndCreateChart(csvData) {
    
    const data = {
        'month': [1,3,4,5,],
        'month2': [1,3,4,5,],
    };
    console.log("helo");
    
    // Assuming the first row of CSV contains labels
    const labels = Object.keys(data);
    
    // Extract data from CSV
    const vals =  Object.values(data);
    
    // Create chart
    createChart(labels, vals);
}
function createChart(labels, data) {
    console.log(labels,data);
    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: data.map((rowData, index) => ({
                label: `Dataset ${index + 1}`,
                data: rowData,
                backgroundColor: getRandomColor(),
            })),
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'CSV Data Diagrams',
            },
        },
    });
}

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}