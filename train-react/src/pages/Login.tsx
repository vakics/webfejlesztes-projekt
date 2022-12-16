import { LoginForm } from "../components/LoginForm"

export const Login=()=>{
    return(
        <div className="h-screen bg-blue-900">
            <div className="h-screen grid place-content-center">
                <div className="bg-white rounded-lg min-w-fit">
                    <h1 className="font-sans text-xl font-bold pb-5 mt-5 text-center">Bejelentkezés</h1>
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}