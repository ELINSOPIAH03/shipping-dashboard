import { ReactNode } from "react";

type IconBoxProps = {
    children: ReactNode;
};

export default function IconBox({ children }: IconBoxProps) {
    return (
        <div className="p-[6px] bg-primary-500 w-[28px] lg:w-[32px] h-[28px] lg:h-[32px] flex items-center justify-center rounded">
            {children}
        </div>
    );
}