function handleImgChange(){
    var img=document.getElementById('img-id')
    if(img.src.endsWith("b1.jpg")){
        img.src ='images/b2.jpg'
    }
    else if(img.src.endsWith("b2.jpg")){
        img.src ='images/b1.jpg'
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