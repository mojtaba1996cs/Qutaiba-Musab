
  let audioContext = new AudioContext();
  let i = 0;
  ([
    [0, 0.8], [0, 0.3], [2], [0], [5], [4, 2],
    [0, 0.8], [0, 0.3], [2], [0], [7], [5, 2],
    [0, 0.8], [0, 0.3], [12], [9], [5], [4], [2, 2],
    [10, 0.8], [10, 0.3], [9], [5], [7], [5, 2] ,  [0, 0.7], [0, 0.3], [2], [0], [5], [4, 2],
    [0, 0.7], [0, 0.3], [2], [0], [7], [5, 2],
    [0, 0.7], [0, 0.3], [12], [9], [5], [4], [2, 2],
    [10, 0.7], [10, 0.3], [9], [5], [7], [5, 2]]
  ).map(([n, dur = 1]) => {
    let oscillator = audioContext.createOscillator();
    oscillator.start(i);
    oscillator.frequency.value *= Math.pow(1.06, n);
    h = audioContext.createGain();
    i += dur / 1.5;
    h.gain.linearRampToValueAtTime(0, i);
    oscillator.connect(h);
    h.connect(audioContext.destination)
  });
function start(){
    var clab= document.querySelector("#clab")
   clab.style.display = "block";//this is your all tag in clab
   document.getElementById("loader").style.background="trasparent";
   document.getElementById("loader").style.display="none";
   document.getElementById("loader").style.transition ="2s";
   document.getElementById("loader").innerHTML =" ";
}
setInterval(start,4000);