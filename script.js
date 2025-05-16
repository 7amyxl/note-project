var form = document.getElementById('add-frm');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');
var items = document.getElementById('items');
var notecount = 0;
var newNote = '';
var tableDiv = document.getElementById('tbl-div');

// events
// for page loads
window.onload = updateTable;

form.addEventListener('submit',addNode);

// update Table 
function updateTable(){
    // display the table when nodes get added
    if(notecount > 0){
        tableDiv.style.display = '';
        items.appendChild(newNote);
    }
    else{
        tableDiv.style.display = 'none';    
    }
}

function addNode(e){
    // stop initial behavior
    e.preventDefault();

    if(ntitle.value == '' || nbody.value == ''){
        alert('Please fill all Fields!');
    }
    else{
        // create a new note record

        // new tr
        var tr = document.createElement('tr');
        tr.className = 'Item';

        // new td for title and body
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        var span = document.createElement('span');
        span.className = 'note-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);

        // new td for view
        var td2 = document.createElement('td');
        td2.className = 'btcellv';
        var btn1 = document.createElement('button');
        btn1.appendChild(document.createTextNode('view'));
        btn1.setAttribute('id','vw');
        td2.appendChild(btn1);
        console.log(td2);

        // new td for delete
        var td3 = document.createElement('td');
        td3.className = 'btcelld';
        var btn2 = document.createElement('button');
        btn2.appendChild(document.createTextNode('delete'));
        btn2.setAttribute('id','del');
        td3.appendChild(btn2);
        console.log(td3);

        // add tds to tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        console.log(tr);

        //Increment note count 
        notecount++;

        // set new Note
        newNote = tr;
         
        // add or update the note of the table 
        updateTable();
    }
}