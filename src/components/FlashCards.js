import React, { useState } from "react";

import ArenaChapel from "../paintings/1.png";
import TheMaesta from "../paintings/2.png";
import Effects from "../paintings/3.png";
import Tomb from "../paintings/4.png";
import Altarpiece from "../paintings/5.png";
import Madonna from "../paintings/6.png";
import Brunelleschi from "../paintings/7.png";
import Cathedral from "../paintings/8.png";
import Niches from "../paintings/91.png";
import NichesPT from "../paintings/92.png";
import Frescoes from "../paintings/101.png";
import FrescoesPT from "../paintings/102.png";
import Merode from "../paintings/11.png";
import SaintLuke from "../paintings/12.png";
import MadonnaAndChild from "../paintings/13.png";
import Baptism from "../paintings/14.png";
import Judith from "../paintings/15.png";
import Montefeltro from "../paintings/16.png";

export default () => {
  const [paintings] = useState([
    {
      painting: [ArenaChapel],
      artist: "Giotto",
      title: "Arena Chapel",
      year: "1305-1307 or 1320"
    },
    {
      painting: [TheMaesta],
      artist: "Duccio",
      title: "The Maestà",
      year: "1308"
    },
    {
      painting: [Effects],
      artist: "Ambrogio Lorenzetti",
      title: "Effects of Good and Bad Government in the City and the Country",
      year: "1338-1339"
    },
    {
      painting: [Tomb],
      artist: "Claus Sluter",
      title: "Tomb of Philip the Bold",
      year: "1414"
    },
    {
      painting: [Altarpiece],
      artist: "Jan and Hubert van Eyck",
      title: "Altarpiece of the Lamb or the Ghent Altarpiece",
      year: "1432"
    },
    {
      painting: [Madonna],
      artist: "Jan van Eyck",
      title: "Madonna with Chancellor Nicolas Rolin",
      year: "1435"
    },
    {
      painting: [Brunelleschi],
      artist: "Brunelleschi and Ghiberti",
      title: "Baptistery Doors",
      year: "1401"
    },
    {
      painting: [Cathedral],
      artist: "Filippo Brunelleschi",
      title: "Florence Cathedral",
      year: "1445"
    },
    {
      painting: [Niches, NichesPT],
      artist: "Orsanmichele",
      title: "The Exterior Niches",
      year: "1337-1380"
    },
    {
      painting: [Frescoes, FrescoesPT],
      artist: "Masolino and Masaccio",
      title: "Frescoes",
      year: "1420s"
    },
    {
      painting: [Merode],
      artist: "Robert Campin",
      title: "Mérode Altarpiece",
      year: "1425"
    },
    {
      painting: [SaintLuke],
      artist: "Rogier van der Weyden",
      title: "Saint Luke Portraying the Virgin",
      year: "1435-1440"
    },
    {
      painting: [MadonnaAndChild],
      artist: "Filippo Lippi",
      title: "Madonna and Child",
      year: "1455"
    },
    {
      painting: [Baptism],
      artist: "Piero della Francesca",
      title: "Baptism of Christ",
      year: "1452-1453"
    },
    {
      painting: [Judith],
      artist: "Donatello",
      title: "Judith and Holofernes",
      year: "1450s"
    },
    {
      painting: [Montefeltro],
      artist: "Piero della Francesca",
      title: "Battista Sforza and Fedrico da Montefeltro",
      year: "1472"
    }
  ]);
  const [currentPainting, setCurrentPainting] = useState(
    Math.floor(Math.random() * paintings.length)
  );
  const [isVisible, setIsVisible] = useState("none");

  const handleNewPainting = () => {
    setIsVisible("none");
    setCurrentPainting(Math.floor(Math.random() * paintings.length));
  };
  const handleShowPainting = () => {
    setIsVisible("block");
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns: "2fr 8fr"
        }}
      >
        <div>
          <button onClick={e => handleNewPainting(currentPainting)}>
            New Painting
          </button>{" "}
          <button onClick={e => handleShowPainting()}>Show Details</button>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridTemplateColumns: "1fr 1fr 5fr",
              textAlign: "left"
            }}
          >
            <div />
            <div>
              <p>Artist: </p>
              <p>Title: </p>
              <p>Year:</p>
            </div>
            <div style={{ display: `${isVisible}` }}>
              <p>{paintings[currentPainting]["artist"]}</p>
              <p>{paintings[currentPainting]["title"]}</p>
              <p>{paintings[currentPainting]["year"]}</p>
            </div>
          </div>
          <div />
        </div>
        <div>
          <img alt="" src={`${paintings[currentPainting]["painting"][0]}`} />
          {paintings[currentPainting]["painting"][1] && (
            <img alt="" src={`${paintings[currentPainting]["painting"][1]}`} />
          )}
        </div>
      </div>
    </>
  );
};
