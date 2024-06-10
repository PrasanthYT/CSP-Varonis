document.addEventListener("DOMContentLoaded", function() {
    console.log('Trusted Script Executed');
    let newElement = document.createElement("p");
    newElement.textContent = "We are from HackerOne @jprasanth"
    document.body.innerHTML += '<p>We are from HackerOne</p>';
})
