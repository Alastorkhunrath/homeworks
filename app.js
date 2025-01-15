function generatedRandomNumber(){
    const min = 1
    const max = 100

    // Проверяем что введены коректные значения
    if (isNaN(min) || isNaN(max)){
        console.log('введите корректные данные')
        return;
    }

    if (min>=max){
        console.log('минимальное значение должно быть мменьше максимального')
        return
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

    console.log(`случайное число ${randomNumber}`)
    return randomNumber

}

const randomNum = generatedRandomNumber()

const oneComputer = 1
const twoComputer = 2

let left = 1
let right = 100
while (true){
    let maybeNum = Math.floor((right + left) / 2)
    console.log(`${oneComputer} компютер: ваше число ${maybeNum}?`)
    if (randomNum===maybeNum){
        
        console.log(`${twoComputer} компютер: да`)
        console.log(`${oneComputer} компютер: ура я угадал`)
        break
    } else if (randomNum<maybeNum){
       
        console.log(`${twoComputer} компютер: нет оно меньше ${maybeNum}`)
        right = maybeNum - 1 

    } else if (randomNum>maybeNum) {
     
        console.log(`${twoComputer} компютер: нет оно больше ${maybeNum}`)
        left =maybeNum + 1
    }
    
}