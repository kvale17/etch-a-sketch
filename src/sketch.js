const container = document.querySelector('#sketch-pad');

for(let i = 1; i<=(16 ** 2); i++){
    const div = document.createElement('div');
    div.setAttribute('id', 'cell-' + i);  
    div.textContent = 'Cell' + i; 
    container.appendChild(div);
}