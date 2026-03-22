document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});

const text = "Full Stack .NET Developer | IT Student ";

let index = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    } else {
        // Remove the cursor after typing finishes
        typingElement.classList.remove("typing-cursor");
    }
}

typeEffect();