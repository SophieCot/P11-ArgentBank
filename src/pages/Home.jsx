// src/pages/Home.jsx
import React from "react";
import Login from "../components/Login";
import "../sass/Home.scss";
import bankTreeImage from "../assets/img/bank-tree.jpeg";
import iconChatImage from "../assets/img/icon-chat.png";
import iconMoneyImage from "../assets/img/icon-money.png";
import iconSecurityImage from "../assets/img/icon-security.png";
import Feature from "../components/Feature";
const featuresList = [
  {
    id:1,
    icon: iconChatImage,
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },

  {
    id:2,
    icon: iconMoneyImage,
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },

  {
    id:3,
    icon: iconSecurityImage,
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

const Home = () => {
  return (
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>
       {featuresList.map(feature=>(<Feature key={feature.id} title={feature.title} text={feature.text} icon={feature.icon}/>))}
      </section>
    </main>
  );
};

export default Home;
