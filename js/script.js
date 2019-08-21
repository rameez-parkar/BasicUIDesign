var count=0;
function Add(){
  var table = document.getElementById('todotable');
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var label = document.createElement("label");
  label.innerHTML=document.getElementById('todoitem').value;
  label.setAttribute('id',count);
  cell1.append(label);

  var btn1 =document.createElement('button');
  btn1.setAttribute('class','delete');
  btn1.setAttribute('onclick','Delete('+count+')');
  btn1.innerHTML="Delete";

  var btn2 =document.createElement('button');
  btn2.setAttribute('class','update');
  btn2.setAttribute('onclick','Update('+count+')');
  btn2.innerHTML="Update";
  cell2.append(btn1);
  cell2.append(btn2);
  count++;

  document.getElementById('todoitem').value = "";

  DisplayAll();
}

function DisplayAll(){
  var table = document.getElementById('todotable');
  var tr = table.getElementsByTagName('tr');
  for(var i=0; i<tr.length; i++)
  {
    tr[i].style.backgroundColor = "white";
  }
}

function Search(){
  var table = document.getElementById('todotable');
  var tr = table.getElementsByTagName('tr');
  var str = document.getElementById('todoitem').value.toUpperCase();

  for(var i=0; i<tr.length; i++)
  {
    var td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(str) > -1) {
        tr[i].style.backgroundColor = "powderblue";
      } else {
        tr[i].style.backgroundColor = "white";
      }
      if(str.length < 1)
      {
        tr[i].style.backgroundColor = "white";
      }
    }
  }
}

function Delete(id){
  var table = document.getElementById(id).parentElement.parentElement.parentElement;
  table.removeChild(document.getElementById(id).parentElement.parentElement);
}

function Update(id){
  var label = document.getElementById(id);
  var item = prompt("Update the activity...", label.innerHTML);
  label.innerHTML = item;
}

function Reset(getid){
  getid.setAttribute("background-color",'#ffffff');
  getid.setAttribute("color","black");
}

function Validation(){
  var name = document.getElementById('name');
  var letterAndNumber = /^[0-9a-zA-Z]+$/;
  if(name.length<1 || name.value.match(letterAndNumber)){
    name.setAttribute("background-color",'#ff0000');
    name.setAttribute("color","white");
  }
}
