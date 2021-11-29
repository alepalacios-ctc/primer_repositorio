var cnv, ctx, pos_x = 8, img;
function anim() {
ctx.clearRect(0, 0, 600, 200);
ctx.drawImage(img, pos_x, 0);
pos_x += 5;
setTimeout(anim, 15);
}
window.onload = function() {
img = new Image();
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiooKPieggQk6jFdkNrm0lVxKdNaVGVOYcp4EskhTx6LIAIYhUJnQv_h-jGs9m2I531I&usqp=CAU';
cnv = document.getElementById('lienzo');
ctx = cnv.getContext('2d');
// iniciar la animación
anim();
}

