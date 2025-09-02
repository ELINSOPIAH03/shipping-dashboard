import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

export default function ChartIncomeCity (){
    const labels = ["JKT", "TNG", "DPK", "BKS", "BND", "YGK"];
    const data = {
        labels,
        datasets: [
            {
                type: "bar" as const,
                label: "Income",
                data: [2200000, 1800000, 3200000, 1500000, 1900000, 1600000],
                backgroundColor: (ctx: any) => {
                    const chart = ctx.chart;
                    const { ctx: canvas } = chart;
                    const gradient = canvas.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, "rgba(0,200,100,0.9)");
                    gradient.addColorStop(1, "rgba(0,200,100,0.0)");
                    return gradient;
                },
                borderRadius: 6,
            },
            {
                type: "line" as const,
                label: "Income",
                data: [2200000, 1800000, 3200000, 1500000, 1900000, 1600000],
                borderColor: "#067647",
                borderWidth: 2,
                tension: 0.4, 
                pointBackgroundColor: "#fff",
                pointBorderColor: "#f43f5e",
                pointBorderWidth: 2,
                pointRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value: number) => value / 1000000 + "M",
                },
                grid: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="w-full max-w-lg h-full">
            <Chart type="bar" data={data} options={options} />
        </div>
    );
}