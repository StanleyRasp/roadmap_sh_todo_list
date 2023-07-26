const searchBar = document.querySelector(".search-bar")
const searchText = document.querySelector(".search-text")

let searchTodo = (search_text) => {
    console.log(`Searching "${search_text}"...`)
}


searchBar.addEventListener('mouseenter', (e) => {
    searchBar.style.backgroundColor = "#eeeeee"
})

searchBar.addEventListener('mouseleave', (e) => {
    if(searchText !== document.activeElement){
        searchBar.style.backgroundColor = "initial"
    }
})

searchBar.addEventListener("click", (e) => {
    searchText.focus()
})

searchText.addEventListener("focus", (e) => {
    if(searchText.textContent === "Search"){
        searchText.textContent = ""
    }
    searchBar.style.backgroundColor = "#eeeeee"
})

searchText.addEventListener("focusout", (e) => {
    searchBar.style.backgroundColor = "initial"
    if (!searchText.textContent){
        searchText.textContent = "Search"
    }
})

searchText.addEventListener("keypress", (e) => {
    if (e.keyCode == 13){
        e.preventDefault()
        searchTodo(searchText.textContent)
    }
})
