import { Header } from "../components/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import { TrainTable } from "../components/TrainTable"
import { Link } from "react-router-dom"

export const MainSite=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/trains/alltrains").then((response)=>{
            setData(response.data)
        }).catch(error=>{
            alert(error)
        })
    })
    
    return(
        <div className="h-screen bg-slate-200">
            <Header></Header>
                <p className="text-3xl mt-3 mb-5 text-center">Az adatbázisban lévő vonatok</p>
                <table className="table-auto m-auto text-center">
                    <thead className="border border-black">
                        <tr>
                            <th className="px-3">Sorozatszám</th>
                            <th className="px-3">Becenév</th>
                            <th className="px-3">Gyártó</th>
                            <th className="px-3">Max. engedélyezett sebesség</th>
                            <th className="px-3">Törlés</th>
                        </tr>
                    </thead>
                    <tbody className="border border-black">{TrainTable(data)}</tbody>
                </table>
                <Link to="/add">
                    <div className="text-center mt-7">
                        <button className="bg-blue-900 text-yellow-300 font-mono p-2 rounded hover:bg-blue-800">
                            Hozzáadás
                        </button>
                    </div>
                </Link>
        </div>
    )
}