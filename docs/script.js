
window.addEventListener("DOMContentLoaded", function () {
    var privacyLink = document.getElementById("privacyLink");
    var privacyPopup = document.getElementById("privacyPopup");
    var understandBtn = document.getElementById("understandBtn");
  
    var getStartedButton = document.getElementById("get-started-button");
    var dropdownContainer = document.getElementById("dropdownContainer");

    privacyLink.addEventListener("click", function (event) {
      event.preventDefault();
      privacyPopup.style.display = "block";
    });
  
    understandBtn.addEventListener("click", function () {
      privacyPopup.style.display = "none";
    });

    getStartedButton.addEventListener("click", function () {
        getStartedButton.style.display = "none";
        dropdownContainer.style.display = "flex";
    });
      
     // Initialize Material-UI dropdown components
     const dropdowns = document.querySelectorAll(".mui-select");
     dropdowns.forEach((dropdown) => {
       new mui.Select(dropdown);
     });
      
  });
  