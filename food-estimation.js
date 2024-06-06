const portionDatabase = {
    protein: {
        name: "Protein",
        description: "Proteins are essential nutrients for the human body. They are one of the building blocks of body tissue and can also serve as a fuel source.",
        recommendedPortion: "About the size of a deck of cards",
        image: "protein_image.jpg"
    },
    carbohydrates: {
        name: "Carbohydrates",
        description: "Carbohydrates are the body's main source of energy. They are found in grains, fruits, vegetables, and dairy products.",
        recommendedPortion: "About the size of your fist",
        image: "carbohydrates_image.jpg"
    },
    vegetables: {
        name: "Vegetables",
        description: "Vegetables are rich in vitamins, minerals, and fiber. They are an important part of a healthy diet.",
        recommendedPortion: "About the size of a baseball",
        image: "vegetables_image.jpg"
    },
    fruits: {
        name: "Fruits",
        description: "Fruits are delicious and nutritious. They are packed with vitamins, minerals, and antioxidants.",
        recommendedPortion: "About the size of a tennis ball",
        image: "fruits_image.jpg"
    }
};

function calculatePortions() {
    const guests = parseInt(document.getElementById('guests').value);
    const foodType = document.getElementById('food-type').value;
    const servingSize = parseInt(document.getElementById('serving-size').value);

    const totalPortions = guests * servingSize;

    const foodData = portionDatabase[foodType];

    const resultText = `For ${guests} guests, you'll need approximately ${totalPortions} portions of ${foodData.name.toLowerCase()}. Recommended portion size: ${foodData.recommendedPortion}.`;

    document.getElementById('portions-result').textContent = resultText;
}

var selectElement = document.getElementById("food-type");

selectElement.addEventListener("click", function() {
  var options = selectElement.getElementsByTagName("option");
  for(var i = 0; i < options.length; i++) {
    options[i].style.color = "black";
  }
});
