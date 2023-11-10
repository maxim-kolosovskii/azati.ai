const actualBtn = document.getElementById("form-file");

const fileChosen = document.getElementById("file-chosen");

actualBtn.addEventListener("change", function () {
    fileChosen.textContent = this.files[0].name;
    fileChosen.classList.add("active");
});