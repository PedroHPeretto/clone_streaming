document.addEventListener('DOMContentLoaded', function() {
    const showsButtons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < showsButtons.length; i++) {
        showsButtons[i].addEventListener('click', function(botao) {
            console.log(botao.target)
            let activeButton = botao.target

            function activateButton() {
                showsButtons.forEach(btn => {
                    btn.classList.remove('shows__tabs__button--is--active')
                })

                activeButton.classList.add('shows__tabs__button--is--active')
            }

            activateButton()
        })
    }
})