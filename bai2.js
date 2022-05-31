const num= prompt();
var s="";

function numberOneTriangle()
{
    for(let i=1; i<=num; i++)
    {
        s+="*";
        console.log(s);
    }
}

numberOneTriangle(num);