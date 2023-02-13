const searchEmoji=()=>{
const imojeesection=document.getElementById("imojeesection")
imojeesection.innerHTML=""
const userInput=document.getElementById("searchbar").value
const tag=[]
emojiList.map(ele=>{
    ele.tags.map(elem=>{
        if(elem.startsWith(userInput))
        {
            tag.push(ele)
            imojeesection.innerHTML+=`
            <div class="box">
                <div class="emojiIcon">${ele.emoji}</div>
                <div class="emojitag">${ele.aliases}</div>
                <div class="emojiname">${ele.description}</div>
            </div>`
            console.log(ele);
        }
    })
    if(userInput=="")
    {
        imojeesection.innerHTML=""
    }
})
}
const findEmoji=()=>{
    const imojeesection=document.getElementById("imojeesection")
    imojeesection.innerHTML=""
    const userInput=document.getElementById("searchbar").value
    const tag=[]
    emojiList.map(ele=>{
        if(ele.tags.includes(userInput))
        {
            tag.push(ele)
            imojeesection.innerHTML+=`
            <div class="box">
                <div class="emojiIcon">${ele.emoji}</div>
                <div class="emojitag">${ele.aliases}</div>
                <div class="emojiname">${ele.description}</div>
            </div>`
        }
    })
}
const search=document.getElementById("searchbar")
search.addEventListener("keyup",searchEmoji)
const button=document.getElementById("btn")
button.addEventListener("click",findEmoji)