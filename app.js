const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log("버튼 클릭!");

    });

});