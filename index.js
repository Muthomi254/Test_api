//basic format for fetch

// fetch( url, options)
// .then((response)=> response.json())
// .then((data) => {
//   // use the data
// })


fetch(  "http://localhost:3000/blogs" , {
  method:"GET"
})
.then((response)=> response.json())
.then((data) => {
  // use the data
const all_blogs = document.getElementById("all_blogs")

data.map((element)=> {
  
all_blogs.innerHTML += `<div  id="card">
<img onclick="displayFunction(${element.id})" src="${element.image}">
  <h5>${element.title}</h5>

  <button onclick="deleteBlog(${element.id})" id="deleteBtn">DELETE</button>
</div>`

})

})

//display blog
function displayFunction (id){  

fetch(  `http://localhost:3000/blogs/${id}` , {
  method:"GET"
})
.then((response)=> response.json())
.then((data) => {

  const single_blog = document.getElementById("single_blog")
  single_blog.innerHTML = `<div>
  <img src = "${data.image}"
  <h5>${data.title}</h5>
  <p>${data.description}</p>
  </div>`
  console.log(data)

})
}

//deleteBlog

function deleteBlog (id){

  fetch(  `http://localhost:3000/blogs/${id}` , {
    method:"DELETE"
  })
  .then((response)=> response.json())
  .then((data) => {
    alert("Blog deleted successfully")

  })
}

//Add blog

const addForm= document.getElementById("addForm")
addForm.addEventListener("submit", function(event){
  event.preventDefault();

  const title= document.getElementById("title").value;
  const description= document.getElementById("description").value;
  const image_url=  document.getElementById("image_url").value;

  fetch(  `http://localhost:3000/blogs` , {
    method:"POST",
    body:JSON.stringify({
      title: title,
      image: image_url,
      description: description,
    }),
    headers:{
      "Content-Type":"application/json",
    }
  })
  .then((response)=> response.json())
  .then((data) => {
    alert("Blog CREATED successfully")

  })
}
)

// console.log (title,"", description,"",image_url,"")

