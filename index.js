const menu = document.querySelector(".menue ");
const menuI = document.querySelector(".menue i");
const menuicon = document.querySelector(".menue i ")
const overlay = document.querySelector(".overlay");
const ul = document.querySelector("ul");
let cartIcon=document.querySelector(".cart-icon")
let cart=document.querySelector(".cart")
let logIcon=document.querySelector(".login-icon")
let login=document.querySelector(".login")
let furn=document.querySelector(".logo")
let aboveBtn=document.querySelector("footer button")

function collection(){
  
  overlay.classList.remove("sho")
  overlay.classList.remove("active")
  if(overlay.classList.contains("show"))
  {
    menuI.className="bx bx-x"
  }else{
    menuI.className="bx bx-menu"
  
  }
}
// for menu
menu.addEventListener("click", () => {
  overlay.classList.toggle("show");
  ul.classList.toggle("show");
  
   login.classList.remove("active");
   cart.classList.remove("sho");
collection()
});

//for cart

 cartIcon.addEventListener("click",(e)=>{
   e.preventDefault()
   overlay.classList.toggle("sho");
   cart.classList.toggle("sho");
   menuI.className="bx bx-menu"
   ul.classList.remove("show");
   overlay.classList.remove("show");
   overlay.classList.remove("active");
   login.classList.remove("active");

 })

 
//for login

 logIcon.addEventListener("click",(e)=>{
   e.preventDefault()
   overlay.classList.toggle("active");
   login.classList.toggle("active");
   menuI.className="bx bx-menu"
   ul.classList.remove("show");
   overlay.classList.remove("show");
   overlay.classList.remove("sho");
   cart.classList.remove("sho");

 })
 //for furn
 furn.addEventListener("click",(e)=>{
e.preventDefault()
  Swal.fire({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: ' btn-danger'
    },
    title: 'Modern Furniture',
    text: 'We Provide Your Needs',
    color: `#716add`,
    background: '',
   
    imageUrl: '/images/pngwing.com (5).png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',

  })



})




let shopBtn=document.querySelector(".text .btn")
let home=document.querySelector(".home")
let popular=document.querySelector(".popular")
let shop=document.querySelector(".shop")
let about=document.querySelector(".about")
console.log(shop)

//for shop more btn

shopBtn.addEventListener("click",()=>{
  shop.scrollIntoView({behavior:"smooth"})

})


 // every link go to its page
document.querySelector("ul").addEventListener("click",function(e){

  e.preventDefault()

  if(e.target.closest(".li")){
      let id=e.target.getAttribute("href")
      document.querySelector(id).scrollIntoView({behavior:"smooth"})
     
  ul.classList.remove("show")

  overlay.classList.remove("show")
collection()
  }
           })

// for active menu
let allLi=document.querySelectorAll(".li a")
allLi.forEach((li)=>{
  li.addEventListener("click",(e)=>{
    allLi.forEach((removeLi)=>{
removeLi.classList.remove("activ")
    })
     li.classList.add("activ")

  })
})


console.log(aboveBtn);
//for button to above

window.addEventListener('scroll', function() {
  if (window.scrollY >= popular.offsetTop) {
    aboveBtn.style.display = 'block';
  } else {
    aboveBtn.style.display = 'none';
  }
});

aboveBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
let icons=document.querySelectorAll(".icon-pro")
console.log(icons);
for(let i=0;i<icons.length;i++){

let allPro=document.querySelector(".all-prod")
  icons[i].addEventListener("click",(e)=>{
    e.preventDefault()
    let img=document.querySelectorAll(".box-pro img")[i]
    let imgSrc=img.getAttribute("src")
    let title=document.querySelectorAll(".one")[i]
    let price=document.querySelectorAll(".two")[i]
    // let del=document.querySelectorAll("")[i]

allPro.innerHTML+=`


<div class="pro">
    <img src=${imgSrc} alt="furniture">
    <div class="text-cart">
        <h3>${title.innerHTML}</h3>
        <p>${price.innerHTML}</p>
        <small>X1</small>
    </div>
    <i class="bx bx-trash"></i>
    </div>



`




;})}

