function copyText(htmlElement) {
    if (!htmlElement) {
        return;
    }
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    inputElement.parentNode.removeChild(inputElement);
}
document.querySelector("#Mail").onclick = function() {
    let mail="ferreyradamian3755@gmail.com"
    copyText(document.querySelector("#Mail"))
    alert("Mail copied to your clipboard")
}    

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    let footer = document.getElementsByClassName("footer");
    let footerg = document.getElementsByClassName("footerg");
    let header = document.getElementsByClassName("header");
    let headerg = document.getElementsByClassName("headerg");
    let sections = document.getElementsByClassName("section");
    let sectionsg = document.getElementsByClassName("sectiongray");
    if (sections.length > 0) {
        for (let i=0; sections.length > i; i) {
            sections[i].className = "sectiongray";
            console.log(i);
        }
        footer[0].className = "footerg";
        header[0].className = "headerg";
    } else {
        for (let i=0; sectionsg.length > i; i) {
            sectionsg[i].className = "section";
            console.log(i);
        }
        footerg[0].className = "footer";
        headerg[0].className = "header";
    }
});

function clear_click() {
    var audio = document.getElementById("clear_click");
    audio.play();
}

function tech_click() {
    var audio = document.getElementById("tech_click");
    audio.play();
}