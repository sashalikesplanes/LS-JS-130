"use strict";

const ItemCreator = (function () {
  function getSku(name, category) {
    const skuFirstPart = name.split(" ").join("").toUpperCase().slice(0, 3);
    const skuSecondPart = category.toUpperCase().slice(0, 2);
    return skuFirstPart + skuSecondPart;
  }

  function validArgs(...args) {
    if (args.length < 3) return false;
    const [name, category, quantity] = args;
    if (name.split(" ").join("").length < 5) return false;
    if (category.includes(" ") || category.length < 5) return false;
    if (quantity === undefined) return false;
    return true;
  }

  return {
    init(...args) {
      if (!validArgs(...args)) return false;
      const [name, category, quantity] = args;
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.sku = getSku(name, category);
      return this;
    },
  };
})();

const ItemManager = (function () {
  return {
    items: [],
    create(...args) {
      const newItem = Object.create(ItemCreator).init(...args);
      if (newItem) {
        this.items.push(newItem);
      } else return false;
    },
    update(sku, properties) {
      this.items.forEach((item) => {
        if (item.sku === sku) {
          Object.assign(item, properties);
        }
      });
    },
    delete(sku) {
      let indexOfSku;
      this.items.forEach((item, index) => {
        if (item.sku === sku) {
          indexOfSku = index;
        }
      });
      this.items.splice(indexOfSku, 1);
    },
    inStock() {
      return this.items.filter((item) => item.quantity > 0);
    },

    itemsInCategory(category) {
      return this.items.filter((item) => item.category === category);
    },
  };
})();

const ReportManager = (function () {
  let items;
  return {
    init(itemManager) {
      items = itemManager;
    },

    createReporter(sku) {
      return {
        itemInfo() {
          items.items.forEach((item) => {
            if (item.sku === sku) {
              Object.entries(item).forEach((entry) => {
                console.log(`${entry[0]}: ${entry[1]}`);
              });
            }
          });
        },
      };
    },

    reportInStock() {
      console.log(
        items
          .inStock()
          .map((item) => item.name)
          .join(", ")
      );
    },
  };
})();

ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update("SOCSP", { quantity: 0 });
ItemManager.items;
// // returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// // football,kitchen pot
ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory("sports");

ItemManager.delete("SOCSP");
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10
