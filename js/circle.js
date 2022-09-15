const outMinus = document.getElementsByClassName('out');
const outMinusLeng = outMinus.length;
const plus = document.getElementsByClassName('plus');
const plusLeng = plus.length;
const essentialOutSum = document.getElementsByClassName('essentialminus');
const essentialOutSumLeng = essentialOutSum.length;
const outSum = document.getElementsByClassName('minus');
const outSumLeng = outSum.length;

function sum() {
  let j = 0;
  for(var i = 0; i < outMinusLeng; i++){
    j = j + +outMinus[i].innerText;
  }
  return j;
}

function plussum() {
  let j = 0;
  for(var i = 0; i < plusLeng; i++){
    j = j + +plus[i].innerText;
  }
  return j;
}

function minus() {
  let j = 0;
  for(var i = 0; i < outSumLeng; i++){
    j = j + +outSum[i].innerText;
  }
  return j;
}

function essentialminus() {
  let j = 0;
  for(var i = 0; i < essentialOutSumLeng; i++){
    j = j + +essentialOutSum[i].innerText;
  }
  return j;
}

const sumOut = plussum()-essentialminus();

// const sum = account.reduce((a,b) => (a+b));
document.getElementById('log').innerText = minus();
document.getElementById('sum').innerText = '/'+sumOut;

function alertCircle() {
  alert('현재 소비액과 수입에서 필수지출을 뺀 나머지의 사용가능한 예산을 나타냅니다.');
}
