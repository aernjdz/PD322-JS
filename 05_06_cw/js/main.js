var btn = document.querySelector("#add");
const images = document.getElementById("images");
const image_url = document.getElementById("image_url");
btn.addEventListener("click", function () {
    const url = image_url.value;
    images.innerHTML += `<img src="${url}" />`;
    //console.log("Кнопка нажата!!!", );
});