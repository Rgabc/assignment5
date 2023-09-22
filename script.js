//1 reverse the string
let input= prompt("enter the text and o/p will get reverse ");
let reverse=input.toLocaleLowerCase();
let resultReverseString="";
for(let i=reverse.length-1;i>=0;i--){
    resultReverseString +=reverse.charAt(i)
}
console.log(resultReverseString);

//2 count number of vowels
let input2= prompt("count the vowels please enter the text");
let vowels;
let count=0;
for(let i=0;i<=input2.length;i++ ){
    vowels=input2.charAt(i);
    vowels=vowels.toLowerCase();



    switch(vowels){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            count++;

    }

}
console.log(count);

//3  palindrome
let input30=prompt("lets check  palindrome enter text ");
let  palindrome=""
while(input30===null||input30===""){
    input30=prompt("lets check  palindrome enter text ");
    console.log("please enter the text");
    console.log(input30);
}
if(input30===null){
    console.log("please enter the string");

}
else{
    for(let i=input30.length-1;i>=0;i--){
        palindrome +=input30.charAt(i);

    }
    if(palindrome.toLowerCase()==input30.toLowerCase()){
        console.log(`yes it's  palindrome ${palindrome}`);
    }
    else{
        console.log(` it's  not palindrome ${palindrome}`);

    }
}
//4 capitalize
let input3 = prompt("enter the text");
let capiatl = input3.split(" ");
for (let i = 0; i < capiatl.length; i++) {
    capiatl[i] = capiatl[i].charAt(0).toUpperCase() + capiatl[i].slice(1);

}
let capitalText = capiatl.join(" ");
console.log(capitalText);

//5
let input4=prompt("enter the text")
let spaceless;
for(let i=0; i<input4.length;i++){

    if(input4[i]!==" "){
        spaceless += input4[i]

    }
}
console.log(spaceless);
// MEDIUM
//1
let input5 = "gajbhiye the rohit";
let a = input5.split(" ");

let longestWord = "";
// for(let i=0;i<a.length;i++){
//     if(a.length >longestWord.length){
//         longestWord=a;

//     }
// }
// console.log(longestWord)
for (const long of a) {
    if (long.length > longestWord.length) {
        longestWord = long;
    }
}
console.log(longestWord)