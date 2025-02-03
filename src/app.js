//* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "my girlfriend",
    "my ex"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "kicked",
    "spat",
    "burned",
    "cursed",
    "ignited",
    "banished"
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "the sink",
    "my pipe",
    "my ps5"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "when I was doing the JS project",
    "during the prework"
  ];

  let whos = who[Math.floor(Math.random() * who.length)];
  let actions = action[Math.floor(Math.random() * action.length)];
  let whats = what[Math.floor(Math.random() * what.length)];
  let whens = when[Math.floor(Math.random() * when.length)];

  console.log(whos, actions, whats, whens);

  document.getElementById(
    "excuse"
  ).innerText = `${whos} ${actions} ${whats} ${whens}.`;
};
