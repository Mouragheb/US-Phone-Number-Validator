const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const userInput = document.getElementById("user-input");
  const resultText = document.getElementById("results-div");

  // Function to validate US phone number
  function validatePhoneNumber(phone) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-]?)\d{4}$/;

    return regex.test(phone);
  }

  // Event listener for the Check button
  checkBtn.addEventListener("click", () => {
    const input = userInput.value.trim();
    const cleanedInput = userInput.value.trim().replace(/\s+/g, "");
     if (!input){
       resultText.textContent = "Please Provide a valid Phone Number";
      resultText.style.color = "red";
       
    } else if (validatePhoneNumber(cleanedInput)) {
      resultText.textContent = `Valid US number: ${input}`;
      resultText.style.color = "green";
    } else {
      resultText.textContent = `Invalid US number: ${input}`;
      resultText.style.color = "red";
    }
    
  });

  // Event listener for the Clear button
  clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultText.textContent = "";
  });