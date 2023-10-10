const  days = ['Sun', 'Mon', 'Tue', 'Thu'];
let week = document.querySelector("input");
week.addEventListener("click", showDays);
function showDays(){
    days.push("Fri");
    let inputs = document.querySelectorAll("div");
    for(let i =0;i<inputs.length;i++){
        if(inputs[i]){
        inputs[i].innerHTML = days[i];
        }
    }
}