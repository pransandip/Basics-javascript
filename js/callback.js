// (function person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++;
//     }, 1000);
// console.log(age);
// })();

(function () {
    var a = 0;
    setInterval(() => {
        a++;
        document.getElementById('root').innerHTML = `&#12851${a};`;
    }, 1000);
})();


