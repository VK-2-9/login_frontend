import { useContext } from "react";
import { LoginContext } from "../components/Logincontext";
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Login() {
  const { spanStyle, setSpanStyle,uName,setUName,uPass,setUPass } = useContext(LoginContext);
  const navigate=useNavigate()

  const handleName=(e)=>{
    setUName(e.target.value)
    setSpanStyle("none")
  }
  const handlePass=(e)=>{
    setUPass(e.target.value)
    setSpanStyle("none")
  }
  const check=()=>{
    var credentialsCheck=axios.post(`https://login-backend-ushx.onrender.com/login`,{"uName":uName,"uPass":uPass})
    credentialsCheck.then((data)=>{
       if(data.data===true){
        navigate("/home")
       }
       else{
        setSpanStyle("")
       }
    })
  }

  const signUp=()=>{
    navigate("/signUp")
  }


  return (
    <div className="  bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-5 md:w-1/2 p-5  md:mx-[25%] mt-36 text-center border rounded-xl ">
      <h1 className="text-2xl md:text-4xl font-medium my-5">Enter your details</h1>
   
        <div>
          <div className="flex gap-14 justify-center ">
            <p className="text-xl md:text-2xl">Name:</p>
            <input type="text" placeholder="Username" className="p-1 w-[60%] md:w-[30%] focus:outline-none"
            value={uName}
            onChange={handleName}
            ></input>
          </div>
          
        </div>

        <div className="my-5">
          <div className="flex gap-5 justify-center">
            <p className="text-xl md:text-2xl">Password:</p>
            <input type="password" placeholder="Password" className="p-1 w-[60%] md:w-[30%]  focus:outline-none "
            value={uPass}
            onChange={handlePass}
            ></input>
          </div>
          
        </div>
        <p style={{ display: spanStyle }} className="text-[#ff3030] font-medium mb-4 md:text-xl ">
            Incorrect username or password
          </p>

        <button onClick={check}
        className="ml-5 px-4 py-1 border-2 border-yellow-400 rounded-md text-xl font-medium text-white">Login</button>
       <p>If you don't have an account <button onClick={signUp} className="text-red-600 font-bold"> sign up</button> first</p>
    </div>
  );
}

export default Login;
