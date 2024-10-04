let index = 0;
const images = document.querySelectorAll('.carousel-image');
let interval = setInterval(nextImage, 3000); // ავტომატური სრიალი ყოველ 3 წამში

// შემდეგი სურათის ჩვენების ფუნქცია
function nextImage() {
    index = (index + 1) % images.length;
    updateCarousel();
}

// წინა სურათის ჩვენების ფუნქცია (სურვილისამებრ, თუ თქვენ გაქვთ ღილაკები ხელით კონტროლისთვის)
function prevImage() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}

//კარუსელის ხედის განახლების ფუნქცია მიმდინარე ინდექსზე დაყრდნობით
function updateCarousel() {
    images.forEach((img, i) => {
        img.style.transform = `translateX(-${index * 100}%)`;
    });
}

// ღონისძიების მსმენელები შემდეგი და წინა ღილაკებისთვის (თუ გაქვთ ისინი)
document.getElementById('next').addEventListener('click', () => {
    clearInterval(interval); // შეაჩერე ავტომატური სრიალი სურათების ხელით შეცვლისას
    nextImage();             // გადადით შემდეგ სურათზე ხელით
    interval = setInterval(nextImage, 3000); //გადატვირთეთ ავტომატური სრიალი ხელით მოქმედების შემდეგ
});

document.getElementById('prev').addEventListener('click', () => {
    clearInterval(interval); // შეაჩერე ავტომატური სრიალი სურათების ხელით შეცვლისას
    prevImage();             // წინა სურათზე ხელით გადატანა
    interval = setInterval(nextImage, 3000); // გადატვირთეთ ავტომატური სრიალი ხელით მოქმედების შემდეგ
});
//ჩამატებული
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.carousel-item');

let currentItem = 0;
// Event listener for Previous Button
prevButton.addEventListener('click', () => {
    currentItem = (currentItem === 0) ? items.length - 1 : currentItem - 1;
    updateCarousel(currentItem);
});
// Event listener for Next Button
nextButton.addEventListener('click', () => {
    currentItem = (currentItem === items.length - 1) ? 0 : currentItem + 1;
    updateCarousel(currentItem);
});

//დიალოგური ყუთი ასაკის გადამოწმებისთვის
const openDialog = document.getElementById('open-dialog');
const dialogBox = document.getElementById('dialog-box');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// გახსენით დიალოგური ფანჯარა
openDialog.addEventListener('click', () => {
    dialogBox.showModal();
});

// დახურეთ დიალოგური ფანჯარა "დიახ" და აჩვენეთ შეტყობინება
yesBtn.addEventListener('click', () => {
    dialogBox.close();
    alert("მოგესალმებით NASA!"); // მისასალმებელი შეტყობინება
});

// დახურეთ დიალოგური ფანჯარა "არა"-ზე და აჩვენეთ გაფრთხილება
noBtn.addEventListener('click', () => {
    dialogBox.close();
    alert("უკაცრავად, გასაგრძელებლად 18 წლის ან მეტის უნდა იყოთ."); // გაფრთხილება ასაკობრივი შეზღუდვის შესახებ
});

// ნავიგაციის მენიუს გადართვა (ფუნქციების ჩვენება/დამალვა)
var navLinks = document.getElementById("navLinks");

// მენიუს ჩვენების ფუნქცია
function showMenu() {
    navLinks.style.right = "0";
}

// მენიუს დამალვის ფუნქცია
function hideMenu() {
    navLinks.style.right = "-200px";
}