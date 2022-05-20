let newEll = "cars";
test();
const photoSection = document.getElementById("photo");
let newSearch = document.getElementById("input");
document.querySelector("#btn__sear").onclick = newElemen;

function newElemen() {
  deleteElement();
  newEll = document.getElementById("input").value;
  test();
  document.getElementById("input").value = "";
}

function deleteElement() {
  document.getElementById("photo").innerHTML = "";
}

function test() {
  let serverUrl2 = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${newEll}&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`;
  const arr = [];
  let newArray = [];
  fetch(serverUrl2)
    .then((response) => response.json())
    .then((data) => showData(data));

  const newArr = [];

  function showData(data) {
    arr.push(data.photos.photo);
    for (let key of arr[0]) {
      newArr.push(key.url_m);
    }
    createElement(newArr);
  }

  function createElement(newArr) {
    for (let j of newArr) {
      const img = document.createElement("img");
      img.className = "gallery-img";
      img.src = `${j}`;
      img.alt = `image`;
      photoSection.append(img);
    }
  }
}
