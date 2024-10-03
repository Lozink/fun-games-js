
let listOfTasks = document.getElementById('list')

document.addEventListener("keydown", function(event) {
    if (event.key == 'Enter') {
        newTask = document.getElementById('input').value;
        if (newTask != '') {

            let i = listOfTasks.length;
            let div = document.createElement('div');
            div.classList.add('task');

            let button1=document.createElement('button');
            button1.classList.add('blue_button');
            button1.addEventListener("click", function () {
                    let color = button1.style.backgroundColor;
                    if (color == 'rgb(101, 169, 243)') {
                        button1.style.backgroundColor = 'white';
                        p.style.textDecoration="none";
                    } else {
                        button1.style.backgroundColor = '#65a9f3';
                        p.style.textDecoration="line-through";
                    }
            });

            let p=document.createElement('p');
            p.textContent=newTask;

            let button2=document.createElement('button');
            button2.classList.add('red_button')
            button2.innerHTML="X";
            button2.addEventListener("click", function () {
                listOfTasks.removeChild(this.parentNode);
            });

            div.appendChild(button1);
            div.appendChild(p);
            div.appendChild(button2);
            listOfTasks.appendChild(div);

            document.getElementById('input').value = '';
        }
    } 
});