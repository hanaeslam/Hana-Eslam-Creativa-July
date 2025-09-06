var array = []
var form = document.getElementById('form-id')

   
      form.addEventListener("submit",(e)=> {
      e.preventDefault()

      var fname = e.target.elements.name.value
      var emailadd = e.target.elements.email.value
      console.log(fname)
      console.log(emailadd)

        var user =
        {
            firstName:fname ,
            emailAddress:emailadd

        }    

        array.push(user)
        console.log(array)
        showUsers()
      }

    )
    var container = document.getElementById('user-container')
    function showUsers(){
        container.innerText = ""
        array.forEach((item , index)=>{
            let div = document.createElement('div')
            let hname = document.createElement('h4')
            let hemail = document.createElement('h4')
            hname.classList.add('text-danger')
            hemail.classList.add('text-danger')
            hname.innerText = item.firstName
            hemail.innerText = item.emailAddress
            div.classList.add('alert' , 'alert-danger')
            div.append(hname)
            div.append(hemail)
            container.append(div)
            console.log(div)


        }
            
        )
    }