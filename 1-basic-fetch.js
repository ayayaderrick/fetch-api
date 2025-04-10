//the simplest fetch you can use and still have error handling
const url = "https://jsonplaceholder.typicode.com/users";

export const getData = () => {
  fetch(url)
    .then((response) => {
      // console.log(response);
      // console.log(response.status);
      if (!response.ok) throw new Error("Invalid Response");
      return response.json(); //Method to extract JSON string and convert it to an Object
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
