import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartPendingAnalytic() {
    const data = {
        // labels: ["Inventory", "COD", "Pending"],
        datasets: [
            {
                label: "Inventory",
                data: [70, 30], 
                backgroundColor: ["#00A651", "#EDEDED"],
                borderWidth: 0,
                circumference: 360,
                cutout: "55%",
                rotation: -90,
                borderRadius: [5,0],
            },
            {
                label: "COD",
                data: [50, 50],
                backgroundColor: ["#000000", "#EDEDED"],
                borderWidth: 0,
                circumference: 360,
                cutout: "50%",
                rotation: -90,
                borderRadius: [5, 0],
            },
            {
                label: "Pending",
                data: [80, 20],
                backgroundColor: ["#007C3E", "#EDEDED"],
                borderWidth: 0,
                circumference: 360,
                cutout: "45%",
                rotation: -90,
                borderRadius: [5, 0],
            },
        ],
    };

    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: { 
                display: true,
                position: 'bottom',
                labels:{
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 16,
                    generateLabels: (chart: any) => {
                        const ds = chart.data.datasets || [];
                        return ds.map((d: any, i: number) => {
                            const color = Array.isArray(d.backgroundColor)
                                ? d.backgroundColor[0]
                                : d.backgroundColor;
                            return {
                                text: d.label || `Ring ${i + 1}`,
                                fillStyle: color,
                                strokeStyle: color,
                                hidden: !chart.isDatasetVisible(i),
                                datasetIndex: i,
                            };
                        });
                    },
                },
                onClick: (e, item, legend) => {
                    const ci = legend.chart;
                    const idx = (item as any    ).datasetIndex;
                    ci.setDatasetVisibility(idx, !ci.isDatasetVisible(idx));
                    ci.update();
                },
            },
            tooltip: { enabled: true },
        },
    };

    return (
        <div className="flex items-center">
            <div className="flex-1 hidden sm:flex sm:flex-col sm:gap-[8px] p-4">
                <p className="text-sm text-neutral-500 font-medium">Total</p>
                <p className="text-2xl text-black font-bold">$458.00</p>
                <p className="text-sm text-netral-400">
                    <span className='text-primary-500'>+21% </span>
                    vs last month
                </p>
            </div>
            <div className="w-[250px] h-[250px]">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};
