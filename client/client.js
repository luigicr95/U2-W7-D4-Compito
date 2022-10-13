async function displayHelloWorld() {
  let helloHttpResponse = await fetch("http://localhost:3000/hello");

  let text = await helloHttpResponse.text();

  document.querySelector("body").innerHTML = text;

  console.log(text);
}

window.onload = () => {
  displayHelloWorld();
};
