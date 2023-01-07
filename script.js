/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printingarray);
 
  function printingarray(arrayItems) {
    if (arrayItems.profession === "developer") {
      console.log(arrayItems);
    }
  }
}
function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(arrayForEach);
 
  function arrayForEach(arrayItems) {
    if (arrayItems.profession === "developer") 
    {
      console.log(arrayItems);
    }
  }
}

function addData() {
  //Write your code here
  let object={ id: 4, name: "susan", age: "20", profession: "intern"};
  arr.push(object);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
}

function concatenateArray() {
  //Write your code here
  let arrr2=[
    {id:5,name:"gayatri",age:"22",profession:"engineer"},
    {id:6 ,name:"manas",age:"23",profession:"data scientist"},
    {id:7 ,name:"rashi" ,age:"22" ,profession:"mba"},
  ];
  let concateArray = arr.concat(arr2);
  console.log(concateArray);
}
