let formE1 = document.querySelector('.form');
let tbody = document.querySelector('.tbody');
const table = document.getElementsByTagName('table')

formE1.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formE1);
    // Manually include checkbox values as 'on' or 'off' in the FormData
    formE1.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        formData.append(checkbox.name, checkbox.checked ? 'true' : 'false');
    });

    // Convert formData to an object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Create a new row and populate it with the form data
    let tr = document.createElement('tr');
    let emailTd = document.createElement('td');
    let passwordTd = document.createElement('td');
    let termsTd = document.createElement('td');

    emailTd.innerText = data.email || ''; // Use data.email to get the email value
    passwordTd.innerText = data.password || ''; // Use data.password to get the password value
    termsTd.innerText = data.terms || ''; // Use data.terms to get the terms value

    // Append the table data cells (td) to the table row (tr)
    tr.appendChild(emailTd);
    tr.appendChild(passwordTd);
    tr.appendChild(termsTd);

    // Append the table row (tr) to the table body (tbody)
    tbody.appendChild(tr);

    formE1.reset()    
});

let sendData = document.querySelector('.sendData')
sendData.addEventListener('click', (e) => {
    e.preventDefault();
    let tRows = document.querySelectorAll('tr');
    let newData = [];

    tRows.forEach((row) => {
        let tData = row.querySelectorAll('td');

        // Check if there are at least 3 td elements in the row
        if (tData.length >= 3) {
            let tempData = {};

            tempData['name'] = tData[0].innerText;
            tempData['email'] = tData[1].innerText;
            tempData['terms'] = tData[2].innerText;

            newData.push(tempData);
        } else {
            console.error('Incomplete or empty row found.');
        }
    });
    let jsonValueToInsert = JSON.stringify(newData);

    console.log(jsonValueToInsert);
    console.log(newData);

    var inputData = document.getElementById('inputData');

    inputData.value = jsonValueToInsert;
    document.getElementById('myForm').submit();
});