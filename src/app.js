/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn");
  document.querySelector(`#domain`).innerHTML = RandomDomain();
  console.log("JM was here!");
};

let RandomDomain = () => {
  let pron = ["the", "our", "my"];
  let adj = ["great", "big", "awesome", "simple"];
  let noun = ["jogger", "racoon", "vase", "teapot"];
  let dot = [".com", ".net", ".org"];

  let pronIndex = Math.floor(Math.random() * pron.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let dotIndex = Math.floor(Math.random() * dot.length);
  return pron[pronIndex] + adj[adjIndex] + noun[nounIndex] + dot[dotIndex];
};
