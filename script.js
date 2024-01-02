let chart=null;

document.addEventListener('DOMContentLoaded', function () {
    // Load CSV and create chart when the page is loaded
    parseCSVAndCreateChart();
});

document.getElementById("diag1").addEventListener('click', ()=>{
    console.log("click 1");
    parseCSVAndCreateChart(1);
})
document.getElementById("diag2").addEventListener('click', ()=>{
    console.log("click 2");
    parseCSVAndCreateChart(2);
});
document.getElementById('diag3').addEventListener('click', ()=>{
    console.log("click 3");
    parseCSVAndCreateChart(3);
});document.querySelector('fuck').addEventListener('click', ()=>{
    console.log("click dick");
    parseCSVAndCreateChart(3);
});


// Function to parse CSV data and create a chart
function parseCSVAndCreateChart(diagNumber=1) {
    console.log(diagNumber);
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const data = {
        1:{
            1998: [132.7394, 153.9643, 126.9058, 96.6620, 52.9897, 35.7946, 30.6306, 27.1560, 28.3431, 59.5742, 115.1040, 115.9490],
            1999: [133.6297, 135.1479, 141.3097, 75.11, 39.8097, 48.2113, 51.3241, 50.9058, 54.5873, 78.7781, 118.32, 116.8826],
            2000: [128.6716, 152.6172, 84.8852, 22.9153,null,null, null, null, null, null, 14.1929, 128.9313, 119.1755],
            2001: [118.7406, 112.6457, 113.1786, 58.4248, 59.4620, null, null, null, null, 106.0102, 118.3628, 142.5446],
            2002: [126.3433, 122.6959, 130.7314, 111.1566, 92.3328, 83.1033, null, null, null, 106.0102, 118.3628, 142.5446],
            2003: [149.3488, 165.4075, 144.5534, 129.7825, 83.3555, 76.7085, 75.4225, 57.3658, 76.9353, 98.7130, 118.4990, 143.1330],
            2004: [148.5301, 149.0514, 145.0583, 116.8621, 73.1157, null, null, null, null, 82.5105, 122.49, 134.59],
            2005: [138.63, 147.77, 146.66, 117.9377, null, null, null, null, null, 86.2878, 92.41, 89.88],
            2006: [106.97, 117.46, 108.33, 100.9869, null, null, null, null, null, 78.2231, 97.5802, 102.4587],
            2007: [122.1357, 128.72, 109.6, 87.522, null, null, null, 24.1252, null, 70.635, 89.8, 106.7167]
        },
        2:{
            2021: [10, 43, 20, 25, 30, 35, 40, 45, 20, 55, 60, 65],
            2022: [12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78],
            2023: [15, 22, 10, 36, 43, 1, 57, 64, 18, 78, 85, 92]
        },
        3:{
            2021: [10, 43, 20, 25, 30, 35, 40, 45, 20, 55, 60, 65],
            2022: [12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78],
            2023: [15, 22, 10, 36, 43, 1, 57, 64, 18, 78, 85, 92],
            2023: [15, 22, 10, 36, 43, 1, 57, 64, 18, 78, 85, 92],
            2024: [15, 22, 100, 306, 43, 100, 5, 64, 18, 7, 85, 92],
            2025: [15, 22, 10, 36, 430, 10, 57, 64, 18, 78, 8, 92],
            2029: [150, 220, 10, 36, 43, 1, 57, 6, 18, 78, 85, 92]
        }
        };
    // Create chart
    createChart(labels, data[diagNumber]);
}
function createChart(labels, data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    if(chart!==null){
        chart.destroy();
    }
    chart = new Chart(ctx, {
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