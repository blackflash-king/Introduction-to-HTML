function clickFunction(){
    let bg = document.getElementById('background')
    console.log(bg)
    let color = ["red", "green", "yellow", "blue", "indigo", "orange", "white"];

    const colorIndex = parseInt(Math.random() * color.length);
    bg.style.backgroundColor = color[colorIndex]

}