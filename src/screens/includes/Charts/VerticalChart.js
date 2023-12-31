import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Bar } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip);

const VerticalChart = () => {
    const data = {
    labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
    datasets: [{
        label: 'Student enrollment',
        data: [65, 59, 80, 81, 56, 55, 40, 20, 50, 80, 60, 40],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
    };
    const options = {
        type: 'chart',
        data: data,
        scales: {
            y: {
                ticks: {
                    stepSize: 10,
                },
                stacked: true,
            }
        }
    };
    return <Bar data={data} options={options}/>
}

export default VerticalChart;