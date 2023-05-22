const timeoutWithPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sucesso")
        }, 3000)
    })
}

console.log("antes")

const asyncTimeout = async () => {
    try {
        await findUserNovo()
        const teste1 = await timeoutWithPromise()
        console.log("findUser")    
    } catch (error) {
        console.log(error)
    }
    
}

async function findUserName() {
    try {
        const result = await timeoutWithPromise()
    } catch (error) {
        console.log(error)
    }
}
