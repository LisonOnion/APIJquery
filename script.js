function boutonDetails(a)
                {
                
                   $("#boutonAdd").hide();
                   $("#boutonModif").show();
                    
                    $.get({    
                        url: "http://jihane.fr/dwmg2/api/biere/unebiere.php",
                        data : {id:a},
                                success: function(bieres) {
                                    console.log(bieres);
                                    
                                    $("#id").val(bieres.id)
                                    $("#nom").val(bieres.nom)
                                    $("#couleur").val(bieres.couleur)
                                    $("#pays").val(bieres.pays)
                                    $("#degres").val(bieres.degres)
                                    $("#amertume").val(bieres.amertume)
                                    $("#prix").val(bieres.prix)
                                    },
                                
                                dataType: "json"
                                });

            }


$.get({    
    url: "http://jihane.fr/dwmg2/api/biere/bieres.php",
    
            success: function(bieres) {
                console.log(bieres);

                for(i=0;i<bieres.length;i++)
                { 
                    
                $("tbody tr:last-child").after("<tr><th>"+bieres[i].id+"</th><td>"+bieres[i].nom+"</td><td>Details <button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\" onclick=\"boutonDetails("+bieres[i].id+")\"class=\"btn btn-primary\">Voir</button></td></tr>"); 
                    
                }   
                
                
                },
            
            dataType: "json"
            });    

            
$("#boutonAdd").on("click",ajouter);
        
function ajouter(){

             
            $.ajax({
                url: "http://jihane.fr/dwmg2/api/biere/newbeer.php",    
                type: "POST",    
                data: { 

                    nom : $("#nom").val(),   
                    couleur : $("#couleur").val(),
                    pays : $("#pays").val(), 
                    degres : $("#degres").val(),
                    amertume : $("#amertume").val(),
                    prix : $("#prix").val(),  
                },    
                success: function(newbiere) 
                
                {   
                     console.log(newbiere);
                
                },    
                dataType: "json"  
            }  
            )
        }
        
$("#boutonModif").on("click",modifier);

function modifier(){

        $.get({    
            url: "http://jihane.fr/dwmg2/api/biere/update.php",
            type: "GET",    
            data: {    
                id : $("#id").val(),    
                nom : $("#nom").val(),   
                couleur : $("#couleur").val(),
                pays : $("#pays").val(), 
                degres : $("#degres").val(), 
                amertume : $("#amertume").val(),
                prix : $("#prix").val(), 
            },    
                    success: function(modifbieres) 
                    {
                    
                        console.log(modifbieres);
                   
    
                        
                    },
                    
                    dataType: "text"
                    });

}          

$("#boutonDelete").on("click",suppr);

function suppr(id){
    $.get({    
        url: "http://jihane.fr/dwmg2/api/biere/deletebiere.php",
            type: "GET",    
            data: {  
                id : $("#id").val(), 
                    },
                
                dataType: "json"
                });    
    
            }
        
boutonDetails();

$("#bouton1").on("click",cleanAddModal);

function cleanAddModal()
{
    $("#boutonAdd").show();
    $("#boutonModif").hide();
    $("#id").val("");    
    $("#nom").val(""); 
    $("#couleur").val("");
    $("#pays").val("");
    $("#degres").val(""); 
    $("#amertume").val("");
    $("#prix").val("");
}