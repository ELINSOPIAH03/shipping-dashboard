import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

export default function ChartIncomeTotal() {
    const data = {
        labels: ["01-07 Apr", "08-14 Apr", "15-21 Apr", "22-28 Apr"],
        datasets: [
            {
                label: "Income",
                data: [200, 450, 800, 1200],
                fill: true,
                borderColor: "#A9EFC5", // hijau
                backgroundColor: "rgba(22, 163, 74, 0.2)",
                tension: 0.4,
                pointBackgroundColor: "#A9EFC5",
                pointBorderColor: "#A9EFC5",
                pointRadius: 4,
                order: 1,
            },
            {
                label: "Outcome",
                data: [150, 300, 600, 900],
                fill: true,
                borderColor: "#17B26A", // biru
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                tension: 0.4,
                pointBackgroundColor: "#17B26A",
                pointBorderColor: "#17B26A",
                pointRadius: 4,
                order: 2,
            },
            {
                label: "Balance",
                data: [50, 200, 200, 300],
                fill: false,
                borderColor: "#119256", // kuning
                backgroundColor: "#119256",
                tension: 0.4,
                pointBackgroundColor: "#119256",
                pointBorderColor: "#119256",
                pointRadius: 4,
                order: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom" as const,
                labels: {
                    usePointStyle: true,
                },
            },
            tooltip: {
                mode: "index" as const,
                intersect: false,
            },
        },
        interaction: {
            mode: "nearest" as const,
            intersect: false,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    color: "#f3f4f6",
                },
            },
        },
    };

    return <Line data={data} options={options} />;
}