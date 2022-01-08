let url="https://api.openbrewerydb.org/breweries"
fetch(url)
.then((response)=>response.json())
.then((data)=>{
  
  usersdata(data)


  
})
//performing the function program
function usersdata(data){
  console.log(data)
  let tbody=document.querySelector('tbody')
  tbody.innerHTML=''
  data.forEach(element => {
    //displaying the data in table
    tbody.innerHTML+=`
    <tr>
    <td>${element.id}</td>
    <td>${element.state}</td>
    <td>${element.country}</td>
    <td>${element.name}</td>
    <td>${element.phone}</td>
    <td>${element.postal_code}</td>
    <td>${element.brewery_type}</td>
    <td>${element.created_at}</td>
    <td>${element.latitude}</td>
    <td>${element.longitude}</td>
    </tr>
    
     `
   });


}



  
  








 

 

































 
















  








    


















 










