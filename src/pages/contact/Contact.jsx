import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getContactById, getContactRemove } from "../../redux/contact/action";
import { editContact } from "../../redux/edit-contact/action";

export const Contact = () => {
  const { dataById } = useSelector((state) => state.dataById);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  console.log(history);

  const url = history.location.pathname;

  const splittedUrl = url.split("/");

  const contactId = splittedUrl[splittedUrl.length - 1];

  useEffect(() => {
    dispatch(getContactById(contactId));
  }, [contactId]);

  useEffect(() => {
    if (dataById) {
      // console.log(dataById);
      setFirstName(dataById.first_name);
      setLastName(dataById.last_name);
      setEmail(dataById.email);
      setGender(dataById.gender);
      setAvatar(dataById.avatar);
    }
  }, [dataById]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      avatar: avatar,
    };

    dispatch(editContact(formData, Number(dataById.id)));
  };

  return (
    <>
      {dataById.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={dataById.avatar} alt="" />
          <p>{dataById.first_name}</p>
        </div>
      )}

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first_name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last_name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <input
          type="text"
          placeholder="avatar"
          name="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <button type="submit">Edit Contact</button>
      </form>
    </>
  );
};
