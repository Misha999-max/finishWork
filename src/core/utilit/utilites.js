export const getRandomColor = () => {
    const colorArray = ['#405cf5','#787878','red','black','skyblue','green']
    const rand = Math.floor(Math.random()*colorArray.length);
    const rValue = colorArray[rand];
    return rValue
  }

  