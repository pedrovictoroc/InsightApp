import axios from 'axios'

const api = axios.create({
    baseURL: "https://jobs.github.com/positions.json?description=python&location=new+york"
})

export default api