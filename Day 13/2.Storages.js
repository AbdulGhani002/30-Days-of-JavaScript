/*
Local Storage      | Cookies                 | Session Storage
10mb               |4kb                      |5mb
Never Expires      |Manual Expiration        |Expires on close tab
Client             |Client/Server            |Client
Easy               |Harder than Local Storage|Easy
*/

localStorage.setItem("Name", "Abdul Ghani");
sessionStorage.setItem("Age", 16);
// localStorage.removeItem("Name", "Abdul Ghani");
// sessionStorage.removeItem("Age", 16);

// Date(year,month,date);
const date = new Date(9999, 0, 10).toUTCString();
const pastDate = new Date(1971, 0, 10).toUTCString();
document.cookie = `Name = Abdul Ghani;expires=${date}`;
document.cookie = `age=16;expires=${date}`;
document.cookie = `Name = ;expires=${pastDate}`;
