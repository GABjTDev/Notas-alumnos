import deleted from './deleted.js';

export default function deletedClick(){

    const btn = document.querySelector('#deleted');

    const materias = JSON.parse(localStorage.getItem('materias'));

    if(materias != null){
        btn.classList.remove('disabled');
    }

    btn.addEventListener('click', () => {
        
        deleted();

    })

}