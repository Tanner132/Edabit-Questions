
// question 1.

function largestSwap(num) {
    let reverseN = num.toString().split("").reverse().join("")
        if (reverseN > num){
            return false;
        } else if (reverseN <= num){
            return true;
        }
    }

//question 2

const isSpecialArray = a => a.every((v, i) => v%2 == i%2);

//question 3

function formatNum(num) {
	return num.toLocaleString()
}