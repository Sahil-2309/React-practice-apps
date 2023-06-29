import React, { useState } from "react";

const Tour = ({ t, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={t.image} alt={t.name} />
      <footer>
        <div className="tour-info">
          <h4>{t.name}</h4>
          <h4 className="tour-price">${t.price}</h4>
        </div>
        <p>
          {readMore ? t.info : `${t.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {" "}
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(t.id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
