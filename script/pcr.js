const frame =  document.getElementById('frame')
const base = document.getElementById('chart_PCR')
 
const htmlElement = () => {
    return frame.body.children[0]
}

function dd(elemento){
    return elemento.body.children[0];
}
base.append(htmlElement)