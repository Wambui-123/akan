function onSubmit(e) {
    e.preventDefault();
    // Getting required values
    const dateOfBirth = e.target["dateOfBirth"].value;
    const gender = e.target["gender"].value;

    const maleNames = ['Kwasi',' Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    const [year, mm, dd] = dateOfBirth.split("-");

    // Getting integer equivalents
    const int_mm = parseInt(mm);
    const int_dd = parseInt(dd);

    // Making sure user has entered a correct date format
    if (year.length <= 4 && int_mm <= 12 && int_mm > 0 && int_dd >= 0) {
        const cc = year.slice(0, 2);
        const int_cc = parseInt(cc);
        const yy = year.slice(2, 4);
        const int_yy = parseInt(yy);

        // Calculating the day of the week
        const dayOfTheWeek = Math.round((((int_cc / 4) - 2 * int_cc - 1) + ((5 * int_yy) / 4) + ((26 * (int_mm + 1) / 10)) + int_dd) % 7);

        let dayName;
        switch(dayOfTheWeek) {
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
            default: 
                dayName= 'Saturday'
                break;
        }

        // Targeting the DOM element to display our reslut
        const resultsBox = document.getElementById("reveal-result");

        if(dayName === "Monday" && gender == "male") {
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[0]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[0]}`;
            }
            
        } else if (dayName === "Tuesday" &&  gender == "female"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[1]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[1]}`;
            }
            
        } else if (dayName === "Wednesday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[2]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[2]}`;
            }
        } else if (dayName === "Thursday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[3]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[3]}`;
            }
        } else if (dayName === "Friday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[4]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[4]}`;
            }
        } else if (dayName === "Saturday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[5]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[5]}`;
            }
        } else{
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[6]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[6]}`;
            }
        } 
    } else{
        alert("Please make sure you input the correct date values")
    }
}

// Listening submit event for when the user sumbits details
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", onSubmit);
















    


