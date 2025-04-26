import { useContext } from "react";
import { LoginContext } from "../components/Logincontext";
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Login() {
  const { spanStyle, setSpanStyle,uName,setUName,uPass,setUPass } = useContext(LoginContext);
  const navigate=useNavigate()

  const handleName=(e)=>{
    setUName(e.target.value)
  }
  const handlePass=(e)=>{
    setUPass(e.target.value)
  }
  const check=()=>{
    var credentialsCheck=axios.post(`https://login-backend-neon.vercel.app/`,{"uName":uName,"uPass":uPass})
    credentialsCheck.then((data)=>{
       if(data.data===true){
        navigate("/home")
       }
       else{
        setSpanStyle("")
       }
    })
  }


  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 w-1/2 p-5 mx-[25%] mt-36 text-center border rounded-xl ">
      <h1 className="text-4xl font-medium my-5">Enter your details</h1>
   
        <div>
          <div className="flex gap-14 justify-center">
            <p className="text-2xl">Name:</p>
            <input type="text" placeholder="Username" className="p-1 focus:outline-none"
            value={uName}
            onChange={handleName}
            ></input>
          </div>
          
        </div>

        <div className="my-5">
          <div className="flex gap-5 justify-center">
            <p className="text-2xl">Password:</p>
            <input type="password" placeholder="Password" className="p-1 focus:outline-none "
            value={uPass}
            onChange={handlePass}
            ></input>
          </div>
          
        </div>
        <p style={{ display: spanStyle }} className="text-[#ff3030] font-medium mb-4 text-xl ">
            Incorrect username or password
          </p>

        <button onClick={check}
        className="ml-5 px-4 py-1 border-2 border-yellow-400 rounded-md text-xl font-medium text-white">Submit</button>
       
    </div>
  );
}

export default Login;
