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
    { 
        question: "What will be the output of this code strlen(' testing this ') ?",
        answers: [
            {
                answer: "12",
                correct: false
            },
            {
                answer: "14",
                correct: true
            },
            {
                answer: "11",
                correct: false
            },
            {
                answer: "13",
                correct: false
            },
        ]
    },
    { 
        question: " Which of these will output `true`?",
        answers: [
            {
                answer: "(true !== true) AND (false !== false) AND ( false === false)",
                correct: false
            },
            {
                answer: "(false == false) XOR (false !== false) AND (true !== false)",
                correct: true
            },
            {
                answer: "(false OR true) AND (true XOR true)",
                correct: false
            },
            {
                answer: "(false == false) XOR (false < true)",
                correct: false
            },
        ]
    },
    { 
        question: "The variable `$file` is an example of which data type in this code ` $file = fopen('test.txt, 'a+') `?",
        answers: [
            {
                answer: "String",
                correct: false
            },
            {
                answer: "Array",
                correct: false
            },
            {
                answer: "Resource",
                correct: true
            },
            {
                answer: "Object",
                correct: false
            },
        ]
    },
    { 
        question: "What's the output of this code `5 <=> 2` ?",
        answers: [
            {
                answer: "-1",
                correct: false
            },
            {
                answer: "0",
                correct: false
            },
            {
                answer: "1",
                correct: true
            },
            {
                answer: "None of the above",
                correct: false
            },
        ]
    },
    { 
        question: "Which of these is incorrect about `for` loop ?",
        answers: [
            {
                answer: "You can't initialize more than one variable in the initialization part",
                correct: true
            },
            {
                answer: "It increments / decrements the counter at the end of each iteration",
                correct: false
            },
            {
                answer: "All of the above",
                correct: false
            },
            {
                answer: "None of the above",
                correct: false
            },
        ]
    },
    { 
        question: "What is the data type of any conditional expression output",
        answers: [
            {
                answer: "Boolean",
                correct: true
            },
            {
                answer: "String",
                correct: false
            },
            {
                answer: "Resource",
                correct: false
            },
            {
                answer: "None of the above",
                correct: false
            },
        ]
    },
    { 
        question: "Which of this operators can form a conditional expression",
        answers: [
            {
                answer: "Only Comparision Operators",
                correct: false
            },
            {
                answer: "Only Logical Operators",
                correct: false
            },
            {
                answer: "All of the above",
                correct: true
            },
            {
                answer: "None of the above",
                correct: false
            },
        ]
    },
    { 
        question: "The DOT `.` operator in PHP is user for ?",
        answers: [
            {
                answer: "Property accessor",
                correct: false
            },
            {
                answer: "Fullstop",
                correct: false
            },
            {
                answer: "String concatenation",
                correct: true
            },
            {
                answer: "Spread and Rest", 
                correct: false
            },
        ]
    },
    { 
        question: "The `NOT` operator falls in which of this category?",
        answers: [
            {
                answer: "Binary",
                correct: false
            },
            {
                answer: "Tenary",
                correct: false
            },
            {
                answer: "Unary",
                correct: true
            },
            {
                answer: "All of the above", 
                correct: false
            },
        ]
    },
    { 
        question: "The `NOT` operator falls in which of this category?",
        answers: [
            {
                answer: "Binary",
                correct: false
            },
            {
                answer: "Tenary",
                correct: false
            },
            {
                answer: "Unary",
                correct: true
            },
            {
                answer: "All of the above", 
                correct: false
            },
        ]
    },
    { 
        question: "What is the output of this code `-2 <=> -3`?",
        answers: [
            {
                answer: "0",
                correct: false
            },
            {
                answer: "-1",
                correct: false
            },
            {
                answer: "1",
                correct: true
            },
            {
                answer: "All of the above", 
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