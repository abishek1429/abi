let e=Math.sqrt(64)
console.log(e) 
let d=Math.cbrt(125)
console.log(d)
let a =Math.random()*1000000
let b =Math.floor(a)
let c=(Math.random()*[(9999-100)+100])
let f=Math.floor(c)
console.log(f)
// console.log(c)
console.log(a)
console.log(b)
//! date object
let date=new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())
let ownDate=new Date()
ownDate.setFullYear(2021)
ownDate.setMonth(3)
console.log(ownDate)
function render(){
    location.assign('http://www.youtube.com/')
}
function fwd(){
    location.assign('./.html/')
}
// let g=alert("iam in danger")
// console.log(g)
// let h=confirm("are you mad")
// console.log(h)
function opening(){
    window.open('./content1.html','chrome','height=200','width=200 left=1000')
}