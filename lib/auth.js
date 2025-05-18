import Endpoint from "@/api/Endpoint"
import Cookies from "js-cookie"





const LoggedIn = (userData) => {
    localStorage.setItem("User", JSON.stringify(userData))
}

export const Login = async (data, setIsLoading, router, setUser ) => {
    

    try {
        setIsLoading(true)
        const response = await Endpoint.post("login/", data)
         if(response.status === 200) {
            Cookies.set("token", response.data.token)
            setUser(response.data)
            LoggedIn(response.data)
            router.push("/admin")
         } else {
            alert(" invalid email or password ")
         }
        
    } catch (error) {
         console.error("Error: ", error.response?.data || error.message)
    } finally {
        setIsLoading(false)
    }

   
}  


export const getUser = () => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem("User")
        return user ? JSON.parse(user) : null
    }

    return null;
};


export const Logout = () => {
    Cookies.remove("token")
    localStorage.removeItem("User")
}