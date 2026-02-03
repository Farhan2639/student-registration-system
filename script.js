const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let rollno = document.getElementById("rollno").value.trim();
    let course = document.getElementById("course").value.trim();

    if (!name || !email || !rollno || !course) {
        alert("Please fill all fields");
        return;
    }

    let student = { name, email, rollno, course };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    form.reset();
    displayStudents();
});

function displayStudents() {
    tableBody.innerHTML = "";
    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach(s => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.rollno}</td>
            <td>${s.course}</td>
        `;
        tableBody.appendChild(row);
    });
}

displayStudents();
