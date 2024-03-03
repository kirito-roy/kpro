let num1="",num2,num3;
document.getElementById("b1").onclick=function(){
    num1=num1+"1";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b2").onclick=function(){
    num1=num1+"2";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b3").onclick=function(){
    num1=num1+"3";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b4").onclick=function(){
    num1=num1+"4";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b5").onclick=function(){
    num1=num1+"5";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b6").onclick=function(){
    num1=num1+"6";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b7").onclick=function(){
    num1=num1+"7";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b8").onclick=function(){
    num1=num1+"8";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b9").onclick=function(){
    num1=num1+"9";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("b0").onclick=function(){
    num1=num1+"0";
    
    document.getElementById("div3").textContent=num1;
}
document.getElementById("bADD").onclick=function(){
    num3=Number(num1);
    num1="";
    num2="+";
    document.getElementById("div3").textContent="";
}
document.getElementById("bSUB").onclick=function(){
    num3=Number(num1);
    num1="";
    num2="-";
    document.getElementById("div3").textContent="";
}

document.getElementById("bMUL").onclick=function(){
    num3=Number(num1);
    num1="";
    num2="x";
    document.getElementById("div3").textContent="";
}
document.getElementById("bDIV").onclick=function(){
    num3=Number(num1);
    num1="";
    num2="/";
    document.getElementById("div3").textContent="";
}
document.getElementById("bEQUAL").onclick=function(){
    if (num2==="+"){
        num3=num3+Number(num1);
        num1="";
        
    }else if(num2==="-"){
        num3=num3-Number(num1);
        num1="";
    }else if(num2==="x"){
        num3=num3*Number(num1);
        num1="";
    }else if(num2==="/"){
        num3=num3/Number(num1);
        num1="";
    }
    document.getElementById("div3").textContent=num3;
    num3=0;
}
document.getElementById("bAC").onclick=function(){
    
    num1="";
    
    document.getElementById("div3").textContent="";
}
document.getElementById("bBS").onclick=function(){
    num1=Number(num1);
    num1=Math.floor(num1/10);
    num1=String(num1)
    
    document.getElementById("div3").textContent=num1;
}