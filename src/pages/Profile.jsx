import React, { useState } from "react";
import Banner from "../components/Banner";
import "../sass/Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/userActions";

const accountsList = [
  {
    title: "Argent Bank Checking (x8349)",
    subtitle: "$2,082.79",
    content: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    subtitle: "$10,928.42",
    content: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    subtitle: "$184.30",
    content: "Available Balance",
  },
];

const Profile = () => {
  const { user, token, updateError, updateLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(user.userName);
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { userName: userName };
    updateProfile(token, body, dispatch);
  };
  return (
    <main className="profile">
      <div className="profile__container">
        <h1>Welcome back !</h1>
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="userName">User name</label>
              <input
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" value={user.firstName} readOnly disabled />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" value={user.lastName} readOnly disabled />
            </div>
            {updateError&&<div>{updateError}</div>}
            <button
              type="submit"
              className={`${updateLoading ? "buttonDisabled" : "button"}`}
              disabled={updateLoading}
            >
              Save
            </button>
            <button className="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        ) : (
          <button className="ButtonUser" onClick={() => setShowForm(true)}>
            Edit name
          </button>
        )}
      </div>
      {accountsList.map((account, i) => (
        <Banner
          key={i}
          title={account.title}
          subtitle={account.subtitle}
          content={account.content}
        />
      ))}
    </main>
  );
};

export default Profile;
