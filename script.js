let imgArray = [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg",
          "11.jpg",
          "12.jpg",
          "13.jpg",
          "14.jpg",
          "15.jpg",
];

let renderBox = document.getElementById("render");
let showImageBig2 = document.getElementById("showImgCenter");

function startSide() {
          document.getElementById("showImg").classList.add("display-none");
          renderBox.innerHTML = "";
          for (let i = 0; i < imgArray.length; i++) {
                    let index = imgArray[i];

                    renderBox.innerHTML += `<img src="img/${index}" onclick="showImgBig(${
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
