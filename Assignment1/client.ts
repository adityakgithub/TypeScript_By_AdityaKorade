/*1. Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
Input : 23 89 6
Output : Maximum number is 89

pop*/
function maximum(a:number,b:number,c:number):number
{
    var res:number=0;
    a>=b?(a>=c? res=a : res=c):(b>=c?res=b: res=c);
    return res;
}

var no1,no2,no3,iRet:number;
no1=23,no2=89,no3=6;
iRet=Math.max(no1,no2,no3);
console.log("Maximum of 23,89,6 is : ",iRet);


/*
2. Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.
Input : 5
Output : Area of circle is 78.5*/


function Area(radius:number): number 
{
    return (Math.PI)*(Math.pow(radius,2));
}
var ra:number=5;
console.log("Area= "+Area(ra)+"("+Math.round(Area(ra))+")cm square");


/*
3. Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10*/



function DisplayFactors(no:number) :void
{
    console.log("Factor of 20= 1 ");
    for(var i:number=2;i<no;i++){
        if(no%i==0)
        console.log("\t"+i+"\t");
    }  
}
var ra:number=20;
DisplayFactors(ra);


/*
4. Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is prime number
5. Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input : 21
Output : 1 1 2 3 5 8 13 21
*/
