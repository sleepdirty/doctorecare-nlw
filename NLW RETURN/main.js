window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
showNavOnScroll()
showBackToTopButtonOnScroll()

activeMenuAtCurrentSection(home)
activeMenuAtCurrentSection(services)
activeMenuAtCurrentSection(about)
activeMenuAtCurrentSection(contact)

}


function activeMenuAtCurrentSection(section) {
//linha alvo
    const targetLine = scrollY + innerHeight / 2

//verificar se a seção passou da linha
//quais dados vou precisar ?
//top da seção
    const sectionTop = section.offsetTop
//a altura da seção 
    const sectionHeight = section.offsetHeight
//o top da seção chegou ou ultrapassou a linha alvo    
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

 
    
const sectionEndsAt = sectionTop + sectionHeight
const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
//limites de seção
const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine 
const sectionId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


menuElement.classList.remove('active')
if (sectionBoundaries) {
    menuElement.classList.add('active')
}

} 

function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll')
    }   else {
        navigation.classList.remove('scroll')
    } 
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 450){
        backToTopButton.classList.add('show')
    }   else {
        backToTopButton.classList.remove('show')
    } 
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, #services header, #services .card,
#about, #about header, about .content `);