const greeting=document.querySelector("#greeting");

const hiddenClass="hidden";
const userNameK="username";

const logInForm=document.querySelector("#log-in form");
const LogInInput=document.querySelector("#log-in form input");

function LogInSubmit(event){
    event.preventDefault();
    const username=LogInInput.value;
    logInForm.classList.add(hiddenClass);
    localStorage.setItem(userNameK,username);
paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerHTML=`${username} is verified for this journey`;
    greeting.classList.remove(hiddenClass);
}

const savedUserName=localStorage.getItem(userNameK);

if(savedUserName===null){
    logInForm.classList.remove(hiddenClass);
    logInForm.addEventListener("submit",LogInSubmit);
} else{
    paintGreetings(savedUserName);
}