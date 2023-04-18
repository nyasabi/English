const quizSectionElement = document.querySelector('.quiz-section');
const questionElement = document.querySelector('.quiz-question');
const answerInputElement = document.querySelector('.quiz-answer');
const checkButtonElement = document.querySelector('.quiz-check-button');
const resultElement = document.querySelector('.quiz-result');
const nextButtonElement = document.querySelector('.quiz-next-button');
const randomButtonElement = document.querySelector('.quiz-random-button');

let words = [
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

let currentQuestionIndex = 0;
let isRandom = false;

function updateQuestion() {
  // 問題文を更新
  questionElement.textContent = words[currentQuestionIndex].question;
  
  // ランダムモードの場合は問題文をランダムに表示
  if (isRandom) {
    const randomIndex = Math.floor(Math.random() * words.length);
    questionElement.textContent = words[randomIndex].question;
  }
}

function checkAnswer() {
  // 答えを取得
  const answer = words[currentQuestionIndex].answer;

  // 入力された答えを取得
  const userAnswer = answerInputElement.value.trim().toLowerCase();

  // 答えが正しい場合
  if (userAnswer === answer) {
    // 正解と表示
    resultElement.textContent = '正解！';
    resultElement.classList.add('correct');
    resultElement.classList.remove('incorrect');
  } else {
    // 不正解と表示
    resultElement.textContent = `不正解。正解は「${answer}」です。`;
    resultElement.classList.add('incorrect');
    resultElement.classList.remove('correct');
  }

  // 「次の問題へ」ボタンを有効化
  nextButtonElement.disabled = false;
  // 「答え合わせ」ボタンを無効化
  checkButtonElement.disabled = true;
}

function showNextQuestion() {
  // 問題番号を更新
  currentQuestionIndex++;
  if (currentQuestionIndex >= words.length) {
    currentQuestionIndex = 0;
  }
  // 問題を更新
  updateQuestion();
  // 入力欄をクリア
  answerInputElement.value = '';
  // 結果メッセージをクリア
  resultElement.textContent = '';
  resultElement.classList.remove('correct');
  resultElement.classList.remove('incorrect');
}

function toggleRandom() {
  isRandom = !isRandom;
  if (isRandom) {
    randomButtonElement.textContent = 'ランダムモード解除';
  } else {
    randomButtonElement.textContent = 'ランダムに出題';
  }
}

// 「答え合わせ」ボタンをクリックしたときの処理
checkButtonElement.addEventListener('click', checkAnswer);

// 「次の問題へ」ボタンをクリックしたときの処理
nextButtonElement.addEventListener('click', showNextQuestion);

// 「ランダムに出題する」ボタンをクリ
