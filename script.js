let imgArray = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
];

let renderBox = document.getElementById("render");
let showImageBig2 = document.getElementById("showImgCenter");

function startSide() {
          document.getElementById("showImg").classList.add("display-none");
          renderBox.innerHTML = "";
          for (let i = 0; i < imgArray.length; i++) {
                    let index = imgArray[i];

                    renderBox.innerHTML += `<img src="img/${index}.jpg" onclick="showImgBig(${
                              i + 1
                    })" class="imgRender" id="index${i}">`;
          }
}

function showImgBig(wert) {
          let value = wert;
          document.getElementById("showImg").classList.remove("display-none");
          showImageBig2.innerHTML = "";
          showImageBig2.innerHTML += `<img src="img/${value}.jpg" class="imgCssBig">
          <div><i onclick="startSide()" class="fa fa-times-rectangle" style="font-size:48px;color:white"></i></div>`;
}
