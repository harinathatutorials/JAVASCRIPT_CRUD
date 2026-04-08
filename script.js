
 $(document).ready(function() {
            const students = [
                { id: 1, name: 'John Doe', email: 'john@example.com' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
                { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
                { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
                { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' }
            ];
            // Populate the table with student data
            students.forEach(student => {
                $('#studentTableBody').append(`
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                        <td>
                            <button class="btn btn-success" onclick="editStudent(${student.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteStudent(${student.id}, '${student.name}')">Delete</button>
                        </td>
                    </tr>
                `);
            });
           // alert('Welcome to the CRUD Operations page!');

        });
        function editStudent(id) {
            // Implement edit functionality here
            alert('Edit student with ID: ' + id);
            // You can add your edit logic here to update the student information in the table
            const studentRow = $('#studentTableBody').find(`tr:has(td:contains(${id}))`);
            const name = studentRow.find('td:eq(1)').text();
            const email = studentRow.find('td:eq(2)').text();

            // Show a prompt or modal to edit the student information
            const newName = prompt('Enter new name:', name);
            const newEmail = prompt('Enter new email:', email);

            // Update the table with the new values
            studentRow.find('td:eq(1)').text(newName);
            studentRow.find('td:eq(2)').text(newEmail);
        }

        function deleteStudent(id, name) {
            if (confirm('Are you sure you want to delete ' + name + '?')) {
                // Implement delete functionality here
                alert('Delete student with ID: ' + id + ', Name: ' + name);
                // Remove the student from the table
                $('#studentTableBody').find(`tr:has(td:contains(${id}))`).remove();
            }
        }
        function createStudent() {
            // Implement create functionality here
            // alert('Create a new student');
            // You can add your create logic here to add a new student to the table
            const newId = $('#studentTableBody tr').length + 1; // Generate a new ID based on the number of rows
            const newName = prompt('Enter name for the new student:');
            const newEmail = prompt('Enter email for the new student:');

            // Append the new student to the table
            $('#studentTableBody').append(`
                <tr>
                    <td>${newId}</td>
                    <td>${newName}</td>
                    <td>${newEmail}</td>
                    <td>
                        <button class="btn btn-success" onclick="editStudent(${newId})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteStudent(${newId}, '${newName}')">Delete</button>
                    </td>
                </tr>
            `);
        }   
