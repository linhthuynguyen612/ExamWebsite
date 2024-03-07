var questions = [
   
    ...Array(10).fill().map((_, i) => ({
      type: 'true-false',
      text: `Bài tập này khó?`,
    })),
  
   
    ...Array(10).fill().map((_, i) => {
      const choices = ['A: Apple', 'B: Banana', 'C: Orange', 'D: Pinaple'];
      return {
        type: 'multiple_choice',
        text: `Lorem ipsum dolor sit amet, consectetur adip?`,
        choices: choices,
    };
  }),

    ...Array(10).fill().map((_, i) => {
      const choices = ['A: Có', 'B: Không', 'C: Vừa thích vừa không?', 'D: Đoán xem'];
      return {
          type: 'multiple_response',
          text: `Bạn thích di du học không`,
          choices: choices,
      };
  }),
 
    ...Array(10).fill().map((_, i) => ({
        type: 'text_response',
        text: `Sở thích của bạn là gì?`,
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
  alert("Bạn đã hoàn thành khảo sát");

  
});

