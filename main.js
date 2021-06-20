menu_list_array = ["Veg Margherita Pizza","html pizza","javascript pizza","css pizza","array pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i =0;i<menu_list_array.lengh;i++){
    htmldata=htmldata+'<li>'+menu_list_array[i] + '</li>'
}
htmldata=htmldata + "</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var j=0;j<menu_list_array.lengh;j++){
    htmldata=htmldata+'<div class="card">'+
    '<img src="file:///Users/aarjun/Downloads/ADVC79template-main/images/pizzaImg.png">'+
    menu_list_array[i]+"</div>"
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}