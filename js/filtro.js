
const shoppingList = ['Arroz', 'feijão', 'Carne', 'Massa', 'Biscoito', 'Pao', 'Carro', 'melancia', 'maçã', 'faca' , 'galinha', 'agua', 'policia', 'bombeiros']
const listEL = document.getElementById ('list');
const alista = document.getElementById('alista');
alista.addEventListener('input', inputHandler);
this.fillList();
function fillList(list = shoppingList){
    listEL.innerHTML = "";
    for(let i=0; i < list.length; i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEL.appendChild(listItems);
    }
}
 function inputHandler(){
    const filteredList = shoppingList.filter(el =>{
        const listItem = el.toLowerCase();
            const searchword = alista.value.toLowerCase();
            return listItem.includes(searchword);
    });
    fillList(filteredList);
 }
 