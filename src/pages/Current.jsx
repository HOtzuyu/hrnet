import { DataTable } from "@lephenix47/react-datatable";
import { useSelector } from "react-redux";
import { selectEmployees } from "../utils/redux/selector";

function Current() {
  const employees = useSelector(selectEmployees).dataEmployee;

  return (
    <DataTable
      data={employees}
      paging={true}
      sort={true}
      filter={true}
      info
      title={"List of employees"}
    />
  );
}

export default Current;
