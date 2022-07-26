let url = 'http://localhost:3000/tours'
let container = document.querySelector('.main__screen__one-card__container')
axios.get(url)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            console.log(res);
            reload(res.data, container)
        }
    })
function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let card = document.createElement('div')
        let travelType = document.createElement('div')
        let tour = document.createElement('span')
        let cardTitle = document.createElement('h4')
        let costs = document.createElement('p')
        let clockIcon = document.createElement('img')
        let clockTime = document.createElement('span')
        let moneyIcon = document.createElement('img')
        let currency = document.createElement('span')
        let travelTypeDescription = document.createElement('div')
        let descriptionInfo = document.createElement('p')
        let link = document.createElement('a')
        let btn = document.createElement('button')
        card.classList.add('screen__one-card')
        travelType.classList.add('travel-type')
        tour.innerHTML = item.tour
        cardTitle.innerHTML = item.title
        travelTypeDescription.classList.add('travel-type-description')
        descriptionInfo.innerHTML = item.description
        clockIcon.src = './assets/svg/clock.svg'
        clockTime.innerHTML = 'item.time'
        moneyIcon.src = './assets/svg/money.svg'
        currency.innerHTML = item.amount
        link.href = '#'
        btn.innerHTML = 'Подробнее'
        card.style.backgroundImage = `url(${item.src})`
        btn.classList.add('main__travel-button')
        btn.classList.add('elem-director')
        link.append(btn)
        travelTypeDescription.append(descriptionInfo)
        travelType.append(tour, cardTitle, costs)
        costs.append(clockIcon, clockTime, moneyIcon, currency)
        card.append(travelType, travelTypeDescription)
        place.append(card)
    }
}