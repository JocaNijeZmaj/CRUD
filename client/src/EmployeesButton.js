import React from "react";
import "./EmployeesButton.css";
import { useState } from "react";
import axios, * as others from "axios";

export default function EmployeesButton() {
  let [employeeList, setEmployeeList] = useState([]);

  function getEmployees() {
    axios.get("http://localhost:3001/employees").then((res) => {
      console.log(res);
      setEmployeeList(res.data);
    });
  }

  return (
    <div className="EmployeesButton">
      <button onClick={getEmployees}> Show All Employees</button>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Position</th>
            <th>Wage</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((val, key) => {
            return (
              <tr className="active-row">
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.country}</td>
                <td>{val.position}</td>
                <td>{val.wage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
