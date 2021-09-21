const buttons= document.querySelectorAll('button');
const display=document.querySelector(".display");
const history=document.querySelector(".text");
buttons.forEach(function(button){
    button.addEventListener('click',calculate);
});

function calculate(event){
    const clickedbutton=event.target.value;
    
    if(clickedbutton==="=")
    {   
        history.value+=clickedbutton;
        if(display.value1!=="")
        {
            display.value=eval(display.value);
            history.value+=display.value;
        }
    }
    else if(clickedbutton==='C')
    {
        display.value='';
        history.value+="    "
    }
    else{
        display.value+=clickedbutton;
        history.value+=clickedbutton;
    } 
    
}