const documentTitle = document.getElementById("documentTitle");
const documentBody = document.getElementById("documentBody");

async function getData() {
  console.time("fetched data in:");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); //nekoe vreme
  console.timeEnd("fetched data in:");

  if (response.status == 200) {
    console.log("Uspesno dobavena data");
    const data = await response.json(); //nekoe vreme
    documentTitle.innerText = data.title;
    documentBody.innerText = data.body;
    console.log(data);
  } else if (response.status == 404) {
    console.warn("Stranicata ne e pronajdena");
  } else if (response.status == 500) {
    console.error("Greska na serverot");
  }
}

getData();
