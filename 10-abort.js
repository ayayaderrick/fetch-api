// How to abort a fetch call

const url = "https://picsum.photos/id/237/3000/2000";

const controller = new AbortController();
const signal = controller.signal;

export const getData = async () => {
  let abortBtn = document.getElementById("abort");
  abortBtn.addEventListener("click", (ev) => {
    controller.abort();
    console.log("aborted");
  });

  let request = new Request(url, {
    signal: signal,
  });
  // fetch(request)
  //   .then((response) => {
  //     if (!response.ok) throw new Error('invalid');
  //     return response.blob();
  //   })
  //   .then((blob) => {
  //     console.log('got the blob');
  //   })
  //   .catch(console.warn);

  try {
    const response = await fetch(request);

    if (!response.ok) throw new Error("Invalid Response");
    const blob = await response.blob();
    console.log("got the blob", blob);
  } catch (error) {
    console.log(error);
  }
};
