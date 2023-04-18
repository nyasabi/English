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

// 問題を更新する関数
function updateQuestion() {
  // 問題を取得
  const question = words[currentQuestionIndex].question;
  
  // 問題を表示
  questionElement.textContent = question;
  
  // 答え欄を空にする
  answerInputElement.value = '';
  
  // 結果を空にする
  resultElement.textContent = '';
}

// 次の問題を出題する関数
function showNextQuestion() {
  // 現在の問題のインデックスを更新
  currentQuestionIndex++;
  
  // 全ての問題を出題し終わった場合
  if (currentQuestionIndex === words.length) {
    // 「終了」と表示して、答え合わせボタンと次の問題へボタンを無効化
    questionElement.textContent = '終了';
    checkButtonElement.disabled = true;
    nextButtonElement.disabled = true;
  } else {
    // 次の問題を出題
    updateQuestion();
  }
}

// ランダムに問題を出題するかどうかを切り替える関数
function toggleRandom() {
  isRandom = !isRandom;
  
  if (isRandom) {
    randomButtonElement.textContent = '順番に';
    words.sort(() => Math.random() - 0.5);
  } else {
    randomButtonElement.textContent = 'ランダム';
    words.sort((a, b) => a.question.localeCompare(b.question));
  }
}

// イベントリスナーの設定
checkButtonElement.addEventListener('click', checkAnswer);
nextButtonElement.addEventListener('click', showNextQuestion);
randomButtonElement.addEventListener('click', toggleRandom);
