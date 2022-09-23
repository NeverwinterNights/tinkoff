export const randomCardNumber = () => {
    let cardNumber: string = ""

    for (let i = 0; i < 4; i++) {

        const randomFourNumber: number = Math.round(1000 + Math.random() * 9000)
        if (i!==0) cardNumber += " "
            cardNumber += randomFourNumber
    }

    return cardNumber
}



