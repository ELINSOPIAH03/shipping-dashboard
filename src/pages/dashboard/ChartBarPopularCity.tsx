import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'; 
import IconBox from '../../components/IconBox';
import buildingIcons from '../../assets/icons/ic-buildings-outline.svg'

ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type CityData = {
    city: string;
    motor: number;
    mobil: number;
};


const CityPopularChart = () => {
    const [chartData, setChartData] = useState<ChartData<'bar'>>({
        labels: [],
        datasets: [],
    });

    useEffect(()=>{
        fetch('/json/popularcity.json')
            .then(res => res.json())
            .then((data: CityData[]) => {
                const labels = data.map(item => item.city);
                const motorData = data.map(item => item.motor);
                const mobilData = data.map(item => item.mobil);
                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Motor',
                            data: motorData,
                            backgroundColor: '#17B26A',
                        },
                        {
                            label: 'Mobil',
                            data: mobilData,
                            backgroundColor: '#067647',
                        },
                    ],
                });
            });
    }, []);

    const options: ChartOptions<'bar'> = {
        responsive : true,
        plugins:{
            legend:{
                position: 'bottom'
            },
        },
        scales: {
            x: {
                grid:{
                    display: false,
                }
            },
            y:{
                grid:{
                    display: false,
                }
            }
        }
    }

    return (
        <div>
            <div className="flex items-center gap-[9px]">
                <IconBox>
                    <img src={buildingIcons} alt="box" />
                </IconBox>
                <p className="text-xl font-bold text-netral-800">Shipment Analytics</p>
            </div>
            <Bar data={chartData} options={options}/>
        </div>
    );
};

export default CityPopularChart;