import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createNewContact } from "../../redux/create-contact/action";

export const CreateContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      avatar: avatar,
    };

    dispatch(createNewContact(formData));
  };

  return (
    <div>
      <h1>Create new contact</h1>
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

        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
};
