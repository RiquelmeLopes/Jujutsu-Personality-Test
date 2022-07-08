const quizData = [
    {
        question : "Question 1: What is work to you?",
        a: "Something i'm naturally good",
        b: "Something i do because i have to",
        c: "Something i hate",
        d: "Something that i have to be the best, always",
        yuta: "a",
        nanami: "b",
        gojo: "d",
        geto: "c",
    }, {
        question: "Question 2: For you, how society should work?",
        a: "The weaker should respect the stronger",
        b: "The stronger should help and protect the weaker",
        c: "I don't know, i just want my friends to be happy.",
        d: "I don't know, i just want to go home and rest",
        yuta: "c",
        nanami: "d",
        gojo: "b",
        geto: "a",
    }, {
        question: "Question 3: What is more important to you?",
        a: "Friendship",
        b: "Justice",
        c: "Respect",
        d: "Love",
        yuta: "d",
        nanami: "c",
        gojo: "a",
        geto: "b",
    }, {
        question: "Question 4: What would be your dream vacation?",
        a: "Read my countless books i never touche, in my beach house, in Malaysia",
        b: "Spend the days together with my one and only",
        c: "Hang out with my best friends and my daughters, eating street food and shopping",
        d: "Hang out with my loved one and my friends, all together",
        yuta: "d",
        nanami: "a",
        gojo: "b",
        geto: "c",
    }, {
        question: "Question 5: Are you good with conversations?",
        a: "I'm pretty popular, thank you very much",
        b: "I could be a cult leader if i wanted to",
        c: "I'm super shy",
        d: "Yes but i don't like it",
        yuta: "c",
        nanami: "d",
        gojo: "a",
        geto: "b",
    }
]

let currentQuiz = 0
let yutaScore = 0
let gojoScore = 0
let getoScore = 0
let nanamiScore = 0

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text= document.getElementById("d_text")
const submitBtn = document.getElementById("submit");


loadQuiz()

function loadQuiz() {
    deselect()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function getSelected() {
    
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer

}

function deselect() {
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answerEl.checked = false
        }
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].gojo) {
           gojoScore++
        } else if(answer === quizData[currentQuiz].yuta) {
           yutaScore++
        } else if(answer === quizData[currentQuiz].nanami) {
           nanamiScore++
        } else if(answer === quizData[currentQuiz].geto) {
           getoScore++
        }

        currentQuiz++
        
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            if(getoScore >= gojoScore && getoScore >= yutaScore && getoScore >= nanamiScore) {
                quiz.innerHTML = 
                `<img src="https://pbs.twimg.com/media/FKoMDwkXEAQOyux.jpg" alt="Suguru Geto">
                <h2> Your result: <h2>
                <h2> You are Suguru Geto! <h2>
                <h2> Please, go to therapy. Right now. <h2>
                <h2> This is not you. You're just tired of everything. Talk to some friends, go see a doctor, take a day for you and everything
                is going to be alright. And go to therapy, for real. <h2>

                <button onclick="location.reload()">Do the test again</button>`
            } else if(gojoScore >= getoScore && gojoScore >= yutaScore && gojoScore >= nanamiScore) {
                quiz.innerHTML = 
                `<img src="https://cdn.ome.lt/-SseY2Q87CYmW4FyZ0p23uiZ9F0=/1200x630/smart/extras/conteudos/Jujutsu_Kaisen_Gojo_voando.png" alt="Satoru Gojo">
                <h2> Your result: <h2>
                <h2> You are Satoru Gojo! <h2>
                <h2> You don't need to be the best all the time. People will still like you, even if you fail. <h2>
                <h2> Be gentle to yourself, it's okay to fail, and you don't need to carry the world on your shoulders. <h2>

                <button onclick="location.reload()">Do the test again</button>`
            } else if(yutaScore >= getoScore && yutaScore >= gojoScore && yutaScore >= nanamiScore) {
                quiz.innerHTML = 
                `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUomaGwJ1sLHBuXM7KJSWI5T6_8xcC0j4V4FJNmt1RGC3UkjvwmWQdLTl3n8sdsIQfOUs&usqp=CAU" alt="Yuta Okkotsu">
                <h2> Your result: <h2>
                <h2> You are Yuta Okkotsu! <h2>
                <h2> Your friends love you the same way you love them. Maybe more. <h2>
                <h2> You're a really good person, please never change. And go to therapy, just to be sure. <h2>

                <button onclick="location.reload()">Do the test again</button>`
            } else if(nanamiScore >= getoScore && nanamiScore >= yutaScore && nanamiScore >= gojoScore) {
                quiz.innerHTML = 
                `<img src="https://i.pinimg.com/originals/56/f7/4a/56f74a800582bdc2182344cc59a796db.jpg" alt="Nanami Kento">
                <h2> Your result: <h2>
                <h2> You are Nanami Kento! <h2>
                <h2> You are really mature, and don't know if this is a good thing or not. <h2>
                <h2> You really deserve a rest. Take a day off and check your mental health, people really love you, take care of yourself. <h2>

                <button onclick="location.reload()">Do the test again</button>`
            }
            
        }
    }

})