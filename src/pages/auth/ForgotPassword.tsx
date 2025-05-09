import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layout/AuthLayout';
import FormInput from '../../components/FormInput';

type FormFields = {
    email: string;
};

export default function ForgotPassword() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormFields>({
        email: "",
    });

    const [errors, setErrors] = useState<FormFields>({
        email: "",
    });

    const validateForm = () => {
        const newErrors: FormFields = {
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Please enter a valid email address",
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
            <div className="w-full flex flex-col items-center justify-center px-[36px] py-[79px] gap-[20px] rounded-lg backdrop-blur-md border border-gray-300">
                <div className="flex flex-col items-center gap-[8px]">
                    <p className="text-white font-bold text-3xl leading-[30px] tracking-[1px]">
                        Forgot Password
                    </p>
                    <p className="text-white text-sm text-center tracking-[2px] leading-[20px]">
                        We can assign tasks, set deadlines, and track progress effortlessly.
                    </p>
                </div>
                <div className="flex flex-col gap-[32px] w-full">
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

                </div>

                <div className="flex flex-row items-center gap-[16px] w-full">
                    <button
                        onClick={handleSubmit}
                        className="w-full text-white font-bold leading-[24px] bg-primary-500 h-[64px] flex items-center justify-center cursor-pointer"
                    >
                        Send E-mail
                    </button>
                </div>

            </div>
        </AuthLayout>
    );
}