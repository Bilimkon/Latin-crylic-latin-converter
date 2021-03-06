function showCurrentValue1(event) {
    const value = event.target.value;

    document.getElementById("crylic").value = transliterateCrylicToLatin(value);;
}

function showCurrentValue2(event) {
    const value = event.target.value;

    document.getElementById("latin").value = transliterateLatinToCrylic(value);;
}


var a = {
    "Ё": "YO",
    "Й": "Y",
    "Ц": "TS",
    "У": "U",
    "К": "K",
    "Е": "E",
    "Н": "N",
    "Г": "G",
    "Ш": "Sh",
    "Щ": "SCH",
    "З": "Z",
    "Х": "H",
    "ё": "yo",
    "й": "y",
    "ц": "ts",
    "у": "u",
    "к": "k",
    "е": "e",
    "н": "n",
    "г": "g",
    "ш": "sh",
    "щ": "sch",
    "з": "z",
    "х": "h",
    "Ф": "F",
    "Ы": "I",
    "В": "V",
    "А": "A",
    "П": "P",
    "Р": "R",
    "О": "O",
    "Л": "L",
    "Д": "D",
    "Ж": "J",
    "Э": "E",
    "ф": "F",
    "ы": "i",
    "в": "v",
    "а": "a",
    "п": "p",
    "р": "r",
    "о": "o",
    "л": "l",
    "д": "d",
    "ж": "j",
    "э": "e",
    "Я": "Ya",
    "Ч": "CH",
    "С": "S",
    "М": "M",
    "И": "I",
    "Т": "T",
    "Б": "B",
    "Ю": "YU",
    "я": "ya",
    "ч": "ch",
    "с": "s",
    "м": "m",
    "и": "i",
    "т": "t",
    "б": "b",
    "ю": "yu",
    "Ғ": "G'",
    "Қ": "Q'",
    "ғ": "g'",
    "ҳ": "x",
    "ў": "o'",
    "қ": "q",
    "Ў": "O'",
    "Ҳ": "X",
    "ф": "f",
};


var b = {
    "YO": "Ё",
    "Y": "Й",
    "TS": "Ц",
    "U": "У",
    "K": "К",
    "Е": "E",
    "N": "Н",
    "G": "Ғ",
    "Sh": "Ш",
    "Z": "З",
    "H": "Х",
    "yo": "ё",
    "y": "й",
    "ts": "ц",
    "u": "у",
    "k": "к",
    "e": "е",
    "n": "н",
    "g": "г",
    "sh": "ш",
    "z": "з",
    "h": "х",
    "f": "ф",
    "v": "В",
    "А": "A",
    "P": "П",
    "R": "Р",
    "О": "O",
    "L": "Л",
    "D": "Д",
    "J": "Ж",
    "E": "Э",
    "F": "Ф", 
    "v": "в",
    "а": "a",
    "p": "п",
    "r": "р",
    "о": "o",
    "l": "л",
    "d": "д",
    "j": "ж",
    "e": "э",
    "ya": "Я",
    "ch": "Ч",
    "s": "С",
    "М": "M",
    "I": "И",
    "Т": "T",
    "B": "Б",
    "Yu": "Ю",
    "ya": "я",
    "ch": "ч",
    "s": "с",
    "m": "м",
    "i": "и",
    "t": "т",
    "b": "б",
    "yu": "ю",
    "G'": "Ғ",
    "Q": "Қ",
    "g'": "ғ",
    "q": "қ",
    "O'": "Ў",
    "S": "с",
    "o'": "ў",
};


function transliterateCrylicToLatin(word) {
    return word.split('').map(function (char) {
        return a[char] || char;
    }).join("");
}

function transliterateLatinToCrylic(word) {
    return word.split('').map(function (char) {
        return b[char] || char;
    }).join("");
}