const cards = document.querySelectorAll('.card')

for (let card of cards) {

    card.addEventListener("click",function () {

        const videoId = card.getAttribute("id")
        window.open(`${videoId}`)
    })
}



