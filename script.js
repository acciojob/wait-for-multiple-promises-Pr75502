//your JS code here. If required.
let output = document.getElementById("output")
let createRandomPromise = (id) => {
    return new Promise((resolve) => {
        let time = (Math.random() * 2 + 1).toFixed(3)
        setTimeout(()=>resolve({id,time}),time*1000)
    })
}
Promise.all([
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3),
]).then((results) => {
    output.innerText = ""
    results.forEach(({id,time}) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerText = `Promise ${id}`
        let td2 = document.createElement("td")
        td2.innerText = time
        tr.append(td1, td2)
        output.appendChild(tr)
    })
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText="Total"
    let td2 = document.createElement("td")
    td2.innerText = Math.max(...results.map(r => r.time)).toFixed(3)
    tr.append(td1, td2)
    output.append(tr)
    
})