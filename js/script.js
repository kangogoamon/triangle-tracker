function answer(){
var checker=[];
checker.push(parseFloat(prompt("Enter side A: ")));
  if (isNaN(checker[0])=== true){
    alert("Please enter a number");
  }else{
  checker.push(parseFloat(prompt("Enter side B: ")));
    if (isNaN(checker[1])=== true){
        alert("Please enter a number");
      }else{
      checker.push(parseFloat(prompt("Enter side C: ")));
        if (isNaN(checker[2])=== true){
            alert("Please enter a number in the field");
        }else{
        if((checker[0]+checker[1])<=checker[2] || (checker[1]+checker[2])<=checker[0] || (checker[0]+checker[2])<=checker[1]){
            alert("Your shape is Not a Triangle");
        }
        else if(checker[0]===checker[1] && checker[0]===checker[2] && checker[1]===checker[2]){
            alert("Your shape is  an Equilateral");
        }
        else if(checker[0]===checker[1] || checker[1]===checker[2] || checker[0]===checker[2]){
            alert("Your shape is an Isosceles");
        }
        else if((checker[0]+checker[1])>=checker[2] || (checker[1]+checker[2])>=checker[0] || (checker[0]+checker[2])>=checker[1]){
            alert("Your shape is Scalene");
        }
        else{
            alert("Value entered must be a number");
        }
      }
    }
  }
};
