import Endpoint from "@/api/Endpoint"



const LoggedIn = (userData) => {
    localStorage.setItem("User", JSON.stringify(userData))
}

export const Login = async (data, setIsLoading, router ) => {

    try {
        setIsLoading(true)
        const response = await Endpoint.post("login/", data)
         if(response.status === 200) {
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
    localStorage.removeItem("User")
}