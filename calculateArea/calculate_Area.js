let length;
let width;
let amount1;
let amount2;
let amount3;


function calculateArea ()
{
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);
    let area=length * width;
    //return length * width;
    // document.getElementById('result').innerText='the area is', area;
     //document.getElementById('result').innerText='The area of the rectangle is: ${area}';
     document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker ()
{
amount1=parseFloat(document.getElementById('grocery1').value);
amount2=parseFloat(document.getElementById('grocery2').value);
amount3=parseFloat(document.getElementById('grocery3').value);
let rr = amount1 * amount2 *amount3;
document.getElementById('rr').innerText = `The Total amount is :$ ${rr}`;
}
