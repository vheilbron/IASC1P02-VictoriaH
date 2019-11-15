function addition(){

  var a = document.getElementById("Num1").value;
  var b = document.getElementById("Num2").value;
  var output = parseFloat(a) + parseFloat(b);
  if (!Number.isInteger(output)) {
    output="Output";
  } else{
    output= parseFloat(a) + parseFloat(b);
  };
    document.getElementById("Out").innerHTML = output;
  }''
