let startX;

document.getElementById('slide').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.getElementById('slide').addEventListener('touchmove', (e) => {
    if (!startX) return;
    let diffX = startX - e.touches[0].clientX;
    if (diffX > 50) {  // Vuốt sang trái
        document.getElementById('next').click();
    } else if (diffX < -50) {  // Vuốt sang phải
        document.getElementById('prev').click();
    }
    startX = null;  // Reset lại giá trị
});
