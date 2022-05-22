export const questionsData = [
    { 
        question: "Which year was PHP created ?",
        answers: [
            {
                answer: "1994",
                correct: true
            },
            {
                answer: "1995",
                correct: false
            },
            {
                answer: "1993",
                correct: false
            },
            {
                answer: "1984",
                correct: false
            },
        ]
    },
    { 
        question: "What's the `original` full meaning of PHP ?",
        answers: [
            {
                answer: "Pre Hypertext Processing Language",
                correct: false
            },
            {
                answer: "Hypertext Pre Processor",
                correct: false
            },
            {
                answer: "Personal Home Page",
                correct: true
            },
            {
                answer: "Personalized Home Page Language",
                correct: false
            },
        ]
    },
    { 
        question: "Which of these is not a PHP Datatype?",
        answers: [
            {
                answer: "NULL",
                correct: false
            },
            {
                answer: "NUMBER",
                correct: true
            },
            {
                answer: "BOOLEAN",
                correct: false
            },
            {
                answer: "RESOURCE",
                correct: false
            },
        ]
    },
    { 
        question: "Which of these is correct about PHP variables ?",
        answers: [
            {
                answer: "It must begin with a dollar sign ($) and then followed by a digit",
                correct: false
            },
            {
                answer: "It can contain digits, but must start with a dollar sign ($) and preceded by a letter or an underscore",
                correct: true
            },
            {
                answer: "It can't contain digits",
                correct: false
            },
            {
                answer: "Cannot contain underscore",
                correct: false
            },
        ]
    },

]

export const shuffleArray = ( arr = [] ) => {
    let index = arr.length - 1
    let randomIndex = Math.floor(Math.random() * index)

    while(index) {
        [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]]
        index -= 1
        randomIndex = Math.floor(Math.random() * index)
    }

    return arr
}