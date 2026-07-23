//Rules
//year -->divisble by 4 and not divisable by 100--LEAP YEAR
//divisible by 400--LEAP YEAR


let year = 2000;
if ((year % 4 === 0 && year % 100  !== 0) || year % 400 === 0) {
    console.log(year + "is a Leap year");

}
else {
    console.log(year + "not leap year");
}