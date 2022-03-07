// Formula given wasn't working properly so I used this one
function dayofweek(d, m, y)
{
    let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    y -= (m < 3) ? 1 : 0;
    return ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7;
};

function onSubmit(e) {
    e.preventDefault();
    // Getting required values
    const yearOfBirth = e.target["yearOfBirth"].value;
    const monthOfBirth = e.target["monthOfBirth"].value;
    const dateOfBirth = e.target["dateOfBirth"].value;
    const gender = e.target["gender"].value;

    const maleNames = ['Kwasi',' Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

    // Getting integer equivalents
    const int_mm = parseInt(monthOfBirth);
    const int_dd = parseInt(dateOfBirth);
    const int_year = parseInt(yearOfBirth);

    // Making sure user has entered a correct date format
    if (yearOfBirth.length <= 4 && int_mm <= 12 && int_mm > 0 && int_dd >= 0 && int_dd <= 31) {

        // Calculating the day of the week
        const dayOfTheWeek = Math.floor(dayofweek(int_dd, int_mm, int_year));;

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

        if(dayName === "Monday") {
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[1]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[1]}`;
            }
            
        } else if (dayName === "Tuesday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[2]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[2]}`;
            }
            
        } else if (dayName === "Wednesday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[3]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[3]}`;
            }
        } else if (dayName === "Thursday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[4]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[4]}`;
            }
        } else if (dayName === "Friday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[5]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[5]}`;
            }
        } else if (dayName === "Saturday"){
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[6]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[6]}`;
            }
        } else{
            if(gender === "male"){
                resultsBox.innerText = `Your name is ${maleNames[0]}`;
            }else{
                resultsBox.innerText = `Your name is ${femaleNames[0]}`;
            }
        } 
    } else{
        alert("Please make sure you input the correct date values")
    }

    // Clear the form
    e.target["yearOfBirth"].value = "";
    e.target["monthOfBirth"].value = "";
    e.target["dateOfBirth"].value = "";
    e.target["gender"].value = "";
}

// Listening submit event for when the user sumbits
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", onSubmit);


