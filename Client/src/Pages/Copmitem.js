import React from "react";

function Copmitem(props) {

 



  return (
    <div className="col-md-4">
      <article className="aa-properties-item">
        <a href="/" className="aa-properties-item-img">
          <img src="assets/img/item/1.jpg" alt="website template image1" />
        </a>
        <div className="aa-tag for-sale">{props.data.mode}</div>
        <div className="aa-properties-item-content">
          <div className="aa-properties-info">
            {" "}
            {props.data.type}, {props.data.ville}
          </div>
          <div className="aa-properties-about">
            <h3>
              <a href="/">{props.data.titre}</a>
            </h3>
            <p>{props.data.description}</p>
          </div>
          <div className="aa-properties-detial">
            <span className="aa-price">
              {props.data.prix} dh, {props.data.superficie} m²{" "}
            </span>{" "}
            <a href="/" className="aa-secondary-btn">
              View Details
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Copmitem;
