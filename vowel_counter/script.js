let vowels = ["a","e","i","o","u","A","E","I","O","U"];

document.getElementById('text').addEventListener('input', function() {

    let text = document.getElementById('text').value;
    let counter = 0;

    for (let i = 0; i<text.length;i++) {
        if (vowels.includes(text[i])) {
            counter++;
        }
    }

    document.getElementById('counter').innerHTML = "Number of vowels : " + counter;
});

document.getElementById('clear_button').addEventListener('click', function() {

    document.getElementById('text').value ='';
});