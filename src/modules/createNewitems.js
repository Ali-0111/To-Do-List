class Create {
  constructor() {
    this.itemsParent = document.querySelector('.items');
  }

  createItems(array) {
    this.itemsParent.innerHTML = array.map((object) => `
           <li class = "todo">
            <input type="checkbox" class="check" >
           <input readonly
               class="item-text ${object.completed ? 'scratch' : ''}"
               value="${object.description}" >
    
            <button
               class="moreBtn"
                id="delete-Btn${object.index}"
                type"button">
            </button>   
           </li>`).join('');
    return this.itemsParent;
  }
}

const create = new Create();
export default create;