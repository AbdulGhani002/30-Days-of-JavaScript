const promise = new Promise((resolve, reject) => {
  const sum = 1 + 1;
  //   const sum = 1 + 4;
  if (sum === 5) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
