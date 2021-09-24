// Reload Screen
function clearScreen() {
  window.location.reload();
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fetch list of countries
async function getDogData() {
  if (document.getElementById("doginfo") === null) {
    console.log("Image NOT present...");
  } else {
    console.log("Image is presen!");
  }

  const breeds = [
    "african",
    "akita",
    "boxer",
    "chow",
    "clumber",
    "borzoi",
    "MIX",
    "husky",
    "eskmio",
    "beagle",
  ];

  const upperCaseDogBreed = breeds.map((dogBreed) => dogBreed.toLowerCase());
  const randomIndex = Math.floor(Math.random() * 10);

  try {
    const data = await fetch(
      `https://dog.ceo/api/breed/${upperCaseDogBreed[randomIndex]}/images/random`
    );
    const dog = await data.json();
    console.log("Breed name fetched: ", dog);

    let div = document.createElement("div");
    const dogObj = {
      breed: upperCaseDogBreed[randomIndex],
      image: dog.message
    };

    div.innerHTML = createDogCard(dogObj);
    document.getElementById("doginfo").append(div);
  } catch (err) {
    console.log("Error message", err.message);
  }
}

let createDogCard = (dogObj) => {
  return `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${dogObj.image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${capitalizeFirstLetter(dogObj.breed)}</h5>
        <a href="#" class="btn btn-primary" onclick="clearScreen()">Delete card</a>
      </div>
    </div>
  `;
};
