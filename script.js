const correctAnswer = ["y","y","y","y","y"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswer[index]) {
            score += 20;
        }
    })

    result.classList.remove("d-none");

    let point = 0;
    const write = setInterval(() => {
        result.querySelector('.score-text').textContent = `${point}%`;
        if(point == score) {
            clearInterval(write);
        } else {
            point++;
        }
    },20);
})

form.addEventListener("reset", () => {
    result.classList.add("d-none");
})

