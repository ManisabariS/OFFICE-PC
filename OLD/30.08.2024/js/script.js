function greeting(n) {
    let message = n;

    function sayHi() {
        return message;
    }

    return sayHi;
}
let sayHi = greeting('vanakkam');
let msg = sayHi()
console.log(msg);
