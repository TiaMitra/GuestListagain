//Declaring an array:
 var GuestList = []; 
 var search_name = ' ';
 var get_number;
 //writing the function when submit button clicked:
function submit()
{
    //whatever value there is in the name_of_guest text input, push it into an array:
    GuestList.push(document.getElementById("name_of_guest").value);
    //print that array's value in console:
    console.log(GuestList);
//Display that value in the html page:
    document.getElementById("show_written_text").innerHTML = GuestList;
}
function show_hidden_text()
{
    text="<ul style=\"list-style:none;\">";

    for (i=0; i<GuestList.length; i++)
    {
        text+="<li>"+GuestList[i]+"</li>";
    }
text+="</ul>";
console.log(document.getElementById("visible_to_true").innerHTML = text);
}
function sorted_list()
{
    console.log(GuestList.sort());
    show_hidden_text();
}
function search_text()
{
 search_name = document.getElementById("search_the_text").value;
  console.log(get_number=GuestList.indexOf(search_name));
  if (get_number >=0)
  {
      document.getElementById("name_found").innerHTML = "found name 1 time";
    }
else 
{
    document.getElementById("name_found").innerHTML = "Name not found"
}    
  
}