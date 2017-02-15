function greet(name: string) : string {
  return `Hello ${name}`;
}

document.getElementById("headID").innerHTML = greet("Rene");
