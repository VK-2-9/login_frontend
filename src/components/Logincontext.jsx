import { useContext,useState,createContext } from "react"

const LoginContext=createContext()

function LoginContextProvider(data){
    const[uName,setUName]=useState("")
    const[uPass,setUPass]=useState("")
    const[spanStyle,setSpanStyle]=useState("none")
    return(
        <LoginContext.Provider value={{uName,setUName,uPass,setUPass,spanStyle,setSpanStyle}} >
            {data.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider
export {LoginContext}