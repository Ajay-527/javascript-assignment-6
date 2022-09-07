let indValue = prompt("Enter the numer");
computeDash(indValue);
function computeDash(indValue) {
  var str = indValue[0];
  for (let i = 1; i < indValue.length; i++) {
    if (indValue[i - 1] % 2 === 0 && indValue[i] % 2 === 0) {
      str = str + "-" + indValue[i];
    } else {
      str = str + indValue[i];
    }
  }
  alert(str);
}
