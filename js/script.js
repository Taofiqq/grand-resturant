// Add Menu Show
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Remove Menu show

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll section active
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

// change bg header 
function scrollHeader(){
    const nav = document.getElementById('header');
    // when scroll is greater than 200 view port
    if(this.scrollY >= 200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// show scroll top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // when scroll is greater than 200 view port
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)


// dark and light theme 
const themeButton  = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun'

// If user selected 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon')

// Get the current theme that user interdace has by validating the dark theme 

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'


// validate if the user previously chose a topic
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
//Activate or deactivate the theme manually woth button
themeButton.addEventListener('click', () => {
    // add or remove the dark /icon theme 
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // save the theme and the current icon that the user chose

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// scroll reveal animation

const sr  = ScrollReveal({
    origin: 'top', 
    distance: '30px',
    duration: 2000, 
    reset: true
});

sr.reveal(`.home_data, .home_img, .about_data, .about_img, .services, .menu_content, .app_data, .contact_data, .contact_butto, .footer_content`, {
    interval:200
});
