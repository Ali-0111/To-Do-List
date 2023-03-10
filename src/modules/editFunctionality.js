import list from './todoList.js';
class EditOption {
  constructor() {
    this.setControlls = () => {
      this.threeDots = document.querySelectorAll('.moreBtn');
      this.threeDots.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          this.enableEdition(index);
          this.Description[index].focus();
        });
      });
      this.Description = document.querySelectorAll('.item-text');
      this.Description.forEach((input, index) => {
        input.addEventListener('focusin', () => {
          this.enableEdition(index);
        });
      });
    };
  }

  enableEdition(i) {
    this.delteTaskBtn = document.getElementById(`delete-Btn${i + 1}`);
    this.delteTaskBtn.classList.add('delete-Task-Btn');
    this.delteTaskBtn.onclick = () => {
      list.db = list.db.filter((t, index) => index !== i);
      list.show();
      list.save();
      this.setControlls();
    };

    const input = this.Description[i];

    input.removeAttribute('readonly');
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.saveEdition(i, input);
      }
    });
    this.threeDots[i].addEventListener('blur', (e) => {
      if (!e.target.classList.contains('moreBtn')) {
        this.saveEdition(i, input);
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.value = list.db[i].description;
        this.disableEdition(input);
      }
    });
  }

  saveEdition(i, input) {
    list.db[i].description = input.value;
    this.disableEdition(input);
  }

  disableEdition(input) {
    input.setAttribute('readonly', true);
    list.show();
    list.save();
    this.setControlls();
  }
}
const Edit = new EditOption();

export default Edit;