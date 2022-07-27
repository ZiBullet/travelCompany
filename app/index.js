let tournaments = [
    {
        "title": "Обзорная по Сочи (из Адлера)",
        "tour": "Автобусный тур",
        "src": "./assets/img/first-card-bg.png",
        "time": "6 часов",
        "amount": "618 ₽",
        "description": "Приглашаем вас на экскурсию 'Обзорная по Большому Сочи': Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева..."
    },
    {
        "title": "Конные прогулки",
        "tour": "Конный тур",
        "src": "./assets/img/second-card-bg.png",
        "time": "1,5 часов",
        "currency": "1 809 ₽",
        "description": "Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..."
    },
    {
        "title": "Пасть дракона",
        "tour": "Квадротур",
        "src": "./assets/img/third-card-bg.png",
        "time": "2,5 часов",
        "currency": "3 515 ₽",
        "description": "Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название).Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи..."
    }
]
let container = document.querySelector('.main__screen__one-card__container')
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
reload(tournaments, container)