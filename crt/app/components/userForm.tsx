"use client"
import { handleFormSubmit } from "@/actions/form";
import { useFormState }  from "react-dom";
import { text } from "stream/consumers";
import FormButton from "./mybutton";


const initialState={name:"",email:"",message:"",error:""};

export default function Sade() {
    const [state,fromAction]=useFormState(handleFormSubmit,initialState);

    return(
        <main >
            <h1>İletişim</h1>
            {state.error && <p >{state.error}</p>}
            <form action={fromAction}>
                <input type="text" name="name" placeholder="İsim" />
                <input type="email" name="email" placeholder="email" />
                <input type="text" name="message" placeholder="mesaj" />
                 <FormButton></FormButton>

            </form>
            {!state.error && state.name && (
                <h2> mesaj için teşekkür,{state.name}</h2>
            )}

        </main>
    )




}