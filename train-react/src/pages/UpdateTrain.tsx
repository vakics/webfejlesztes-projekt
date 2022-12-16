import { Header } from "../components/Header"
import { UpdateTrainForm } from "../components/UpdateTrainForm"

export const UpdateTrain=()=>{
    return(
        <div className="h-screen bg-slate-200">
            <Header/>
            <p className="text-3xl mt-3 mb-5 text-center">Vonat adatainak frissítése</p>
            <UpdateTrainForm/>
        </div>
    )
}