const msgDisplay = document.querySelector(".msg");
const imageDisplay = document.querySelector("#image");

function onSubmit(e) {
  e.preventDefault();

  //once submit, clear msg and img
  msgDisplay.textContent = "";
  imageDisplay.src = "";

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Please enter what you want to search");
    return;
  }
  //   console.log(prompt, size);
  generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size) {
  try {
    showSpinner();
    const response = await fetch("/openai/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });
    //check for 400
    if (!response.ok) {
      removeSpinner();
      throw new Error(
        "That image could not be generated. Please try a different prompt."
      );
    }
    const dataObj = await response.json();
    // console.log(dataObj);

    const imgUrl = dataObj.data;
    imageDisplay.src = imgUrl;

    removeSpinner();
  } catch (error) {
    msgDisplay.textContent = error;
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

document.querySelector("#image-form").addEventListener("submit", onSubmit);
