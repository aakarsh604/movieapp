// Store the wallet amount to your local storage with key "amount"

let total = localStorage.getItem("amount") || 0;
document.querySelector("#wallet").innerText = total;
console.log("stored", total)
const addamount = () => {

    let amountvalue = document.querySelector("#amount").value;
    total = Number(total) + Number(amountvalue);
    document.querySelector("#wallet").innerText = total;
    console.log(total)
    localStorage.setItem("amount", total);
}


