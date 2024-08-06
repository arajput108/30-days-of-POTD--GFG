13.) 



//Driver Code Starts

// Initial Template for javascript



"use strict";



process.stdin.resume();

process.stdin.setEncoding("utf-8");



let inputString = "";

let currentLine = 0;



process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });



process.stdin.on("end", (_) => {

    inputString =

        inputString.trim().split("\n").map((string) => { return string.trim(); });



    main();

});



function readLine() { return inputString[currentLine++]; }



/* Function to print an array */

function printArray(arr, size) {

    let i;

    let s = "";

    for (i = 0; i < size; i++) {

        s += arr[i] + " ";

    }

    console.log(s);

}



function main() {

    let t = parseInt(readLine());

    let i = 0;

    for (; i < t; i++) {

        let IPadd = readLine();



        let obj = new Solution();

        let res = obj.isValid(IPadd);

        if (res)

            console.log("true");

        else

            console.log("false");

    }

}//Driver Code Ends



// User function Template for javascript



/**

 * @param {string} s

 * @returns {number}

 */



class Solution {

    isValid(str) {

        // code here

        // Split the string by the dot character

        const parts = str.split('.');



        // Check if there are exactly 4 parts

        if (parts.length !== 4) {

            return false;

        }



        // Validate each part

        for (let part of parts) {

            // Check if the part is a valid number

            if (!/^\d+$/.test(part)) {

                return false;

            }



            // Convert to a number

            const num = Number(part);



            // Check the range and leading zeros

            if (num < 0 || num > 255 || (part.length > 1 && part[0] === '0')) {

                return false;

            }

        }



        // If all checks passed, return true

        return true;

    }

}
