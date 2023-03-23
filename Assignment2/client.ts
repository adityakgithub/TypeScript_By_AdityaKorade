/* 1. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum number is 89 

pop*/
function maximum(arr:number[]):number
{
    var iCnt: number=0;
    var max: number =arr[0];
    for(iCnt ; iCnt<arr.length; iCnt++)
    {
        if(arr[iCnt] > max)  
               max = arr[iCnt];
    }
    return max;
}

var arr:number[]=[23,89,6,29,56,45,77,32];
var iRet:number=maximum(arr);
console.log("Maximum in Array: ",iRet); 
// ______________________________________________________________________________
// oop
class maximum1
{
    arr:number[];
    constructor(arr:number[]) {
        this.arr=arr;       
    }
    
    max()
    {
        var iCnt:number=0;
        var max: number =arr[0];
        {
            for(iCnt ; iCnt<arr.length; iCnt++)
            {
                if(arr[iCnt] > max)  
                    max = arr[iCnt];
            }
        return max;   
        }
    }
    
}

var arr:number[]=[23,89,6,29,56,45,77,32]
var obj=new maximum1(arr);
var iRet=obj.max();
console.log("Maximum in Array: ",iRet);

/* 2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input : 23 6 7 4 5 7
Output : Addition is 52 
pop*/
function summation1(arr:number[]):number
{
    var iCnt: number=0;
    var sum: number =0;
    for(iCnt ; iCnt<arr.length; iCnt++)
    {
        sum=sum+arr[iCnt];
    }
    return sum;
}

var arr:number[]=[23,6, 7, 4, 5, 7];
var iRet:number=summation1(arr);
console.log("Summation of Array: ",iRet); 
// ______________________________________________________________________________
// oop
class summation2 
{
    arr:number[];
    constructor(arr:number[]) {
        this.arr=arr;       
    }
    
    sum()
    {
        var iCnt: number =0;
        var sum : number =0;
        {
            for(iCnt ; iCnt<arr.length; iCnt++)
            {
                sum=sum+arr[iCnt];
            }
        return sum;   
        }
    }
    
}

var arr:number[]=[23,6, 7, 4, 5, 7]
var obj1=new summation2(arr);
var iRet=obj1.sum();
console.log("Maximum in Array: ",iRet);


/* 3. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Second Maximum number is 77 */

function maximum(arr:number[]):number
{
    var iCnt: number=0;
    var max: number =arr[0];
    var s2ndH: number=0;
    for(iCnt ; iCnt<arr.length; iCnt++)
    {
        if(arr[iCnt] > max)  
               max = arr[iCnt];
    }
    for (iCnt=0;iCnt<arr.length; iCnt++)
    {
        if (arr[iCnt]<max && arr[iCnt]>=s2ndH ) {
            s2ndH=arr[iCnt]
        }
    }
    return s2ndH;
}

var arr:number[]=[23,89,6,29,56,45,77,32];
var iRet:number=maximum(arr);
console.log("2nd Maximum in Array: ",iRet);

/* 4. Write a typescript program which contains one arrow function named as ChkArmstrong. That
function accepts one numbers and check whether number is Armstrong number or not.
Input : 153
Output : It is Armstrong number */
function ChkArmstrong(fNo:number)   
{
    var fNoTemp : number = fNo;
    var sum : number = 0, digits: number=0, last:number=0 ;
    while(fNoTemp>0)    
    {   
        fNoTemp = fNoTemp/10;   
        digits++;   
    }
    fNoTemp=fNo;
    while(fNoTemp>0)   
    {        
        last = fNoTemp % 10;   
        sum +=  (Math.pow(last, digits));   
        fNoTemp = fNoTemp/10;   
    }  

    if(fNo==sum)
    return true;
    return false;

}

var aNo : number =  153;
var iRt : boolean = ChkArmstrong(aNo);
if (iRt!= true) 
{
    console.log("Number "+aNo+" is Armstrong!");
} else 
{
    console.log("Number "+aNo+" is Not Armstrong!");
}


/* 5. Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains “Marvellous” word or not.
Input : “Pune Kothrud Marvellous Infosystems”
Output : String contains Marvellous in it. */


function ChkString(s1:string, s2:string): boolean 
{
    s1=s1.toLowerCase();
    s2=s2.toLowerCase();
    if (s1.indexOf(s2) >=0) {
        console.log("value: ",s1.indexOf(s2));
        return true;
    } else {
        console.log("Value: ",s1.indexOf(s2));
        return false;
    }   
}

let oStr:string = "Pune Kothrud Marvellous Infosystems"; 
let fStr:string = "SYSTEM";
var iRt : boolean = ChkString(oStr,fStr);
if (iRt!= false) 
{
    console.log("string: \""+oStr+"\" include \""+fStr+"\"");
} else 
{
    console.log("string: \""+oStr+"\" do not include \""+fStr+"\"");
}



