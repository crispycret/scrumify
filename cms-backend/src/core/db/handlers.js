
// Define methods used to handle database events
function error (error) {
    console.log(error)
}

function open () {
    console.log("[!] Connected to Database\n")
}


module.exports = {
    error,
    open
}
