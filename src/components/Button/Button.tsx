import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    label:string,
}

export function Button({children,label, ...rest}: ButtonProps){
    return(
        <button 
            className="bg-blue-600 text-white px-6 p-4 border rounded-full "
            {...rest}
        >            
            {label}            
        </button>
    )
}