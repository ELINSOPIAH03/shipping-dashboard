import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthLayout from '../../layout/AuthLayout';
import FormInput from '../../components/FormInput';

import IcGoogle from "../../assets/icons/ic-goggle.svg";

type FormFields = {
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
};


export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormFields>({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const [errors, setErrors] = useState<FormFields>({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const validateForm = () => {
        const newErrors: FormFields = {
            username: formData.username.length < 8 ? "Username minimum 8 characters" : "",
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Please enter a valid email address",
            phoneNumber: /^\d+$/.test(formData.phoneNumber) ? "" : "Format numbers only",
            password: formData.password.length < 8 ? "Minimum 8 characters" : "",
        };

        setErrors(newErrors);

        // Cek apakah semua nilai error kosong
        return Object.values(newErrors).every((msg) => msg === "");
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // semua valid, lanjut ke halaman utama
            navigate("/");
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
            <div className="w-full flex flex-col items-center justify-center px-[36px] py-[24px] gap-[20px] rounded-lg backdrop-blur-md border border-gray-300">
                <div className="flex flex-col items-center gap-[8px]">
                    <p className="text-white font-bold text-2xl sm:text-3xl leading-[30px] tracking-[1px]">
                        Register Here
                    </p>
                    <p className="text-white  text-xs sm:text-sm text-center tracking-[2px] leading-[20px]">
                        We can assign tasks, set deadlines, and track progress effortlessly.
                    </p>
                </div>
                <div className="flex flex-col gap-[32px] w-full">
                    <FormInput
                        label="Username"
                        id="username"
                        placeholder="Input your username here"
                        value={formData.username}
                        onChange={handleChange}
                        errorMessage={errors.username}
                        required
                    />
                    <FormInput
                        label="E-mail"
                        id="email"
                        type="email"
                        placeholder="Input your e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        errorMessage={errors.email}
                        required
                    />
                    <FormInput
                        label="Phone number"
                        id="phoneNumber"
                        type="number"
                        placeholder="Input phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        errorMessage={errors.phoneNumber}
                        required
                    />
                    <FormInput
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="Input password here"
                        value={formData.password}
                        onChange={handleChange}
                        errorMessage={errors.password}
                        required
                    />
                </div>

                <div className="flex flex-row items-center gap-[16px] w-full mt-2">
                    <button
                        onClick={handleSubmit}
                        className="w-full text-white font-bold leading-[24px] bg-primary-500  h-[50px] sm:h-[64px] flex items-center justify-center cursor-pointer"
                    >
                        Sign Up
                    </button>

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