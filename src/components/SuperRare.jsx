import React from "react";
import Card from "./Card";
import super1 from "../assets/shopping.png";
import super2 from "../assets/shopping4.png";
import super3 from "../assets/shopping.png";
import super4 from "../assets/shopping4.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      // series: "Gloop Series",
      title: "Gold Coins 10.00 gm",
      price: "62,000",
      // tag: 12983,
      // time: 1,
    },
    {
      image: super2,
      // series: "Gloop Series",
      title: "Gold Coins 20.00 gm",
      price: "1,25,000" ,
      // tag: 12983,
      // time: 1,
    },
    {
      image: super3,
      // series: "Gloop Series",
      title: "Gold Coins 10.00 gm",
      price: "6,000",
      // tag: 12983,
      // time: 1,
    },
    {
      image: super4,
      // series: "Gloop Series",
      title: "Regal Gold Coin 10.00g",
      price: "57,000",
      // tag: 12983,
      // time: 1,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Collection</h2>
        <p className="description">
           Buy Our 100% Pure Gold Now With Crypto
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price }) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            // tag={tag}
            // time={time}
            // key={index}
          />
        ))}
      </div>
      <button className="btn3">Explore More</button>
    </div>
  );
}
