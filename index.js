//Declaration et initialisation de nos variable
let weightLbs = document.getElementById("weightInput");
let result = document.getElementById("showWeight");

//la fonction permettant de faire la conversion de lbs en kg
function convert(inputValue) {
	let weightKg = inputValue.value * 0.453592;

	result.textContent = `Your weight in kg is : ${weightKg.toFixed(2)}`;
}

weightLbs.addEventListener("change", () => {
	convert(weightLbs);
});
