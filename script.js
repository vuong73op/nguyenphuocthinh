// Lấy tất cả các mục ảnh
const items = document.querySelectorAll('.item');
let currentIndex = 0;

// Hàm hiển thị ảnh hiện tại với hiệu ứng mờ dần
function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

// Sự kiện khi nhấn nút "Next" để chuyển sang ảnh tiếp theo
document.getElementById('next').onclick = function() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
};

// Sự kiện khi nhấn nút "Prev" để quay lại ảnh trước đó
document.getElementById('prev').onclick = function() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
};

// Hiển thị ảnh đầu tiên khi khởi động
showSlide(currentIndex);
