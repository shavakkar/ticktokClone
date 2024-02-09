import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
    
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.withXSRFToken = true;
    
    return {
        provide:{
            axios:axios
        }
    }
})
