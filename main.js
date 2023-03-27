const music = new Audio('Audio/5.mp3');
// music.play();

const songs=[
    {
        id:'1',
        songName:`Chandaniya
        <div class="subtitle">Shreya Ghoshal</div> `,
        poster:"./img/1.jpg"
    },
    {
        id:'2',
        songName:`Ae mere dil
        <div class="subtitle">Abhay Jodhpurkar</div>  `,
        poster:"./img/2.jpg"
    },
    {
        id:'3',
        songName:`Sawaar Loon
        <div class="subtitle">Monali Thakur</div>  `,
        poster:"./img/3.jpg"
    },
    {
        id:'4',
        songName:` Ae Meri Zindagi
        <div class="subtitle">Sadhna Sargam</div>`,
        poster:"./img/4.jpg"
    },
    {
        id:'5',
        songName:` Kuch Na kaho
        <div class="subtitle">R.D Burman</div>`,
        poster:"./img/5.jpg"
    },
    {
        id:'6',
        songName:`Suna Suna
        <div class="subtitle">Shreya Ghoshal</div> `,
        poster:"./img/6.jpg"
    },
    {
        id:'7',
        songName:`Sochenge Tmhe Pyar
        <div class="subtitle">Kumar Sanu</div> `,
        poster:"./img/7.jpg"
    },
    {
        id:'8',
        songName:` Tum Bin
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster:"./img/8.jpg"
    },
    {
        id:'9',
        songName:`Yashomati Maiya Se
        <div class="subtitle">Lata Mangeshkar</div> `,
        poster:"./img/9.jpg"
    },
    {
        id:'10',
        songName:`Bahut Pyar Krte Hai
        <div class="subtitle">Anuradha Paudwal</div>`,
        poster:"./img/10.jpg"
    },
    {
        id:'11',
        songName:`Rim Jhim Gire Sawan
        <div class="subtitle">Kishor Kumar</div> `,
        poster:"./img/11.jpg"
    },
    {
        id:'12',
        songName:`Moh Moh K Dhage
        <div class="subtitle">Monali Thakur</div> `,
        poster:"./img/12.jpg"
    },
    {
        id:'13',
        songName:`Lag Ja Gale
        <div class="subtitle">Lata Mangeshkar</div> `,
        poster:"./img/13.jpg"
    },
    {
        id:'14',
        songName:`Aaj Phir Tmpe
        <div class="subtitle">Khushboo Jain</div>`,
        poster:"./img/14.jpg"
    },
    {
        id:'15',
        songName:`Kaun Tujhe
        <div class="subtitle">Palak Muchhal</div>`,
        poster:"./img/15.jpg"
    },
    {
        id:'16',
        songName:`Sunn Raha Hai Na Tu
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster:"./img/16.jpg"
    },
    {
        id:'17',
        songName:`Maine Payal Hai Chankayi
        <div class="subtitle">Falguni Pathak</div>`,
        poster:"./img/17.jpg"
    },
    {
        id:'18',
        songName:`Ye Ratein Ye Mausam
        <div class="subtitle">Sanam</div>`,
        poster:"./img/18.jpg"
    },
    {
        id:'19',
        songName:`Salona Sa Sajan Hai
        <div class="subtitle">Asha Bhosle</div>`,
        poster:"./img/19.jpg"
    },
    {
        id:'20',
        songName:`Surmayi Ankhiyon Me
        <div class="subtitle">llaiyaraaja</div>`,
        poster:"./img/20.jpg"
    },
    {
        id:'21',
        songName:`Dil Hai Ki Manta Nahi 
        <div class="subtitle">Anuradha Paudwal</div>`,
        poster:"./img/21.jpg"
    },
    {
        id:'22',
        songName:`Mera Jeevan Kora Kagaz
        <div class="subtitle">Kishor Kumar</div>`,
        poster:"./img/22.jpg"
    }
    
]

Array.from(document.getElementsByClassName('songItems')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

let search_results=document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const{id, songName, poster}=element;
    // console.log(poster);
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;
    card.innerHTML=
    ` <img src="${poster}" alt="">
    <div class="content">
       ${songName}
    </div>
    `;
    search_results.appendChild(card)
});

let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
       let as=items[index].getElementsByClassName('content')[0]
       let text_value=as.textContent || as.innerHTML;

       if (text_value.toUpperCase().indexOf(input_value) > -1) {
           items[index].style.display="flex";
       } else {
           items[index].style.display="none";
       }
        
       if (input_value==0) {
          search_results.style.display="none";
       } else {
          search_results.style.display="";
       }
    }
})

let masterPlay= document.getElementById('masterPlay');
let wave=document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItems')).forEach((el)=>{
        el.style.background='rgb(105, 105, 170,.0)'
    })
}

let index=0;
let poster_master_play =document.getElementById('poster_master_play');
let download_music =document.getElementById('download_music');
let title =document.getElementById('title');


Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(el)=>{
        index=el.target.id;
        music.src=`Audio/${index}.mp3`;
        music.play();
        poster_master_play.src=`img/${index}.jpg`;
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href=`Audio/${index}.mp3`;

        let songTitles=songs.filter((els)=>{
             return els.id==index;
        });

        songTitles.forEach(elss=>{
            let{songName}=elss;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
        })
         makeAllBackground();
         Array.from(document.getElementsByClassName('songItems'))[index-1].style.background='rgb(105, 105, 170,.1)'
         makeAllPlays();
         el.target.classList.add('bi-pause-circle-fill');
         el.target.classList.remove('bi-play-circle-fill');
         wave.classList.add('active2');
       })

    let currentStart=document.getElementById('currentStart');
    let currentEnd=document.getElementById('currentEnd');
    let seek=document.getElementById('seek');
    let bar2=document.getElementById('bar2');
    let dot=document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1= Math.floor(music_dur /60);
    let sec1= Math.floor(music_dur %60);

    if(sec1 < 10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`

    let min2= Math.floor(music_curr / 60);
    let sec2= Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`

    let ProgressBar=parseInt((music_curr / music_dur)*100);
    seek.value=ProgressBar;
    
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
});

let vol_icon =document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let vol_bar =document.getElementsByClassName('vol_bar')[0];
let vol_dot =document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill'); 
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a /100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index -=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItems')).length;
    }
    music.src=`Audio/${index}.mp3`;
    music.play();
    poster_master_play.src=`img/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles=songs.filter((els)=>{
         return els.id==index;
    });

    songTitles.forEach(elss=>{
        let{songName}=elss;
        title.innerHTML=songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItems'))[index-1].style.background="rgb(105,105,105,.0)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active2');
});

next.addEventListener('click',()=>{
    index +=1;
    if(index>Array.from(document.getElementsByClassName('songItems')).length){
        index=1;
    }
    music.src=`Audio/${index}.mp3`;
    music.play();
    poster_master_play.src=`img/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles=songs.filter((els)=>{
         return els.id==index;
    });

    songTitles.forEach(elss=>{
        let{songName}=elss;
        title.innerHTML=songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItems'))[index-1].style.background="rgb(105,105,105,.0)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active2');
});

});

let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song =document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
})

let pop_art_left =document.getElementById('pop_art_left');
let pop_art_right =document.getElementById('pop_art_right');
let item =document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft+=330;
})
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
})

let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;
    switch (a) 
    {
         case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.innerHTML='repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-shuffle');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.innerHTML='random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.innerHTML='next';
            break;    
    }
})

    const next_music=()=>{
        if (index==songs.length) 
        {
            index=1    
        } else 
        {
            index++; 
        }
            music.src=`Audio/${index}.mp3`;
            music.play();
            poster_master_play.src=`img/${index}.jpg`;
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            download_music.href=`Audio/${index}.mp3`;
    
            let songTitles=songs.filter((els)=>{
                 return els.id==index;
            });
    
            songTitles.forEach(elss=>{
                let{songName}=elss;
                title.innerHTML=songName;
                download_music.setAttribute('download',songName);
            })
    
            makeAllBackground();
            Array.from(document.getElementsByClassName('songItems'))[index-1].style.background="rgb(105,105,105,.0)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active2');
    }

    const repeat_music=()=>{
           index;
            music.src=`Audio/${index}.mp3`;
            music.play();
            poster_master_play.src=`img/${index}.jpg`;
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            download_music.href=`Audio/${index}.mp3`;
    
            let songTitles=songs.filter((els)=>{
                 return els.id==index;
            });
    
            songTitles.forEach(elss=>{
                let{songName}=elss;
                title.innerHTML=songName;
                download_music.setAttribute('download',songName);
            })
    
            makeAllBackground();
            Array.from(document.getElementsByClassName('songItems'))[index-1].style.background="rgb(105,105,105,.0)";
            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active2');
    }

    const random_music=()=>{
       if (index==songs.length) {
            index=1
       } else {
            index=Math.floor((Math.random()*songs.length)+1)
       }
         music.src=`Audio/${index}.mp3`;
         music.play();
         poster_master_play.src=`img/${index}.jpg`;
         masterPlay.classList.remove('bi-play-fill');
         masterPlay.classList.add('bi-pause-fill');
         download_music.href=`Audio/${index}.mp3`;
 
         let songTitles=songs.filter((els)=>{
              return els.id==index;
         });
 
         songTitles.forEach(elss=>{
             let{songName}=elss;
             title.innerHTML=songName;
             download_music.setAttribute('download',songName);
         })
 
         makeAllBackground();
         Array.from(document.getElementsByClassName('songItems'))[index-1].style.background="rgb(105,105,105,.0)";
         makeAllPlays();
         el.target.classList.remove('bi-play-circle-fill');
         el.target.classList.add('bi-pause-circle-fill');
         wave.classList.add('active2');
 }

 music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;    
    }
 })

   
    
