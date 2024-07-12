import React, {useState, useEffect} from "react";
import { EmployeeServices } from "./services/EmployeeServices";
import { EmployeeModel } from "./models/type";

function ParentSeven() {
    const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeServices.getEmployeesData();
        setEmployees(response.data);
      } catch (err) {
        setError("Failed to fetch employees data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>ParentSeven</div>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <ul key={employee.id}>
            <li>ID: {employee.id}</li>
            <li>Name: {employee.name}</li>
            <li>Username: {employee.username}</li>
            <li>Email: {employee.email}</li>
            <li>Phone: {employee.phone}</li>
            <li>Website: {employee.website}</li>
          </ul>
        ))
      ) : (
        <div>No Data Available</div>
      )}

    </>
  );
}

export default ParentSeven;
