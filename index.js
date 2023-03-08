// Write your solution in this file!
const employee =
{
    name : "Binil",
    streetAddress : "24 Cantwell Cres",

};

function updateEmployeeWithKeyAndValue(employee, key, value)
{
   const newEmployeeObject= {...employee};
   newEmployeeObject[key]=value;
   return newEmployeeObject;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
       employee[key]=value;
       return employee;

}

function  deleteFromEmployeeByKey(employee, key)
{
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;    

}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key];
    return employee;
}