
function bhaskara(ax2, bx, c){
    let resultados = []
    let delta = (bx * bx) - (4 * ax2 -c)
    if (delta < 0){
        return "Delta negativo"
    }
        let x1 = ((-bx + Math.sqrt(delta)) / (2 * ax2)).toFixed(2)
        let x2 = ((-bx - Math.sqrt(delta)) / (2 * ax2)).toFixed(2)

    resultados.push(x1)
    resultados.push(x2)

    return resultados
}

console.log(bhaskara(-3, -5, 12))    
console.log(bhaskara(1, -10, 24))

