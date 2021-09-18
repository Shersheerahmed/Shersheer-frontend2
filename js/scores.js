// Actually calling the getscores() function,
//which fetch all names and scores from rhe database

getScores().then((data)=>{
    //console.log(data)
    let display = ''
    for(let i=0;i<data.length; i++){
        display += `<li class="score-item header">
        <span>${data[i].name}</span>   
        <span>${data[i].score}</span>
    </li>`
    }
    document.getElementById("displayScores").innerHTML = display
})
