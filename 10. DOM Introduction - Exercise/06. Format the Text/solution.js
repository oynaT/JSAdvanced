function solve() {
  let textToFormat=document.getElementById('input')
  let arr=(textToFormat.value).split('.').filter(x=>x.length>0)
   
   while(arr.length>0){
    val=arr.splice(0,3)+'.'
    let elementToOutput=document.getElementById('output')
    let p=document.createElement('p')
    p.textContent=val
    elementToOutput.appendChild(p)
    
   }

}