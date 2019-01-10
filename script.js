const names = [];
const div = document.querySelector("div")
const addName = (e) => {
    e.preventDefault()
    const input = document.querySelector("input")
    const name = input.value
    if (input.value.length) {
        names.push(name)
        div.innerHTML += name + ', '
        input.value = ""
    }


}
document.querySelector("button").addEventListener("click", addName)