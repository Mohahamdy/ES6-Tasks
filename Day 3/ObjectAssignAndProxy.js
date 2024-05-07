/** ---------------- Object assign ----------------------------- */

export function showDetails(options) {
  let Default = {
    fname: "Default first name",
    lname: "Default last name",
    age: 1,
    address: "Default address",
  };

  Object.assign(Default, options);
  console.log(
    `Fname: ${Default["fname"]} | Lname: ${Default["lname"]} | age: ${Default["age"]} | Address: ${Default["address"]}`
  );
}

showDetails({ fname: "Ahmed", address: "Cairo" });

/** -------------------- Proxy --------------------------- */

let product = {
  name: "book",
  price: 20,
  quantity: 10,
};

let handler = {
  set: function (target, prop, vlaue) {
    if (prop == "name" && typeof vlaue == "string") {
      target[prop] = vlaue;
    } else if (prop == "price" && typeof vlaue == "number" && vlaue > 10) {
      target[prop] = vlaue;
    } else if (prop == "quantity" && typeof vlaue == "number" && vlaue > 0) {
      target[prop] = vlaue;
    } else {
      throw `${prop} is not valid`;
    }
  },
  get: (target, prop) => {
    return target[prop];
  },
};

let ProxyProduct = new Proxy(product, handler);

// ProxyProduct.name = 15;
ProxyProduct.name = "milk";

// ProxyProduct.price = 5;
// ProxyProduct.price = -5;
ProxyProduct.price = 35;

// ProxyProduct.quantity = -19;
ProxyProduct.quantity = 13;

console.log(ProxyProduct);
