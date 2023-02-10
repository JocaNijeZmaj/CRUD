import React from "react";
import "./EmployeesButton.css";
import { useState } from "react";
import axios, * as others from "axios";

export default function EmployeesButton() {
  let [employeeList, setEmployeeList] = useState([]);
  let [showEdit, setShowEdit] = useState(false);
  let [newWage, setNewWage] = useState(0);

  function handleShowEdit() {
    setShowEdit((current) => !current);
  }

  function getEmployees() {
    axios.get("http://localhost:3001/employees").then((res) => {
      console.log(res);
      setEmployeeList(res.data);
    });
  }

  function deleteEmployee(id) {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  }

  function updateWage(id) {
    axios
      .put("http://localhost:3001/update", { wage: newWage, id: id })
      .then((response) => {
        console.log("wage updated");
      });
    handleShowEdit();
    setEmployeeList(
      employeeList.map((val) => {
        return val.id === id
          ? {
              id: val.id,
              name: val.name,
              age: val.age,
              country: val.country,
              position: val.position,
              wage: newWage,
            }
          : val;
      })
    );
    // setTimeout(getEmployees, 1000);
  }

  return (
    <>
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
              <th>/</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((val, key) => {
              return (
                <tr className="active-row" key={val.id}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.country}</td>
                  <td>{val.position}</td>
                  <td>{val.wage}</td>
                  <td>
                    {!showEdit && (
                      <button onClick={handleShowEdit}>Edit</button>
                    )}
                    {showEdit && (
                      <div>
                        <input
                          type="text"
                          placeholder={val.wage}
                          onChange={(event) => {
                            setNewWage(event.target.value);
                          }}
                        />
                        <button
                          onClick={() => {
                            updateWage(val.id);
                          }}
                        >
                          Update
                        </button>{" "}
                        <button className="deleteBtn" onClick={handleShowEdit}>
                          X
                        </button>
                      </div>
                    )}
                    {!showEdit && (
                      <button
                        className="deleteBtn"
                        onClick={() => {
                          deleteEmployee(val.id);
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
