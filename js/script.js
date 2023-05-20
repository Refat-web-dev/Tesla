let distance = document.querySelector(".distance span")
let speed = document.querySelector(".speed span")
let speedTop = document.querySelector(".speed .top")
let speedBottom = document.querySelector(".speed .bottom")
let wheels = document.querySelectorAll(".wheel")
let litle_price = document.querySelector("#litle_price")
let total = 0
let i = +distance.innerHTML
let k = +speed.innerHTML
speedTop.onclick = () => {
    distance.innerHTML = i -= 5
    speed.innerHTML = k += 5
    if (i < 0) {
        distance.innerHTML = i += 5
        speed.innerHTML = k -= 5
    }
    wheels.forEach(w => {
        if (i === 0) {
            w.style.animation = "spin 0"
        }
        if (k > 0) {
            w.style.animation = "spin 15s linear infinite"
        }
        if (k > 115) {
            w.style.animation = "spin 10s linear infinite"
        }
        if (k > 145) {
            w.style.animation = "spin 5s linear infinite"
        }
        if (k > 195) {
            w.style.animation = "spin 1s linear infinite"
        }

    })
}

speedBottom.onclick = () => {
    distance.innerHTML = i += 5
    speed.innerHTML = k -= 5
    if (k < 0) {
        distance.innerHTML = i -= 5
        speed.innerHTML = k += 5
    }
    wheels.forEach(w => {
        if (k < 200) {
            w.style.animation = "spin 5s linear infinite"
        }
        if (k < 150) {
            w.style.animation = "spin 10s linear infinite"
        }
        if (k < 120) {
            w.style.animation = "spin 15s linear infinite"
        }
        if (k === 0) {
            w.style.animation = "spin 0"
        }
    })
}
let temp = document.querySelector(".temp span")
let cond = document.querySelector(".cond h3")
let tempTop = document.querySelector(".temp .top")
let tempBottom = document.querySelector(".temp .bottom")
let condRegulate = document.querySelector(".cond button")

condRegulate.onclick = () => {
    if (condRegulate.classList.contains('off')) {
        condRegulate.classList.remove("off")
        condRegulate.classList.add("on")
        distance.innerHTML = i -= 10
    } else {
        condRegulate.classList.add("off")
        condRegulate.classList.remove("on")
        distance.innerHTML = i += 10
    }
}

let t = +temp.innerHTML

tempTop.onclick = () => {
    temp.innerHTML = t += 1
    if (t >= 11) {
        cond.innerHTML = "Кондиционер"
    }
}

tempBottom.onclick = () => {
    temp.innerHTML = t -= 1
    if (t <= 10) {
        cond.innerHTML = "Печка"
    }
}

let rims = document.querySelector(".wheels p")
let rimsTop = document.querySelector(".wheels .top")
let rimsBottom = document.querySelector(".wheels .bottom")
let price = document.querySelector(".price span")
let newPrice = parseFloat(price.innerHTML)
total += newPrice
price.innerHTML = total.toLocaleString("uz-Uz")
litle_price.innerHTML = total.toLocaleString("uz-Uz")

let rimsPrice = 2000
let r = +rims.innerHTML + 1
console.log(newPrice);
rimsTop.onclick = () => {
    total += rimsPrice
    price.innerHTML = total.toLocaleString("uz-Uz")
    litle_price.innerHTML = total.toLocaleString("uz-Uz")

    rims.innerHTML = r + 1
    if (rims.innerHTML > 20) {
        total -= rimsPrice
    }
    wheels.forEach(w => {
        w.style.width = "50px"
        w.style.heigth = "50px"
    })

}

rimsBottom.onclick = () => {
    total = total

    price.innerHTML = total.toLocaleString("uz-Uz")
    litle_price.innerHTML = total.toLocaleString("uz-Uz")

    rims.innerHTML = r - 1

    wheels.forEach(w => {
        w.style.width = "45px"
        w.style.heigth = "45px"
    })
}

let range = document.querySelector(".range button")
let rangePrice = 50000
range.onclick = () => {
    if (range.classList.contains('off')) {
        range.classList.remove("off")
        range.classList.add("on")
        total += rangePrice
        price.innerHTML = total.toLocaleString("uz-Uz")
        litle_price.innerHTML = total.toLocaleString("uz-Uz")
    } else {
        range.classList.add("off")
        range.classList.remove("on")
        total -= rangePrice
        price.innerHTML = total.toLocaleString("uz-Uz")
        litle_price.innerHTML = total.toLocaleString("uz-Uz")

    }
}

let open = document.querySelectorAll(".open")
let modal = document.querySelector(".modal")
let autos = document.querySelectorAll(".auto")
// let autoSecond = document.querySelector(".modal .auto")

let views = document.querySelectorAll(".view button")
open.forEach(btn => {
    btn.onclick = () => {
        views.forEach(view => {
            if (view.classList.contains('on')) {
                view.classList.remove("on")
                view.classList.add("off")
                modal.style.display = "flex"
                autos.forEach(auto => {
                    auto.style.scale = "20"
                })
                setTimeout(() => {
                    autos.forEach(auto => {
                        auto.style.scale = "1"
                    })
                    modal.style.opacity = "1"
                }, 400);
            } else {
                autos.forEach(auto => {
                    auto.style.scale = "20"
                })
                setTimeout(() => {
                    autos.forEach(auto => {
                        auto.style.scale = "1"
                    })
                    modal.style.opacity = "0"
                    modal.style.display = "none"
                }, 400); view.classList.add("on")
                view.classList.remove("off")

            }
        })
    }
})


const colors_btns = document.querySelectorAll(".select button")
const autoImg = document.querySelector(".modal .auto")
const salons = {
    black: "../img/black.jpg",
    silver: "../img/silwer.jpg",
    gold: "../img/gold.jpg"
}
const salonPrices = {
    black: 0,
    silver: 10000,
    gold: 20000
}

colors_btns.forEach(btn => {
    let key = btn.getAttribute('data-color')
    btn.onclick = () => {
        autoImg.style.backgroundImage = `url(${salons[key]})`
        litle_price.innerHTML = (total + salonPrices[key]).toLocaleString("uz-Uz")
        price.innerHTML = (total + salonPrices[key]).toLocaleString("uz-Uz")
    }
})