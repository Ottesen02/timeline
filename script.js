"use strict";

window.addEventListener("DOMContentLoaded", start());

function start() {
  console.log("Lets begin.");

  getWheel();
}

async function getWheel() {
  const wheelSvg = await fetch("/assets/wheel.svg");
  const wheel = await wheelSvg.text();

  document.querySelector(".wheel").innerHTML = wheel;

  getSummer();
}

async function getSummer() {
  const summerSvg = await fetch("/assets/Summer.svg");
  const summer = await summerSvg.text();

  document.querySelector("#summerBackground").innerHTML = summer;
  document.querySelector("#summer").classList.add("summerActive");

  getWinter();
}

async function getWinter() {
  const winterSvg = await fetch("/assets/Winter.svg");
  const winter = await winterSvg.text();

  document.querySelector("#winterBackground").innerHTML = winter;

  getSpring();
}

async function getSpring() {
  const springSvg = await fetch("/assets/Spring.svg");
  const spring = await springSvg.text();

  document.querySelector("#springBackground").innerHTML = spring;
  getFall();
}

async function getFall() {
  const fallSvg = await fetch("/assets/Fall.svg");
  const fall = await fallSvg.text();

  document.querySelector("#fallBackground").innerHTML = fall;

  getTree();
}

async function getTree() {
  const treeSvg = await fetch("/assets/gren.svg");
  const tree = await treeSvg.text();

  document.querySelector(".timeline").innerHTML = tree;

  regButtons();
  snow();
}

function regButtons() {
  const winterBG = document.querySelector("#winterBackground");
  const summerBG = document.querySelector("#summerBackground");
  const springBG = document.querySelector("#springBackground");
  const fallBG = document.querySelector("#fallBackground");
  const summerButton = document.querySelector("#summer");
  const winterButton = document.querySelector("#winter");
  const springButton = document.querySelector("#spring");
  const fallButton = document.querySelector("#fall");
  const trashPile = document.querySelector("#trashpile");

  winterButton.addEventListener("click", () => {
    winterBG.classList.remove("hide");
    summerBG.classList.add("hide");
    springBG.classList.add("hide");
    fallBG.classList.add("hide");

    winterButton.classList.add("winterActive");
    summerButton.classList.remove("summerActive");
    springButton.classList.remove("springActive");
    fallButton.classList.remove("fallActive");

    document.querySelector("#background").classList.remove("noshow");
  });

  summerButton.addEventListener("click", () => {
    winterBG.classList.add("hide");
    summerBG.classList.remove("hide");
    springBG.classList.add("hide");
    fallBG.classList.add("hide");

    winterButton.classList.remove("winterActive");
    summerButton.classList.add("summerActive");
    springButton.classList.remove("springActive");
    fallButton.classList.remove("fallActive");

    document.querySelector("#background").classList.add("noshow");
  });

  springButton.addEventListener("click", () => {
    winterBG.classList.add("hide");
    summerBG.classList.add("hide");
    springBG.classList.remove("hide");
    fallBG.classList.add("hide");

    winterButton.classList.remove("winterActive");
    summerButton.classList.remove("summerActive");
    springButton.classList.add("springActive");
    fallButton.classList.remove("fallActive");

    document.querySelector("#background").classList.add("noshow");
  });

  fallButton.addEventListener("click", () => {
    winterBG.classList.add("hide");
    summerBG.classList.add("hide");
    springBG.classList.add("hide");
    fallBG.classList.remove("hide");

    winterButton.classList.remove("winterActive");
    summerButton.classList.remove("summerActive");
    springButton.classList.remove("springActive");
    fallButton.classList.add("fallActive");

    document.querySelector("#background").classList.add("noshow");
  });

  document.querySelector(".sun").addEventListener("click", () => {
    document.querySelector(".sun").classList.add("rotate");
    console.log("hej");
  });

  document.querySelector("#leaf2").addEventListener("click", () => {
    document.querySelector("#sprite5").classList.add("begin");
    trashPile.style.backgroundPosition = "-100%";
    document.querySelector("#sprite5").addEventListener("animationend", () => {
      document.querySelector("#sprite5").classList.add("hide");
    });
  });
  document.querySelector("#leaf3").addEventListener("click", () => {
    document.querySelector("#sprite2").classList.add("begin");
    trashPile.style.backgroundPosition = "-100%";
    document.querySelector("#sprite2").addEventListener("animationend", () => {
      document.querySelector("#sprite2").classList.add("hide");
    });
  });
  document.querySelector("#leaf4").addEventListener("click", () => {
    document.querySelector("#sprite6").classList.add("begin");
    trashPile.style.backgroundPosition = "-300%";
    document.querySelector("#sprite6").addEventListener("animationend", () => {
      document.querySelector("#sprite6").classList.add("hide");
    });
  });
  document.querySelector("#leaf5").addEventListener("click", () => {
    document.querySelector("#sprite11").classList.add("begin");
    trashPile.style.backgroundPosition = "-300%";
    document.querySelector("#sprite11").addEventListener("animationend", () => {
      document.querySelector("#sprite11").classList.add("hide");
    });
  });
  document.querySelector("#leaf6").addEventListener("click", () => {
    document.querySelector("#sprite8").classList.add("begin");
    trashPile.style.backgroundPosition = "-500%";
    document.querySelector("#sprite8").addEventListener("animationend", () => {
      document.querySelector("#sprite8").classList.add("hide");
    });
  });
  document.querySelector("#leaf7").addEventListener("click", () => {
    document.querySelector("#sprite9").classList.add("begin");
    trashPile.style.backgroundPosition = "-500%";
    document.querySelector("#sprite9").addEventListener("animationend", () => {
      document.querySelector("#sprite9").classList.add("hide");
    });
  });
  document.querySelector("#leaf8").addEventListener("click", () => {
    document.querySelector("#sprite3").classList.add("begin");
    trashPile.style.backgroundPosition = "-700%";
    document.querySelector("#sprite3").addEventListener("animationend", () => {
      document.querySelector("#sprite3").classList.add("hide");
    });
  });
  document.querySelector("#leaf9").addEventListener("click", () => {
    document.querySelector("#sprite10").classList.add("begin");
    trashPile.style.backgroundPosition = "-700%";
    document.querySelector("#sprite10").addEventListener("animationend", () => {
      document.querySelector("#sprite10").classList.add("hide");
    });
    document.querySelector("#sprite4").classList.add("begin");
    trashPile.style.backgroundPosition = "-700%";
    document.querySelector("#sprite4").addEventListener("animationend", () => {
      document.querySelector("#sprite4").classList.add("hide");
    });
  });
  document.querySelector("#leaf10").addEventListener("click", () => {
    document.querySelector("#sprite7").classList.add("begin");
    trashPile.style.backgroundPosition = "-900%";
    document.querySelector("#sprite7").addEventListener("animationend", () => {
      document.querySelector("#sprite7").classList.add("hide");
    });
  });
  document.querySelector("#leaf11").addEventListener("click", () => {
    document.querySelector("#sprite").classList.add("begin");
    trashPile.style.backgroundPosition = "-900%";
    document.querySelector("#sprite").addEventListener("animationend", () => {
      document.querySelector("#sprite").classList.add("hide");
    });
  });
}

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
      this.speed = Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;
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
