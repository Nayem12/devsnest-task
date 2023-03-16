fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => userShow(data));

function userShow(data) {
  const usersData = document.getElementById("users-data");

  data.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    userCard.innerHTML = `
    <div>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
    </div>
    `;
    const removeBtn = document.createElement("button");
    removeBtn.classList.add('btn')
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      usersData.removeChild(userCard);
    });
    userCard.appendChild(removeBtn);

    usersData.appendChild(userCard);
  });
}
