//Fizz-buzz задачи
//Задача №1
const dscount = (string, s1, s2)=>{
  const reg = new RegExp(s1+s2, 'ig');
  let last={index:-1}, c=-1;
  do {
    reg.lastIndex=last.index+1;
    last = reg.exec(string);
    c++;
  } while(last!==null);
  return c;
}
//Задача №2
const checkSyntax = (string)=>{
  string = string.replace(/[^<[{\(>\]}\)]/g, '');
  const brackets = ['<>', '[]', '{}', '()'];
  do {
    for(i=4;i--;) {
      string = string.replace(brackets[i], '');
    }
  } while(/<>|\[\]|\{\}|\(\)/.test(string));
  return Number(string.length!==0);
}
//Алгоритмы
//Задача №1
//самое быстрое решение задачи:
return (quantityOfPancackes>1) ? quantityOfPancackes : 2;
//решение в виде алгоритма
/*
  если блин 1, жарим его сначала с первой стороны, потом со второй стороны.
  если блинов больше 1го и осталось больше 3х, то жарим 2 блина с первой стороны, потом те же 2 блина со второй стороны. И переходим к следующей паре блинов.
  когда блинов стало 3, жарим 2 блина с первой стороны. Потом жарим 1й блин со второй стороны, а 3й - с первой. Наконец жарим 2й и 3й блины со второй стороны.
*/

//Рефакторинг
Задача №1
//упрощенный исходный код
function func(s, a, b) {
	if(s==='') return -1;
	
	let i = s.length - 1,
      aIndex = -1,
      bIndex = -1;
	
	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
    const substr = s.substring(i, i+1);
    if(substr == a) aIndex = i;
    if(substr == b) bIndex = i;
    i = i - 1;
	}
	
	if(aIndex != -1) {
    return (bIndex == -1) ? aIndex : Math.max(aIndex, bIndex);
	}
	
	return (bIndex != -1) ? bIndex : -1;
}
//упрощенный исходный код с учетом логики алгоритма
function func(s, a, b) {
	if(s==='') return -1;
	
	let aIndex = -1, bIndex = -1;
	
  for(let i = s.length; i--;) {
    const substr = s.substring(i, i+1);
    if(substr == a) {
      aIndex = i;
      return aIndex;
    }
    if(substr == b) {
      bIndex = i;
      return bIndex;
    }
  }
	
	return -1;
}

//Задача №2
function drawRating(vote) {
  vote = vote || 1;
  return String('★').repeat(Math.ceil(vote/20)).padEnd(5, '☆');
}

//Практические задачи
Задача №1
function parseUrl(string) {
  const [href, protocol, host, hostname, port, pathname, origin] = string.match(/(https?:)\/\/(([a-z\.]+):(\d+))(\/[a-z]+\/[a-z]+\.[a-z]+)[^]+(#[a-z\.]+)/);
  return {href:href, protocol:protocol, host:host, hostname:hostname, port:port, pathname:pathname, origin:origin};
}
