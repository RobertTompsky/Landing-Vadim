const images = [{
    url: "'../slider_img/Rostov-on-Don, Admiral.png'",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don<br> LCD admiral",
    area: "81 m2",
    time: "3.5 months"
}, {
    url: "'../slider_img/Sochi Thieves.png'",
    title: "Sochi Thieves",
    city: "Sochi<br> Thieves",
    area: "105 m2",
    time: "4 months"
}, {
    url: "'../slider_img/Rostov-on-Don Patriotic.png'",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br> Patriotic",
    area: "93 m2",
    time: "3 months"
}];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".section2-container-slider-images");
    let sliderArrows = document.querySelector(".section2-container-slider-nav");
    let sliderDots = document.querySelector(".slider-dots");
    let sliderTitles = document.querySelector(".section2-container-slider-titles");
    let sliderCity = document.querySelector(".section2-container-left-city");
    let sliderArea = document.querySelector(".section2-container-left-area");
    let sliderTime = document.querySelector(".section2-container-left-time");

    sliderActive();

    sliderArrow();

    function sliderActive() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="slider-image n${index} ${index === 0 ? "slider-image-active" : ""}" style="background-image: url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;

            let dotsDiv = `<div class="slider-dot-item n${index} ${index === 0 ? "slider-dot-active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dotsDiv;

            sliderDots.querySelectorAll(".slider-dot-item").forEach(dot => {
                dot.addEventListener("click", function() {
                    moveSlider(this.dataset.index);
                })
            })

            let titlesDiv = `<div class="section2-container-slider-title n${index} ${index === 0 ? "section2-container-slider-title-active" : ""}" data-index="${index}">${images[index].title}</div>`;
            sliderTitles.innerHTML += titlesDiv;

            sliderTitles.querySelectorAll(".section2-container-slider-title").forEach(title => {
                title.addEventListener("click", function() {
                    moveSlider(this.dataset.index);
                })
            })

            let cityDiv = `<p class="section2-container-left-p-text n${index} ${index === 0 ? "section2-container-left-p-active" : ""}" data-index="${index}">${images[index].city}</p>`;
            sliderCity.innerHTML += cityDiv;

            let areaDiv = `<p class="section2-container-left-p-text n${index} ${index === 0 ? "section2-container-left-p-active" : ""}" data-index="${index}">${images[index].area}</p>`;
            sliderArea.innerHTML += areaDiv;

            let timeDiv = `<p class="section2-container-left-p-text n${index} ${index === 0 ? "section2-container-left-p-active" : ""}" data-index="${index}">${images[index].time}</p>`;
            sliderTime.innerHTML += timeDiv;
        })
    }

    function sliderArrow() {
        sliderArrows.querySelectorAll(".slider-arrow").forEach(arrow => {
            arrow.addEventListener("click", function () {
                let currentNumber = +sliderImages.querySelector(".slider-image-active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = currentNumber === 0 ? images.length - 1 : currentNumber - 1;
                } else {
                    nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
                }
                moveSlider(nextNumber);
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector(".slider-image-active").classList.remove("slider-image-active");
        sliderImages.querySelector(".n" + num).classList.add("slider-image-active");
        sliderDots.querySelector(".slider-dot-active").classList.remove("slider-dot-active");
        sliderDots.querySelector(".n" + num).classList.add("slider-dot-active");
        sliderTitles.querySelector(".section2-container-slider-title-active").classList.remove("section2-container-slider-title-active");
        sliderTitles.querySelector(".n" + num).classList.add("section2-container-slider-title-active");
        sliderCity.querySelector(".section2-container-left-p-active").classList.remove("section2-container-left-p-active");
        sliderCity.querySelector(".n" + num).classList.add("section2-container-left-p-active");
        sliderArea.querySelector(".section2-container-left-p-active").classList.remove("section2-container-left-p-active");
        sliderArea.querySelector(".n" + num).classList.add("section2-container-left-p-active");
        sliderTime.querySelector(".section2-container-left-p-active").classList.remove("section2-container-left-p-active");
        sliderTime.querySelector(".n" + num).classList.add("section2-container-left-p-active");
    
    }    

}

document.addEventListener("DOMContentLoaded", initSlider);
console.log("ЕЕЕ")