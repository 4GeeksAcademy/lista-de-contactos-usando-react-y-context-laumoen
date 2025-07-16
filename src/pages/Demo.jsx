// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (

    <div className="container">

      <form>

      <h1 className="text-center">Add a new contact</h1>

      <br />

      <p>Full name</p>
      <input type="text" className="mb-3 w-100 border rounded p-2" placeholder="Enter your contact's full name"/>

      <p>E-mail</p>
      <input type="text" className="mb-3 w-100 border rounded p-2" placeholder="thisIsAn@example.email"/>

      <p>Phone number</p>
      <input type="text" className="mb-3 w-100 border rounded p-2" placeholder="+00 123456789"/>

      <p>Address</p>
      <input type="text" className="mb-3 w-100 border rounded p-2" placeholder="Enter your contact's address"/>

      <br />

      <div className="text-center">

          <button className="btn btn-primary">Save contact</button>

      </div>

      </form>

      <div>
        <Link to="/">
          <button className="btn btn-danger mt-2">Go back to "Contacts"</button>
        </Link>
      </div>

    </div>

  );
};
