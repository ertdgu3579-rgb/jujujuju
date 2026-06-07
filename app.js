const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        window.location.href = button.dataset.link; //병원 탐색 페이지로 이동

    });

});

