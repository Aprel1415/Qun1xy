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
                elem.classList.add('hide')
            }
        });
    }
    console.log(value);
}