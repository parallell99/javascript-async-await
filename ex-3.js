//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here

let result1 = (data) => {
  
  console.log(data);
  
};
let result2 = (data) =>{
  console.log(data);
  
}
let error = (error) => {
  console.log(error);
  
}
getJohnProfile().then(result1).then(getJohnOrders).then(result2).catch(error)
console.log("Loading...");
