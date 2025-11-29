let header = document.querySelector("h1");
let text = header.innerHTML;
let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let b = a.split("");
let or = text.split("");

let i = 0;

function hello() {
        let result = or.map(function (char, index) {
                if (index < i) {
                        return char
                }
                return b[Math.floor(Math.random() * b.length)]
        })

        header.innerHTML = result.join("")

        i = i + 0.3


}

header.addEventListener("mouseenter", function () {

        setInterval(function () {
                hello()
        }, 40)
})








