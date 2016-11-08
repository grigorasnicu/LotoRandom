
$(document).ready(function(){
    
     $('#loto649_btn').on('click', function () {

            $("#div_m2").hide();
            $("#div_m3").hide();
         
             var variante = $("input:radio[name=variante]:checked").val();
             
             switch (variante){
                 case '1':
                    $("#var_1").empty();
                    $("#var_2").empty();
                    $("#var_3").empty();
                    $("#div_m1").show();
                    $("#var_1").append(randomb("#var_1"));
                  break;
                  
                  case '2' :  
                    $("#var_1").empty();
                    $("#var_2").empty();
                    $("#var_3").empty();
                    $("#div_m2").show();
                    $("#var_2").append(randomb("#var_1")+randomb("#var_2"));
                    break;
                  
                  case '3' :
                    $("#var_1").empty();
                    $("#var_2").empty();
                    $("#var_3").empty();
                    $("#div_m2").show();
                    $("#div_m3").show();
                    $("#var_3").append(randomb("#var_1")+randomb("#var_2")+randomb("#var_3"));
                    break;
             }
             
  });
});

// ============= Transform random num in img =======
var randomb = function (rand){
    
    var randomcheck = [];
     randomcheck = random();

    for(var i = 0; i<6; i++){
          var x = randomcheck[i]; 
          $(rand).append('<li><img class="" src="images/bile/'+x+'b.png"/></li>');
        }        
}



/*var random = function (){
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
};*/

var random = function () {


    var numere = [];
    x = 49;
    num = 6;
    for (i = 1; i <= x; i++) {
        numere.push(i);
    }

    var randomNum = [];

    for (j = x; j >= x - num + 1; j--) {
        y = Math.floor((Math.random() * x + 1));
        z = numere.indexOf(y);
        numere.splice(z, 1);
        randomNum.push(y);
    }

    return randomNum;
};








