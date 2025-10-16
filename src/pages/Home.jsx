import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [editingContact, setEditingContact] = useState(null);

  const startEditContact = (contact) => {
    setEditingContact(contact);
  };

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

  const saveContact = async (updatedContact) => {
    try {
      const resp = await fetch(
        `https://playground.4geeks.com/contact/agendas/laumoen_contact_list/contacts/${updatedContact.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedContact),
        }
      );
      if (!resp.ok) throw new Error("Couldn't update the contact");

      const data = await resp.json();
      dispatch({ type: "SET_CONTACTS", payload: store.contacts.map(c => c.id === data.id ? data : c) });
      setEditingContact(null); // Cerramos la edición
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("Error updating contact");
    }
  };

  return (

    <div className="container border rounded px-0">
      {(Array.isArray(store.contacts) ? store.contacts : []).map(contact => (
        <div key={contact.id} className="mx-5 my-4 d-flex align-items-stretch">
          <div>
            <img src="https://st.depositphotos.com/46542440/55685/i/450/depositphotos_556850760-stock-illustration-square-face-character-stiff-art.jpg"
              alt={contact.name}
              className="rounded-circle me-5 img-fluid img-thumbnail" />
          </div>
          <div>
            {editingContact?.id === contact.id ? (
              <>
                <input
                  type="text"
                  className="d-flex form-control"
                  value={editingContact?.name || ""}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="d-flex form-control mt-2"
                  value={editingContact?.address || ""}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, address: e.target.value })}
                />
                <input
                  type="text"
                  className="d-flex form-control mt-2"
                  value={editingContact?.phone || ""}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, phone: e.target.value })}
                />
                <input
                  type="text"
                  className="d-flex form-control mt-2"
                  value={editingContact?.email || ""}
                  onChange={(e) => 
                    setEditingContact({ ...editingContact, email: e.target.value })}
                />
                <button className="btn btn-info text-white w-100 mt-2" onClick={() => saveContact(editingContact)}>Save</button>
              </>
            ) : (
              <>
                <p><strong>{contact.name}</strong></p>
                <p className="text-secondary"><i className="fa-solid fa-location-dot"></i> {contact.address}</p>
                <p className="text-secondary"><i className="fa-solid fa-phone"></i> {contact.phone}</p>
                <p className="text-secondary"><i className="fa-solid fa-envelope"></i> {contact.email}</p>
              </>
            )}
          </div>
          <div className="icons ms-auto d-flex flex-column justify-content-center">
            <ul className="nav nav-link d-flex">
              <li className="nav-item">
                <a href="#"
                  className="nav-link active text-dark link-dark"
                  onClick={() => startEditContact(contact)}
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