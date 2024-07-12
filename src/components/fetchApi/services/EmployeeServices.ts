import axios from "axios"

export class EmployeeServices{
    private static URL: string= "https://jsonplaceholder.typicode.com"
    public static getEmployeesData(){
        let employeeURL= `${this.URL}/users`
        return axios.get(employeeURL)
    }   
}