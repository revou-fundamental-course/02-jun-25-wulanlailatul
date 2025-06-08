let reversed = false;

function convert() {
  const input = reversed ? document.getElementById("fahrenheit").value : document.getElementById("celsius").value;
  let result = "";
  let explanation = "";

  if (input === "" || isNaN(input)) {
    alert("Masukkan angka yang valid!");
    return;
  }

  const temp = parseFloat(input);
  let output;

  if (!reversed) {
    const fahrenheit = (temp * 9 / 5) + 32;
    output = Number.isInteger(fahrenheit) ? fahrenheit : parseFloat(fahrenheit.toFixed(2).replace(/\.?0+$/, ''));
    explanation = `${temp}°C × (9/5) + 32 = ${output}°F`;
    document.getElementById("fahrenheit").value = output;
  } else {
    const celsius = (temp - 32) * 5 / 9;
    output = Number.isInteger(celsius) ? celsius : parseFloat(celsius.toFixed(2).replace(/\.?0+$/, ''));
    explanation = `(${temp}°F − 32) × 5/9 = ${output}°C`;
    document.getElementById("celsius").value = output;
  }

  document.getElementById("explanation").value = explanation;
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("explanation").value = "";
}

function reverse() {
  reversed = !reversed;
  reset();
  alert(reversed ? "Mode: Fahrenheit ke Celsius" : "Mode: Celsius ke Fahrenheit");
}
