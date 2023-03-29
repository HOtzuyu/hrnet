import { DataTable } from "@lephenix47/react-datatable";
import { useSelector } from "react-redux";
import { selectEmployees } from "../utils/redux/selector";
import mockedUser from "../data/mockup";

/**
 * @description Displaying a tab of all employee and/or the news employees.
 * @returns DataTable of all employee.
 */
function Current() {
  const employees = useSelector(selectEmployees).dataEmployee;
  const dataEmployees = mockedUser;

  return (
    <>
      {console.log(employees)}
      {console.log(dataEmployees)}
      <h1 className="current-title">List of Employees</h1>
      <DataTable
        data={dataEmployees}
        paging={true}
        sort={true}
        filter={true}
        info
      />
    </>
  );
}

export default Current;
