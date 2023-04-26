const btnGenerate = document.querySelector('.btn-generate')
const input = document.querySelector('.input')
const resultDiv = document.querySelector('.result')
const resultAlert = document.querySelector('.alerts-wrapper')
const resultImg = document.querySelector('.qr-code')
const loadingImg = document.querySelector('.loading')
const form = document.forms.urlText

const imgSize = '200x200'
const baseURL = `https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}`



form.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    loadingImg.style.display = 'inline'

    const inputValue = input.value.trim()
    const URL = baseURL + `&data=${inputValue}`

    // resets the contents every submit
    resultAlert.innerHTML = ''
    resultImg.src = ''
    
    try {
        const response = await fetch(URL)
        loadingImg.style.display = 'none'

        if (response.ok) {
            resultAlert.innerHTML = `<p class="alert alert-success d-inline-flex">Sucesso!</p>`
            resultImg.src = response.url

            return
        }
        throw new Error('Error while fetching')

    } catch (error) {
        resultAlert.innerHTML = `<p class="alert alert-danger d-inline-flex">Infelizmente ocorreu um erro :(</p>`
        console.log(error)
    }
})