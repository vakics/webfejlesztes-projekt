import { AddTrainForm } from "../components/AddTrainForm"
import { Header } from "../components/Header"

export const AddTrain=()=>{
    return(
        <div className="h-screen bg-slate-200">
            <Header/>
            <p className="text-3xl mt-3 mb-5 text-center">Vonat hozzáadása</p>
            <AddTrainForm/>
        </div>
    )
}