// Response objects

const jsonstr = "http://127.0.0.1:5500/local-sample.json"; // json file
const imgstr = "https://picsum.photos/id/237/300/200"; // image file
const fontstr =
  "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2"; // font file
const htmlstr = "http://127.0.0.1:5500/"; //html file

// HTTP Request  - HEAD, BODY
// HTTP Response - HEAD, BODY

let obj = {
  id: crypto.randomUUID(),
  name: "the one who knocks",
  favouriteColor: "blue",
};
// const options = {
//   status: 200,
//   statusText: "ok",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": file.size,
//   },
// };

export const getData = async () => {
  try {
    const imgResponse = await fetch(imgstr);
    if (!imgResponse.ok) throw new Error("Invalid Response");
    const imgData = await imgResponse.blob();
    console.log(imgData);

    let imgUrl = URL.createObjectURL(imgData);
    let img = document.querySelector("#pic");
    img.src = imgUrl;

    const jsonResponse = await fetch(jsonstr);
    if (!jsonResponse.ok) throw new Error("Invalid Response");
    const jsonData = await jsonResponse.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }

  let jsonstring = JSON.stringify(obj);
  // console.log(jsonstring);
  let file = new File([jsonstring], "mydata.json", {
    type: "application/json",
  });

  let response = new Response(file, {
    status: 200,
    statusText: "ok",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": file.size,
    },
  });
  // console.log(response.headers.get("content-type"));
  // console.log(response.headers.get("content-length"));
};
