const phrases = [
    'Creative',
    'Passionate',
    'Goal Oriented',
    'Always Learning',
]

const titleChanger = () => {
    let titleChange = document.getElementById('title')
    console.log(titleChange)
    
    setInterval(() => {
        let ramdomNum = Math.floor(Math.random() * 4);
        titleChange.innerHTML = phrases[ramdomNum]
    }, 10000)
}

titleChanger();