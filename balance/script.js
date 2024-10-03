const form = document.querySelector('form');
let inputs = form.getElementsByTagName('input');

document.getElementById('submit_button').addEventListener('click', function (e) {
    e.preventDefault();
    
    if (inputs.name.value=='' || inputs.date.value=='' || inputs.amount.value=='' ) {
        alert('Please fill all of the fields !')
    } else {
        var formData = new FormData(document.querySelector("form"));
        console.log(Object.fromEntries(formData));
    
        let tr = document.createElement('tr');
    
        let td1 = document.createElement('td');
    
        td1.textContent = formData.get('type');
        tr.appendChild(td1);
    
        let td2 = document.createElement('td');
        td2.textContent = formData.get('name');
        tr.appendChild(td2);
        
        let td3 = document.createElement('td');
        td3.textContent = formData.get('date');
        tr.appendChild(td3);
    
        let td4 = document.createElement('td');
        td4.textContent = formData.get('amount')+ '€';
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        let button = document.createElement('button');
        button.textContent='X';
        button.className='erase'

        button.addEventListener('click', function(e)  {
            tr.remove();
            
        })
        td5.appendChild(button);
        tr.appendChild(td5);
        
        document.querySelector("table").appendChild(tr);
    
        inputs.name.value='';
        inputs.date.value='';
        inputs.amount.value='';
        document.getElementById('type-select').selectedIndex=0;
        
    }
});