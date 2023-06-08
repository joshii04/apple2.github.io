const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
const info = document.querySelector('.info');

const frameCount = 6;
const currentFrame = index => (
  `img/image${index.toString().padStart(3, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = function(){
      if(i == 1){
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    }
  }
};

const img = new Image()

const updateImage = index => {
  img.src = currentFrame(index);
  img.onload=function(){
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  const infoRect = info.getBoundingClientRect();
  if (infoRect.bottom <= 0) {
    requestAnimationFrame(() => updateImage(frameIndex + 1))
  }
});

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
preloadImages();
