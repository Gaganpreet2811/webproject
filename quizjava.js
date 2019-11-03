

	function submitQuiz() {
		console.log('submitted');


		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			
					var answerValue = Number(radiosNo[i].value);
				}
			}
			
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
		console.log("CalcScore: " + calcScore); 

	
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber); 
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

	
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}
		if (answerScore('q5') === 0) {
			document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
		}
		if (answerScore('q6') === 0) {
			document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
		}
		if (answerScore('q7') === 0) {
			document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
		}
		if (answerScore('q8') === 0) {
			document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
		}
		if (answerScore('q9') === 0) {
			document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
		}
		if (answerScore('q10') === 0) {
			document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
		}
		if (answerScore('q11') === 0) {
			document.getElementById('correctAnswer11').innerHTML = correctAnswer('correctString11', 11);
		}
		if (answerScore('q12') === 0) {
			document.getElementById('correctAnswer12').innerHTML = correctAnswer('correctString12', 12);
		}
		if (answerScore('q13') === 0) {
			document.getElementById('correctAnswer13').innerHTML = correctAnswer('correctString13', 13);
		}
		if (answerScore('q14') === 0) {
			document.getElementById('correctAnswer14').innerHTML = correctAnswer('correctString14', 14);
		}
		if (answerScore('q15') === 0) {
			document.getElementById('correctAnswer15').innerHTML = correctAnswer('correctString15', 15);
		}
		if (answerScore('q16') === 0) {
			document.getElementById('correctAnswer16').innerHTML = correctAnswer('correctString16', 16);
		}


	
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});