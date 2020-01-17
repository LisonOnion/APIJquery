function afficher(){
    fetch('http://jihane.fr/dwmg2/api/biere/bieres.php')    

.then
(function(response) 
{
    return response.json()        
}    
)  
.then (function(rep)
{
    console.log(rep);
    for(i=0;i<rep.length;i++)
    { 

        $("tbody tr:last-child").after("<tr><th>"+rep[i].id+"</th><td>"+rep[i].nom+"</td><td>Details <button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\" onclick=\"boutonDetails("+rep[i].id+")\"class=\"btn btn-primary\">Voir</button></td></tr>"); 
        // var table=document.getElementById("trait");
        // var element=document.createElement("th")
        // element.innerHTML=bieres[i].name
        // table.firstChild(element);
        
    }   
}
)
}

afficher();