const doSomethingAsync= () => {
    return new Promise((resolve,reject) => {
        (true)
        ?setTimeout(()=> resolve("Hecho"),3000)
        : reject (new Error('Error'))
    });
}

const doSomething=async ()=> {
    const something = await doSomethingAsync();
    console.log(something);
}

doSomething();
console.log("Inicio");