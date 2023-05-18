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
        await minhaFuncao()
        const teste1 = await timeoutWithPromise()
        console.log(teste1)    
    } catch (error) {
        console.log(error)
    }
    
}

async function minhaFuncao() {
    try {
        const result = await timeoutWithPromise()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
