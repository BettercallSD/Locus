const form = document.querySelector(".myForm");
const amount = document.querySelector("#amount");
const category = document.querySelector("#category");
const description = document.querySelector("#description");
const tbody = document.querySelector("tbody");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (Number(amount.value) <= 0) {
        alert("Amount must be greater than 0");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${category.value}</td>
        <td>${description.value}</td>
        <td>${amount.value}</td>
        <td><button class="delbtn">Delete</button></td>
    `;

    tbody.appendChild(row);

    amount.value = "";
    description.value = "";

    row.querySelector(".delbtn").addEventListener("click", () => row.remove());
});