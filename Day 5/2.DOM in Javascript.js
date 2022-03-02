/*
append is used to add elements.
append can be used to add multiple things at a time.
*/
const body = document.body;
body.append("Document Object Model ");
body.append("Document Object Module " , "This is Module 2");
/*
cerateElement is used to create element(html tag).
*/

const bold = document.createElement('blockquote');
body.append(bold);

/*
Inner text is used to modify elements.
*/
const bolder = document.createElement('b');
body.append(bolder);
bolder.innerText = "Hello I am Inner Text ";


/*
textContent is modern way to insert text
*/
const textcnt = document.createElement('b');
body.append(textcnt);
textcnt.textContent = " Hello I am Text Content";