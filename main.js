// Variable declaration
var lik = document.querySelectorAll(".like");
var pluss = document.querySelectorAll(".plus-btn");
var moinss = document.querySelectorAll(".minus-btn");
var qun = document.querySelectorAll(".Quant");
var pun = document.querySelectorAll(".price");
var pr = Array;
var total = document.querySelector("#finalPrice");
var del = document.querySelectorAll(".delete");
var tagdel = document.querySelectorAll(".Item");
// initialisation of total
total.value = 0;
// begining loop for
for (let i = 0; i < lik.length; i++) {
  // delete items

  del[i].addEventListener("click", function () {
    tagdel[i].remove();
    total.value = (
      parseFloat(total.value) - parseFloat(pun[i].innerHTML)
    ).toFixed(2);
  });

  //Like items through a clickable heart-shaped button that will change color accordingly.

  pr[i] = parseFloat(pun[i].innerHTML);
  total.value = (parseFloat(total.value) + pr[i]).toFixed(2);
  lik[i].addEventListener("click", function () {
    if (lik[i].style.color !== "red") {
      lik[i].style.color = "red";
    } else {
      lik[i].style.color = "black";
    }
  });
  // //Adjust the quantity of each item through  “+” and “-” buttons.

  pluss[i].addEventListener("click", function () {
    qun[i].value++;
    pun[i].innerHTML = (pr[i] * parseFloat(qun[i].value)).toFixed(2);
    total.value = (parseFloat(total.value) + pr[i]).toFixed(2);
  });
  moinss[i].addEventListener("click", function () {
    if (qun[i].value > 1) {
      qun[i].value--;
      pun[i].innerHTML = (pr[i] * parseFloat(qun[i].value)).toFixed(2);
      total.value = (parseFloat(total.value) - pr[i]).toFixed(2);
    }
  });
  console.log("trues");
}
// End of Loop for + End code.
