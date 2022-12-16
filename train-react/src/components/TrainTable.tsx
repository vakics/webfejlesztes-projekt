import axios from "axios"
import { Link } from "react-router-dom"

export const TrainTable=(data: {id:number,sorozat:string,becenev:string,gyarto:string,maxSebesseg:number}[])=>{
    function deleteTrain(id:number){
        axios.delete(`http://localhost:8080/trains/train?id=${id}`).catch(function (error){
            alert(error.message)
            console.log(error)
        })
    }
    return data.map((train)=>(
        <tr key={train.id} className="bg-slate-200 hover:bg-slate-300">
            <td><Link to={"/update#"+train.id}>{train.sorozat}</Link></td>
            <td><Link to={"/update#"+train.id}>{train.becenev}</Link></td>
            <td><Link to={"/update#"+train.id}>{train.gyarto}</Link></td>
            <td><Link to={"/update#"+train.id}>{train.maxSebesseg} km/h</Link></td>
            <td>
                <button onClick={()=>deleteTrain(train.id)}>
                    <img src={require("../images/remove.png")} className="h-5" />
                </button>
            </td>
        </tr>
    ))
}