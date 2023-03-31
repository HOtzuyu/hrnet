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
      setDisplayModal(false);
    } else {
      dispatch(validForm());
      setDisplayModal(true);
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

  return (
    <>
      {/* Personal modal */}
      <Modale
        title="Congrat"
        text="Employee Created !"
        cross="X"
        button="close"
        showModal={displayModal}
        hideModal={() => setDisplayModal(false)}
      />
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
            />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker
              name="start-date"
              selected={start}
              onChange={setStart}
              value={start}
              id="start-date"
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
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
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
