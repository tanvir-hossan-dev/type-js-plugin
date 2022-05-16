
// Full dynamic type js//

let type = document.querySelector(".type");
let typeText = type.dataset.text
let typeArr = typeText.split("")
let count = 0;

function typeJs(){
    
    if (count < typeArr.length) {
        type.innerHTML += typeArr[count]
        count++;
    } else {
        typeArr.pop();
        type.innerHTML = typeArr.join("");

        if (typeArr.length == 0) {
            count = 0;
            typeArr = typeText.split("");
        }
    }
}

 setInterval(function(){
    typeJs()
},type.dataset.speed)


// Sir er code //

// let type = document.querySelector(".type");
// let typeText = type.innerHTML;
// let typeAry = typeText.split("")
// type.innerHTML = ""
// let countNumber = 0;

// function typeJs(){

//     if(typeText.length > countNumber){
//         type.innerHTML += typeText.charAt(countNumber);
//         countNumber++;
//         typeAry = typeText.split("")
//     }else{
//         typeAry.pop()
//         type.innerHTML = typeAry.join("");

//         if(typeAry.length == 0){
//             countNumber = 0
//         }
        
//     }
 
// }

// setInterval(function(){
//     typeJs()
// },200)



//Simple type js

// let type = document.querySelector(".type");
// let countNumber = 0;
// function typeJs(){
 
//     if(countNumber == type.dataset.text.length){
//         type.innerHTML = ""
//         countNumber = 0
//     }else{
//         type.innerHTML += type.dataset.text.charAt(countNumber)
//         countNumber++
//     }
   

// }

// let thamo = setInterval(function(){
//     typeJs()
// },200)
















































