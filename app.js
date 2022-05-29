

function additem(){



// getting value of input in div section ad creating li tag in div section



    let inp = document.getElementById('input');
    let section = document.getElementById('section');
    let li = document.createElement('li');
    let text = document.createTextNode(inp.value)
    li.appendChild(text)
    li.setAttribute('class','li')
    section.appendChild(li)
    inp.value = "";


// cretaing delete button in div section

let delBtn = document.createElement('button')
let delText = document.createTextNode('Delete') 
delBtn.setAttribute('onclick','Deleteitem(this)')
delBtn.setAttribute('class','btn')
 delBtn.appendChild(delText);   
 li.appendChild(delBtn);



// creating edit button in div section


let editBtn = document.createElement('button')
let textEdit = document.createTextNode('Edit Item')
editBtn.setAttribute('onclick','editItem(this)')
editBtn.setAttribute('class','btn')
editBtn.appendChild(textEdit);
li.appendChild(editBtn)


}




// delete the item onclick in div section


function Deleteitem(e){

e.parentNode.remove();

}



// edit the item onclick in div section


function editItem(e){
    let inp = prompt('edit list')
    e.parentNode.firstChild.nodeValue = inp
}



// delete innerHTML by clicking delete All button

function deleteitem(){
    let section = document.getElementById('section');
    section.innerHTML = "";

}