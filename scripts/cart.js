var chooseAll = document.querySelector('.cart-list-choose-all input');
var checkboxes = document.querySelectorAll('.cart-product-item input');
var sum = 0;
var numberOfProducts = 0;

function updateMenu() {
    document.querySelector('.final-price').innerHTML = sum + ' ₽';
    document.querySelector('.number-of-products').innerHTML = numberOfProducts + ' шт.';
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function() {
        if (checkbox.checked == true) {
            sum += Number(checkbox.dataset.name);
            numberOfProducts++;
        } else {
            sum -= Number(checkbox.dataset.name);
            numberOfProducts--;
        }
        if (numberOfProducts == checkboxes.length) {
            chooseAll.checked = true;
        }
        updateMenu();
    });
});

chooseAll.onclick = function() {

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked == false) {
            sum += Number(checkbox.dataset.name);
            numberOfProducts++;
        }
        checkbox.checked = chooseAll.checked;
        checkbox.addEventListener('click', function() {
            if (checkbox.checked == false) {
                chooseAll.checked = false;
            }
        });
    });
    if (chooseAll.checked == false) {
        sum = 0;
        numberOfProducts = 0;
    }
    updateMenu();
}
