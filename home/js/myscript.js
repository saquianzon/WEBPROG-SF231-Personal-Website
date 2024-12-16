function myFunction() {
    document.getElementById("demo").innerHTML = "Oh and in case I don't see ya, good afternoon, good evening, and good night!";
  }

function myFunction2() {
    const element = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;
  }

function myFunction3() {
  document.getElementById("p1").innerHTML = "Never gonna give you up, never gonna let you down. Never gonna run around and desert you! - Rick Astley";
}