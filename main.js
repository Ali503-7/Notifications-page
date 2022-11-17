let read = document.querySelector(".markasred")
let active = document.querySelectorAll(".note")
let num = document.querySelector(".numof")


let nani = [...active]


read.onclick = () => {
  nani.forEach(element => {
    if (element.classList.value === "note active") {
      element.classList.value = "note"
      num.style.display = 'none'
    }
  });
}