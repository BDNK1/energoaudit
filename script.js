document.addEventListener('DOMContentLoaded', function () {
    // Load CSV and create chart when the page is loaded
    parseCSVAndCreateChart();
});


// Function to parse CSV data and create a chart
function parseCSVAndCreateChart(csvData) {
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const data = {
        2021: [10, 43, 20, 25, 30, 35, 40, 45, 20, 55, 60, 65],
        2022: [12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78],
        2023: [15, 22, 10, 36, 43, 1, 57, 64, 18, 78, 85, 92]
    };
    
    // Create chart
    createChart(labels, data);
}
function createChart(labels, data) {
    console.log(labels,data);
    const ctx = document.getElementById('myChart').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: Object.keys(data).map(year => ({
                label: `Year ${year}`,
                borderColor: getRandomColor(),
                data: data[year],
                fill: false,
            })),
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Line Chart with Multiple Years',
            },
        },
    });
    chart.resize(1000,1000);
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