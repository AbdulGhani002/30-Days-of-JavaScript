const URL = fetch("https://jsonplaceholder.typicode.com/users");
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     console.log(data.map((user) => user.name));
//   });

async function doStuff() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.ok) {
    const users = await response.json();
    console.log(users.map((users) => users.name));
  } else {
    console.log("FAILURE");
  }
}
doStuff();
