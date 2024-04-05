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

dark = false
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    if (dark == false) {
        var sections = document.getElementsByClassName('section');
        var seclen = sections.length;
        for(var i = 0; i <= seclen; i++) {
            sections[i].className = "sectiongray";
        }
        dark = true
    } else {
        var sectionsdark = document.getElementsByClassName('sectiongray');
        var seclendark = sectionsdark.length;
        for(var i = 0; i <= seclendark; i++) {
            sectionsdark[i].className = "section";
        }
        dark = false
    }
});
