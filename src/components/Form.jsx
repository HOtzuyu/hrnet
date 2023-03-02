import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ label, register, tittle }) => (
  <>
    <label>{label}</label>
    <input {...register(tittle)} />
  </>
);

function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <fieldset className="personal">
          <legend>Personnal Informations</legend>

          <Input
            label={"First Name"}
            register={register}
            tittle={"firstName"}
          />
          <Input
            label={"Last Name"}
            register={register}
            tittle={"lastName"}
          />

          <label>Date of Birth</label>
          <input
            {...register("birthDate")}
            type="date"
            min="1923-01-01"
            max="2008-12-31"
            id="birthDate"
          ></input>

          <label>Start Date</label>
          <input
            {...register("startDate")}
            type="date"
            min="2000-01-01"
            id="start-date"
          ></input>
        </fieldset>

        <fieldset className="address">
          <legend>Address</legend>

          <label>Street</label>
          <input
            {...register("street")}
            id="street"
          />

          <label>City</label>
          <input
            {...register("city")}
            id="city"
          />

          <label>State</label>
          <select
            {...register("state")}
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

          <label>Zip Code</label>
          <input
            {...register("zipCode")}
            id="zip-code"
          />
        </fieldset>
      </div>

      <label>Department</label>
      <select
        {...register("departement")}
        id="department"
      >
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>

      <button
        type="submit"
        className="btn-save"
      >
        Save
      </button>
    </form>
  );
}

export default Form;
