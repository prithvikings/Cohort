//write a program that prints all the male people first name given a complex object
const user=[{
    name:"John",
    gender:"male",
    age:20,
},
{
    name:"Jane",
    gender:"female",
    age:21,
},
{
    name:"Jack",
    gender:"male",
    age:22,
}]

for(var i=0;i<user.length;i++){
    if(user[i].gender=="male"){
        console.log(user[i].name);
    }
}