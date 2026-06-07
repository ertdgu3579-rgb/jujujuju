const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        window.location.href = "hospital.html"; //병원 탐색 페이지로 이동

    });

});
