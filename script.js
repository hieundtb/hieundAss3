"use stric";
function handleSubmit() {
  //take input value and transfer to lowercase
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //use match to check inputed email
  const checkEmail = emailValue.match(regex);

  //display personal info
  const personalInfo = document.querySelector("#personal-info");
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    personalInfo.classList.remove("hidden");
    submitControl.classList.add("hidden");
  } else {
    errorEmail.textContent = "Please enter the correct email format";
  }
}

function showButton(element) {
  let button = element.querySelector(".view-more");
  button.style.display = "block";
}

function hideButton(element) {
  let button = element.querySelector(".view-more");
  button.style.display = "none";
}

function toggleContent(button) {
  var sectionContent = button.previousElementSibling;
  if (
    sectionContent.style.display === "none" ||
    sectionContent.style.display === " "
  ) {
    sectionContent.style.display = "block";
    button.textContent = "View Less";
  } else {
    sectionContent.style.display = "none";
    button.textContent = "View More";
  }
}
