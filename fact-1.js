document.write("Find the factorial of 7"+"<br>")
document.write("-----------------------"+"<br>")

var a=1;
var b=parseInt(prompt("Enter the number"));
for(let i=1;i<=b;i++){
    a=i*a;
}
document.write(a+"<br>")