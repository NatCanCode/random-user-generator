const url =' https://randomuser.me/api/ ';
let avatar = document.getElementById('avatar');
let fullname = document.getElementById('fullname');
let username = document.getElementById('username');
let email = document.getElementById('email');
let city = document.getElementById('city');
let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
})

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON (res){
  return res.json();
}

function updateProfile (profile){
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
  username.innerHTML = profile.results[0].login.username; 
  email.innerHTML = profile.results[0].email;
  city.innerHTML = profile.results[0].location.city;
  return 1;
}

function printError (error){
  console.log(error);
}

// letter animation
// wrap every letter in a span
const textWrapper = document.querySelector('.title')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
anime.timeline({loop: true})
  .add({
    targets: '.title .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  })
  .add({
    targets: '.title .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  })