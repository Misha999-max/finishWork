 import {getRandomColor} from './core/utilit/utilites'
 
 
 const initApp = () => {
    const changeColorButton = document.createElement('button')
    changeColorButton.textContent = 'Изменить цвет страницы'
    changeColorButton.className = 'button'
    document.body.append(changeColorButton)

    changeColorButton.addEventListener('click', ()=> {
      const bgColorBody = getRandomColor()
      document.body.style.background = bgColorBody
      console.log(bgColorBody)
    })

}
export default initApp