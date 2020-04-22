import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";

const Card = () => {
  const [apiInfo, setApiInfo] = useState({});

  useEffect(() => {
    let mounted = true;
    async function getData() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=GnLWHpRX7FvONZFCWTj9Seb0s51CoawGAGjBiXzJ`
      );

      const data = await res.json();
      setApiInfo(data);
    }
    getData();

    return () => (mounted = false);
  }, []);

  if (apiInfo.length == 0) {
    <div>Loading ...</div>;
  }
  return (
    <>
      <div className="container">
        <div className="imageContainer">
          <h2 className="imageName">{apiInfo.title}</h2>
          <img
            className="spaceImage"
            alt={apiInfo.title}
            src={apiInfo.url}
            onClick={() => {}}
          />
          <p>{apiInfo.date}</p>
        </div>
        <p className="quote">{apiInfo.explanation}</p>
      </div>
    </>
  );
};

export default Card;
