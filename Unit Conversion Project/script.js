
function textshow(val1){
  let els=document.getElementsByClassName("userinput1");
  for (var i = 0;i<els.length; i++) {
    els[i].textContent=val1
}
}
function converter(val){
  res1=val*3.28084
  res2=val*0.3048
  res3=val*0.264172
  res4=val*3.78541
  res5=val*2.20462
  res6=val*0.453592
  document.getElementById("mettofeet").textContent=res1.toFixed(3)
  document.getElementById("feettomet").textContent=res2.toFixed(3)
  document.getElementById("littogal").textContent=res3.toFixed(3)
  document.getElementById("galtolit").textContent=res4.toFixed(3)
  document.getElementById("kilotopound").textContent=res5.toFixed(3)
  document.getElementById("poundtokilo").textContent=res6.toFixed(3)
  
}
