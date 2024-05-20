const inputEl = document.querySelector('#search');
inputEl.addEventListener('submit', (e) => {
    e.preventDefault();
})

const search = document.querySelector('#searchFunc');
search.oninput= function() {
    const value = this.value.trim();
    const list = document.querySelectorAll('#newsSection .newsBlock')
    if(value != ''){
        list.forEach(elem => {
            if(elem.innerText.search(value) == -1){
                elem.classList.remove('newsBlock')
                elem.classList.add('hide')
            }
        });
    }
    // Доделать функцию скрытия элементов, таким же образом, через if
    console.log(value);
}