import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  submitForm,
  unvalidForm,
  validForm,
  checkValidForm,
} from "../utils/redux/action";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { departments } from "../data/departements";
import { states } from "../data/states";

// personal modal
import { Modale } from "modal_lib-ho/dist/Modal";

//***************Gestion des datePicker*****************

function formatDate(date) {
  const dateNew = new Date(date);
  const dateISO = dateNew.toISOString().split("T")[0];
  const [year, month, day] = dateISO.split(".");
  return [month, day, year].join("");
}

//********************************************************

let item = [];

/**
 * @description a form for create e new employee.
 * @returns a component form for create a new employee.
 */
function CreateEmployee() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [birth, setBirth] = useState(new Date());
  const [start, setStart] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [department, setDepartment] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [checkModal, setCheckModal] = useState(true);

  const dispatch = useDispatch();

  item = {
    first: first.toLocaleLowerCase(),
    last: last.toLocaleLowerCase(),
    birth: formatDate(birth),
    start: formatDate(start),
    street: street.toLocaleLowerCase(),
    city: city.toLocaleLowerCase(),
    state: state.toLocaleUpperCase(),
    code: code,
    department: department.label,
  };

  const checkForm = () => {
    if (first === "" || last === "") {
      dispatch(unvalidForm());
      setDisplayModal(true);
      setCheckModal(false);
    } else {
      dispatch(validForm());
      setDisplayModal(true);
      setCheckModal(true);
    }
  };

  /**
   * Add the new employee
   * @param {*} e
   * @returns if form is valid return the new employee, else return false
   */
  const saveEmployee = async (e) => {
    e.preventDefault();
    checkForm();
    const submit = dispatch(checkValidForm());

    if (submit) {
      dispatch(submitForm(item));
    } else {
      return false;
    }
  };

  const options = states.map((state) => {
    return <option value={state.abbreviation}>{state.name}</option>;
  });

  return (
    <>
      {
        /* Personal modal */
        checkModal ? (
          <Modale
            title="Congrat"
            text="Employee Created !"
            cross="X"
            button="close"
            showModal={displayModal}
            hideModal={() => setDisplayModal(false)}
          />
        ) : (
          <Modale
            title="Error"
            text="Please feel the first or last name"
            cross="X"
            button="close"
            showModal={displayModal}
            hideModal={() => setDisplayModal(false)}
          />
        )
      }

      <form className="formEmployee">
        <section className="informations">
          <section className="employee">
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              id="first"
              name="first"
              onChange={(e) => setFirst(e.target.value)}
            />

            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              id="last"
              name="last"
              onChange={(e) => setLast(e.target.value)}
            />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker
              name="date-of-birth"
              selected={birth}
              onChange={setBirth}
              value={birth}
              id="date-of-birth"
              placeholderText="Select the employee's birth-date"
            />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker
              name="start-date"
              selected={start}
              onChange={setStart}
              value={start}
              id="start-date"
              placeholderText="Select the employee's start-date"
            />
          </section>

          <section className="adresse">
            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              name="street"
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              onChange={(e) => setState(e.target.value)}
              id="state"
            >
              {options}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
            />
          </section>
        </section>

        <section className="department">
          <Dropdown
            placeholder="Departments"
            name="departments"
            options={departments}
            onChange={setDepartment}
          />
        </section>
      </form>

      <button
        className="button-save"
        onClick={saveEmployee}
      >
        Save
      </button>
    </>
  );
}

export default CreateEmployee;
