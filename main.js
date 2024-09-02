const inputEl = document.querySelector('#search');
inputEl.addEventListener('submit', (e) => {
    e.preventDefault();
})

const searchInput = document.querySelector('#searchFunc');

searchInput.oninput = function() {
  const value = this.value.trim();
  const list = document.querySelectorAll('#newsSection .newsBlock');

  list.forEach(element => {
    if (element.innerText.search(value) === -1) {
        element.classList.add('hide');
    } else {
        element.classList.remove('hide');
    }
  });
};

let regButton = document.querySelector('#reg');
regButton.onclick = function(){
  let greet = prompt("Привет! Как тебя зовут?");
  if (greet != null) {
    let password = prompt("Entere ur password!")
    let wpassword = prompt("Repeat ur password!")
    if (wpassword != password) {
      console.log("error!")
      regButton.innerHTML = "Регистрация";
    } else {
      regButton.innerHTML = greet;
    }
  }
}