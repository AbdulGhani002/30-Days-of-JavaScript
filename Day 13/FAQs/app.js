//using selectors inside the element
// traversing the dom
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });


const questions = document.querySelectorAll('.question');
questions.forEach(element => {
    const btn = element.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== element) {
                item.classList.remove('show-text');
            }
        });
        element.classList.toggle('show-text');
    })
});