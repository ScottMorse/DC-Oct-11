const pictures = document.querySelector('#pictures')

let i = 0
let newPic
function cyclePhoto(){
    const leftPictureWrap = pictures.children[0]
    const midPictureWrap = pictures.children[1]
    const rightPictureWrap = pictures.children[2]
    const leftPicture = leftPictureWrap.children[0]
    const midPicture = midPictureWrap.children[0]
    const rightPicture = rightPictureWrap.children[0]
    if(i == 0){
        leftPicture.style.backgroundImage = `url(https://picsum.photos/397/?random)`
        midPicture.style.backgroundImage = `url(https://picsum.photos/398/?random)`
        rightPicture.style.backgroundImage = `url(https://picsum.photos/399/?random)`
        leftPicture.style.height = '300px'
        rightPicture.style.height = '400px'
        midPicture.style.height = '300px'
    }
    else{
        newPic.style.height = '400px'
        midPicture.style.height = '300px'
        leftPicture.style.height='300px'
    }
    leftPicture.style.transform = 'rotateY(-90deg)'

    midPictureWrap.style.transform = 'translateX(-400px)'
    midPicture.style.opacity = 0.7
    midPicture.style.filter = 'blur(2px)'
    midPicture.style.transform = 'rotateY(-70deg)'

    rightPictureWrap.style.transform = 'translateX(0px)'
    rightPicture.style.transform = "rotateY(0deg)"
    rightPicture.style.opacity = 1
    rightPicture.style.filter = 'blur(0)'

    newPicWrap = document.createElement('div')
    newPicWrap.classList.add('picture-wrap')
    newPicWrap.style.transform = 'translateX(400px)'

    newPic = document.createElement('div')
    newPic.style.backgroundImage = `url(https://picsum.photos/40${i}/?random)`
    newPic.style.backgroundPosition = 'center'
    newPic.style.transition = 'transform 0.8s linear, opacity 0.8s linear, filter 1s ease, height 0.8s linear'
    newPic.style.transform = 'rotateY(90deg)'
    newPic.style.width = '400px'
    newPic.style.height = '300px'
    newPic.style.filter = 'blur(2px)'
    newPic.style.opacity = 0

    newPicWrap.appendChild(newPic)
    pictures.appendChild(newPicWrap)

    setTimeout(()=>newPic.style.opacity = 0.7,400)
    setTimeout(()=>newPic.style.transform = 'rotateY(60deg)',100)
    setTimeout(()=>leftPictureWrap.parentNode.removeChild(leftPictureWrap),1000)
    i++
    if(i == 9){
        i == 0
    }
}

cyclePhoto()
window.setInterval(cyclePhoto,2000)
