// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
let result = async ()=>{
  try{
    let alldata = await getJohnProfile()
    console.log( alldata);
    
  }catch(error){
    console.log(error);
    
  }
}
result()