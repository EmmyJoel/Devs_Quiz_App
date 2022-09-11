// Creating an Array and passing the number, question, options and answers
let questions = [
    {
        number: 1,
        question: "Choose the correct HTML element for the largest heading?",
        answer: "<h2>",

        options: [
            "&ltheader&gt",
            "&lth2&gt",
            "&ltheading&gt",
            "&lth4&gt"
        ]
    },
    {
        number: 2,
        question: "Which character is used to indicate an end tag?",
        answer: "/",

        options: [
            "^",
            "/",
            "*",
            "&lt"
        ]
    },
    {
        number: 3,
        question: "Inline elements are normally displayed without starting a new line.",
        answer: "True",

        options: [
            "True",
            "False",
            "I don't know",
            "Maybe"
        ]
    },
    {
        number: 4,
        question: "How can you make a numbered list?",
        answer: "<ol>",

        options: [
            "&ltdl&gt",
            "&ltol&gt",
            "&ltul&gt",
            "&ltlist&gt"
        ]
    },
    {
        number: 5,
        question: "What is the correct HTML for a drop-down list?",
        answer: "<select>",

        options: [
            "&ltinput type='dropdown'&gt",
            "&ltselect&gt",
            "&ltlist&gt",
            "&ltinput style='dropdown'&gt"
        ]
    },
    {
        number: 6,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",

        options: [
            "Cascading Styles Sheet",
            "Creative Style Sheets",
            "Colorful Style Sheets",
            "Cascading Style Sheets"
        ]
    },
    {
        number: 7,
        question: "Where in an HTML document is the correct place to link to an external style sheet?",
        answer: "In the <head> section",

        options: [
            "In the &ltheading&gt section",
            "In the &ltbody&gt section",
            "In the &lthead&gt section",
            "In the &ltheader&gt section"
        ]
    },
    {
        number: 8,
        question: "Which of the following HTML tag is used to define an internal styling?",
        answer: "<style>",

        options: [
            "&ltcss&gt",
            "&ltstyling&gt",
            "&ltstyle&gt",
            "&ltstylesheet&gt"
        ]
    },
    {
        number: 9,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",

        options: [
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()",
            "function {myFunction}"
        ]
    },
    {
        number: 10,
        question: "Which HTML attribute is used to define inline styles?",
        answer: "style",

        options: [
            "styles",
            "styling",
            "style",
            "stylesheet"
        ]
    },
    {
        number: 11,
        question: "Which CSS property is used to change the text color of an alement?",
        answer: "color",

        options: [
            "text-color",
            "font-color",
            "color",
            "color-text"
        ]
    },
    {
        number: 12,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",

        options: [
            "&ltscripts&gt",
            "&ltJavaScript&gt",
            "&ltscript&gt",
            "&ltScripting&gt"
        ]
    },
    {
        number: 13,
        question: "Where is the correct place to insert a JavaScript?",
        answer: "Both",

        options: [
            "The &ltbody&gt section",
            "The &lthead&gt section",
            "Both",
            "none of them"
        ]
    },
    {
        number: 14,
        question: "What is the correct syntax for referring to an external script called 'abc.js'?",
        answer: "<script src='abc.js'>",

        options: [
            "&ltscript class='abc.js'&gt",
            "&ltscript href='abc js'&gt ",
            "&ltscript src='abc.js'&gt",
            "&ltlink script='abc.js'&gt"
        ]
    },
    {
        number: 15,
        question: "The external javaScript file must contain the &ltscript&gt tag",
        answer: "True",

        options: [
            "True",
            "False",
            "I'm not so sure",
            "I don't know"
        ]
    },
    {
        number: 16,
        question: "How to write an IF statement in JavaScript?",
        answer: "if(i == 5)",

        options: [
            "if i == 5, then",
            "if i = 5",
            "if(i == 5)",
            "if i = 5 then"
        ]
    },
    {
        number: 17,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 18,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 19,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 20,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 21,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 22,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 23,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 24,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 25,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 26,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 27,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 28,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 29,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 30,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 31,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 32,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 33,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 34,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 35,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 36,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 37,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 38,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 39,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 40,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 41,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 42,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 43,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 44,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 45,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 46,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 47,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 48,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 49,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        number: 50,
        question: "",
        answer: "",

        options: [
            "",
            "",
            "",
            ""
        ]
    },
];