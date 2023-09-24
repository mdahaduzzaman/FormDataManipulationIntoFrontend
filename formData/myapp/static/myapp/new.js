/*
        // Sample data for demonstration
        const data = [
            { id: 1, name: "John", age: 25, email: "john@example.com" },
            { id: 2, name: "Jane", age: 30, email: "jane@example.com" },
            { id: 3, name: "Doe", age: 35, email: "doe@example.com" },
        ];

        const tableBody = document.getElementById("table-body");
        const editModal = new bootstrap.Modal(document.getElementById("editModal"));

        // Function to populate the table with data
        function populateTable() {
            tableBody.innerHTML = "";

            data.forEach((item, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.email}</td>
                    <td>
                        <button class="btn btn-warning btn-edit" data-index="${index}">Edit</button>
                        <button class="btn btn-danger btn-delete" data-index="${index}">Delete</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        }

        // Function to populate the edit form with existing values
        function populateEditForm(index) {
            const item = data[index];
            const editIndexField = document.getElementById("editIndex");
            const editNameField = document.getElementById("editName");
            const editAgeField = document.getElementById("editAge");
            const editEmailField = document.getElementById("editEmail");

            editIndexField.value = index;
            editNameField.value = item.name;
            editAgeField.value = item.age;
            editEmailField.value = item.email;
        }

        // Initial population of the table
        populateTable();

        // Event listener for the Edit button
        tableBody.addEventListener("click", (event) => {
            if (event.target.classList.contains("btn-edit")) {
                const index = event.target.getAttribute("data-index");
                populateEditForm(index);
                editModal.show();
            }
        });

        // Event listener for saving changes
        document.getElementById("saveChanges").addEventListener("click", () => {
            const editIndex = document.getElementById("editIndex").value;
            const newName = document.getElementById("editName").value;
            const newAge = document.getElementById("editAge").value;
            const newEmail = document.getElementById("editEmail").value;

            data[editIndex].name = newName;
            data[editIndex].age = newAge;
            data[editIndex].email = newEmail;
            populateTable();
            editModal.hide();
        });

        // Event listener for the Delete button
        tableBody.addEventListener("click", (event) => {
            if (event.target.classList.contains("btn-delete")) {
                const index = event.target.getAttribute("data-index");
                data.splice(index, 1);
                populateTable();
            }
        });
*/