const btnSorpresa = document.getElementById("btnSorpresa");
const btnCopiar = document.getElementById("btnCopiar");
const toast = document.getElementById("toast");
const mensaje = document.getElementById("mensaje");
const musica = document.getElementById("musica");

let musicaLista = false;

/* PREPARA EL AUDIO AL PRIMER TOQUE */
document.addEventListener("click", () => {
  if(!musicaLista){
    musica.volume = 0.6;
    musica.play().then(()=>{
      musica.pause();
      musica.currentTime = 0;
      musicaLista = true;
    }).catch(()=>{});
  }
}, {once:true});

function showToast(texto){
  toast.textContent = texto;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2000);
}

function confettiMini(){
  const emojis=["💖","💘","✨","🌹"];
  for(let i=0;i<20;i++){
    const s=document.createElement("span");
    s.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    s.style.position="fixed";
    s.style.left=Math.random()*100+"vw";
    s.style.top="-20px";
    s.style.fontSize="22px";
    s.style.transition="transform 1.5s, opacity 1.5s";
    document.body.appendChild(s);

    setTimeout(()=>{
      s.style.transform=`translateY(${window.innerHeight}px)`;
      s.style.opacity=0;
    },50);

    setTimeout(()=>s.remove(),1500);
  }
}

/* BOTÓN SORPRESA */
btnSorpresa.onclick=()=>{
  confettiMini();
  showToast("Para ti 💞");
  musica.play();
}

btnCopiar.onclick=async()=>{
  await navigator.clipboard.writeText(mensaje.innerText);
  showToast("Mensaje copiado");
}
