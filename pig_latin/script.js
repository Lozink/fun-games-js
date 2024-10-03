let vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
let ponctuations = [',',';','?','.','!',':'];

function translate(s) {
    let splited = s.split(" ");
    for (let i=0; i<splited.length;i++) {
        if (vowels.includes(splited[i][0])) {
            if (ponctuations.includes(splited[i].charAt(splited[i].length-1))) {
                splited[i] = splited[i].substr(0,splited[i].length-1) + 'hay' + splited[i].charAt(splited[i].length-1);
            } else {
            splited[i] = splited[i] + 'hay';
            }
        } else {
            let currentPosition = 1;
            let isVowel = false;
            while (isVowel==false && currentPosition<splited[i].length) {
                if (vowels.includes(splited[i][currentPosition])) {
                    isVowel = true;
                } else {
                    currentPosition++;
                }
            }
            if (ponctuations.includes(splited[i].charAt(splited[i].length-1))) {
                splited[i] = splited[i].substr(currentPosition,splited[i].length-currentPosition-1) + splited[i].substr(0,currentPosition) + 'ay' + splited[i].charAt(splited[i].length-1);
            } else {
                splited[i] = splited[i].substr(currentPosition,splited[i].length) + splited[i].substr(0,currentPosition) + 'ay';
            }
        }
    }
    let textTranslated = splited.join(' ');
    return(textTranslated);
}

document.getElementById('translate').addEventListener('click', function() {

    let text = document.getElementById('text').value;

    let textTranslated = translate(text);

    document.getElementById('text_translated').innerHTML = textTranslated;
})