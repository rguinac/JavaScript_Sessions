/** 
console.log("Hello from myscript file"); //this log will display and needs to be referenced in index.html

alert('I am loaded now'); //message pop up

if(confirm("Do you want to proceed?") == true) //will get a confirm box with two options, ok and cancel
{
    alert('You are selected!')  
} 
else
{
    alert('Oops, try again!')   
}
*/

var age = prompt('Please enter your age: '); //Will show a prompt and store in the age variable
if(age >= 18) //This condition will check to see you are valid to vote
{
    //alert('You are valid to vote!')
    //document.write('You are valid to vote!'); //the document.write will display on the screen instead of a prompt
    document.getElementById('voteStatus').innerHTML = 'You are valid to vote!';
}
else
{
    //alert('You are not valid to vote!') //If you don't enter anything in the prompt it will go to this alert
    //document.write('You are not valid to vote!');
    document.getElementById('voteStatus').innerHTML = 'You are not valid to vote!';
    //This document.getElement operation will look to see what is the id in the index.html file and display the var
    //innerHTML will stick the msg between <div> in index.html
}

