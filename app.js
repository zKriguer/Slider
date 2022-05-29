let image = document.getElementById('image')
let bio = document.getElementById('bio')
let nome = document.getElementById('name')
let degree = document.getElementById('degree')
let buttonright = document.getElementById('right')
let buttonleft = document.getElementById('left')
let atualPage = 0
let awaitAnimation = false


buttonright.addEventListener('click', slideright)

let array = [{
    image: '/images/image-tanya.jpg',
    bio: ' I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
    name: 'Tanya Sinclair',
    degree: 'UX Engineer'
},
{
    image: '/images/image-john.jpg',
    bio: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'John Tarkpor',
    degree: 'Junior Front-end Developer'
}
]

function slideright() {
    if (awaitAnimation) return
    image.className = 'animate-right'
    atualPage++
    let index = array[Math.abs(atualPage) % array.length]
    image.src = index.image
    nome.innerText = index.name
    bio.innerText = index.bio
    degree.innerText = index.degree
    awaitAnimation = true
    setTimeout(() => {
        image.className = ''
        awaitAnimation = false
    }, 2000)
}
buttonleft.addEventListener('click', sliderleft)

function sliderleft() {
    if (awaitAnimation) return
    image.className = 'animate-left'
    atualPage--
    let index = array[Math.abs(atualPage) % array.length]
    image.src = index.image
    nome.innerText = index.name
    bio.innerText = index.bio
    degree.innerText = index.degree
    awaitAnimation = true
    setTimeout(() => {
        image.className = ''
        awaitAnimation = false
    }, 2000)
}