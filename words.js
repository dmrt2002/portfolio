const text = document.querySelector('.quote');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop: true
})

.add({
    targets : ".quote span",
    translateY: [-600 , 0],
    scale: [10,1],
    opacity:[0,1],
    easing: "easeOutExpo",
    duration : 1500,
    delay: anime.stagger(100),
});