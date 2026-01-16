async function getApi() {
  const response = await fetch(
    "https://fakerapi.it/api/v2/images?_quantity=15&_type=any",
  );
  const data = await response.json();
  return data;
}

async function showImages() {
  const result = await getApi();
  const images = result.data;

  let output = "";

  for (const image of images) {
    output += `
      <div style="width:220px; margin:15px; text-align:center;">
      <h4>${image.title}</h4>
        <img
          src="${image.url}"
          alt="${image.title}"
          style="width:200px; height:auto;"
        >
        <p>${image.description}</p>
      </div>
    `;
  }

  document.getElementById("result").innerHTML = output;
}

showImages();
