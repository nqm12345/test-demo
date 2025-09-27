const datatest = 0; // Global scope

function BopBop() {
  let number = 10; // function scope
  if (true) {
    let b = 100; // block scope
    console.log(b);
  }
  return number;
}

console.log(BopBop());
