
// var firstName = "Hana"
// var lastName = "Eslam"
// var age = 22
//  var fullName = firstName+" "+lastName
//  var fullName =`${firstName} ${lastName}`
// console.log(fullName)

// var p = prompt("Enter your graduation year",2000)
// console.log(p)

// var x=2
// var y=3
// var sum=x+y
// console.log(sum)
// console.log(y>x)
// console.log(y==8 || typeof x =="number")

// var d = prompt("Enter your degree")


// if(d!=null && d!="" && !(d>100)){
    
//     if(d>=90 && d<= 100){
//     console.log("A")

//     }
//     else if(d>=80 && d<90){
//         console.log("B")
//     }
//     else if(d>=70 && d<80){
//         console.log("C")
//     }
//     else{
//     console.log("F")
//     }
// }
// else{
//     console.log("invalid degree")
// }



// var start = prompt("enter start")
// var end = prompt("enter end")
// for(var i= start; i <= end ; i++){
//     console.log(i)
// }

// function sum(x , y){
//     var num1 = x
//     var num2 = y
//     var result = num1 + num2
//     return(result)
// }
// var r1 = sum( 4 , 5)
// console.log(r1)
// var r2 = sum( 6 , 2)
// console.log(r2)

// function looping( start , end , breaknum , cont){
//    if( start ==undefined || end ==undefined || breaknum ==undefined || cont ==undefined)
//     alert("please enter all numbers")
//    else if(breaknum > end || breaknum < start){
//     alert("breaknum is out of range")
//    }
//    else if(cont > end || cont < start){
//     alert("cont is out of range")
//    }
//    else{
//    for(var i= start; i <= end ; i++){
//    if(i == cont) continue
//    console.log(i)
//    if(i == breaknum) break
//     }
//       }
// }

// looping(2,8,9,3)


// var arr = [ "Hana" , 22 , "CS" ,"ASU" , "Senior" ]
// var p = prompt("enter item")
// if(arr.includes(p)){
//     console.log("founded")
// }
// else{
//     arr.push(p)
// }
// console.log(arr)


// var arr = [ 3 , 10 , 50 ,100 ]
// var p = prompt("enter number")
//  var ele = arr.find((n)=> n>p)
//  if (n== undefined)
//     arr.push(p)

// var array = [
//     {
//         first: "ahmed" ,
//         age:20
//     },
//     {
//         first: "ali" ,
//         age:10
//     },
//     {
//         first: "mohamed",
//         age:30
//     }
// ]

//  var n = array.findIndex((index=>index.age ==10))
 
//  console.log(n)
// array.splice(n)
// console.log(array)

function handleImgChange(){
    var img=document.getElementById('img-id')
    if(img.src.endsWith("b1.jpg")){
        img.src ='b2.jpg'
    }
    else if(img.src.endsWith("b2.jpg")){
        img.src ='b1.jpg'
    }
}



var form = document.getElementById('form-id')

   
      form.addEventListener("submit",(e)=> {
      e.preventDefault()

      var fname = e.target.elements.name.value
      var emailadd = e.target.elements.email.value
      console.log(fname)
      console.log(emailadd)

        var array=[
        {
            firstName:fname ,
            emailAddress:emailadd

        }    

        ]
        console.log(array)
        
      }
    )
    
  