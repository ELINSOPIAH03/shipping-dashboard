import React from 'react';
import { Link } from 'react-router-dom';

import DasboardLayout from '../../layout/DasboardLayout';
import CalendarHeatmapComponent from '../../components/CalendarHeatmapComponent';
import IconBox from '../../components/IconBox';
import boxOutlineIcon from '../../assets/icons/ic-box-outline.svg';
import archiveCheckIcon from '../../assets/icons/ic-archive-check-linear.svg';
import clockIcon from '../../assets/icons/ic-clock-circle.svg';
import backspaceIcon from '../../assets/icons/ic-backspace.svg';
import courseUpIcon from '../../assets/icons/ic-courseup.svg';
import courseDownIcon from '../../assets/icons/ic-coursedown.svg';
import chartIcon from '../../assets/icons/ic-chart.svg';
import mapsIcon from '../../assets/icons/ic-maps.svg';
import arrowRightIcon from '../../assets/icons/ic-arrow-right-up.svg';
import deliveryIcon from '../../assets/icons/ic-delivery.svg';
import IcRightUp from "../../assets/icons/ic-right-up.svg";
import walletIcon from "../../assets/icons/ic-wallet.svg";
import atlasIcon from "../../assets/icons/ic-atlas.svg";

import bgTruck from '../../assets/images/bg-truck-pettren.png';

import CityPopularChart from './ChartBarPopularCity';
import ChartPendingAnalytic from './ChartPendingAnalytic';
import ChartIncomeCity from './ChartIncomeCity';
import ChartIncomeTotal from './CahrtIncomeTotal';
import MapsTracking from './MapsTracking';

export default function Index() {
    return (
        <DasboardLayout>
            <main>
                <div className="mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-[16px]">
                    <div className="flex flex-col lg:flex-row items-stretch gap-[16px] ">
                        <div className="w-full lg:w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                            <div className="px-[24px] py-[16px] bg-netral-25 shadow-md flex flex-col gap-[12px]">
                                <div className="flex items-center gap-[8px] lg:gap-[3px]">
                                    <IconBox>
                                        <img src={boxOutlineIcon} alt="box" />
                                    </IconBox>
                                    <p className="text-sm text-netral-800">Total Shipment</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-2xl lg:text-4xl font-bold text-netral-800">433</p>
                                    <img src={courseUpIcon} alt="" className='size-[32px]' />
                                </div>
                                <p className="text-sm text-netral-400">
                                    <span className='text-primary-500'>+21% </span>
                                    vs last month
                                </p>
                            </div>
                            <div className="px-[24px] py-[16px] bg-netral-25 shadow-md flex flex-col gap-[8px] lg:gap-[12px]">
                                <div className="flex items-center gap-[8px] lg:gap-[3px]">
                                    <IconBox>
                                        <img src={archiveCheckIcon} alt="box"
                                            className='size-[32px]'/>
                                    </IconBox>
                                    <p className="text-sm text-netral-800">Complete</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-2xl lg:text-4xl font-bold text-netral-800">110</p>
                                    <img src={courseUpIcon} alt="" className='size-[32px]' />
                                </div>
                                <p className="text-sm text-netral-400">
                                    <span className='text-primary-500'>+21% </span>
                                    vs last month
                                </p>
                            </div>
                            <div className="px-[24px] py-[16px] bg-netral-25 shadow-md flex flex-col gap-[8px] lg:gap-[12px]">
                                <div className="flex items-center gap-[8px] lg:gap-[3px]">
                                    <IconBox>
                                        <img src={clockIcon} alt="box" />
                                    </IconBox>
                                    <p className="text-sm text-netral-800">Pending</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-2xl lg:text-4xl font-bold text-netral-800">134</p>
                                    <img src={courseUpIcon} alt="" className='size-[32px]' />
                                </div>
                                <p className="text-sm text-netral-400">
                                    <span className='text-primary-500'>+21% </span>
                                    vs last month
                                </p>
                            </div>
                            <div className="px-[24px] py-[16px] bg-netral-25 shadow-md flex flex-col gap-[8px] lg:gap-[12px]">
                                <div className="flex items-center gap-[8px] lg:gap-[3px]">
                                    <IconBox>
                                        <img src={backspaceIcon} alt="box" />
                                    </IconBox>
                                    <p className="text-sm text-netral-800">Refund</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-2xl lg:text-4xl font-bold text-netral-800">24</p>
                                    <img src={courseDownIcon} alt="" className='size-[32px]' />
                                </div>
                                <p className="text-sm text-netral-400">
                                    <span className='text-primary-500'>-10% </span>
                                    vs last month
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-[60%] h-full">
                            <div className="px-[24px] py-[16px] bg-netral-25 shadow-md flex flex-col gap-[8px] lg:gap-[12px]">
                                <div className="flex items-center gap-[9px]">
                                    <IconBox>
                                        <img src={chartIcon} alt="box" />
                                    </IconBox>
                                    <p className="text-xl font-bold text-netral-800">Shipment Analytics</p>
                                </div>
                                <CalendarHeatmapComponent />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-stretch gap-[16px] ">
                        <div className="w-full h-full lg:w-[40%] ">
                            <div className="px-[24px] py-[16px] bg-netral-25 shadow-md flex flex-col gap-[8px] lg:gap-[12px]">
                                <CityPopularChart/>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col gap-[16px] items-stretch lg:w-[60%] lg:flex-row">
                            <div className="px-[24px] py-[16px] w-full bg-netral-25 shadow-md flex flex-col gap-[8px] lg:gap-[12px] lg:w-[50%]">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-[9px]">
                                        <IconBox>
                                            <img src={mapsIcon} alt="box" />
                                        </IconBox>
                                        <p className="text-xl font-bold text-netral-800">Tracking Location</p>
                                    </div>
                                    <a href="#" className='w-auto border-slate-400 rounded-sm border-1 p-[4px]'>
                                        <img src={arrowRightIcon} alt="404" />
                                    </a>
                                </div>
                                <MapsTracking/>
                                <div className="flex justify-between align-baseline mt-[12px] mb-[12px]">
                                    <p className="text-xs">
                                        Minim dolor in amet nulla laboris <br/>
                                        enim dolore consequatt.
                                    </p>
                                    <p className="text-base">
                                        <span className='text-4xl text-black fw-bold'>54</span>
                                        /80
                                    </p>
                                </div>
                            </div>
                            <div style={{
                                    backgroundImage: `url(${bgTruck})`
                                }}                      
                                className="bg-cover bg-center bg-no-repeat w-full lg:w-[50%] px-[24px] py-[16px] flex flex-col justify-between gap-[16px]">
                                <div className="">
                                    <div className="flex items-center gap-[9px]">
                                        <IconBox>
                                            <img src={deliveryIcon} alt="box" />
                                        </IconBox>
                                        <p className="text-xl font-bold text-neutral-50">Delivery Vehicles</p>
                                    </div>
                                    <p className="text-sm text-neutral-50 font-normal mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae vitae, veniam animi ab sed ut?</p>
                                </div>
                                <div className="">
                                    <p className="text-4xl text-neutral-50 font-medium">765</p>
                                    <p className="text-sm text-neutral-50 font-normal">+5% vs last week</p>
                                </div>
                                <div className="flex flex-row itemx-center justify-center gap-[8px] bg-primary-500 h-[44px] max-w-max p-[10px]">
                                    <Link
                                        to="/"
                                        className="text-white text-sm sm:text-base font-bold flex flex-row items-center">
                                        View Detail</Link>
                                    <img
                                        src={IcRightUp}
                                        alt=""
                                        className='w-[20px] h-[20px]' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
                        <div className="bg-neutral-50 gap-[12px] flex flex-col px-[16px] py-[16px]"> 
                            <div className="flex items-start gap-[3px] lg:gap-[8px]">
                                <IconBox>
                                    <img src={walletIcon} alt="box" />
                                </IconBox>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-sm text-gray-400">Income</p>
                                    <p className="text-xl font-bold text-netral-800">Total Income</p>
                                </div>
                            </div>
                            <ChartIncomeTotal/>
                        </div>
                        <div className="bg-neutral-50 gap-[12px] flex flex-col px-[16px] py-[16px]"> 
                            <div className="flex items-start gap-[3px] lg:gap-[8px]">
                                <IconBox>
                                    <img src={clockIcon} alt="box" />
                                </IconBox>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-sm text-gray-400">Analytic</p>
                                    <p className="text-xl font-bold text-netral-800">Pending</p>
                                </div>
                            </div>
                            <ChartPendingAnalytic/>
                        </div>
                        <div className="bg-neutral-50 gap-[12px] flex flex-col px-[16px] py-[16px]">
                            <div className="flex items-start gap-[3px] lg:gap-[8px]">
                                <IconBox>
                                    <img src={atlasIcon} alt="box" />
                                </IconBox>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-sm text-gray-400">Income</p>
                                    <p className="text-xl font-bold text-netral-800">Highest Area</p>
                                </div>
                            </div>
                            <ChartIncomeCity/>
                        </div>
                    </div>
                </div>
            </main>
        </DasboardLayout>
    )
}