import { Link } from 'react-router-dom';

import AuthLayout from '../../layout/AuthLayout';
import FormInput from '../../components/FormInput';

import IcGoogle from "../../assets/icons/ic-goggle.svg";

export default function Login() {
    return (
        <AuthLayout>
            <div className="w-full flex flex-col items-center justify-center px-[36px] py-[79px] gap-[20px] rounded-lg backdrop-blur-md border border-gray-300">
                <div className="flex flex-col items-center gap-[8px]">
                    <p className="text-white font-bold text-3xl leading-[30px] tracking-[1px]">
                        Welcome Back!
                    </p>
                    <p className="text-white text-sm text-center tracking-[2px] leading-[20px]">
                        We can assign tasks, set deadlines, and track progress effortlessly.
                    </p>
                </div>
                <div className="flex flex-col gap-[32px] w-full">
                    <FormInput
                        label="Username"
                        id="username"
                        type="text"
                        placeholder="Input your username"
                        required
                    />
                    <FormInput
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="Input your password"
                        required
                    />

                    <p className="text-white text-base leading-[24px]">
                        Forgot password?
                    </p>
                </div>

                <div className="flex flex-row items-center gap-[16px] w-full">
                    <Link
                        to=""
                        className='w-full text-white font-bold leading-[24px] bg-primary-500 h-[64px] flex flex-row items-center justify-center'>
                        Sign In
                    </Link>

                    <Link
                        to=""
                        className='w-auto'>
                        <img src={IcGoogle}
                            alt="ic-google" />
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}