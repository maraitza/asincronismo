function sum(num1,num2) {
    return num1 + num2 ;
}

function resultado(num1,num2,callback) {
    return callback(num1,num2);
}

console.log(resultado(2,6,sum));

function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);