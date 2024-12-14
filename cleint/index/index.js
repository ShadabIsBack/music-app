
all_musics()
let previous = document.getElementById('pre');
let play = document.querySelector('#play');
// let next = 
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.getElementById('track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
let volume_icon = document.querySelector('#volume_icon')
let duration = document.querySelector('.duration')
const play_List = document.getElementById('play_List'); // Assuming '.modal-body' is a class name


let track = document.createElement('audio')
let ind = 0



function all_musics(){
    fetch('http://localhost:8000/music/getData',{
        method:"Get"
    }).then((blob)=>{
       return blob.json()
    }).then((result)=>{
        console.log(result.data)
        let str = result.data.map((ele,i)=>{
            return` 
            <div id="listSong" style="background-color: rgb(28, 28, 28);border-radius: 8px;cursor: pointer;margin-top:7px">
                    
                    <div style="display: flex;align-items: center;border: 0px solid white;justify-content: space-between;width: 95%;">
                      <div>
                        <img src="${ele.image}" style="width: 50px;height: auto;border-radius: 8px;margin-left: 7px;" alt="">
                      </div>
                      <div style="line-height: 5px;margin-top: 22px;text-align: center;">
                        <p style="color: white;">${ele.name}</p>
                        <p style="font-size: 10px;color: white;">${ele.artist}</p>
                      </div>
                      <div style="margin-top: 18px;">
                        <p style="color: white;">${ele.duration}</p>
                      </div>
                    </div>
                  </div>
            `
        }).join('')
        
        play_List.innerHTML = str


        function loadMusic(i){
            track.src = result.data[i].url
            track_image.src = result.data[i].image
            title.innerHTML = result.data[i].name
            artist.innerHTML = result.data[i].artist
            track.load()
            timer = setInterval(range_slider,1000)
            i++
        }
        loadMusic(0)
        
        let isPlaying = false
        
        document.getElementById('play').addEventListener('click',()=>{
            if(isPlaying == false){
                playMusic()
            }else{
                pauseMusic()
            }
        })
        

        function playMusic(){
            // loadMusic()
            track.play()
            isPlaying = true
            let playIcon = play.querySelector('i')
            playIcon.setAttribute('class', 'fa fa-pause')
        
        }
        
        function pauseMusic (){
            
            track.pause()
            isPlaying = false
            let playIcon = play.querySelector('i')
            playIcon.setAttribute('class', 'fa fa-play')
        
        }
        
        
      

        document.getElementById('next').addEventListener('click',()=>{
            ind++
            track.src = result.data[ind].url
            track_image.src = result.data[ind].image
            title.innerHTML = result.data[ind].name
            artist.innerHTML = result.data[ind].artist
            track.load()
            console.log(ind)
            if(isPlaying == true){
        
                playMusic()
            }else{
                pauseMusic()
            }
        
        })

        previous.addEventListener('click',()=>{
            ind--
            track.src = result.data[ind].url
            track_image.src = result.data[ind].image
            title.innerHTML = result.data[ind].name
            artist.innerHTML = result.data[ind].artist
            track.load()
            
            if(isPlaying == true){
                playMusic()
            }else{
                pauseMusic()
            }
            console.log(ind)
        })



    })


}



let myVolume = 1
track.setAttribute('controls','')


function volume_change(e) {

    myVolume =e.target.value

    if(myVolume > 0 ){
        track.volume =  myVolume
        let volumeMute = volume_icon.querySelector('i')
        volumeMute.setAttribute('class','fa-solid fa-volume-up fa-xl') 
      
       
    }
    if(myVolume == 0){
        let volumeMute = volume_icon.querySelector('i')
        volumeMute.setAttribute('class','fa-solid fa-volume-xmark fa-xl') 
        
    }
}
recent_volume.addEventListener('input', volume_change);
track.volume = myVolume;
recent_volume.value = myVolume * 100; 

let volumeMuteUp = false

function mute_sound(){

   if(volumeMuteUp == true){
    
       let volumeMute = volume_icon.querySelector('i')
       volumeMute.setAttribute('class','fa-solid fa-volume-up fa-xl')
       track.volume = myVolume  
       recent_volume.setAttribute('value','0.9')
       volumeMuteUp = false 
      

    }
    else{
        let volumeMute = volume_icon.querySelector('i')
        volumeMute.setAttribute('class','fa-solid fa-volume-xmark fa-xl') 
        track.volume =  0
        
        
        recent_volume.setAttribute('value',0)
        
        volumeMuteUp = true
        
    }

}

function change_duration(){
    slider_position = track.duration * (slider.value / 100)
    track.currentTime = slider_position
}

function range_slider(){
    let position = 0;
    if (!isNaN(track.duration)) { // Correcting the usage of isNaN
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
}



// document.getElementById('play-List').addEventListener('click', );
// let ind1 = 0
    function songButtonPlay(songNumber){
        track.src = result.data[songNumber].url
    track_image.src = result.data[songNumber].image
    title.innerHTML = result.data[songNumber].name
    artist.innerHTML = result.data[songNumber].artist
    // ind1++
        track.play()
    isPlaying = true
    let playIcon = play.querySelector('i')
    playIcon.setAttribute('class', 'fa fa-pause')
    // track.load()
    
    }
