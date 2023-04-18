var words = [
  
	{ question: "~を決める", answer: "decide" },
	{ question: "～に登る", answer: "climb" },
	{ question: "行動する", answer: "act" },
	{ question: "～を経営する", answer: "run" },
	{ question: "～を連れて行く", answer: "take" },
	{ question: "～を呼ぶ", answer: "call" },
	{ question: "～を通過する", answer: "pass" },
	{ question: "～に合う", answer: "meet" },
	{ question: "～を見つける", answer: "find" },
	{ question: "とどまる", answer: "stay" },
	{ question: "～を建てる", answer: "build" },	
	{ question: "～を(…）にしておく", answer: "keep" },
	{ question: "(もの)を送る", answer: "send" },
	{ question: "～を壊す", answer: "break" },
	{ question: "(～の気分を)感じる", answer: "feel" },
	{ question: "(～に)聞こえる", answer: "sound" },
	{ question: "(数量などが)上がる", answer: "rise" },
	{ question: "～を置く", answer: "set" },
	{ question: "~を失う", answer: "lose" },
	{ question: "物事を訪ねる", answer: "ask" },
	{ question: "育つ", answer: "grow" },
	{ question: "～を我慢する(否定文・疑問文で）", answer: "stand" },
	{ question: "～に乗る", answer: "ride" },
	{ question: "～を綺麗にする", answer: "clean" },
	{ question: "～を捕らえる", answer: "catch" },
	{ question: "動く", answer: "move" },
	{ question: "(人に)伝える", answer: "tell" },
	{ question: "（～を）練習する", answer: "practice" },
	{ question: "落ちる", answer: "drop" },	
	{ question: "～を覆う", answer: "cover" },
	{ question: "向きを変える", answer: "turn" },
	{ question: "戻る", answer: "return" },
	{ question: "～を去る", answer: "leave" },
	{ question: "～を（…）にする", answer: "make" },
	{ question: "着く", answer: "arrive" },
	{ question: "～を注文する", answer: "order" },
	{ question: "～を見せる", answer: "show" },
	{ question: "～を終える", answer: "finish" }

];

var currentQuestion = null;
var randomMode = false;

function displayQuestion() {
	var index;
	if (randomMode) {
		index = Math.floor(Math.random() * words.length);
	} else {
		if (currentQuestion === null) {
			index = 0;
		} else {
			index = (words.indexOf(currentQuestion) + 1) % words.length;
		}
	}
	currentQuestion = words[index];
	document.getElementById("question").textContent = currentQuestion.question;
	document.getElementById("answer").value = "";
	document.getElementById("result").textContent = "";
}

function checkAnswer() {
	var answer = document.getElementById("answer").value;
	if (answer === currentQuestion.answer) {
		document.getElementById("result").textContent = "正解！";
	} else {
		document.getElementById("result").textContent = "不正解。答えは「" + currentQuestion.answer + "」でした。";
	}
}

function nextQuestion() {
	displayQuestion();
}

function toggleRandom() {
	randomMode = !randomMode;
	displayQuestion();
}

displayQuestion();
