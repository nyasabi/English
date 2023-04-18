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

// 問題をランダムに出題するかどうかのフラグ
let isRandom = false;

// 現在の問題のインデックス
let currentQuestionIndex = 0;

// DOM要素の取得
const questionElement = document.querySelector('.quiz-question');
const answerInputElement = document.querySelector('.quiz-answer');
const resultElement = document.querySelector('.quiz-result');
const nextButtonElement = document.querySelector('.quiz-next-button');
const checkButtonElement = document.querySelector('.quiz-check-button');
const randomButtonElement = document.querySelector('.quiz-random-button');

// 初期状態の問題を表示
updateQuestion();

// 答え合わせボタンがクリックされたときの処理
function checkAnswer() {
  // 答えを取得
  const answer = answerInputElement.value;
  
  // 現在の問題の正解を取得
  const correctAnswer = quiz[currentQuestionIndex].answer;
  
  // 答えが正しいかどうかをチェック
  if (answer === correctAnswer) {
    // 正解の場合は、「正解」と表示
    resultElement.textContent = '正解';
  } else {
    // 不正解の場合は、「不正解」と表示
    resultElement.textContent = '不正解';
  }
  
  // 答え合わせボタンを無効化
  checkButtonElement.disabled = true;
  
  // 次の問題へボタンを有効化
  nextButtonElement.disabled = false;
}

// 次の問題へボタンがクリックされたときの処理
function nextQuestion() {
  // 問題を更新
  updateQuestion();
  
  // 答え合わせボタンと次の問題へボタンを有効化
  checkButtonElement.disabled = false;
  nextButtonElement.disabled = true;
  
  // 正解/不正解の表示をクリア
  resultElement.textContent = '';
}

// ランダムに出題ボタンがクリックされたときの処理
function toggleRandom() {
  // ランダム出題モードをトグル
  isRandom = !isRandom;
  
  // 問題を更新
  updateQuestion();
}

// 問題を更新する関数
function updateQuestion() {
  // 問題のインデックスを決定
  if (isRandom)
