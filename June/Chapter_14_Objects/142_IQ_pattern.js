// patterns
/*
*
**
***
*/
let n=5;
for(let i=1 ;i<=n;i++){
    let row =" ";
    for(let j=1;j <=i ;j++){
        row  += "*";
    }
    console.log(row);
}


//reverse pattern
// *****
// ****
// ***
// **
// *

console.log("___________")

let m=5;
for(let i=m ;i>=1;i--){
    let row="";
    for(let j=1;j<=i ;j++){
        row  += "*";
    }
    console.log(row);
}

console.log("___________")

//pyramid pattern
//     *
//    ***
//   *****
//  *******
// *********


let p=5;
for(let i=1;i<=p;i++){
    let row="";
    for(let s=1;s<=p-i;s++){
        row+=" ";
    }
    for(let j=1;j<=2*i-1;j++){
        row+="*";
    }
    console.log(row);
}

 console.log("___________");


//       *        row 1: 4 spaces + 1 star
//        ***       row 2: 3 spaces + 3 stars
//       *****      row 3: 2 spaces + 5 stars
//      *******     row 4: 1 space  + 7 stars
//     *********    row 5: 0 spaces + 9 stars

//   Two easy patterns to spot:                                  
                                                              
//   - Spaces keep shrinking: 4, 3, 2, 1, 0 → that's height      
//    - row
//   - Stars keep growing by 2: 1, 3, 5, 7, 9 → that's row       
//   * 2 - 1

//   So each row is built by printing some blank spaces
//   first (to push stars to the middle), then the stars.        

//   let height = 5;                        // how many
//   rows tall

//     for (let row = 1; row <= height; row++) {
//         let line = "";

//         // add the blank spaces to move stars to the
//   middle
//         for (let space = 1; space <= height - row;
//   space++) {
//             line += " ";
//         }

//         // add the stars for this row
//         for (let star = 1; star <= row * 2 - 1; star++)       
//   {
//             line += "*";
//         }

//         console.log(line);
//     }

//   Kid version: the top row is a small hat with lots of        
//   empty air around it, and as you go down the air goes        
//   away and the walls of the pyramid get wider. Two loops      
//    do the work — one loop prints the empty "air"
//   (spaces), the other prints the "bricks" (stars).
