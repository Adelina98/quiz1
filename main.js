const swiper = new Swiper('.swiper-container', {
	loop:true, pagination: {el: '.swiper-pagination',},
});

const quizList = document.querySelector('.quiz-list');
const quizResult = document.querySelector('.result-container');
const quizResultTip = document.querySelector('.result-tip');

quizList.addEventListener('click',event => {
	const clicked = event.target; 
	quizResult.style.visibility='visible';

	if (clicked.matches('.success')) {
		quizResult.innerHTML = 
		'<p>계곡물에 발을 <span class="blue">담갔다.</span></p><div class="result">정답!</div>'; 
	} else if (clicked.matches('.fail')) {
		quizResult.innerHTML = 
		'<p>계곡물에 발을 <span class="red">담궜다.</span></p><div class="result">오답!</div>';
		quizResultTip.style.visibility = 'visible';
	}
});


quizResult.addEventListener('click',() => {
	quizResult.style.visibility = 'hidden';
	quizResultTip.style.visibility = 'hidden';
});