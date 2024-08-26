import React, { useState } from "react";
import { Image } from "./image"; 

export const Gallery = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsPerPage = 3;
  const totalItems = props.data ? props.data.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculer les images à afficher sur la page actuelle
  const startIndex = currentIndex * itemsPerPage;
  const displayedData = props.data ? props.data.slice(startIndex, startIndex + itemsPerPage) : [];

  // Fonction pour passer à la page précédente
  const prevPage = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Fonction pour passer à la page suivante
  const nextPage = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nos jeux</h2>
        </div>
        <div className="row1">
          {displayedData.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className="col-sm-6 col-md-4 col-lg-4 mb-4"
            >
              <Image
                title={d.title}                
                smallImage={d.smallImage}
              />
            </div>
          ))}
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary"
            onClick={prevPage}
            disabled={currentIndex === 0}
          >
            &laquo; 
          </button>
          <button
            className="btn btn-primary ml-2"
            onClick={nextPage}
            disabled={currentIndex === totalPages - 1}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};
