import axios from "axios"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form/dist/types"

export const AddTrainForm=()=>{
    interface TrainForm{
        sorozat: number
        becenev: string
        gyarto: string
        maxSebesseg: number
    }

    const {register,formState: {errors},handleSubmit,reset} = useForm<TrainForm>({mode: 'onTouched'})
    const onSubmit: SubmitHandler<TrainForm> = (data: any)=>{
        axios.post('http://localhost:8080/trains/train',{sorozat: data.sorozat,becenev: data.becenev, gyarto: data.gyarto,
        maxSebesseg: data.maxSebesseg})
        .then(function (response:any){
            reset()
        })
        .catch(function (error:any){
            alert(error.message)
        })
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <table className="m-auto">
                <tbody>
                    <tr>
                        <td className="py-2">
                            <input {...register('sorozat',{required: "Megadása kötelező!"})} type="text" placeholder="Sorozat" />
                        </td>
                        <td>
                            <div className="text-red-700 ml-2">{errors.sorozat?.message}</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <input {...register('becenev',{required: "Megadása kötelező!"})} type="text" placeholder="Becenév" />
                        </td>
                        <td>
                            <div className="text-red-700 ml-2">{errors.becenev?.message}</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <input {...register('gyarto',{required: "Megadása kötelező!"})} type="text" placeholder="Gyártó" />
                        </td>
                        <td>
                            <div className="text-red-700 ml-2">{errors.gyarto?.message}</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2">
                            <input {...register('maxSebesseg',{required: "Megadása kötelező!"})} type="text" placeholder="Max sebesség" />
                        </td>
                        <td>
                            <div className="text-red-700 ml-2">{errors.maxSebesseg?.message}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center py-2">
                <button type="submit" className="bg-blue-900 text-yellow-300 font-mono p-2 rounded hover:bg-blue-800">Hozzáadás</button>
            </div>
        </form>
    )
}