function getCurrentDayAndTime() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let day;
    switch (dayOfWeek) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Unknown";
            break;
    }

    const formattedTime = `${day} ${hours}:${minutes}:${seconds}`;
    console.log("Current day and time: ", formattedTime);
}

getCurrentDayAndTime();

function largestNumber(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }

    return largest;
}


const num1 = 12;
const num2 = 8;
const num3 = 20;

const result = largestNumber(num1, num2, num3);
console.log(`The largest number is: ${result}`);
//
function checkRange(num1, num2, num3) {
    return (num1 >= 50 && num1 <= 99); 
           (num2 >= 50 && num2 <= 99); 
           (num3 >= 50 && num3 <= 99);
}


const num1 = 51;
const num2 = 75;
const num3 = 55;

const result = checkRange(num1, num2, num3);
console.log(`the numbers in the range of 50 and 99 ${result}`);


