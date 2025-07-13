var pass = document.getElementById("password");
var mess = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener("input", () => {
  const value = pass.value;
  let strengthScore = 0;


  if (value.length > 0) {
    mess.style.display = "block";
  } else {
    mess.style.display = "none";
  }


  if (value.length >= 8) strengthScore++; 
  if (/[0-9]/.test(value)) strengthScore++; 
  if (/[a-z]/.test(value)) strengthScore++;
  if (/[A-Z]/.test(value)) strengthScore++; 
  if (/[^A-Za-z0-9]/.test(value)) strengthScore++; 

 
  if (strengthScore <= 2) {
    str.innerHTML = "Weak";
    str.style.color = "red";
  } else if (strengthScore === 3 || strengthScore === 4) {
    str.innerHTML = "Medium";
    str.style.color = "orange";
  } else if (strengthScore === 5) {
    str.innerHTML = "Strong";
    str.style.color = "limegreen";
  }
});
