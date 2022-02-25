let user = {
  name: 'Suxrob',
  surname: 'Salomov',
  age: 18
}
let info = {
  school: false,
  isMarried: false,
  car: 'Netu'
}

// Соеденить два объекта в один 
let test = Object.assign(user,info)
console.log(test);

// получить все ключи в один массив и все значения тоже в один отдельный массив
let all = Object.keys(test);
let all2 = Object.values(all)
console.log(all)
console.log(all2)

// соеденить два массива в один
let arr = ['the string', 7, {a:10}]
let arr2 = ['text', 8, {a:11}]
let res = arr.concat(arr2)
console.log(res)

// отфильтровать массив по типам данных элементов
// let str = []
// let num = []
// let obj = []
// arr.filter(item => typeof item === 'string' ? str.push(item) || typeof item === 'number' ? num.push(item) || typeof item === 'object' ? obj.push(item))

let arr = [[{a: {price: 20}}][{a: {price: 35}}][{a: {price: 44}}]] 
let total = 0