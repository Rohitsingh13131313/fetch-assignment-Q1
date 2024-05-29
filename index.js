let box = document.getElementById("container")
let fetchbtn = document.getElementById("Fetchdata")



fetchbtn.addEventListener("click",function(){
    gatedata();
})

async function gatedata(){

    try{
        
        let res =  await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await res.json()
        console.log(data)
        showdata(data)

    }
    catch(error){
      console.log(error)
    }
}




function showdata(array){
    
    array.forEach(function(ele){
    
        let div = document.createElement("div")
        div.className = "div";

        let h3 = document.createElement("h3")
        h3.textContent = ele.title

        let checkbox = document.createElement("input")
        checkbox.setAttribute("type","checkbox")
        checkbox.textContent = ele.completed

        div.append(h3,checkbox)
        box.append(div)

    })
}