function makeList() {
  const list = [];
  return {
    add(todo) {
      if (list.includes(todo)) {
        console.log(`${todo} already exists.`);
      } else {
        list.push(todo);
        console.log(`${todo} added!`);
      }
    },
    list() {
      list.forEach((todo) => console.log(todo));
    },
    remove(todo) {
      const index = list.indexOf(todo);
      if (index >= 0) {
        list.splice(index, 1);
        console.log(`${todo} removed!`);
      } else {
        console.log(`${todo} is not in the list.`);
      }
    },
  };
}

let list = makeList();
list.add("peas");
list.add("peas");
list.add("corn");
list.list();
list.remove("banana");
list.remove("peas");
list.list();
