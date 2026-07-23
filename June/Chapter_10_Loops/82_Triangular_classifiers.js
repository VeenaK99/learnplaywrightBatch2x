
let side1 = 10, side2 = 12, side3 = 13;

if (side1 === side2 && side2 === side3) {
    console.log("equilateral triangle")
}
else if (side1 != side2 && side2 != side3) {
    console.log("Scalene triangle");
}
else
    if (side1 == side2 && side2 != side3) {
        console.log("obsolete triangle")
    }