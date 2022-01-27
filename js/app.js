shownotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
        notesObj = [];
        // console.log("Inside if")
    }
    else {
        notesObj = JSON.parse(notes);
        // console.log("Inside else")
    }
    // console.log(addTxt.value);
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    shownotes();
}
)
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class = "card-text">${element} 

          <button id = " ${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
      </div>`;

    });
    let notesElm = document.getElementById('notes');
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add`;
    }

}
function deleteNote(index) {
    console.log("I m deleting", index);
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
        notesObj = [];
        // console.log("Inside if")
    }
    else {
        notesObj = JSON.parse(notes);
        // console.log("Inside else")
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // console.log(notesObj);
    shownotes();

}
 

let search = document.getElementById('searchTxt');

search.addEventListener( "input" , function(){

     let inputVal = search.value; 
     console.log('input fired!!',inputVal);
     let noteCards = document.getElementsByClassName('noteCard');
    //  console.log("Array" + notes);
    Array.from(noteCards).forEach(function(element){
        let cardTxt  = element.getElementsByTagName("P")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });


 });
