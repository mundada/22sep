
var users= [ "ajay","anil","ashish"];

function addUser(username, callback){
		users.push(username);
		callback();
	
	}
function getUsers(){
		console.log(users);

}
addUser("arun", getUsers);

////////using timeout function for the above--------->

var users= [ "ajay","anil","ashish"];

function addUser(username, callback){
	setTimeout(function() {
		users.push(username);	///using timout for both addUsers and getUsers but the getuser is called  after 2sec soon user is added ignoring timout function in getuser
		callback();
	}, 2000);
	}
function getUsers(){
	setTimeout(function() {
		console.log(users);
},8000);
}
addUser("arun", getUsers);

////////using timeout for only getUser function----------->

var users= [ "ajay","anil","ashish"];

function addUser(username, callback){
		users.push(username);
		callback();					//here im assingning timeout funtion only for getUsers so the output will be displayed after 10sec
	
	}
function getUsers(){
	setTimeout(function() {
		console.log(users);
},10000);
}

addUser("arun", getUsers);

////////////////////////////////////////////////


var userData = {
	fullname= "not set",
	id= "123",
setUserName: function(firstName, lastName){
this.fullName = firstName+" "+lastName;
}
}

function student(userData){
	if(typeof userData ==="string")
	{
	console.log(userData);
	}
	else if (type of userdata ==="object")
	{
	console.log(object)
	}
	}

function getUserInput(firstName,lastName, callback){
	userdata.push(options);
	callback(options);
	}

getInput = ({first name:"ashish", last name:"Mundada", student});


//////callback function for sorting items----->

myArr= [{
	num:5,
	str:'apple'
},
{
	num: 7,
	str : 'cabbage'
},
{
	num:1,
	str:'ban'
}]
myArr.sort(function(val1,val2){
	if (val1.str < val2.str){
		return -1;
}
	else
{
		return 1;
}});
	console.log(myArr);


/////////////////////////////////////////////


let A = function(a,b)
{
return a+b;

};

let B = function(a,b)
{
return a-b;
};
let calc = function(a,b, callback){
if (typeof callback === "function")
return callback(a,b);
}
else {
return( it is not a function);
};
console.log(calc(2,3,add));


