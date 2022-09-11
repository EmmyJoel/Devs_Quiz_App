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
            "*",
            "&lt",
            "/"
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
            "&ltlist&gt",
            "&ltselect&gt",
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
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ]
    },
    {
        number: 7,
        question: "Where in an HTML document is the correct place to link to an external style sheet?",
        answer: "In the <head> section",

        options: [
            "In the &ltheading&gt section",
            "In the &ltbody&gt section",
            "In the &ltheader&gt section",
            "In the &lthead&gt section"
        ]
    },
    {
        number: 8,
        question: "Which of the following HTML tag is used to define an internal styling?",
        answer: "<style>",

        options: [
            "&ltstyle&gt",
            "&ltcss&gt",
            "&ltstyling&gt",
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
            "color",
            "font-color",
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
            "&ltScripting&gt",
            "&ltscript&gt"
        ]
    },
    {
        number: 13,
        question: "Where is the correct place to insert a JavaScript?",
        answer: "Both",

        options: [
            "The &ltbody&gt section",
            "The &lthead&gt section",
            "none of them",
            "Both"
        ]
    },
    {
        number: 14,
        question: "What is the correct syntax for referring to an external script called 'abc.js'?",
        answer: "<script src='abc.js'>",

        options: [
            "&ltscript src='abc.js'&gt",
            "&ltscript class='abc.js'&gt",
            "&ltscript href='abc js'&gt ",
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
        question: "A correct way to write an IF statement in JavaScript?",
        answer: "if(i == 5)",

        options: [
            "if(i == 5)",
            "if i == 5, then",
            "if i = 5",
            "if i = 5 then"
        ]
    },
    {
        number: 17,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",

        options: [
            "Higher Text Markup Language",
            "Hyper Text Markup Language",
            "Hyper Text Machine Language",
            "Hyperlinks and Text Markup Language"
        ]
    },
    {
        number: 18,
        question: "What is the correct HTML for adding a background color?",
        answer: '<body style="background-color:yellow;">',

        options: [
            '&ltbg-color= "yellow"&gt',
            "&ltbackground&gtyellow&lt/background&gt",
            '&ltbody bg="blue"&gt',
            '&ltbody style="background-color:yellow;"&gt'
        ]
    },
    {
        number: 19,
        question: "The correct HTML element to define important text is",
        answer: "<strong>",

        options: [
            "&lti&gt",
            "&ltstrong&gt",
            "&ltimportant&gt",
            "&ltb&gt"
        ]
    },
    {
        number: 20,
        question: "How can you make a link open in a new tab/browser window?",
        answer: '<a href="url" target="_blank">',

        options: [
            '&ltlink="url" new&gt',
            '&ltlink="url" target="_blank"&gt',
            '&lthref="url" _blank&gt',
            '&lta href="url" target="_blank"&gt'
        ]
    },
    {
        number: 21,
        question: "Which of the following is the odd one?",
        answer: "<lt>",

        options: [
            "&ltlt&gt",
            "&ltdl&gt",
            "&ltol&gt",
            "&ltli&gt"
        ]
    },
    {
        number: 22,
        question: "Which of these elements is not a table related element?",
        answer: "<tl>",

        options: [
            "&lttfoot&gt",
            "&lttr&gt",
            "&lttl&gt",
            "&lttd&gt"
        ]
    },
    {
        number: 23,
        question: "In HTML, how do you make an unnumbered list?",
        answer: "<ul>",

        options: [
            "&ltuli&gt",
            "&ltlist&gt",
            "&ltul&gt",
            "&ltli&gt"
        ]
    },
    {
        number: 24,
        question: "How do you make a bullet list in HTML?",
        answer: "<ul>",

        options: [
            "&ltol&gt",
            "&ltbl&gt",
            "&ltlist&gt",
            "&ltul&gt"
        ]
    },
    {
        number: 25,
        question: "An &ltiframe&gt is used to display a webpage within a webpage",
        answer: "True",

        options: [
            "No such element",
            "True",
            "I don't Know",
            "False"
        ]
    },
    {
        number: 26,
        question: "HTML comment starts with",
        answer: "<!--",

        options: [
            "/*",
            "//",
            "&lt--",
            "&lt!--"
        ]
    },
    {
        number: 27,
        question: "Which HTML element defines the title of a webpage?",
        answer: "<title>",

        options: [
            "&lttitle&gt",
            "&ltheading&gt",
            "&ltname&gt",
            "&ltmeta&gt"
        ]
    },
    {
        number: 28,
        question: "What is the correct HTML element for playing audio files?",
        answer: "<audio>",

        options: [
            "&ltsound&gt",
            "&ltaudio&gt",
            "&ltaudioPlay&gt",
            "&ltautoPlay&gt"
        ]
    },
    {
        number: 29,
        question: "Which is the correct syntax for CSS comment?",
        answer: "/*comment*/",

        options: [
            "//comment//",
            "&lt--comment--&gt",
            "/*comment*/",
            "''comment''"
        ]
    },
    {
        number: 30,
        question: "Which CSS property controls the font size in CSS?",
        answer: "font-size",

        options: [
            "text-size",
            "size",
            "font-size",
            "font-weight"
        ]
    },
    {
        number: 31,
        question: "Which of these events occurs on mouse click?",
        answer: "onclick",

        options: [
            "onmouseclick",
            "onclick",
            "mouseselect",
            "onclickmouse"
        ]
    },
    {
        number: 32,
        question: "How do you remove auto underline from hyperlinks?",
        answer: "a{text-decoration:none;}",

        options: [
            "a{text:no-underline}",
            "a{text-decoration:none;}",
            "a{underline:none;}",
            "a{text:no-underline}"
        ]
    },
    {
        number: 33,
        question: "Pick out the odd one",
        answer: "FOR",

        options: [
            "Const",
            "FOR",
            "let",
            "var"
        ]
    },
    {
        number: 34,
        question: "How can you detect the client's browser name with JavaScript?",
        answer: "navigator.userAgent",

        options: [
            "browser.name",
            "client.browserName",
            "navigator.userAgent",
            "browser.appName"
        ]
    },
    {
        number: 35,
        question: "Which is the correct property for changing the font of an element?",
        answer: "font-family",

        options: [
            "font-family",
            "font-type",
            "font-style",
            "font-class"
        ]
    },
    {
        number: 36,
        question: "How to bold a text with CSS?",
        answer: "font-weight:bold",

        options: [
            "font:bold",
            "font-weight:bold",
            "font-size:bold",
            "font-width:enlarge"
        ]
    },
    {
        number: 37,
        question: "JavaScript is similar to Java",
        answer: "False",

        options: [
            "True",
            "False",
            "I don't know",
            "Maybe"
        ]
    },
    {
        number: 38,
        question: "How do you round the number 2.85, to the nearest integer?",
        answer: "Math.round(2.85)",

        options: [
            "rnd(2.85)",
            "round.(2.85)",
            "rndUp(2.85)",
            "Math.round(2.85)"
        ]
    },
    {
        number: 39,
        question: "Pick out the odd one",
        answer: "span",

        options: [
            "margin",
            "span",
            "padding",
            "width"
        ]
    },
    {
        number: 40,
        question: "Which of the following does not support a value of 'auto'?",
        answer: "padding",

        options: [
            "height",
            "padding",
            "width",
            "margin"
        ]
    },
    {
        number: 41,
        question: "Which id the correct way to write a JavaScript array?",
        answer: "var numbers = ['1', '2', '3']",

        options: [
            "var numbers = arrays('1', '2', '3')",
            "var numbers = ['1', '2', '3']",
            "var numbers = '1', '2', '3'",
            "var numbers = {'1', '2', '3'}"
        ]
    },
    {
        number: 42,
        question: "How can you a make a comment in JavaScript?",
        answer: "//cocmment",

        options: [
            "''comment''",
            "&lt!--comment--&gt",
            "//cocmment",
            "/comment/"
        ]
    },
    {
        number: 43,
        question: "How does a FOR loop start?",
        answer: "for(i = 0; i < 10; i++)",

        options: [
            "for(i = 0; i &lt 10)",
            "for(i = 0; i &lt 10; i++)",
            "FOR(i &lt 10; i++)",
            "for(i = 0; i++)"
        ]
    },
    {
        number: 44,
        question: "How do you make a list of items with squares? ",
        answer: "list-style-type:square;",

        options: [
            "list:squares;",
            "list-type:square;",
            "list-type:square;",
            "list-style-type:square;"
        ]
    },
    {
        number: 45,
        question: "Which of these forms does a WHILE loop take?",
        answer: "while(i < 5; i++)",

        options: [
            "while(i &lt 5; i++)",
            "WHILE (i &lt 5)",
            "while( 1 &lt 5)",
            "while i &lt 5, i+"
        ]
    },
    {
        number: 46,
        question: "How do select an element with an id of 'hello'?",
        answer: "#hello",

        options: [
            ".hello",
            "#hello",
            "*hello",
            "id-hello"
        ]
    },
    {
        number: 47,
        question: "How to write an IF statement for a condition where 'i' is not equal to 2?",
        answer: "if(i != 2)",

        options: [
            "if i &lt= 2",
            "if(i &lt&gt 2)",
            "if i not = 2 then",
            "if(i != 2)"
        ]
    },
    {
        number: 48,
        question: "How do you select an element with class name 'name'?",
        answer: ".name",

        options: [
            "#name",
            "*name",
            ".name",
            "class:name"
        ]
    },
    {
        number: 49,
        question: "In JavaScript, how to write 'Hello' in an alert box?",
        answer: "alert('Hello');",

        options: [
            "alertBox('Hello');",
            "alert('Hello');",
            "msgBox(Hello);",
            "display('Hello');"
        ]
    },
    {
        number: 50,
        question: "The default value of position property in CSS?",
        answer: "static",

        options: [
            "static",
            "fixed",
            "absolute",
            "relative"
        ]
    }
];