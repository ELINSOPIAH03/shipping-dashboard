import { Link } from 'react-router-dom';
import React from 'react';


import Logo from "../assets/icons/ic-logo.svg"
import BgCard from "../assets/images/bg-truck.png"
import BgForm from "../assets/images/bg-login.png"
import TruckImg from "../assets/images/truck-login.png"
import IcRightUp from "../assets/icons/ic-right-up.svg";


type MyComponentProps = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: MyComponentProps) {
    return (
        <div className="bg-white p-[34px] flex w-full gap-[38px]">
            <div className="w-[45%] flex flex-col gap-[60px]">
                <img
                    src={Logo}
                    className="mt-[82px] h-[44px] w-3xs"
                    alt="ic-logo" />
                <div className="flex flex-col gap-[32px]">
                    <p className="text-5xl font-normal leading-[120%] tracking-[-2%] uppercase">
                        Let's log in now <br />
                        to access exclusive features
                    </p>
                    <p className="text-base leading-[24px] tracking-[1px] text-neutral-500">
                        Enter the Dashboard for Warehouse Management.
                        Streamline operations, optimize resources, and enhance productivity.
                        Seamlessly navigate through data and tasks for streamlined warehouse management.
                    </p>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${BgCard})`,
                    }}
                    className="rounded-xl flex items-center bg-cover bg-center bg-no-repeat h-full pr-[40px]">
                    <img
                        src={TruckImg}
                        className="h-[250px]"
                        alt="trcuktrcuk" />
                    <div className="w-1/2 flex flex-col gap-[8px]">
                        <p className="text-white text-4xl font-normal leading-[51px] tracking-[1%] uppercase">
                            GET FREE DEMO</p>
                        <p className="text-white text-sm leading-[20px] tracking-[1px]">
                            Explore dashboard , Click here!
                        </p>
                        <div className="flex flex-row itemx-center justify-center gap-[8px] bg-primary-500 h-[44px]">
                            <Link
                                to="/"
                                className="text-white text-base font-bold flex flex-row items-center">
                                View Detail</Link>
                            <img
                                src={IcRightUp}
                                alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${BgForm})`,
                }}
                className="min-h-screen w-[55%] py-[104px] px-[130px]  rounded-2xl flex flex-row items-center justify-center bg-cover bg-center bg-no-repeat h-[100%]">
                {children}
            </div>
            {/* <p className="text-3xl italic">Hallow Login</p> */}
        </div>
    );
}