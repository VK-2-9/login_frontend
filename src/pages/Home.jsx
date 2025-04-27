import { useNavigate } from "react-router-dom"
import { LoginContext } from "../components/Logincontext"
import { useContext } from "react"


function Home(){
const {uName}=useContext(LoginContext)

    return(
        <div className="bg-black p-10 m-10 text-center border rounded-xl">
            <h1 className=" bg-white p-4 px-14 text-2xl font-medium inline-block  border rounded-xl">Welcome <span className="text">{uName.toUpperCase()}</span> </h1>
        </div>
    )
}

export default Home