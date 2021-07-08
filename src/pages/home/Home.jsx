import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllData } from "../../redux/home/action";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const { data } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const history = useHistory();

  console.log(history);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  const sendContactId = (contactId) => {
    history.push(`/people/${contactId}`);
  };
  // console.log(data);

  const createContactHandler = () => {
    history.push(`/new`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => createContactHandler()}>Create New Contact</button>
      {data.map((data) => (
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            width: "50%",
            margin: "auto",
          }}
          key={data.id}
        >
          <img src={data.avatar} alt="" />
          <p>{data.first_name}</p>
          <button
            onClick={() => {
              sendContactId(data.id);
            }}
          >
            View Contact
          </button>
        </div>
      ))}
    </div>
  );
};
