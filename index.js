const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

const allFirst = document.querySelectorAll("ul");
allFirst.forEach(ul => {
    const firstLi = ul.firstElementChild;
    if (firstLi) {
        firstLi.style.backgroundColor = "red";
    }
});

