//$('body').css('background-color', 'orange');

$("#ol1 li").css ('color','red');//tous les descendants li de ol1
$("#ol2 > li").css('color','yellow');//tous les li descendant direct de ol2
$("#premier ~ li").css ('color','green');//les frères jumeaux de #premier
$("#premier1 + li").css('color','pink');//son frère direct


$("p:first").css('font-size','30px');//selectionne le premier p
$("p:last").css('font-size','30px');//sélectionne le dernier p

$('#ol5 li:gt(1)').css('color','pink');//sélectionne les élements sup à l'indice 1
$('#ol5 li:lt(1)').css('color','purple');

$("#ol6 li:not('.legume')").css('color','blue');//ceux qui n'ont pas pour nom de class legume

$('.p1').on ('click',()=> {
    $('.p1').text ('vous avez cliqué sur moi');
});

$('.p2').on ('click',(event)=> {
    //let date = new Date (event.timeStamp);
    $('.p2').text ("Il est : "+(new Date (event.timeStamp)));
});