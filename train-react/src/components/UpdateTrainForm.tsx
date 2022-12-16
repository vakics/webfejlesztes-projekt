import axios from "axios"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLocation } from "react-router-dom"

export const UpdateTrainForm=()=>{
    interface TrainForm{
        sorozat: number
        becenev: string
        gyarto: string
        maxSebesseg: number
    }

    const location=useLocation()
    const [data,setData]=useState({id:0,sorozat:"",becenev:"",gyarto:"",maxSebesseg:0})
    useEffect(()=>{
        axios.get(`http://localhost:8080/trains/train?id=${location.hash.slice(1)}`).then((response)=>{
            setData(response.data)
        }).catch(error=>{
            alert(error)
        })
    })

    const {register,formState: {errors},handleSubmit,reset} = useForm<TrainForm>({mode: 'onTouched'})
    const onSubmit: SubmitHandler<TrainForm> = (data: any)=>{
        axios.put(`http://localhost:8080/trains/train-update?id=${location.hash.slice(1)}`,{sorozat: data.sorozat,becenev: data.becenev, gyarto: data.gyarto,
        maxSebesseg: data.maxSebesseg})
        .then(function (response:any){
            reset()
        })
        .catch(function (error:any){
            alert(error.message)
        })
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <table className="m-auto">
                <tbody>
                    <tr>
                        <td className="py-2">
                            <input {...register('sorozat',{required: "Megadása kötelező!"})} type="text" placeholder={data.sorozat} />
                        </td>
                        <td>
                            <div className="text-red-700 ml-2">{errors.sorozat?.message}</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <input {...register('becenev',{required: "Megadása kötelező!"})} type="text" placeholder={data.becenev} />
                        </td>
                        <td>
                            <div className="text-red-700 ml-2">{errors.becenev?.message}</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <input {...register('gyarto',{required: "Megadása kötelező!"})} type="text" placeholder={data.gyarto} />
                        </td>
                        <td>
                            <div className="text-red-700 ml-2">{errors.gyarto?.message}</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <input {...register('maxSebesseg',{required: "Megadása kötelező!"})} type="number" placeholder={data.maxSebesseg+''} />
                        </td>
                        <td>
                            <div className="text-red-700 ml-2">{errors.maxSebesseg?.message}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center py-2">
                <button type="submit" className="bg-blue-900 text-yellow-300 font-mono p-2 rounded hover:bg-blue-800">Frissítés</button>
            </div>
        </form>
    )
}