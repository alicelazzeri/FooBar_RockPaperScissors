let container = document.getElementById("container");

// for loop to print numbers from 1 to 100 with conditions

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0 && i % 5 === 0) {
    output = "FooBar";
  } else if (i % 3 === 0) {
    output = "Foo";
  } else if (i % 5 === 0) {
    output = "Bar";
  } else {
    output = i;
  }

  let paragraph = document.createElement("p");
  paragraph.textContent = output;
  paragraph.classList.add("paragraph");

  if (output === "Foo" || output === "Bar" || output === "FooBar") {
    paragraph.classList.add("boldFB");
  }

  container.appendChild(paragraph);
}
