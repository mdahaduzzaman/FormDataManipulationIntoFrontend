let form = document.querySelector('.form');
let tbody = document.querySelector('.tbody');

const table = document.querySelector('table');
let rowCounter = 1;

// Convert formData to an object
const data = [];


// Add form data into table
form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    // Manually include checkbox values as 'on' or 'off' in the FormData
    form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        formData.append(checkbox.name, checkbox.checked ? 'true' : 'false');
    });

    const rowData = {};
    formData.forEach((value, key) => {
        rowData[key] = value;
    });

    if(rowData['id']){
        desiredValue = rowData['id'];
        // Update the corresponding data entry
        const editedRow = document.querySelector(`tr[data-row-id="${desiredValue}"]`);
        const alltd = editedRow.childNodes;
        
        alltd[1].innerText =  rowData['name']
        alltd[2].innerText =  rowData['email']
        alltd[3].innerText =  rowData['password']
        alltd[4].innerText =  rowData['terms']
        
        form.reset();
    }else{
        // Create a new row and populate it with the form data
        const tr = document.createElement('tr');
        const idTd = document.createElement('td');
        const nameTd = document.createElement('td');
        const emailTd = document.createElement('td');
        const passwordTd = document.createElement('td');
        const termsTd = document.createElement('td');
        const actionTd = document.createElement('td');

        // Assign a unique ID to the row
        const rowIndex = rowCounter;
        tr.setAttribute('data-row-id', rowIndex);

        idTd.innerText = rowIndex;
        nameTd.innerText = rowData.name || '';
        emailTd.innerText = rowData.email || '';
        passwordTd.innerText = rowData.password || '';
        termsTd.innerText = rowData.terms || '';

        actionTd.innerHTML = `<button class="btn btn-warning btn-edit" data-index="${rowIndex}">Edit</button>
        <button class="btn btn-danger btn-delete" data-index="${rowIndex}">Delete</button>`;

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(passwordTd);
        tr.appendChild(termsTd);
        tr.appendChild(actionTd);

        tbody.appendChild(tr);

        // Push rowData to the data array
        data.push(rowData);

        form.reset();
        rowCounter++;
    }
});


// Function to populate the edit form with existing values
function populateEditForm(index) {
    const item = data[index-1];
    console.log(data)
    console.log(item)
    if (item) {
        const editIndexField = document.getElementById("editIndex");
        const editNameField = document.getElementById("editName");
        const editPasswordField = document.getElementById("editPassword");
        const editEmailField = document.getElementById("editEmail");
        const editCheckField = document.getElementById("editCheck");

        editIndexField.value = index;
        editNameField.value = item.name || '';
        editPasswordField.value = item.password || '';
        editEmailField.value = item.email || '';
        editCheckField.checked = item.terms || false;
    }
}

// Event listener for the Edit button
tbody.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-edit")) {
        const index = event.target.getAttribute("data-index");
        populateEditForm(index);
    }
});


// Event listener for the Delete button
tbody.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-delete")) {
        const index = event.target.getAttribute("data-index");
        // Remove the corresponding data entry
        const deleteRow = document.querySelector(`tr[data-row-id="${index}"]`);
        deleteRow.remove();
    }
});

// This function will populate the total table data into input value
let sendData = document.querySelector('.sendData');
sendData.addEventListener('click', (e) => {
    e.preventDefault();
    let tRows = document.querySelectorAll('tr');
    let newData = [];

    tRows.forEach((row) => {
        let tData = row.querySelectorAll('td');
        if (tData.length >= 5) {
            let tempData = {};

            tempData['id'] = tData[0].innerText;
            tempData['name'] = tData[1].innerText;
            tempData['email'] = tData[2].innerText;
            tempData['password'] = tData[3].innerText;
            tempData['terms'] = tData[4].innerText;

            newData.push(tempData);
        }
    });
    // CONVERTING INTO STRING 
    let jsonValueToInsert = JSON.stringify(newData);
    let inputData = document.getElementById('inputData');
    inputData.value = jsonValueToInsert;
    document.getElementById('myForm').submit();
});
