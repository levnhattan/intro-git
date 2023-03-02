/**
 * GIới thiệu một số hàn built-in
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval
 */
/*
Kiểu dữ liệu trong javascript
1. Dữ liệu nguyên thủy - Primitive Data
    -Number
    -String
    -Boolean
    -Underfined
    -null
    -Symbol

2. Dữ liệu phức tạp - Complex Data
    -Fuction
    -Object
*/
// kiểm tra kiểu dữ liệu: 
// console.log(typeof tên biến);

/*
    == & != : so sánh với values
    === & !== : so sánh với values và datatype
*/
/*Trong Javascript có 6 giá trị sau được coi là Falsy:

false
0 (số không)
'' or "" (chuỗi rỗng)
null
undefined
NaN
*/
var myFunction = function(){
    alert('12345');
}


var myObject ={
    name: 'LVNT',
    age: 19,
    address: 'QN'
};
console.log('myObject', myObject);

var myArray = [
    'js',
    'PHP',
    123
];
console.log('myArray', myArray);

var number = 10

var a = ++number * 3 - number-- * 2
var b = number++ * 2 - --number * 3

console.log(a + b)
const x = NaN || 'Hi' && null && 100
const y = 1 || NaN && 'Hi' || null && 100

console.log('x la' ,x);
console.log(y);
// template string ES6 
var firstName = 'LV', lastName = 'NT';
console.log(`Toi la: ${firstName} ${lastName}`)

var myString = 'học js tại f8';
// 1. length
console.log(myString.length);
// 2. Find index 
console.log(myString.indexOf('js'));
// 3. Cut String 
console.log(myString.slice(3,6));
// 4. Replace 
console.log(myString.replace(/js/g,'javascript'));
// 5. Convert to upper case
console.log(myString.toLocaleUpperCase());
// 6. Convert to lower case
console.log(myString.toLocaleLowerCase());
// 7. Trim
console.log(myString.trim());
// 8. Split
var languages = 'js, PHP, Ruby';
console.log(languages.split(', '));
// cắt từng chữ cái: console.log(languages.split(''));
// 9. Get a character by index
const myString2 = 'LVNT';
console.log(myString2.charAt(0));
// hay console.log(myString2[1]);

var n = '20';
console.log(typeof n);
/** Làm việc với Array
 1. to string
 2. Join
 3. Pop
 4. Push
 5. Shift
 6. Unshift
 7. Splicing
 8. concat: nối 2 array
 9. Slicing

array methods: 
    forEach(): duyệt qua từng phần tử của mảng
    every(): ktra tất cả các phần tử phải thỏa mãn điều kiện nào đó
    some(): tối thiểu 1 ptu thỏa mãn true/false
    find(): tất cả phải thỏa mãn đk true/false
    filter()
    map()
    reduce()
 */
var languages =[
    'js',
    'PHP',
    'Ruby'
];
// console.log(languages.toString());
console.log(languages.join(', '));
console.log(languages.pop());//xóa pt cuối mảng
// và trả về phần tử đã xóa
console.log(languages.push('java', 'c')); //Thêm 
// 1 hoặc nhiều phần tử vào cuối mảng và trả về length
console.log(languages.shift()); // xóa pt đầu mảng
// và trả về phần tử đã xóa
console.log(languages.unshift('dary', 'c++')); //Thêm 
// 1 hoặc nhiều phần tử vào đầu mảng và trả về length
// languages.splice(1, 2, languages.length);
languages.splice(1, 1, '123'); //tại index 1 xóa 1 pt và thay thế bằng 123
console.log(languages);

//HTML DOM
// có 3 thành phần
/**
 * 1. Element: id, class, tag, css selector, html collection
 *  1. getByElementsById:
 *       trả về trực tiếp element
 * 
    2. getByElementsByClassName
    3. getByElementsByTagName
    4. querySelector: 
        trả về trực tiếp element
    5. querySelectorAll
    6. HTML collection
    7. document.write
 * 


 * 2. Attribute từ element truy xuất tới attribute: setAttribute và getAttribute
 * 3. text: thuộc tính innerText, textContent: lấy giá trị thật
 * 
 */
