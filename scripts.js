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
    var sections = document.getElementsByClassName('section');
    var seclen = sections.length;
    console.log(seclen);
    console.log(sections[0]);
    console.log(sections[1]);
    console.log(sections[2]);
    for(var i = 0; i <= seclen-1; i++) {
        sections[i].className = "sectiongray";
        console.log(i)
    }
});
