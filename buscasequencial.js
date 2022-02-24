const nomes = require('./data/vetor-nomes.js')
function busca(num, vetor){
    for(let i=0;i<vetor.length; i++){
        if(vetor[i] === num)
            return i
        

    } return -1
}
    const vetor = [10, 5, 2, 6, 9, 14, 18]

    console.log(busca('THALES', nomes))

