"use client"

import { useFormStatus } from "react-dom";
export default function FormButton(){
    const {pending}=useFormStatus();
    return (
        <button type="submit" disabled={pending}>gönder
        </button>
    )
}