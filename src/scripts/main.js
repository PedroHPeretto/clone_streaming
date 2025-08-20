document.addEventListener('DOMContentLoaded', function() {
    // header

    const heroSection = document.querySelector('.hero')
    const heroHeight = heroSection.clientHeight
    const headerButton = document.querySelector('.header__button__1')
    const h1Logo = document.querySelector('.header__logo')
    const header = document.querySelector('.header')

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY

        if (scrollPosition > heroHeight) {
            header.classList.remove('header--is-hidden')
            headerButton.classList.remove('hidden')
            h1Logo.classList.remove('hidden')
        } else {
            header.classList.add('header--is-hidden')
            headerButton.classList.add('hidden')
            h1Logo.classList.add('hidden')
        }
    })

    // section shows

    const showsButtons = document.querySelectorAll('[data-tab-button]')
    const showsLists = document.querySelectorAll('[data-tab-id]')

    showsButtons.forEach(showsButton => {
        showsButton.addEventListener('click', function(event) {
            let activeButton = event.target
            const targetTab = showsButton.getAttribute('data-tab-button')

            showsButtons.forEach(btn => btn.classList.remove('shows__tabs__button--is--active'))

            showsLists.forEach(list => list.classList.remove('shows__list--is--active'))

            const targetList = document.querySelector(`[data-tab-id="${targetTab}"]`)
            targetList.classList.add('shows__list--is--active')
            activeButton.classList.add('shows__tabs__button--is--active')
        })
    })

    // section faq

    const faqButtons = document.querySelectorAll('[faq-button]')

    faqButtons.forEach(faqButton => {
        faqButton.addEventListener('click', function(event) {
            let activeButton = event.target
            let buttonValue = activeButton.getAttribute('faq-button')

            if (activeButton.textContent === '+') {
                activeButton.textContent = '-'
            } else {
                activeButton.textContent = '+'
            }
            
            let activeAnswer = document.getElementById(buttonValue)
            activeAnswer.classList.toggle('faq__list__item__answer--is-open')
        })
    })
})