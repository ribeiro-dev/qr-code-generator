const btnGenerate = document.querySelector('.btn-generate')
const input = document.querySelector('.input')
const resultDiv = document.querySelector('.result')
const resultAlert = document.querySelector('.alert')
const resultImg = document.querySelector('.qr-code')

const imgSize = '200x200'
const baseURL = `https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}`



btnGenerate.addEventListener('click', async (event) => {
    event.preventDefault()
    const URL = baseURL + `&data=${input.value}`

    const alertIsNotVisible = resultAlert.classList.contains('d-none')

    if (!alertIsNotVisible) {
        resultAlert.classList.add('d-none')
        resultAlert.classList.remove('d-inline-flex')
    }

    resultImg.src = ''

    try {
        const response = await fetch(URL)

        if (response.ok) {
            resultAlert.classList.toggle('d-inline-flex')
            resultAlert.classList.toggle('d-none')

            resultImg.src = response.url

            return
        }
        throw new Error('Error while fetching')

    } catch (error) {
        resultDiv.innerHTML = "Infelizmente ocorreu um erro :("
        console.log(error)
    }

})