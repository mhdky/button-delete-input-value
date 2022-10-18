const search = document.querySelector('#search');
const btnDeleteValue = document.querySelector('.btn-delete-value');

function inputText() {
    if(search.value.length > 0) {
        btnDeleteValue.style.display = 'block';
    } else {
        btnDeleteValue.style.display = 'none';
    }
}

btnDeleteValue.addEventListener('click', () => {
    search.value = "";
    btnDeleteValue.style.display = 'none';
})