// //1. synchronous task

// // console.log(`hello`);

// // console.log(`world, `);

// // console.log(`Good bye`);

// //2. asynchronous task

// console.log(`hello`);

// //setTimeout=asynchronous function

// let num = 0;

// async function delay() {

//   return new Promise((resolve) => {

//     setTimeout(() => {

//       console.log(`world, `);

//       resolve(10);

//     }, 3000);

//   });

// }

// async function getNum() {

//   num = await delay();

//   console.log(`Good bye: ${num}`);

// }

// getNum();

const friends = [
  { fullname: "Peter Parker", address: "Newyork, USA" },
  { fullname: "Gwen Stacy", address: "Newyork, USA" },
];

async function getFullname(name, surname) {
  return `${name} ${surname}`;
}

//getFriendName is a higher order function
async function getFriendName(name, surname, callbackFn) {
  //ส่ง functionเป็น parameter
  return new Promise((resolve, reject) => {
    const fullname = callbackFn(name, surname);
    if (fullname === undefined){
        reject(new Error("cannot get fullname"));
    }
    resolve(fullname);
  })
}

async function getAddress(fullname) {
  return new Promise((resolve, reject) => {
    let myfriend = friends.find((friendd) =>
      friendd.fullname.includes(fullname)
    );
    if (myfriend === undefined) {
      reject(new Error("your friend was not found"));
    }
    resolve(myfriend.address);
  });
}

//getAddress();

//getFullName is a callback function
//getFriendName('Paul','Lee', getFullname);

// //1. using promise.then() method
// getFriendName("Gwen", "Stacy", getFullname)
//   .then((myFriendName) => {
//     console.log(myFriendName);
//     return myFriendName;
//   })
//   .then((friendFullname) => {
//       console.log(friendFullname);
//      getAddress(friendFullname)
//      .then((friendAddr) => {
//          console.log(friendAddr);
//      });
//   })

//   .catch((err) => console.log(err));

//2. using async/await
async function main(){ //ต้องเอา await อยู่ใต้ function async *** ข้อบังคับเลยยยยยยยยยยยยนาจาา
    const myFriendName = await getFriendName("Gwen", "Stacy", getFullname);
    const myFriendAddr = await getAddress(myFriendName);
    console.log(myFriendAddr);
}
main();

