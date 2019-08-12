
function songuyento() {
    let numbers = parseInt(document.getElementById("num1").value);
    let count = 0;
    let result = "";
    let N = 2;
    while (count < numbers) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (N % i == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            result += "" + N;
            count ++;
        }
        N++;
    }
   document.getElementById("result").innerHTML += result;
}