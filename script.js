function boutonclick(a)
                {
                   
                    $.get({    
                        url: "http://jihane.fr/dwmg2/api/biere/unebiere.php?id="+a,
                        
                                success: function(bieres) {
                                    console.log(bieres);
                                    
                                    $("#nom").val(bieres.nom)
                                    $("#couleur").val(bieres.couleur)
                                    $("#pays").val(bieres.pays)
                                    $("#degres").val(bieres.degres)
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
                    
                $("tbody tr:last-child").after("<tr><th>"+bieres[i].id+"</th><td>"+bieres[i].nom+"</td><td>Details <button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\" onclick=\"boutonclick("+bieres[i].id+")\"class=\"btn btn-primary\">Voir</button></td></tr>"); 
                    
                }   
                
                
                },
            
            dataType: "json"
            });    

        
function ajouter(){

            $.ajax({
                url: "http://jihane.fr/dwmg2/api/biere/newbeer.php",    
                type: "POST",    
                data: {          
                    nom : $("#nom").val(),   
                    couleur : $("#couleur").val(),
                    pays : $("#pays").val(), 
                    degres : $("#degres").val(), 
                },    
                success: function(bieres) 
                {   
                     
                
                },    
                dataType: "json"  
            }  
            )
        }

function modifier(){


        $.get({    
            url: "http://jihane.fr/dwmg2/api/biere/update.php?",
                 
                    success: function(bieres) {
                        console.log(bieres);
                        alert("ok");
                        
                        $("#nom").val(bieres.nom)
                        $("#couleur").val(bieres.couleur)
                        $("#pays").val(bieres.pays)
                        $("#degres").val(bieres.degres)
                        },
                    
                    dataType: "json"
                    });

}          
            ajouter();
            boutonclick();