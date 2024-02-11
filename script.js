const questions = [
  {
    question: "Qual é a forma correta de declarar uma variável em JavaScript?",
    answers: [
      "var myVar = 10;",
      "variable myVar = 10;",
      "let myVar = 10;",
    ],
    correct: 2
  },
  {
    question: "Qual destes métodos converte uma string em um número inteiro?",
    answers: [
      "parseInt()",
      "toFixed()",
      "toUpperCase()",
    ],
    correct: 0
  },
  {
    question: "Como você escreve um comentário de linha única em JavaScript?",
    answers: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
    ],
    correct: 0
  },
  {
    question: "Qual operador é usado para atribuição de valor em JavaScript?",
    answers: [
      "=",
      "==",
      "+=",
    ],
    correct: 0
  },
  {
    question: "Qual é o resultado de 4 + '4' em JavaScript?",
    answers: [
      "8",
      "'44'",
      "44",
    ],
    correct: 1
  },
  {
    question: "Qual é a função do método 'push()' em um array em JavaScript?",
    answers: [
      "Remover o último elemento do array",
      "Adicionar um elemento ao final do array",
      "Inverter a ordem dos elementos do array",
    ],
    correct: 1
  },
  {
    question: "Qual função é usada para imprimir algo no console em JavaScript?",
    answers: [
      "console.log()",
      "print()",
      "display()",
    ],
    correct: 0
  },
  {
    question: "Qual é o resultado de typeof 'Hello' em JavaScript?",
    answers: [
      "string",
      "object",
      "char",
    ],
    correct: 0
  },
  {
    question: "Qual é o operador lógico que representa 'ou' em JavaScript?",
    answers: [
      "&&",
      "||",
      "!",
    ],
    correct: 1
  },
  {
    question: "Qual é o resultado de 10 % 3 em JavaScript?",
    answers: [
      "3",
      "1",
      "0.1",
    ],
    correct: 1
  },
];

//buscar um elemento html e colocar em uma variável
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corrects = new Set()
const totalOfQuestions = questions.length
const showHits = document.querySelector('#hits span')
showHits.textContent = corrects.size + ' de ' + totalOfQuestions

//loop ou laço de repetição
for(const item of questions){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.question

  for(let answer of item.answers){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = answer
    dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))
    dt.querySelector('input').value = item.answers.indexOf(answer)
    dt.querySelector('input').onchange = (event) => {
      const isCorrect = event.target.value == item.correct
      
      corrects.delete(item)
      if(isCorrect){
        corrects.add(item)
      }

      showHits.textContent = corrects.size + ' de ' + totalOfQuestions
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}