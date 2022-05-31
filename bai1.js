function kt_snt(x){
    let kt=true;
    if (x<2){
        kt=false
    }
    else {
        for(let i=2; i<=x-1; i++)
        {
            if (x % i ==0)
            {
                kt=false;
                break;
            }
        }
    } 
    if (kt== true)
    {
        console.log(x);
    }
}

function submitForm(event){ 
    event.preventDefault();
    var ele1 = document.getElementById("num1");
    var ele2 = document.getElementById(`num2`);
    for (let index=ele1.value; index <=ele2.value; index++)
        kt_snt(index);

}



function print()
{
    
}

