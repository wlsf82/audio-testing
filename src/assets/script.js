const playButton = document.querySelector('.play-button')
const jokerRemix = document.getElementById('joker-remix')

let isJokerRemixPlaying = false

playButton.addEventListener('click', play)

function play() {
  jokerRemix.play().then(() => {
    console.log('Joker remix playback started!')
  }).catch(error => {
    console.log('Joker remix play was prevend by the following error:')
    console.log(error)
  })

  playButton.innerText = 'Pause'
  
  playButton.removeEventListener('click', play)
  playButton.addEventListener('click', pause)
}

function pause() {
  jokerRemix.pause()

  playButton.innerText = 'Play'
  
  playButton.removeEventListener('click', pause)
  playButton.addEventListener('click', play)
}
