// // import list from './todoList.js';
// import edit from './editFunctionality.js';

// class RemoveCompleted {
//   constructor() {
//     this.setControlls = () => {
//       this.checkInputs = document.querySelectorAll('.check');
//       this.checkButtons = document.querySelectorAll('.check-btn');
//       this.checkButtons.forEach((checkBox, index) => {
//         checkBox.addEventListener('click', () => {
//           this.check(index);
//         });
//       });
//     };
//   }

//   check(i) {
//     if (!list.db[i].completed) {
//       list.db[i].completed = true;
//     } else {
//       list.db[i].completed = false;
//     }
//     list.show();
//     list.save();
//     edit.setControlls();
//     this.setControlls();
//   }
// }
// const marked = new RemoveCompleted();

// export default marked;