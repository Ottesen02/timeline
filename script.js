"use strict";

let json = [];
let chosenLeaf;

window.addEventListener("DOMContentLoaded", start);

// STARTSKÆRM

function start() {
  document.querySelector(".container").addEventListener("click", () => {
    document.querySelector("#startScreen").classList.add("fade");
    document
      .querySelector("#startScreen")
      .addEventListener("animationend", () => {
        document.querySelector("#startScreen").classList.add("hide");
      });
  });

  loadJSON();
  getSVGS();
}

//LOAD JSON FIL + TRÆ

function loadJSON() {
  fetch("info.json")
    .then(response => response.json())
    .then(jsonData => {
      json.push(jsonData);

      getTree();
    });

  async function getTree() {
    const treeSvg = await fetch("/assets/gren.svg");
    const tree = await treeSvg.text();

    document.querySelector(".timeline").innerHTML = tree;
    clickLeaves();
  }
}

//INFOBOKSE OG SKRALDEANIMATION

function clickLeaves() {
  document.querySelectorAll(".leaves").forEach(leaf => {
    leaf.addEventListener("click", showInfo);
  });
}
function showInfo() {
  console.log(this);
  let chosenLeaf = this.id;
  document.querySelector("#infobox").classList.remove("hide");
  document.querySelector("#infobox").innerHTML = ``;

  json[0].forEach(json => {
    if (chosenLeaf == json.ID) {
      document.querySelector(
        "#infobox"
      ).innerHTML = `<h1>${json.title}</h1><p>${json.text}</p><img src="assets/${json.icon}">`;

      let year = this.dataset.year;

      document.querySelectorAll(".sprites").forEach(sprite => {
        if (sprite.dataset.year < year) {
          sprite.classList.add("begin");

          sprite.addEventListener("animationend", () => {
            sprite.classList.add("hide");
          });
        } else if (sprite.dataset.year == year) {
          sprite.classList.remove("hide");
          sprite.classList.add("begin");

          sprite.addEventListener("animationend", () => {
            sprite.classList.add("hide");
          });
        } else {
          sprite.classList.remove("hide");
          sprite.classList.remove("begin");
        }
      });
    }
  });
}

// LOAD SVGER (BAGGRUND OG SÆSONHJUL)

function getSVGS() {
  async function loadSVGS() {
    const wheelSvg = await fetch("/assets/wheel.svg");
    const wheel = await wheelSvg.text();

    document.querySelector(".wheel").innerHTML = wheel;

    const summerSvg = await fetch("/assets/backgrounds/Summer.svg");
    const summer = await summerSvg.text();

    document.querySelector("#summerBackground").innerHTML = summer;
    document.querySelector("#summer").classList.add("summerActive");

    const winterSvg = await fetch("/assets/backgrounds/Winter.svg");
    const winter = await winterSvg.text();

    document.querySelector("#winterBackground").innerHTML = winter;

    const fallSvg = await fetch("/assets/backgrounds/Fall.svg");
    const fall = await fallSvg.text();

    document.querySelector("#fallBackground").innerHTML = fall;

    const springSvg = await fetch("/assets/backgrounds/Spring.svg");
    const spring = await springSvg.text();

    document.querySelector("#springBackground").innerHTML = spring;

    regButtons();
    snow();
  }

  loadSVGS();
}

//SKIFT SÆSON

function regButtons() {
  document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener("click", () => {
      let season = button.dataset.season;

      document.querySelectorAll(".buttons").forEach(button => {
        button.classList.remove(`${button.id}` + "Active");
        document
          .querySelector(`#${button.id}` + "Background")
          .classList.add("hide");
        document.querySelector("#background").classList.add("noshow");
      });

      if (season === "winter") {
        document.querySelector("#background").classList.remove("noshow");
        button.classList.add(`${button.id}` + "Active");
        document
          .querySelector(`#${button.id}` + "Background")
          .classList.remove("hide");
      } else if (button.dataset.season === season) {
        button.classList.add(`${button.id}` + "Active");
        document
          .querySelector(`#${button.id}` + "Background")
          .classList.remove("hide");
      } else {
      }
    });
  });
}

//SNE

function snow() {
  const SnowFlake = {
    ypos: 0,
    xpox: 0,
    speed: 0,
    element: null,
    create() {
      let div = document.createElement("div");
      div.classList.add("snowflake");
      document.querySelector("#background").appendChild(div);
      this.element = div;
    },
    reset() {
      this.xpos = Math.random() * config.maxX;
      this.ypos = -10;
      this.speed =
        Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;
      this.element.style.transform = "scale(" + Math.random() + ")";
    },
    show() {
      this.element.style.top = this.ypos + "px";
      this.element.style.left = this.xpos + "px";
    },
    move(delta) {
      this.ypos += this.speed * delta;
      if (this.ypos > config.maxY) {
        this.reset();
      }
    }
  };
  const config = {
    maxX: document.querySelector("#background").clientWidth,
    maxY: document.querySelector("#background").clientHeight,
    minSpeed: 10,
    maxSpeed: 100
  };
  let snowflakes = [];
  function init() {
    for (let i = 0; i < 100; i++) {
      let flake = Object.create(SnowFlake);
      flake.create();
      flake.reset();
      snowflakes.push(flake);
    }
    animate();
  }
  let last;
  function animate() {
    let now = Date.now() / 1000;
    let delta = now - (last || 0);
    for (let i = 0; i < snowflakes.length; i++) {
      let flake = snowflakes[i];
      flake.show();
      flake.move(delta);
    }
    last = now;
    requestAnimationFrame(animate);
  }
  init();
}
