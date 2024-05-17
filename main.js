const panels = document.querySelectorAll(".panel") 

panels.forEach(panel => {
  panel.addEventListener("click",()=>{
    if (panel.classList.contains("active")) {
      panel.classList.remove("active")
    }
    else{
    removeClassList()
    panel.classList.add('active')
    }
    console.log(panel)
  })
})

function removeClassList() {
  panels.forEach(panel => panel.classList.remove("active"))
}