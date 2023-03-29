import Form from "../components/Form";

/**
 * @description Displays the form for create a new employee.
 * @returns {JSX} Form create a new employee.
 */
function Home() {
  return (
    <div className="form-home">
      <h2 className="form-home_tittle">Create Employee</h2>
      <Form />
    </div>
  );
}

export default Home;
