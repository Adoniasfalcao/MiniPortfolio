const modal_overlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card_resumo')

document.querySelector('.material-icons').addEventListener('click', function () {

    modal_overlay.classList.remove('active')
    modal_overlay.querySelector('iframe').src = ""
    
})

for (let card of cards) {

    card.addEventListener("click",function () {

        const videoId = card.getAttribute("id")
        document.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
        modal_overlay.classList.add("active")
    })
    
}



