import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Demo = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch(
        "https://playground.4geeks.com/contact/agendas/laumoen_contact_list/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact),
        }
      );

      if (!resp.ok) throw new Error("Oh no! Your contact couldn't be saved :(");

      const data = await resp.json();
      console.log("Hell yeah! Your contact's been saved successfully :)", data);

      dispatch({ type: "ADD_CONTACT", payload: data });

      navigate("/");
    } catch (error) {
      console.error("Oh no! Your contact couldn't be saved :(", error);
      alert("Oh no! Your contact couldn't be saved :(");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Add a new contact</h1>

        <p>Full name</p>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          className="mb-3 w-100 border rounded p-2"
          placeholder="Enter your contact's full name"
          required
        />

        <p>E-mail</p>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          className="mb-3 w-100 border rounded p-2"
          placeholder="thisIsAn@example.email"
          required
        />

        <p>Phone number</p>
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          className="mb-3 w-100 border rounded p-2"
          placeholder="+00 123456789"
          required
        />

        <p>Address</p>
        <input
          type="text"
          name="address"
          value={contact.address}
          onChange={handleChange}
          className="mb-3 w-100 border rounded p-2"
          placeholder="Enter your contact's address"
          required
        />

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Save contact
          </button>
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