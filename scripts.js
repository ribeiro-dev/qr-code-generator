const btnGenerate = document.querySelector('.btn-generate')
const input = document.querySelector('.input')
const resultDiv = document.querySelector('.result')
const resultImg = document.querySelector('.qr-code')

const imgSize = '200x200'
const baseURL = `https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}`


btnGenerate.addEventListener('click', async (event) => {
    event.preventDefault()
    const URL = baseURL + `&data=${input.value}`
    
    try {
        const response = await fetch(URL)

        if (response.ok) {
            resultImg.src = response.url
            return
        }
        throw new Error('Error while fetching')

    } catch (error) {
        resultDiv.innerHTML = "Infelizmente ocorreu um erro :("
    }

})