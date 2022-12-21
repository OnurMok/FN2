alert("Ex5.9");

let employees = [
    {
        name: "Boban",
        age: 35,
        department: "It",
        online: true
    },
    {
        name: "Goran",
        age: 41,
        department: "Marketing",
        online: true
    },
    {
        name: "Ana",
        age: 23,
        department: "Sales",
        online: false
    },
    {
        name: "Tina",
        age: 33,
        department: "Marketing",
        online: true
    }
]

// 1.Treba da ja projdeme kolekcijata i da gi zapiseme site vraboteni sto se pod 40 godini
for(let i=0; i<employees.length;i++)
{
   if(employees[i].age<40)
   {
    console.log(employees[i]);
   }
}

// 2.Treba da ja projdeme kolekcijata i da prekineme ako najdeme vraboten sto raboti vo It sektorot koristejki break;

for(let i=0; i<employees.length;i++){
    if(employees[i].department==="It")
    {
        console.log(employees[i]);
        break;
    }
    
}
// 3.Treba da ja projdeme kolekcijata i da gi prikazeme site vraboteni osven tie sto ne rabotat online;

for(let i=0; i<employees.length;i++){
    //if(employees[i].online)
    if(employees[i].online === true)
    {
        console.log(employees[i]);
    }
}


// 4.Treba da ja projdeme kolekcijata i da gi prikazeme site vraboteni osven tie sto  rabotat online;


for(let i=0; i<employees.length;i++){
    //if(!employees[i].online)
    if(employees[i].online === false)
    {
        console.log(employees[i]);
    }
}