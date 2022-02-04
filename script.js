const ruleButton = document.querySelector(".rule")
const startButton = document.querySelector(".start")
const main = document.querySelector("main")
ruleButton.addEventListener("click",(event) => showRules(event))
startButton.addEventListener("click",(event) => startGame(event))
const msgVitoria = document.createElement("h4")
msgVitoria.innerText = "Parabéns, vc venceu, agora reaja e bota um cropped"
const board = document.createElement("div")
    board.className = "game"
        const startStem = document.createElement("div")
        startStem.className = "start stem"
            const box1 = document.createElement("div")
            box1.className = "box1 1"
            const box2 = document.createElement("div")
            box2.className = "box2 2"
            const box3 = document.createElement("div")
            box3.className = "box3 3"
        const offsetStem = document.createElement("div")
        offsetStem.className = "offset stem"
        const endStem = document.createElement("div")
        endStem.className = "end stem"
    const backButton = document.createElement("button")
    backButton.className = "back1page"
    backButton.innerText = "Voltar"

function inicial(){
    main.innerHTML = `
    <div class="initialPoint">
        <h1>seja bem vindo ao desafio torre de hanoi</h1>
    </div>   
    `
    main.appendChild(ruleButton)
    main.appendChild(startButton)
    
    
}

function showRules(){
    main.innerHTML = ""
    const div   = document.createElement("div")
    const title = document.createElement("h2")
    const text1 = document.createElement("p")
    const text2 = document.createElement("p")
    const text3 = document.createElement("p")
    const text3_2 = document.createElement("p")
    const text4 = document.createElement("h3")
    const backButton = document.createElement("button")
    backButton.className = "back1page"
    div.id = "rule"
    title.innerText      = "Regras"
    text1.innerText      = "Movimentar uma só peça (disco) de cada vez."
    text2.innerText      = "Uma peça maior não pode ficar acima de uma menor."
    text3.innerText      = "Não é permitido movimentar uma peça que esteja abaixo de outra."
    text3_2.innerText    = "Para selecionar, clique no retangulo ao redor do disco."
    text4.innerText      = "Para melhor experiencia use o celular na horizontal"
    backButton.innerText = "Voltar"
    div.appendChild(title)
    div.appendChild(text1)
    div.appendChild(text2)
    div.appendChild(text3)
    div.appendChild(text3_2)
    div.appendChild(text4)
    div.appendChild(startButton)
    div.appendChild(backButton)
    main.appendChild(div)
    backButton.addEventListener("click",(event) => inicial(event))

}

function startGame(){
    main.innerHTML = ""

    board.appendChild(startStem)
    board.appendChild(offsetStem)
    board.appendChild(endStem)
    startStem.appendChild(box1)
    startStem.appendChild(box2)
    startStem.appendChild(box3)
    main.appendChild(board)
    main.appendChild(backButton)
    backButton.addEventListener("click",(event) => inicial(event))


   

}
 let armazenadorDeBloco = null

    //Coluna Inicial
main.addEventListener("click",(event) => {
        let targetDoEvento = event.target
        
        if(targetDoEvento == startStem){

            if(armazenadorDeBloco !== null){
                    console.log("Vou jogar aqui!")
                    console.log(armazenadorDeBloco.clientWidth)
                    let filho = startStem.lastChild
                    if(filho === null||armazenadorDeBloco.clientWidth <  filho.clientWidth){
                    startStem.appendChild(armazenadorDeBloco)
                    //targetDoEvento.appendChild(armazenadorDeBloco)
                    armazenadorDeBloco = null
                }
            }else{
                armazenadorDeBloco = startStem.lastChild
                console.log("Armazenado")
                }
                 
        }
        if(targetDoEvento == offsetStem){

            if(armazenadorDeBloco !== null){
                console.log("Vou jogar aqui!")
                console.log(armazenadorDeBloco.clientWidth)
                let filho = offsetStem.lastChild
                if(filho === null||armazenadorDeBloco.clientWidth <  filho.clientWidth){
                    offsetStem.appendChild(armazenadorDeBloco)
                    //targetDoEvento.appendChild(armazenadorDeBloco)
                    armazenadorDeBloco = null
                }

            }else{
                armazenadorDeBloco = offsetStem.lastChild
                console.log("Armazenado")
                }     
            }
        if(targetDoEvento == endStem){

            if(armazenadorDeBloco !== null){
                console.log(armazenadorDeBloco.clientWidth)
                let filho = endStem.lastChild
                if(filho === null||armazenadorDeBloco.clientWidth < filho.clientWidth){
                    console.log("Vou jogar aqui!")
                    endStem.appendChild(armazenadorDeBloco)
                    armazenadorDeBloco = null
                }
                
            }else{
                armazenadorDeBloco = endStem.lastChild
                console.log("Armazenado")
            }     
        }
        
        setTimeout(gabarito, 500)
    })

function gabarito(){
   if(endStem.childNodes.length == 3){
       main.innerHTML = ""
       main.appendChild(msgVitoria)
   }
}

