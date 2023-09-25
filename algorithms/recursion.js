function recursiveFunc(n, counter = 1) {
  if (n == 1) {
    console.log("this is the counter: " + counter);
    return;
  }

  // counter = counter +1;

  // console.log(`The value of counter is ${counter}`)

  recursiveFunc(n - 1, counter + 1);
  counter = counter + 1;

  console.log(`The value of counter is ${counter}`);
  recursiveFunc(n - 1, counter + 1);
}

recursiveFunc(3);
