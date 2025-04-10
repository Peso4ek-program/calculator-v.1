let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.' ];
const action = ['-', '+', '÷','×'];

const out = document.querySelector('.calculator__display p');

const clearAll = () =>{
	a ='';
	b = '';
	sign = '';
	finish = false;
	out.textContent = 0;
}

document.querySelector('.calculator__buttons').addEventListener('click', (event)=>{
if(!event.target.classList.contains('calculator__button')) return;

if (event.target.classList.contains('calculator__button--clearall')) {
    clearAll();
    return;
  }

  if (event.target.classList.contains('calculator__button--clear')) {
    if (b !== '') {
      b = b.slice(0, -1);
      out.textContent = b || '0';
    } else if (sign !== '') {
      sign = '';
      out.textContent = a;
    } else if (a !== '') {
      a = a.slice(0, -1);
      out.textContent = a || '0';
    }
    return;
  }

  out.textContent = '';
  const key = event.target.textContent;

  if(digit.includes(key)){
	if (b=== '' && sign === ''){
		a+=key;
		out.textContent = a;
	} else if (a!== '' && b !=='' && finish){
		b = key;
		finish =false;
		out.textContent=b;
	}else{
		b += key;
		out.textContent =b;
	}
		return;
  }

  if(action.includes(key)){
		sign=key;
		out.textContent = sign;
		return
  }

  if ( key === '='){
	if (b==='') b=a;
		switch(sign){
				case "+":
					a= (+a) + (+b);
					break;
				case "-":
					a= a - b;
					break;
				case "×":
					a= a * b;
					break;
				case "÷":
					if(b === '0' ){
						out.textContent = 'Ошибка';
						a= '';
						b= '';
						sign ='';
						return;
					}
					a= a / b;
					break;
		}
		finish =true;
		out.textContent =a;
  }
})
