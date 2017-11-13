// key MapTo code
const keyMapCode = {
	'backspace': 8,
	'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
};

const keyMapCodeAliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}
let i;
// lower case chars
for (i = 97; i < 123; i++) keyMapCode[String.fromCharCode(i)] = i;

// upper case chars
for (i = 65; i< 91; i++) keyMapCode[String.fromCharCode(i)] = i;

// numbers
for (i = 48; i < 58; i++) keyMapCode[i - 48] = i

// function keys
for (i = 1; i < 13; i++) keyMapCode['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) keyMapCode['numpad '+i] = i + 96

// Create reverse mapping
const codeMapKey = {};
for(let keyStr in keyMapCode) {
	if(keyMapCode.hasOwnProperty(keyStr)) {
		codeMapKey[keyMapCode[keyStr]] = keyStr;
	}
}
for(let keyStr in keyMapCodeAliases) {
	if(keyMapCodeAliases.hasOwnProperty(keyStr)) {
		keyMapCode[keyStr] = keyMapCodeAliases[keyStr];
	}
}
export {
	codeMapKey,
	keyMapCode,
	keyMapCodeAliases,
}

/**
 * code 和 key 互相转换
 * @param  {object | number | string} searchInput ex:event | 112 | 'tab'
 * @return {stirng | number}             ex: 'tab' | 112
 */
export default function(searchInput) {
	let keyboardCode;
	if(searchInput && typeof searchInput === 'object') {
		keyboardCode = event.which || event.keyCode || event.charCode
		searchInput = keyboardCode || searchInput;
	}
	// code mapTo Type
	if(typeof searchInput === 'number') {
		return codeMapKey[searchInput]; // string 
	}



	// Type mapTo code
	let keyString = String(searchInput);

	// a-z A-Z
	if(keyString.length === 1 && ((keyString >= 'a' && keyString <= 'z') || (keyString >= 'A' && keyString <= 'Z'))) {
		return keyMapCode[keyString]; // number
	}

	let codeNum = keyMapCode[keyString.toLowerCase()]
	if(codeNum) {
		return codeNum; // number
	}
	
	if (keyString.length === 1) return keyString.charCodeAt(0)

  return undefined
}