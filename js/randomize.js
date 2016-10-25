
$(document).ready(function(){
    
 
    
     $('.loto649_btn').on('click', function () {
         
             var variante = $("input:radio[name=variante]:checked").val();
             
             switch (variante){
                 case '1':
                    
                    $("num_1").empty().append(randomb("num_1"));
                     $("num_1").append("<hr>");
                  
                  break;
                  
                  case '2' :  
                    $("#num6r2").empty().append(randomb("num_1")+randomb("#num6r2"));
                    $("#num6r2").append("<hr>");
                    break;
                  
                  case '3' :
                    $("#num6r3").empty().append(randomb("num_1")+randomb("#num6r2")+randomb("#num6r3"));
                    $("#num6r3").append("<hr>");
                    break;
             }
             
            $('#genbutton6').hide();
            $('#var6').hide();
            
            $('#genereaza6').append('<a href="loto649.html" id="goback6"></button>');
            $('#genereaza6').append('<button id="regenbutton6" ></button>');
            
             
            $("#regenbutton6").addClass("btn glyphicon glyphicon-refresh ");
             $("#goback6").addClass("glyphicon glyphicon-arrow-left ");
          
         
          
  
        $('#regenbutton6').on('click', function (){
           
           switch (variante){
                 case '1':
                    $("num_1").empty().append(randomb("num_1"));
                  
            
                  break;
                  
                  case '2' :  
                    $("#num6r2, num_1").empty().append(randomb("num_1")+randomb("#num6r2"));
                     
                    break;
                  
                  case '3' :
                    $("#num6r3, num_1, #num6r2").empty().append(randomb("num_1")+randomb("#num6r2")+randomb("#num6r3"));
                      $("#num6r3").append("<hr>");
                    break;
             }
           
       }) ;
  });
});


var randomb = function (rand){
    
    var randomcheck = [];
    
     randomcheck = random();
    
    
            
    
    for(var i = 0; i<6; i++){
            
          var x = randomcheck[i];  
       
          $(rand).append('<li><img class="" src="bile/'+x+'.png"/></li>');
         
        }
        
    
    
}




var random = function (){


var random6 = [];

random6.push(Math.floor((Math.random()*49)+1));

var a, b, c, d, e, f;

a = random6[0];

b = Math.floor((Math.random()*49)+1);
    if (a==b){
        while (a==b){
             b = Math.floor((Math.random()*49)+1);
             random6.push(b);
        }
    } else if (a!=b) {
        random6.push(b);
         
     };
     
c = Math.floor((Math.random()*49)+1);
    if (c==a | c==b){
        while (c==a | c==b){
             c = Math.floor((Math.random()*49)+1);
             random6.push(c);
        }
    } else if (c!=a && c!= b) {
        random6.push(c);
         
     };
     
d = Math.floor((Math.random()*49)+1);
    if (d==a | d==b | d==c) {
        while (d==a | d==b | d==c){
             d = Math.floor((Math.random()*49)+1);
             random6.push(d);
        }
    } else if (d!=a && d!= b && d!=c) {
        random6.push(d);
         
     };
    
e = Math.floor((Math.random()*49)+1);
    if (e==a | e==b | e==c | e==d) {
        while (e==a | e==b | e==c | e==d){
             e = Math.floor((Math.random()*49)+1);
             random6.push(e);
        }
    } else if (e!=a && e!= b && e!=c && e!=d) {
        random6.push(e);
         
     };
     
f = Math.floor((Math.random()*49)+1);
    if (f==a | f==b | f==c | f==d | f==e) {
        while (f==a | f==b | f==c | f==d | f==e){
             f = Math.floor((Math.random()*49)+1);
             random6.push(f);
        }
    } else if (f!=a && f!= b && f!=c && f!=d && f!=e) {
        random6.push(f);
         
     };
     
     return random6;
};


