function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

function myFunction2() {
    const element = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;
  }

function myFunction3() {
  document.getElementById("p1").innerHTML = "New text!";
}