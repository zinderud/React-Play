type UserData={
    name:string,
    email:string,
    message:string,
    error:string,
}

export async function handleFormSubmit(prevState:UserData,formData:FormData):Promise<UserData> {
    const {name,email,message,}:UserData =Object.fromEntries(formData) as UserData;
    await sleep(3333);
    if (!name || !email) {
        return {name,email,message,error:"Alanlar boş!"};
    }
    // add databese

    return {name,email,message,error:""}
};

const sleep=async(t:number)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t)
    });
}