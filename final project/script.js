window.addEventListener('scroll' , (e)=>{
    console.log('scrolling')
    console.log(e.target.documentElement.scrollTop)
    if(e.target.documentElement.scrollTop > 300){
        let topBtn = document.getElementById('topBtn')
        topBtn.classList.remove('d-none')
    }
    else{
         topBtn.classList.add('d-none')
    }
    let nav = document.getElementById('navShadow')
     if (e.target.documentElement.scrollTop > 48) {
        nav.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    } else {
        nav.style.boxShadow = "none";
    }
})

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("quantity");
  const btnMinus = document.getElementById("btn-minus");
  const btnPlus = document.getElementById("btn-plus");

  if (input && btnMinus && btnPlus) {
    btnMinus.onclick = function () {
      let val = parseInt(input.value) || 1;
      if (val > 1) input.value = val - 1;
    };

    btnPlus.onclick = function () {
      let val = parseInt(input.value) || 1;
      if (val < 99) input.value = val + 1;
    };
  }
});
if (document.querySelector('.slider-5')) {

  let countdownTime = new Date().getTime() + (5 * 60 * 60 * 1000);

  let timer = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdownTime - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".d-flex").innerHTML = "<span class='text-danger fw-bold'>Expired</span>";
    }
  }, 1000);


$(document).ready(function () {
    $(".slider-5").owlCarousel(
      {
        loop: true,
        items: 5,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
      }
    );
  });

  $(document).ready(function () {
    $(".slider-3").owlCarousel(
      {
        loop: true,
        margin: 35,
        nav: true,
        items: 3,
        stagePadding: 0,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
      }
    );
  });
}

function handleImgChange(small) {
  var img = document.getElementById('change-img');

  if (small === "167.jpg") {
    img.src = 'images/slide-hoodie-4.png';
  }
  else if (small === "167-2.jpg") {
    img.src = 'images/slide-hoodie-2.png';
  }
  else if (small === "167-3.jpg") {
    img.src = 'images/slide-hoodie-3.png';
  }
  else if (small === "167-4.jpg") {
    img.src = 'images/slide-hoodie-1.png';
  }
}
function product(small) {
  var img = document.getElementById('change');

  if (small === "electronic-14-2-300x300.jpg") {
    img.src = 'images/electronic-14-2.jpg';
  }
  else if (small === "electronic-14-300x300.jpg") {
    img.src = 'images/electronic-14.jpg';
  }
  else if (small === "electronic-15-2-300x300.jpg") {
    img.src = 'images/electronic-15-2.jpg';
  }
  else if (small === "electronic-16-300x300.jpg") {
    img.src = 'images/ele.jpg';
  }
}


if (document.getElementById("myForm")) {
  let myForm = document.getElementById('myForm')
  myForm.addEventListener('input', (e) => {
    console.log(e)
    if (e.target.id == "userName") nameValidation(e.target)
    else if (e.target.id == "userEmail") emailValidation(e.target)

  })
}
let nameValidation = (elemenet) => {
  let inputValue = elemenet.value.trim()
  console.log(inputValue.length)
  if (inputValue.length < 3) handleError(elemenet, "enter at least 3 characters")
  else handleError(elemenet)
}



let emailValidation = (input) => {
  // username@domain.subdomain
  // let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailRegex.test(input.value));
  (!emailRegex.test(input.value))
    ? handleError(input, 'please eneter a valid email')
    : handleError(input)
}

let subjectValidation = (subject) =>{
  let subjectValue = subject.value.trim()
  if(subjectValue.length==0) handleError(subject, "this is required")
    else handleError(subject)
}

let handleError = (input, msg = "") => {
  input.nextElementSibling.innerText = msg
}

myForm.addEventListener('submit', (e) => {
  let userName = document.getElementById("userName")
  let userEmail = document.getElementById("userEmail")
  let subject = document.getElementById("subject")

  nameValidation(userName)
  emailValidation(userEmail)
  subjectValidation(subject)
  if (userName.nextElementSibling.innerText !== "" || 
      userEmail.nextElementSibling.innerText !== "" ||
      subject.nextElementSibling.innerText !=="") {
    e.preventDefault()
  }
})






