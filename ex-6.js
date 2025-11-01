// Exercise #6
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
 let result = async() =>{
  try{
  let profileJohn = await getJohnProfile ()

  console.log(profileJohn);
  let orderJohn = await getJohnOrders()
  console.log(orderJohn);

  }catch(error){
    console.log(error);

  }
}
result()