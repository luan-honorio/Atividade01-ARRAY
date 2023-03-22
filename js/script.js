


const add = document.getElementById('add')
add.addEventListener('click', ()=>{

   let adicionar = document.getElementById('cadeira').value 

   var objetos = Array('cadeira', 'impressora', 'garfo')
 

   

 if(adicionar === ''){
     alert('Informe um valor')
 }


if(adicionar.toUpperCase()  === 'cadeira' || adicionar.toLowerCase() ==='impressora' || adicionar.toLowerCase() === 'garfo' ){
   alert('valor ja foi adicionado')

 }

 else{
    objetos.push (adicionar)
    console.log(objetos)
 }
   lista.textContent = `${objetos}`

 
 const ordem = document.getElementById('ordem')
 ordem.addEventListener('click', ()=> {
    
    let ordemA = objetos.sort()
    
    console.log(ordemA.sort())
    
    AA.textContent = `${ordemA}`

 })
 


 

})





