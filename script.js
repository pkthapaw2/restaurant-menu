// Sample random menu items
const foodItems = [
    "Cheeseburger", "Spaghetti Carbonara", "Grilled Salmon",
    "Veggie Pizza", "Chicken Tacos", "Steak & Fries"
];

const drinkItems = [
    "Coca Cola", "Orange Juice", "Iced Coffee",
    "Green Tea", "Lemonade", "Mojito"
];

function getRandomItems(arr, num) {
    return arr.sort(() => 0.5 - Math.random()).slice(0, num);
}

function displayMenu() {
    const foodList = document.getElementById("food-menu");
    const drinkList = document.getElementById("drink-menu");

    getRandomItems(foodItems, 4).forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        foodList.appendChild(li);
    });

    getRandomItems(drinkItems, 3).forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        drinkList.appendChild(li);
    });
}

function showTableNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    const tableNum = urlParams.get("table");
    if (tableNum) {
        document.getElementById("table-number").textContent = `Table Number: ${tableNum}`;
    }
}

window.onload = () => {
    showTableNumber();
    displayMenu();
};
