function makeList() {
  const todos = [];
  return (todo) => {
    if (todo) {
      if (todos.includes(todo)) {
        todos.splice(todos.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      } else {
        todos.push(todo);
        console.log(`${todo} added!`);
      }
    } else {
      if (todos.length === 0) {
        console.log("The list is empty");
      } else {
        todos.forEach((todo) => console.log(todo));
      }
    }
  };
}

let list = makeList();
list();
list("cook");
list("read");

list();

list("cook");

list();
