import React from "react";
import s from "./cardImage.module.css";

export const CardImage = ({ image_url = "" }) => {
  return (
    <>
      <div
        className={s.card__image}
        style={{
          backgroundImage: `url(${image_url})`,
        }}
      />
    </>
  );
};
