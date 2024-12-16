function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

function myFunction2() {
    const element = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;
  }

function myFunction3() {
  const x = document.getElementsByClassName("intro");
  document.getElementById("demo").innerHTML = 
  'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
}