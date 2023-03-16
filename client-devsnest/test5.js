const itemsTableBody = document.querySelector('#items-table-body');
const items = [
    {
        id: 1,
        name: "Item 1",
        description: "This is item 1",
        price: 10.99
    },
    {
        id: 2,
        name: "Item 2",
        description: "This is item 2",
        price: 5.99
    },
    {
        id: 3,
        name: "Item 3",
        description: "This is item 3",
        price: 15.99
    }
];

fetch('https://example.com/api/items')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const row = itemsTableBody.insertRow();
            const idCell = row.insertCell();
            const nameCell = row.insertCell();
            const descriptionCell = row.insertCell();
            const priceCell = row.insertCell();

            idCell.textContent = item.id;
            nameCell.textContent = item.name;
            descriptionCell.textContent = item.description;
            priceCell.textContent = item.price;
        });
    })
    .catch(error => console.log(error));
