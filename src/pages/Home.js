import React from "react";
import sneakers from "../data/sneakers.json";

export default function Home() {
  return (
    <div>
      {sneakers.map((sneaker, index) => {
        return (
          <div>
            <div>
              <img
                src={sneaker.createdBy.avatarUrl}
                alt={sneaker.createdBy.username}
              />
              <span>{sneaker.createdBy.username}</span>
            </div>
            <div>
              <img src={sneaker.imageUrl} alt={sneaker.name} />
            </div>
            <div>
              <h2>{sneaker.name}</h2>
              <div>
                <ul>
                  <li>style</li>
                  <li>colorway</li>
                  <li>retail price</li>
                  <li>release date</li>
                  <li>size</li>
                  <li>location</li>
                </ul>
                <ul>
                  <li>{sneaker.style}</li>
                  <li>{sneaker.colorway}</li>
                  <li>{sneaker.retailPrice}</li>
                  <li>{sneaker.releaseDate}</li>
                  <li>{sneaker.size}</li>
                  <li>{sneaker.location}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
