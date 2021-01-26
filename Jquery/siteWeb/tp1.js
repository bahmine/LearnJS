$(document).ready(()=> {
    var $pseudo = $('#pseudo'),
        $mp     = $('#mp'),
        $mpC    = $('#mpC'),
        $mail   = $('#mail'),
        $env    = $('#env'),
        $an     = $('#an'),
        $champs = $('.champs'),
        $erreur = $('#erreur');
        $erreur.css ('display','none');
        // le code précédent se trouve ici

        $champs.on('keyup',function(){
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                    color : 'red'
                });
            } else{
                $(this).css({ // si tout est bon, on le rend vert
                    borderColor : 'green',
                    color : 'green'
                });
            }
        });
        $mpC.on ('keyup',function (){
            if ($(this).val () != $mp.val ()) {
                $(this).css ({
                    borderColor: 'red',
                    color : 'red'
                });
            } else {
                $(this).css ({
                    borderColor: 'green',
                    color : 'green'
                });
            }
        });
        var verifier = (champ) => {
            if(champ.val () == "") {
                $erreur.css ('display','block');
                champ.css ({
                    borderColor : 'red',
                    color : 'red'
                });
            }
        };
        $env.on('click',function (e) {
            e.preventDefault ();

            verifier ($pseudo);
            verifier ($mp);
            verifier ($mpC);
            verifier ($mail);
        });
        $an.on ('click',function (e) {
            $champs.css ({
                borderColor : '#ccc',
                color : '#555'
            });
            $erreur.css ('display','none');
        });
        
});