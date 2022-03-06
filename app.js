let computedName= ""
function onSubmit(e) {
    e.preventDefault();
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
    console.log(male,female)

    const day= (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    switch(Math.floor(day)) {
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
    console.log(Math.floor(day));

    function results() {
        if(day===0 && gender == "male") {
            console.log(`Your name is ${maleNames[0]}`);
             computedName= maleNames[0];
        } else if (day===0 &&  gender == "female"{
            console.log(`Your name is ${femaleNames[0]}`)
            computedName= femaleNames[0];
        } else if (day===1 &&  gender == "male"){
            console.log(`Your name is ${maleNames[1]}`)
            computedName= maleNames[1];
        } else if (day===1 && gender == "female"{
            console.log(`Your name is ${femaleNames[1]}`)
            computedName= femaleNames[1];
        } else if (day===2 && gender == "male"){
            console.log(`Your name is ${maleNames[2]}`)
            computedName= maleNames[2];
        } else if (day===2 && gender == "female"){
            console.log(`Your name is ${femaleNames[2]}`)
            computedName= femaleNames[2];
        } else if (day===3 && gender == "male"){
            console.log(`Your name is ${maleNames[3]}`)
            computedName= maleNames[3];
        } else if (day===3 && gender == "female"){
            console.log(`Your name is ${femaleNames[3]}`);   
            computedName= maleNames[3];
        }  else if (day===4 && gender == "male"){
            console.log(`Your name is ${maleNames[4]}`);  
            computedName= maleNames[4];
        }  else if (day===4 && gender == "female"){
            console.log(`Your name is ${femaleNames[4]}`); 
            computedName= maleNames[4];
        }  else if (day===5 && gender == "male"){
            console.log(`Your name is ${maleNames[5]}`);
            computedName= maleNames[5];
        }  else if (day===5 && gender == "female"){
            console.log(`Your name is ${femaleNames[5]}`); 
            computedName= femaleNames[5]; 
        }  else if (day===6 && gender == "male"){
            console.log(`Your name is ${maleNames[6]}`); 
            computedName= maleNames[6];  
        }  else if (day===6 && gender == "female"){
            console.log(`Your name is ${femaleNames[6]}`); 
            computedName= femaleNames[6] 

    }}
    }
    results()
}

document.getElementById('btn').addEventListener('click', onSubmit);
if(computedName != ""){
    document.getElementById("reveal-result").innerHTML = "Your akan name is " + computedName + "!"; 
} 
document.getElementById("myForm").reset();
















    


