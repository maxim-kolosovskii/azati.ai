let tag = document.getElementsByClassName("tag__item");

for (let span of tag) {
    span.addEventListener("click", function() {
        this.classList.toggle("active");
    });
}