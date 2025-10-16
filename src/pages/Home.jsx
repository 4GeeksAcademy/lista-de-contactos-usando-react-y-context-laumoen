import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchContacts = async () => {
      if (store.contacts.length > 0) return;

      try {
        const resp = await fetch(
          "https://playground.4geeks.com/contact/agendas/laumoen_contact_list/contacts"
        );
        if (!resp.ok) throw new Error("Oh no! Your contacts can't be loaded :(");

        const data = await resp.json();
        const contactsArray = Array.isArray(data) ? data : [data];
        dispatch({ type: "SET_CONTACTS", payload: contactsArray });
      } catch (error) {
        console.error("Oh no! Your contacts can't be loaded :(", error);
      }
    };

    fetchContacts();
  }, [dispatch, store.contacts.length]);

  const deleteContact = async (id) => {
    try {
      const resp = await fetch(
        `https://playground.4geeks.com/contact/agendas/laumoen_contact_list/contacts/${id}`,
        { method: "DELETE" }
      );
      if (!resp.ok) throw new Error("Oh no! Your contacts can't be deleted :(");
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (error) {
      console.error("Oh no! Your contacts can't be loaded :(", error);
    }
  };

  return (

    <div className="container border rounded px-0">
      {(Array.isArray(store.contacts) ? store.contacts : []).map(contact => (
        <div key={contact.id} className="mx-5 my-4 d-flex align-items-stretch">
          <div>
            <img src="https://st.depositphotos.com/46542440/55685/i/450/depositphotos_556850760-stock-illustration-square-face-character-stiff-art.jpg"
              alt={contact.full_name}
              className="rounded-circle me-5 img-fluid img-thumbnail" />
          </div>
          <div>
            <p><strong>{contact.name}</strong></p>
            <p className="text-secondary"><i className="fa-solid fa-location-dot"></i> {contact.address}</p>
            <p className="text-secondary"><i className="fa-solid fa-phone"></i> {contact.phone}</p>
            <p className="text-secondary"><i className="fa-solid fa-envelope"></i> {contact.email}</p>
          </div>
          <div className="icons ms-auto d-flex flex-column justify-content-center">
            <ul className="nav nav-link d-flex">
              <li className="nav-item">
                <a href="#"
                  className="nav-link active text-dark link-dark"
                >
                  <i className="fa-solid fa-pencil"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-dark link-dark"
                  onClick={() => deleteContact(contact.id)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};