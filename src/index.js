import validatePassword from "./js/validate-password";
console.log(validatePassword("qweqwe"));

// ===== 1-й способ =====
// import {
//   fetchAllUsers,
//   fetchUsersBuId,
//   updateUsersBuId,
//   x as value,
//   y as name,
// } from "./js/api-service";
// console.log(fetchAllUsers);
// console.log(value);
// console.log(name);

// ===== 2 способ =====
import * as apiService from "./js/api-service";
console.log(apiService);
