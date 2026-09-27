//TẠO CHỨC NĂNG ẨN THÔNG TIN CÁ NHÂN

const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("error-message");
const formContainer = document.getElementById("form-container");
const infoContainer = document.getElementById("info-container");

emailForm.addEventListener("submit", function (e) {
  // Ngăn form gửi request và reload lại trang
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  // Kiểm tra chuỗi rỗng
  if (emailValue === "") {
    errorMessage.textContent = "Vui lòng nhập email!";
    return;
  }

  // Kiểm tra định dạng Email qua Regex
  if (regex.test(emailValue)) {
    errorMessage.textContent = "";
    formContainer.classList.add("hide");
    infoContainer.classList.remove("hide");
  } else {
    errorMessage.textContent =
      "Email không đúng định dạng. Vui lòng kiểm tra lại!";
  }
});

//TẠO CHỨC NĂNG VIEW MORE, VIEW LESS THÔNG TIN NGHỀ NGHIỆP
const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const gridItem = button.parentElement;

    const detail = gridItem.querySelector(".grid-item-detail");

    if (detail.classList.contains("show")) {
      detail.classList.remove("show");
      button.textContent = "View More";
    } else {
      detail.classList.add("show");
      button.textContent = "View Less";
    }
  });
});
