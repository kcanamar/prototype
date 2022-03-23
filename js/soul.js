console.log("js")

var mykey = config.MY_KEY
var secretkey = config.SECRET_KEY
const API = "https://www.dnd5eapi.co/api/"

$.ajax(`${API}`)
.then((data) => {
    console.log(data)
})

$.ajax(`
${API}monsters/aboleth
`)
.then((data) => {
    console.log(data);
})