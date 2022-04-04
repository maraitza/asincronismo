const somethingwillhappend = () => {
    return new Promise((resolve,reject)=> {
       if (true) {
           resolve('HEYYY');
       } else {
           reject('oopppsss');
       }
    });
};

somethingwillhappend()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingwillhappend2 = () => {
    return new Promise((resolve,reject)=> {
        if (true) {
            setTimeout(() => {
                resolve('Hola');
            }, 2000)
        } else {
            const error = new Error('ooppsssss');
            reject(error);
        }
    })
}

somethingwillhappend2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingwillhappend(),somethingwillhappend2()])
    .then(response => console.log(response))
    .catch(err => console.error(err));