var countDownDate = new Date().getTime() + 60 * 60 * 1000; 

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = minutes + ": " + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


var questions = [
   
    ...Array(10).fill().map((_, i) => ({
      type: 'true-false',
      text: `Bài tập này khó?`,
      answer: Math.random() < 0.5 ? 'Đúng' : 'Sai'
    })),
  
   
    ...Array(10).fill().map((_, i) => {
      const choices = ['A: Apple', 'B: Banana', 'C: Orange', 'D: Pinaple'];
      return {
        type: 'multiple_choice',
        text: `Lorem ipsum dolor sit amet, consectetur adip?`,
        choices: choices,
        answer: choices[Math.floor(Math.random() * 4)]
    };
  }),

    ...Array(10).fill().map((_, i) => {
      const choices = ['A: Có', 'B: Không', 'C: Vừa thích vừa không?', 'D: Đoán xem'];
      return {
          type: 'multiple_response',
          text: `Bạn thích di du học không`,
          choices: choices,
          answer: choices[Math.floor(Math.random() * 4)]
      };
  }),
 
    ...Array(10).fill().map((_, i) => ({
        type: 'text_response',
        text: `Sở thích của bạn là gì?`,
        answer: 'hihihihihi'
    })),
  ];
  
  var content = document.getElementById('content');

  var title1 = document.createElement('h2');
    title1.textContent = "Phần 1: Chọn đúng hoặc sai";
    content.appendChild(title1);
    title1.style.backgroundColor = '#35509a';
    title1.style.color = 'white';

    var title2 = document.createElement('h2');
    title2.textContent = "Phần 2: Chọn một trong bốn đáp án";
    title2.style.backgroundColor = '#35509a';
    title2.style.color = 'white';

    var title3 = document.createElement('h2');
    title3.textContent = "Phần 3: Chọn nhiều đáp án đúng";
    title3.style.backgroundColor = '#35509a';
    title3.style.color = 'white';

    var title4 = document.createElement('h2');
    title4.textContent = "Phần 4: Câu trả lời tự luận";
    title4.style.backgroundColor = '#35509a';
    title4.style.color = 'white';

  questions.forEach(function(question, index) {
    var questionElement = document.createElement('div');
    questionElement.className = 'question';


    var questionText = document.createElement('h2');
    questionText.textContent = 'Câu ' + (index + 1) + ': ' + question.text;
    questionElement.appendChild(questionText);
  
    if (question.type === 'true-false') {
      ['Đúng', 'Sai'].forEach(function(choice) {
        var choiceElement = document.createElement('input');
        choiceElement.type = 'radio';
        choiceElement.name = 'question' + index;
        choiceElement.value = choice;
        var choiceLabel = document.createElement('label');
        choiceLabel.textContent = choice;

        const containlabel = document.createElement('div');
        containlabel.appendChild(choiceElement);
        containlabel.appendChild(choiceLabel);
        containlabel.style.display = 'block';
        questionElement.appendChild(containlabel);
      });
    } else if (question.type === 'multiple_choice') {
      question.choices.forEach(function(choice) {;
        var choiceElement = document.createElement('input');
        choiceElement.type = 'radio';
        choiceElement.name = 'question' + index;
        choiceElement.value = choice;
  
        var choiceLabel = document.createElement('label');
        choiceLabel.textContent = choice;

        const containlabel = document.createElement('div');
        containlabel.appendChild(choiceElement);
        containlabel.appendChild(choiceLabel);
        containlabel.style.display = 'block';
        questionElement.appendChild(containlabel);
        
        if(index === 10) content.appendChild(title2);
      });
    } else if (question.type === 'multiple_response') {
      question.choices.forEach(function(choice) {
        var choiceElement = document.createElement('input');
        choiceElement.type = 'checkbox';
        choiceElement.name = 'question' + index;
        choiceElement.value = choice;
  
        var choiceLabel = document.createElement('label');
        choiceLabel.textContent = choice;

        const containlabel = document.createElement('div');
        containlabel.appendChild(choiceElement);
        containlabel.appendChild(choiceLabel);
        containlabel.style.display = 'block';
        questionElement.appendChild(containlabel);
  
        if(index === 20) content.appendChild(title3);

      });
    } else if (question.type === 'text_response') {
      var answerElement = document.createElement('textarea');
      answerElement.name = 'question' + index;
  
      questionElement.appendChild(answerElement);
      if(index === 30) content.appendChild(title4);

    }
    questionElement.style.display = 'block';
    content.appendChild(questionElement);
  });
  
  

  document.getElementById('btn-submit').addEventListener('click', function() {
    var score = 0;
  
    questions.forEach(function(question, index) {
      if (question.type === 'true-false' || question.type === 'multiple_choice') {
        var selectedChoice = document.querySelector('input[name="question' + index + '"]:checked');
        if (selectedChoice && selectedChoice.value === question.answer) {
          score++;
        }
      } else if (question.type === 'multiple_response') {
        var selectedChoices = document.querySelectorAll('input[name="question' + index + '"]:checked');
        var correctChoices = question.answer; 

        if (selectedChoices.length === correctChoices.length) {
            var allCorrect = Array.from(selectedChoices).every(function(selectedChoice) {
            return correctChoices.includes(selectedChoice.value);
            });

            if (allCorrect) {
            score++;
            }
        }
    }
    });
    console.log(score);
    clearInterval(x);
    alert('Chúc mừng bạn đã hoàn thành bài thi. Điểm của bạn là: ' + score * 0.25 );
    window.location.href = 'test.html';
  });

