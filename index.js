//Declaration et initialisation de nos variable
let weightLbs = document.getElementById("weightInput");
let result = document.getElementById("showWeight");

//la fonction permettant de faire la conversion de lbs en kg
function convert(inputValue) {
	if (inputValue.value <= 0 || isNaN(inputValue.value)) {
		alert("Veuillez entrer une valeur valable SVP!");
		return;
	}

	let weightKg = inputValue.value * 0.453592;

	result.textContent = `Your weight in kg is : ${weightKg.toFixed(2)}`;
}

//evenement permettant le declenchement de calcul de poids en fonction de input
weightLbs.addEventListener("change", () => {
	convert(weightLbs);
});
