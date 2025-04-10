// Create Webpage content from fetch results

const jsonstr = "https://random-data-api.com/api/v2/users?size=10";
const imgstr = "https://picsum.photos/id/237/300/200";
const textstr = "http://127.0.0.1:3000/";

export const getData = async () => {
  let list = document.getElementById("list"); //the <ul>
  let img = document.getElementById("pic"); //the <img>
  let header = document.querySelector("header");

  try {
    const jsonResponse = await fetch(jsonstr);
    if (!jsonResponse.ok) throw new Error("Invalid Response");
    const jsonData = await jsonResponse.json();
    console.log(jsonData);

    list.innerHTML = jsonData
      .map(
        ({ uid, first_name, last_name }) =>
          `<li data-uid="${uid}">
          <p>${first_name} ${last_name}</p>
          </li>`
      )
      .join("");
  } catch (error) {
    console.log(error);
  }

  try {
    const txtResponse = await fetch(textstr);
    if (!txtResponse.ok) throw new Error("Invalid Response");
    const txtData = await txtResponse.text();
    console.log(txtData);

    header.innerHTML += `<h2>${txtData}</h2>`;
  } catch (error) {
    console.log(error);
  }

  try {
    const imgResponse = await fetch(imgstr);
    if (!imgResponse.ok) throw new Error("Invalid Response");
    const imgData = await imgResponse.blob();

    let imgUrl = URL.createObjectURL(imgData);
    console.log(imgUrl);
    let img = document.querySelector("#pic");
    img.src = imgUrl;
  } catch (error) {
    console.log(error);
  }
};
