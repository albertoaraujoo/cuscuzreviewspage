


const reviews = [

    {
        name: "Thales Lindberg",
        prof: "User Interface Designer at FIAP",
        rev: "Well, to be honest I’m not a huge fan of cuscuz or couscous. I’ve also tried to eat the moroccan one but still didn't like it cus remarkably was the same flavor.",
        img: "images/thales.jpg"


    },

    {
        name: "Franciellio Borges",
        prof: "SMOKER and Meteorology Student",
        rev: "I find couscous to be an excellent dish, not only it's easy to make it is also extremely cheap. Not to mention how versatile it is.",
        img: "images/fran.jpg"



    }
,
    {
        name: "Igor Rafael",
        prof: "Excellent FIFA 22 ProClubs Goalkeeper",
        rev: "Cuzcuz é uma comida deliciosa, de baixo custo e alimenta bem as pessoas, a comida fica melhor com leite e carne guizada de galinha ou bode.",
        img: "images/para.jpg"


    }
,
    {
        name: "Renato Andrade",
        prof: "Professional Procrastinator",
        rev: "Não aguento mais comer cuscuz todo santo dia.",
        img: "./images/renato.jpg"


    }


]



function loaded (){

    let userName = document.getElementById("name")
        userName.innerText = reviews[0].name

    let userProf = document.getElementById ("prof")
        userProf.innerText = reviews[0].prof


    let userRev = document.getElementById ("rev")
        userRev.innerText = reviews[0].rev


    let userImg = document.getElementById ("img")
        userImg.src = reviews[0].img

    
     

}

let index = 0

function rightt(){
    
    index++

    if ( index < reviews.length){
    let userName = document.getElementById("name")
    userName.innerText = reviews[index].name

    let userProf = document.getElementById ("prof")
        userProf.innerText = reviews[index].prof

    let userRev = document.getElementById ("rev")
    userRev.innerHTML = reviews[index].rev

    let userImg = document.getElementById ("img")
    userImg.src = reviews[index].img

}

    else {
        index = 0
        let userName = document.getElementById("name")
        userName.innerText = reviews[index].name

        let userProf = document.getElementById ("prof")
        userProf.innerText = reviews[index].prof

        let userRev = document.getElementById ("rev")
        userRev.innerText = reviews[index].rev

        let userImg = document.getElementById ("img")
        userImg.src = reviews[index].img
        
    }

}

function leftt(){
    

        if ( index <= 0){
            index = reviews.length - 1
            let userName = document.getElementById ("name")
            userName.innerText = reviews[index].name

            let userProf = document.getElementById ("prof")
            userProf.innerText = reviews[index].prof

            let userRev = document.getElementById ("rev")
            userRev.innerText = reviews[index].rev

            let userImg = document.getElementById ("img")
            userImg.src = reviews[index].img
        }
    
        else  {
            index--
            let userName = document.getElementById ("name")
            userName.innerText = reviews[index].name

            let userProf = document.getElementById ("prof")
            userProf.innerText = reviews[index].prof

            let userRev = document.getElementById ("rev")
            userRev.innerText = reviews[index].rev

            let userImg = document.getElementById ("img")
            userImg.src = reviews[index].img

        }

}

   


function surp (){

        index = Math.floor (Math.random() * reviews.length)

        let userName = document.getElementById ("name")
        userName.innerText = reviews[index].name

        let userProf = document.getElementById ("prof")
        userProf.innerText = reviews[index].prof

        let userRev = document.getElementById ("rev")
        userRev.innerText = reviews[index].rev

        let userImg = document.getElementById ("img")
        userImg.src = reviews[index].img


}























