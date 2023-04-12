// Переменные содержащие значение фильтров
const grayscale = document.querySelector('#grayscale')
const contrast = document.querySelector('#contrast')
const brightness = document.querySelector('#brightness')
const sepia = document.querySelector('#sepia')
const saturate = document.querySelector('#saturate')
const imgUrl = document.querySelector('#img-url')

// Переменная содержащая доступ к картинке
const image = document.querySelector('#image') 

// Переменная которая содержит доступ к кнопке
const reset = document.querySelector('#reset')

// Объект в котором хранятся изначальные значения фильтров
const zeroPoints = {
  grayscale: 0,
  contrast: 100,
  brightness: 100,
  sepia: 0,
  saturate: 100
}

// Слушатели событий, которые отвечают за изменение фильтров слайдера
grayscale.addEventListener('input', updateFilterValue)
contrast.addEventListener('input', updateFilterValue)
brightness.addEventListener('input', updateFilterValue)
sepia.addEventListener('input', updateFilterValue)
saturate.addEventListener('input', updateFilterValue)

// Слушатель событий, который отвечает за сброс значений фильтров слайдера
reset.addEventListener('click', resetFilterValue)

// Слушатель событий, который отвечает за смену url картинки
imgUrl.addEventListener('change', updateImageUrl)

// Функция динамического обновления фильтров
function updateFilterValue () {
  reset.disabled = false
image.style.filter = `
grayscale(${grayscale.value}%)
contrast(${contrast.value}%)
brightness(${brightness.value}%)
sepia(${sepia.value}%)
saturate(${saturate.value}%)
`
}

// Функция которая по нажатию кнопки сбрасывает занчение фильтров к исходным значениям

function resetFilterValue () {
  //console.log('click')
  image.style.filter = `
  grayscale(${zeroPoints.grayscale}%)
  contrast(${zeroPoints.contrast}%)
  brightness(${zeroPoints.brightness}%)
  sepia(${zeroPoints.sepia}%)
  saturate(${zeroPoints.saturate}%)
  `

  grayscale.value = zeroPoints.grayscale
  contrast.value = zeroPoints.contrast
  brightness.value = zeroPoints.brightness
  sepia.value = zeroPoints.sepia
  saturate.value = zeroPoints.saturate

  reset.disabled = true
}

// Функция которая позволяет поменять картинку 

function updateImageUrl() {
  const nextPath = imgUrl.value
  image.setAttribute('src', nextPath) 
}