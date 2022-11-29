// https://myfakeapi.com/api/cars/





async function main() {
        const cars = await fetch("https://myfakeapi.com/api/cars/")
        const carsData = await cars.json()
        const carListEl = document.querySelector(".car__list")
        console.log(carsData)
        carListEl.innerHTML = carsData.cars.slice(0,16)
         .map(
            (car) => `<div class="car-card__container">
            <img class="car-card__img"src="/assets/car.png" alt="">
            <h3 class="car__desc car__header">${car.car}</h3>
            <p class="car__desc car__info"><b>${car.car_model}</b></p>
            <p class="car__desc car__info"><b>${car.car_color}</b></p>
            <p class="car__desc car__info"><b>${car.car_model_year}</b></p>
            <p class="car__desc car__price"><b>Price": ${car.price}</b></p>
            <button class="car__desc car__desc--button">Save</button>

        </div>`
         ) .join('')

}


main()
