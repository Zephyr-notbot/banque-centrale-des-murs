function money(n){
  return n.toLocaleString('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2})+' Gallon'+(Math.abs(n-1)>0.00001?'s':'');
}

function calculateLoan(){
  const amount=Math.max(0,parseFloat(document.getElementById('amount').value)||0);
  const rate=Math.max(0,parseFloat(document.getElementById('rate').value)||0);
  const weeks=Math.max(1,parseInt(document.getElementById('weeks').value)||1);
  const interest=amount*(rate/100);
  const total=amount+interest;
  document.getElementById('interest').textContent=money(interest);
  document.getElementById('total').textContent=money(total);
  document.getElementById('weekly').textContent=money(total/weeks);
}

['amount','rate','weeks'].forEach(id=>document.getElementById(id).addEventListener('input',calculateLoan));
calculateLoan();

function savingsMoney(n){
  return n.toLocaleString('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2})+' Gallon'+(Math.abs(n-1)>0.00001?'s':'');
}

function calculateSavings(){
  const input=document.getElementById('savingsAmount');
  if(!input) return;

  const amount=Math.min(2500,Math.max(0,parseFloat(input.value)||0));
  input.value=amount;

  const interest=amount*0.01;
  const total=amount+interest;

  document.getElementById('savingsInterest').textContent=savingsMoney(interest);
  document.getElementById('savingsTotal').textContent=savingsMoney(total);
}

const savingsInput=document.getElementById('savingsAmount');
if(savingsInput){
  savingsInput.addEventListener('input',calculateSavings);
  calculateSavings();
}
