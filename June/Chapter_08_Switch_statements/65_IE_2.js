let testscore = 5;
switch (true) {
    case (testscore >= 95):
        console.log("Outstanding Top performer")
        break;
    case (testscore >= 85):
        console.log("Excellant Above Expectations")
        break;
    case (testscore >= 70):
        console.log("Meets Expectations");
        break;
    case (testscore >= 50):
        console.log("Needs Improvements");
        break;
    default:
        console.log("needs Training");

}