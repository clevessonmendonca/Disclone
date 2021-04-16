let minimizar = document.querySelectorAll('.minimizar')

minimizar.forEach(function(min) {
    min.addEventListener('click', event => {
        let canaisItens = document.querySelectorAll('.min')

        canaisItens.forEach(function(mini) {
            if (mini.classList.contains('show')) {
                mini.classList.add('hidde')
                mini.classList.remove('show')

                min.classList.add('girar')
                min.classList.remove('padrao')
            } else {
                mini.classList.add('show')
                mini.classList.remove('hidde')

                min.classList.add('padrao')
                min.classList.remove('girar')
            }
        })
    })
})