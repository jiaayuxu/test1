

function fiberoo(limit){

  let num1;
  let num2;
  const result[];

  result.push(num1);
  result.push(num2);


  // 100

  for ( let i =0; i< limit - 2; i++){
     const next = num1 + num2;
     num1 = num2;
     num2 = next;

  }
   return result;

}

function numToString(data){
  return _.map(data,n => '${n}');
}

function numEvenNums (data){
  return _.filter(data, n => (n%2)===0).length;
}

