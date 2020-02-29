var points = [];
function myFunction() {
    var str = document.getElementById("input").value;
    var res = str.split(",");
    document.getElementById("demo").innerHTML = res;
 
    //reverse   
    res.reverse();
    document.getElementById("reverse").innerHTML = res;

    //sort
    res.sort(function(b, a){return a - b});
     
    //max
    document.getElementById("max").innerHTML = res[0];
     
    //min
    document.getElementById("min").innerHTML = res[res.length -1];

    //sum
    var sum = res.reduce(getSum,0);
    document.getElementById("sum").innerHTML = sum;

    //average
    var average = sum / (res.length);
    document.getElementById("average").innerHTML = average; 

}

function getSum(total, num){
    return total + Math.round(num);
}
  
