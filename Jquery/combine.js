$(()=> {
    let list,newItemForm;
    newItemForm = $('#newItemForm');
    list = $('ul');

    newItemForm.on ('submit',(e)=> {
        e.preventDefault ();
        let text = $('input:text').val ();
        list.append(`<li> ${text} <li>`);
        $('input:text').val('');
    });

    list.on ('click','li',()=>{
        $(this).remove ();
    });
});