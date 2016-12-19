// LOTO RANDOMIZE

// ====== Create an array of random nums ========
var random = function (variante, total) {

    var variante = variante;
    var total = total;

    var numere = []; // array for generated numbers;
    var range = []; // array for range;
    i=0; // initializer

    // **** Generating array range *****

    for (i; i < total; i++) {
      range.push(i + 1);
    };

    i=0; // Reinitialize
    // *** Generating random numbers ***

    while (numere.length < variante) {

        var randomNum = Math.floor(Math.random()* total );

        if (range[randomNum] != -1){
                numere.push(range[randomNum]);
                range[randomNum] = -1;
            };
    };
    return numere;
};


// ============= Transform random num in img =======
var randomb = function (rand, variante, total){

    var num = variante;
    var x = total;

    var randomcheck = [];
    randomcheck = random(num,total);

    for(var i = 0; i<num; i++){
        var x = randomcheck[i];
        $(rand).append('<li><img class="" src="images/bile/'+x+'b.png"/></li>');
    }
}

// ============= Transform random num in img for JOKER =======
var randomj = function (rand, variante, total){

    var num = variante;
    var x = total;

    var randomcheck = [];
    randomcheck = random(num,total);

        $(rand).append('<li><img class="" src="images/bile/joker/'+randomcheck+'.png"/></li>');

}


$(document).ready(function(){

    // Loto 6/40 BUTTON
    
     $('#loto649_btn').on('click', function () {

            $("#div_m2").hide();
            $("#div_m3").hide();
            $("#div_m4").hide();
         
             var variante = $("input:radio[name=variante]:checked").val();
             
             switch (variante){
                 case '1':
                    $("#var_1").empty();
                    $("#var_2").empty();
                    $("#var_3").empty();
                     $("#var_4").empty();
                    $("#div_m1").show();
                    $("#var_1").append(randomb("#var_1",6,49));
                  break;
                  
                  case '2' :  
                    $("#var_1").empty();
                    $("#var_2").empty();
                    $("#var_3").empty();
                      $("#var_4").empty();
                      $("#div_m2").show();
                    $("#var_2").append(randomb("#var_1",6,49)+randomb("#var_2",6,49));
                    break;
                  
                  case '3' :
                    $("#var_1").empty();
                    $("#var_2").empty();
                    $("#var_3").empty();
                      $("#var_4").empty();
                      $("#div_m2").show();
                      $("#div_m3").show();
                    $("#var_3").append(randomb("#var_1",6,49)+randomb("#var_2",6,49)+randomb("#var_3",6,49));
                    break;

                 case '4' :
                     $("#var_1").empty();
                     $("#var_2").empty();
                     $("#var_3").empty();
                     $("#var_4").empty();
                     $("#div_m2").show();
                     $("#div_m3").show();
                     $("#div_m4").show();
                     $("#var_4").append(randomb("#var_1")+randomb("#var_2")+randomb("#var_3")+randomb("#var_4"));
                     break;
             }
             
     });

    // LOTO 5/40 BUTTON ===========

    $('#loto540_btn').on('click', function () {

        $("#div_m2").hide();
        $("#div_m3").hide();
        $("#div_m4").hide();

        var variante = $("input:radio[name=variante]:checked").val();

        switch (variante){
            case '1':
                $("#var_1").empty();
                $("#var_2").empty();
                $("#var_3").empty();
                $("#var_4").empty();
                $("#div_m1").show();
                $("#var_1").append(randomb("#var_1",5,40));
                break;

            case '2' :
                $("#var_1").empty();
                $("#var_2").empty();
                $("#var_3").empty();
                $("#var_4").empty();
                $("#div_m2").show();
                $("#var_2").append(randomb("#var_1",5,40)+randomb("#var_2",5,40));
                break;

            case '3' :
                $("#var_1").empty();
                $("#var_2").empty();
                $("#var_3").empty();
                $("#var_4").empty();
                $("#div_m2").show();
                $("#div_m3").show();
                $("#var_3").append(randomb("#var_1",5,40)+randomb("#var_2",5,40)+randomb("#var_3",5,40));
                break;

            case '4' :
                $("#var_1").empty();
                $("#var_2").empty();
                $("#var_3").empty();
                $("#var_4").empty();
                $("#div_m2").show();
                $("#div_m3").show();
                $("#div_m4").show();
                $("#var_4").append(randomb("#var_1",5,40)+randomb("#var_2",5,40)+randomb("#var_3",5,40)+randomb("#var_4",5,40));
                break;
        }

    });

    // Joker BUTTON ==========================

    $('#joker_btn').on('click', function () {

        $("#div_m2").hide();
        $("#div_m3").hide();


        var variante = $("input:radio[name=variante]:checked").val();

        switch (variante){
            case '1':
                $("#var_1").empty();
                $("#var_2").empty();

                $("#div_m1").show();
                $("#var_1").append(randomb("#var_1",5,40)+randomj("#var_1",1,20));
                break;

            case '2' :
                $("#var_1").empty();
                $("#var_2").empty();

                $("#div_m2").show();
                $("#var_2").append(randomb("#var_1",5,40)+randomj("#var_1",1,20)+randomb("#var_2",5,40)+randomj("#var_2",1,20));
                break;


        }

    });

});





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












