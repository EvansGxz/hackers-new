import { colors } from "../styles";
import Angular from "../assets/angular.png"
import React from "../assets/react.png"
import Vue from "../assets/vue.png"

const Select = (text, src) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <img src={src} height="24px" alt="no" />
    <p style={{marginLeft: '0.813rem', width: '6.375rem', color: colors.black.medium, fontSize: '0.875', fontFamily: "'Roboto', sans-serif", lineHeight: '1.57rem'}}>{text}</p>
    </div>
  );
};
export const ddlOptions = [
  {
    label: Select("Angular", Angular),
    value: "angular",
  },
  {
    label: Select("Reacts", React),
    value: "react",
  },
  {
    label: Select("Vuejs", Vue),
    value: "vue",
  },
];
