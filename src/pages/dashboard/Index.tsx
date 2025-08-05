import React from 'react';
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
import CityPopularChart from './ChartBarPopularCity';

export default function Index() {
    return (
        <DasboardLayout>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-[16px]">
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
                        <div className="w-[40%] ">
                            <div className="px-[24px] py-[16px] bg-netral-25 shadow-md flex flex-col gap-[8px] lg:gap-[12px]">
                                <CityPopularChart/>
                            </div>
                        </div>
                        <div className="w-full lg:w-[60%] h-full">
                        
                        </div>
                    </div>
                </div>
            </main>
        </DasboardLayout>
    )
}