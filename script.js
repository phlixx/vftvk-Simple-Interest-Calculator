function compute()
{
    const p = document.getElementById("principal").value;
    const r = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const year = new Date().getFullYear();
    const futureYear = Number(years)+Number(year);
    const result = p*(Number(r)/100*Number(years)+1)-p;
    
    var resultElement = document.getElementById("result");

    var resultText = '<br>If you deposit ' + p + ',<br> at an interest rate of ' + r +'%. <br> You will receive an amount of ' + result + ',<br> in the year ' + futureYear;
    resultElement.innerHTML=resultText;
}
function displayRate()
{
    var rateDisplay = document.getElementById("rateDisplay");
    const r = document.getElementById("rate").value;

    rateDisplay.innerHTML = r + "%";

}
        