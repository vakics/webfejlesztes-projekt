import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const LoginForm=()=>{
    interface InputForm{
        userName:string
        password:string
    }
    const navigate=useNavigate()
    const {register,handleSubmit}=useForm<InputForm>()
    const onSubmit: SubmitHandler<InputForm>=(data:any)=>{
        axios.post(`http://localhost:8080/auth/login?userName=${data.userName}&password=${data.password}`,
        {userName:data.userName,password:data.password}).then(function (response){
            sessionStorage.setItem("user",data.userName)
            navigate('/home')
        }).catch(function (error){
            alert(error.message)
        })
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="m-5 text-center">
            <table>
                <tbody>
                    <tr>
                        <td>Felhasználónév</td>
                            <td>
                                <input {...register('userName')} type="text" className="border rounded-md" />
                            </td>
                    </tr>
                    <tr>
                        <td>Jelszó</td>
                        <td>
                            <input {...register('password')} type="text" className="border rounded-md" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="mt-5 bg-blue-900 text-yellow-300 font-mono p-2 rounded hover:bg-blue-800">Bejelentkezés</button>
        </form>
    )
}