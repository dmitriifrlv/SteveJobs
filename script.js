//Selectors
let mql = window.matchMedia("(max-width: 770px)");
let mqlBig = window.matchMedia("(min-width: 771px)");

let foundationTitle = document.querySelector("#foundation");
let par1 = document.querySelector("#firstStory");
let apple1 = document.querySelector("#apple1");

let logo = document.querySelector("#logo97");
let title = document.querySelector("#comeBack");
let par2 = document.querySelector("#par2");

let presentation = document.querySelector("#presentation");
let iconic = document.querySelector("#iconic");
let par3 = document.querySelector("#par3");

let nodes = document.getElementsByClassName("delete");

//Functions
function change1(e) {
  if (e.matches) {
    console.log("cool");
    par1.insertAdjacentElement("beforebegin", foundationTitle);
    par1.insertAdjacentElement("afterend", apple1);

    par2.insertAdjacentElement("beforebegin", title);
    par2.insertAdjacentElement("afterend", logo);

    par3.insertAdjacentElement("beforebegin", iconic);
    par3.insertAdjacentElement("afterend", presentation);

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.display = "none";
    }
  }
}

mql.addEventListener("change", change1);

function change2(e) {
  if (e.matches) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.display = "block";
    }
  }
}

mqlBig.addEventListener("change", change2);
