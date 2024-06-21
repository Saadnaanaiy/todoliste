window.addEventListener("DOMContentLoaded", function() {
  // Selecting elements from the DOM
  const myInputField = document.getElementById("inputField");
  const myButtonToClick = document.getElementById("buttonOfAdd");
  const myULofThislist = document.getElementById("taskList");
  const popup = document.getElementById("popup1");
  const popupTwo = document.getElementById("popup2");
  const popupThree = document.getElementById("popup3");
  const closeButtons = document.querySelectorAll(".close");
  const editField = document.getElementById("editField");
  const buttonOfEdit = document.getElementById("buttonOfEdit");

  let currentTask; // Variable to hold the task being edited

  // Event listener for adding a task
  myButtonToClick.addEventListener("click", () => {
    let myInputFieldValue = myInputField.value.trim();

    // Check if the input field is not empty
    if (myInputFieldValue) {
      let myList = document.createElement("li");
      let textNode = document.createTextNode(myInputFieldValue);
      let div = document.createElement("div");
      div.style.width = "400px";
      div.style.textAlign = "center";

      // Creating the delete button
      let imgOne = document.createElement("img");
      imgOne.src = "image/delete.png";
      imgOne.style.width = "30px";
      imgOne.style.height = "30px";
      let imgTwo = document.createElement("img");
      imgTwo.src = "image/edit.png";
      imgTwo.style.width = "30px";
      imgTwo.style.height = "30px";

      let anotherDiv = document.createElement("div");
      anotherDiv.append(imgTwo, imgOne);
      anotherDiv.classList.add("divForImages");

      // Appending the text and delete button to the div
      div.append(textNode, anotherDiv);
      myList.appendChild(div);

      // Event listener for deleting a task
      imgOne.addEventListener("click", () => {
        myList.classList.toggle("completed");
        setTimeout(() => {
          myULofThislist.removeChild(myList);
        }, 900);
        popupTwo.style.display = "flex";
      });

      // Event listener for editing a task
      imgTwo.addEventListener("click", () => {
        currentTask = textNode; // Store the current task being edited
        editField.value = textNode.textContent;
        popupThree.style.display = "flex";
      });

      // Appending the list item to the task list
      myULofThislist.appendChild(myList);
      myInputField.value = "";
      popup.style.display = "flex";
    } else {
      window.alert("The field is empty!!");
    }
  });

  // Event listeners for closing the popups
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      popup.style.display = "none";
      popupTwo.style.display = "none";
      popupThree.style.display = "none";
    });
  });

  // Event listener for closing popups by clicking outside of them
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
    if (event.target === popupTwo) {
      popupTwo.style.display = "none";
    }
    if (event.target === popupThree) {
      popupThree.style.display = "none";
    }
  });

  // Event listener for editing a task
  buttonOfEdit.addEventListener("click", () => {
    if (editField.value.trim()) {
      currentTask.textContent = editField.value.trim();
      popupThree.style.display = "none";
    } else {
      window.alert("The edit field is empty!!");
    }
  });


  const tl = gsap.timeline();

  tl.fromTo(
    "#buttonOfAdd",
    { opacity: 0, y: 300, scale: 0.5 },
    { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power4.out" }
  );

  tl.fromTo(
    "#inputField",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 2, ease: "power4.out" },
    "-=1.5" 
  );

  tl.fromTo(
    ".h",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, duration: 2, ease: "power4.out", stagger: 0.2 },
    "-=1.5"
  );
});