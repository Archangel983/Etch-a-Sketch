let container = document.querySelector("#container");
container.setAttribute("style", "maxWidth:fill-content;margin:auto;border:4px solid black;");
let TOTAL_SIZE = 800; 
let btn = document.querySelector("#button");
for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.setAttribute("style", "height:50px;width:800px;display:flex");

    for (let j = 0; j < 16; j++) {
        let div2 = document.createElement("div");
        div2.setAttribute("style", "width:50px;height:50px;opacity:0");
        div2.setAttribute("class", "individual");
        div.appendChild(div2);
    }
    container.appendChild(div);
}