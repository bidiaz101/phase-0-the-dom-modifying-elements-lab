const main = document.getElementById('main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader);
newHeader.innerHTML = "Brian is the champion";