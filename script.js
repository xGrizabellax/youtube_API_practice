window.onload=function(){


    var inputPerf = document.querySelector('#input-performer')
    var startBtn = document.querySelector('#get-video')
    var videoPlayerOne = document.querySelector('#frame-one')
    var videoPlayerTwo = document.querySelector('#frame-two')


function fetchData(event){
    event.preventDefault()

    var input = inputPerf.value
    var requestUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' + input + '&key=AIzaSyDrE9r5RLbGomSlaxVmS5fZdzrrmGDV9dM'

    console.log(input)

fetch(requestUrl)
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data)
    let videos = data.items
        vidOneId = videos[0].id.videoId
        vidTwoId = videos[1].id.videoId
        // console.log(vidId)
        videoPlayerOne.setAttribute('src', 'https://www.youtube.com/embed/' + vidOneId)
        videoPlayerTwo.setAttribute('src', 'https://www.youtube.com/embed/' + vidTwoId)
    
})
}

startBtn.addEventListener('click', fetchData)






}
