const searchInput = document.querySelector("#search-input")
const commentInp = document.querySelector("#enter-comment")
const addBtn = document.querySelector("#add-comment")
const textsComents = document.querySelector(".texts-comments")
const listGroup = document.querySelector("#lits-group")
const form = document.querySelector("form")
const countter = document.querySelector("#countter")

let comments = []
let ids = 0;

function localStor() {
  comments.forEach((value) => {
    localStorage.setItem("objs", JSON.stringify(value))
  })
}

// function getLocatS() {
//   let jsonObj = localStorage.getItem("objs")
//   let obj = JSON.parse(jsonObj)
//   let mass = comments.push(new CommentObj(obj.name, obj.id))
//   createDom(mass)
// }

function deleteList (ids) {
  document.querySelector(`#todo-id-${ids}`).remove()

  for (i=0; i<comments.length; i++){
    if(comments[i].id == ids){
      comments.splice(i, 1)
    }
  }
}


function CommentObj(text, id) {
  this.id = id
  this.text = text
}

function createDom(comText, ids) {
  let listItem = document.createElement("li");
  let deleteBtn = document.createElement("button")

  listItem.setAttribute("class", "d-flex my-1 justify-content-between align-items-center")
  listItem.textContent = comText;
  listItem.setAttribute("id", `todo-id-${ids}`)

  countter.innerHTML = ids;

  deleteBtn.setAttribute("class", "btn btn-danger")
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", ()=> {
    deleteList(ids)
    countter.innerHTML = comments.length
  })
  // getLocatS()


  listItem.appendChild(deleteBtn);
  listGroup.appendChild(listItem)
}


function todoCreate(comText, ids) {
  createDom(comText, ids)
  console.log(comText, ids);
  comments.push(new CommentObj(comText, ids))
}


addBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (commentInp.value.length == 0) {
    alert("Ma'lumot kiritilmadi")
   }else {
    ids++;
    todoCreate(commentInp.value, ids)
    commentInp.value = "";
    countter.innerHTML = comments.length
    localStor()
   }
})

commentInp.addEventListener("keyup", (e)=> {
  e.preventDefault();
  if (e.keyCode === 13){
    if (commentInp.value.length == 0) {
      alert("Ma'lumot kiritilmadi")
     }else {
      ids++;
      todoCreate(commentInp.value, ids)
      commentInp.value = "";
      countter.innerHTML = comments.length
      localStor()
     }
  }
})

// search input
// function searchInput () {

// }
// localStorage.removeItem("obj")