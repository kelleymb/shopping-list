$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
    

/* add item to the <li> to the shopping list <ul> */
const addItem = $('event.currentTarget').find("#shopping-list-entry");
$('ul').append(' <li><span class="shopping-item">${addItem.val()}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button>')


})
});

/* add a strikethrough with class .shopping-item__checked */
$(function() {
    $('ul').on('click', '.shopping-item-toggle', function(){
        $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    })
});


/* const checkItem = $('ul').on('click', '.shopping-item-toggle', function(){
    $(this).find('.shopping-item').toggleClass("shopping-item__checked");
});  */



/* remove the item permanently */
$(function(){
    $('ul').on('click', '.shopping-item-delete', function(){
        $(this).closest('li').remove();
    })
})


/* const removeItem = $('ul').on('click', '.shopping-item-delete', function(){
    $(this).closest('li').remove();
});
*/
