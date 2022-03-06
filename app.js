function onSubmit(e) {
    e.preventDefault();
    console.log(e)
    const maleNames = ['Kwasi',' Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    const answer= document.getElementById('dateOfBirth');
    const selectedDate = new Date(answer.value);
    console.log(selectedDate.getFullYear());
    const yy =parseInt(selectedDate.getFullYear().toString().slice(0,1));
    const cc= parseInt(selectedDate.getFullYear().toString().slice(1,2))
    const mm = parseInt(selectedDate.getMonth());
    const dd = parseInt(selectedDate.getDate());
    console.log(yy,cc,mm,dd)
    const male = document.getElementById('male').value;
    const female = document.getElementById('female').value;
    const button = document.getElementById('btn').value;

    const days= (((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
    let day = 0;
    let dayName;
    switch(day) {
        case 0:
            dayName= 'Sunday'
            break;
        case 1:
            dayName= 'Monday'
            break;
        case 2:
            dayName= 'Tuesday'
            break;
        case 3:
            dayName= 'Wednesday'
            break;
        case 4:
            dayName= 'Thursday'
            break;
        case 5:
            dayName= 'Friday'
            break;
        case 6:
            dayName= 'Saturday'
            break;

        default: dayName= 'invalid Day'
            break;
    }
    console.log(dayName)



    function results() {
        if(day===0 && maleNames[0]) {
            console.log(`Your name is ${maleNames[0]}`)
        } else if (day===0 && femaleNames[0]){
            console.log(`Your name is ${femaleNames[0]}`)
        } else if (day===1 && maleNames[1]){
            console.log(`Your name is ${maleNames[1]}`)
        } else if (day===1 && femaleNames[1]){
            console.log(`Your name is ${femaleNames[1]}`)
        } else if (day===2 && maleNames[2]){
            console.log(`Your name is ${maleNames[2]}`)
        } else if (day===2 && femaleNames[2]){
            console.log(`Your name is ${femaleNames[2]}`)
        } else if (day===3 && maleNames[3]){
            console.log(`Your name is ${maleNames[3]}`)
        } else if (day===3 && femaleNames[3]){
            console.log(`Your name is ${femaleNames[3]}`);    
        }  else if (day===4 && maleNames[4]){
            console.log(`Your name is ${maleNames[4]}`);  
        }  else if (day===4 && femaleNames[4]){
            console.log(`Your name is ${femaleNames[4]}`); 
        }  else if (day===5 && maleNames[5]){
            console.log(`Your name is ${maleNames[5]}`);
        }  else if (day===5 && femaleNames[5]){
            console.log(`Your name is ${femaleNames[5]}`);  
        }  else if (day===6 && maleNames[6]){
            console.log(`Your name is ${maleNames[6]}`);   
        }  else if (day===6 && femaleNames[6]){
            console.log(`Your name is ${femaleNames[6]}`);       

    }}
    results()
}
document.getElementById('btn').addEventListener('click', onSubmit);
// window.addEventListener("load", function() {
// const form = document.getElementById('btn');
// console.log(form)
//     form.addEventListener('submit', onSubmit);
// });


//switch

//const result = "Your name is "









//button.addEventListener('click', function(){
  //  console.log(this);
//}.bind(result));



//myButton.addEventListener('click', function () {
  //console.log(this); // Expected Value: 'Data'
//}.bind(someString));

//



    


