import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthLayout from '../../layout/AuthLayout';
import FormInput from '../../components/FormInput';

import IcGoogle from "../../assets/icons/ic-goggle.svg";


type FormFields = {
    username: string;
    password: string;
};

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormFields>({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState<FormFields>({
        username: "",
        password: "",
    });


    const validateForm = () => {
        const newErrors: FormFields = {
            username: formData.username.length < 8 ? "Username minimum 8 characters" : "",
            password: formData.password.length < 8 ? "Minimum 8 characters" : "",
        };

        setErrors(newErrors);

        // Cek apakah semua nilai error kosong
        return Object.values(newErrors).every((msg) => msg === "");
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // semua valid, lanjut ke halaman utama
            navigate("/dashboard");
        } else {
            // error ditemukan, jangan lanjut
            console.log("Terdapat input yang tidak valid");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <AuthLayout>
            <div className="w-full flex flex-col items-center justify-center px-[36px] py-[79px] gap-[20px] rounded-lg backdrop-blur-md border border-gray-300">
                <div className="flex flex-col items-center gap-[8px]">
                    <p className="text-white font-bold text-2xl sm:text-3xl leading-[30px] tracking-[1px]">
                        Welcome Back!
                    </p>
                    <p className="text-white text-xs sm:text-sm text-center tracking-[2px] leading-[20px]">
                        We can assign tasks, set deadlines, and track progress effortlessly.
                    </p>
                </div>
                <div className="flex flex-col gap-[32px] w-full">
                    <FormInput
                        label="Username"
                        id="username"
                        type="text"
                        placeholder="Input your username"
                        value={formData.username}
                        onChange={handleChange}
                        errorMessage={errors.username}
                        required
                    />
                    <FormInput
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="Input your password"
                        value={formData.password}
                        onChange={handleChange}
                        errorMessage={errors.password}
                        required
                    />

                    <Link
                        to="/forgot-password"
                        className="text-white text-sm sm:text-base leading-[24px]">
                        Forgot password?
                    </Link>
                </div>

                <div className="flex flex-row items-center gap-[16px] w-full">
                    <button
                        onClick={handleSubmit}
                        className="w-full text-white text-sm sm:text-base font-bold leading-[24px] bg-primary-500 h-[50px] sm:h-[64px] flex items-center justify-center cursor-pointer"
                    >
                        Sign In
                    </button>

                    <Link
                        to=""
                        className='w-auto'>
                        <img src={IcGoogle}
                            alt="ic-google" />
                    </Link>
                </div>

                <Link
                    to="/register"
                    className="text-white text-sm sm:text-base leading-[24px] underline">
                    Register
                </Link>
            </div>
        </AuthLayout>
    );
}