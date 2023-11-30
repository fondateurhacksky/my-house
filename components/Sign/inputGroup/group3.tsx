import { useState } from "react";
import { Field, useFormikContext } from "formik";
import { FormValues  } from "../../../app/lib/definition";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

export default function InputGroup3({IsNext3, setIsNext3 }: 
    {
        IsNext3: boolean, setIsNext3: React.Dispatch<React.SetStateAction<boolean>> 
    }) {
    const { errors, touched, values } = useFormikContext<FormValues>();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { pending } = useFormStatus()

    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
        if (!(errors.pwd && errors.confirmPwd)) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }

      }, [errors]);

    return (
        <div className={`bg-slate-80 sm:shadow-lg flex flex-col m-3 p-5  sm:border sm:border-orange-500 w-96 p-5
        h-full sm:h-auto justify-center	items-center sm:items-stretch			
        ${IsNext3 ? 'opacity-100 ' : 'opacity-0 transition-opacity duration-500 invisible'}
        `

        }>
            <div className="relative">
                <Field
                    type={showPassword ? "text" : "password"}
                    name="pwd"
                    id="pwd"
                    className=" bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-10 w-full"
                    placeholder="Crée un mot de passe"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword) } className="absolute top-1/3 -translate-y-1/2 right-3 text-gray-500 focus:outline-none">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <span className="block h-8 text-red-700 text-xs">
                    {touched.pwd && errors.pwd ? errors.pwd : ' '}
                </span>
            </div>

            <div className="relative">
                <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPwd"
                    id="confirmPwd"
                    className=" bg-inherit border-b-2 border-slate-500 focus:outline-none focus:border-blue-500 h-10 w-full"
                    placeholder="Confirmer le mot de passe"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword) } className="absolute top-1/3 -translate-y-1/2 right-3 text-gray-500 focus:outline-none">
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <span className="block h-8 text-red-700 text-xs">
                    {touched.confirmPwd && errors.confirmPwd ? errors.confirmPwd : ' '}
                </span>
            </div>

            <button 
                className={`rounded w-4/6 sm:w-full bg-blue-500  text-slate-50 p-2 
                ${isValid ? 'opacity-100 bg-blue-700 cursor-default	hover:bg-blue-700 hover:shadow-xl' : 'opacity-75 bg-slate-500 cursor-not-allowed'}`}        
                type="submit"
                onClick={() =>{
                    setIsValid(false)
                }}
                >
                Submit
            </button>
        </div>
    );
}
