// Your code goes here

// selectors
const navLinks = document.querySelectorAll(".nav-link");
const headerH1 = document.querySelector("header div h1");
const headerImg = document.querySelector("div header img");
const letsGoText = document.querySelector(".content-section .text-content h2");
const body = document.querySelector("body");
const header = document.querySelector("header")

// #1 - Makes links purple and underlined after clicking
// ** - Prevented links from working with prevent default 
// ** - Prevented changing bg color to pink with stop propagation
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.target.style.color = "purple";
        event.target.style.textDecoration = "underline";
        alert("Pay me $$ for more content")
    })
})

body.addEventListener('click', (event) => {
    event.target.style.background = "pink";
})

// #2 - Mades header H1 purple on mouse enter
headerH1.addEventListener('mouseover', (event) => {
    event.target.style.color = "purple";
})

// #3 - Makes header H1 black again on mouse leave
headerH1.addEventListener('mouseleave', (event) => {
    event.target.style.color = "black";
})

// #4a - Makes main header img dissappear on double click
headerImg.addEventListener("dblclick", (event) => {
    event.target.style.visibility = "hidden";
})

// #4b - Makes main header img appear again after 1 sec
headerImg.addEventListener("dblclick", (event) => {
    setTimeout( () => {
        event.target.style.visibility = "initial";
    }, 1000)
})

// #5a - Makes "Let's Go!" font-size grow to 5rem on mouse over
letsGoText.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = "5rem";
})

// #5b - Makes "Let's Go!" font-size shrink back to original size on mouse leave
letsGoText.addEventListener('mouseleave', (event) => {
    event.target.style.fontSize = "3.2rem";
})

// #6 - Makes the page's background color pink when you scroll
window.addEventListener('scroll', (event) => {
    body.style.background = "pink";
})

// #7 - Show an alert 3 sec after page load telling the user to interact 
window.addEventListener('load', (event) => {
    setTimeout( () => {
        alert('Click, scroll, and hover over random things to see what happens!');
    }, 500)  
})

// #8 - Log the key pressed to the console
window.addEventListener('keydown', (event) => {
    console.log(`User pushed: ${event.code}`);
})

// #9 - Log when the key pressed is let go to the console
window.addEventListener('keyup', (event) => {
    console.log(`User let go`);
})

// #10 - Alert user on mouse out of bus img asking if they double clicked on it
// ??????????? How would I make it so this doesn't fire if the bus has already been double clicked on?
// ??????????? How would I limit this alert to only showing one time?
headerImg.addEventListener('mouseout', (event) => {
    alert("Did you try double clicking the bus??")
})

// ??????????? Attempted to console log selected text but couldn't get it to work
// document.addEventListener('select', (event) => {
//     console.log(event.target.value.substring(event.target.selectionStart, event.target.selectionEnd))
// })



















