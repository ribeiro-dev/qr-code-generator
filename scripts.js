const btnGenerate = document.querySelector('.btn-generate')
const input = document.querySelector('.input')
const resultDiv = document.querySelector('.result')
const resultAlert = document.querySelector('.alerts-wrapper')
const resultImg = document.querySelector('.qr-code')
const form = document.forms.urlText

const imgSize = '200x200'
const baseURL = `https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}`



form.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const inputValue = input.value.trim()

    const URL = baseURL + `&data=${inputValue}`

    resultAlert.innerHTML = ''
    resultImg.src = ''

    resultImg.src = 'imgs/reload.png'
    resultImg.classList.toggle('loading')
    
    try {
        const response = await fetch(URL)

        if (response.ok) {
            resultAlert.innerHTML = `<p class="alert alert-success d-inline-flex">Sucesso!</p>`

            resultImg.src = response.url
            resultImg.classList.toggle('loading')

            return
        }
        throw new Error('Error while fetching')

    } catch (error) {
        resultAlert.innerHTML = `<p class="alert alert-danger d-inline-flex">Infelizmente ocorreu um erro :(</p>`
        resultImg.classList.toggle('loading')
        resultImg.src = ''

        console.log(error)
    }

})