const star_one=document.getElementById('star-1');
const star_two=document.getElementById('star-2');
const star_three=document.getElementById('star-3');
const star_four=document.getElementById('star-4');
const star_five=document.getElementById('star-5');
const star_one_class=star_one.className;
const star_two_class=star_two.className;
const star_three_class=star_three.className;
const star_four_class=star_four.className;
const star_five_class=star_five.className;
star_one.addEventListener("mouseover", event => {
    star_one.className="fa-solid fa-star";
    star_two.className="fa-regular fa-star";
    star_three.className="fa-regular fa-star";
    star_four.className="fa-regular fa-star";
    star_five.className="fa-regular fa-star";
});
star_one.addEventListener("mouseout", event => {
    star_one.className=star_one_class;
    star_two.className=star_two_class;
    star_three.className=star_three_class;
    star_four.className=star_four_class;
    star_five.className=star_five_class;
});


star_two.addEventListener("mouseover", event => {
    star_one.className="fa-solid fa-star";
    star_two.className="fa-solid fa-star";
    star_three.className="fa-regular fa-star";
    star_four.className="fa-regular fa-star";
    star_five.className="fa-regular fa-star";
});
star_two.addEventListener("mouseout", event => {
    star_one.className=star_one_class;
    star_two.className=star_two_class;
    star_three.className=star_three_class;
    star_four.className=star_four_class;
    star_five.className=star_five_class;
});

star_three.addEventListener("mouseover", event => {
    star_one.className="fa-solid fa-star";
    star_two.className="fa-solid fa-star";
    star_three.className="fa-solid fa-star";
    star_four.className="fa-regular fa-star";
    star_five.className="fa-regular fa-star";
    
});
star_three.addEventListener("mouseout", event => {
    star_one.className=star_one_class;
    star_two.className=star_two_class;
    star_three.className=star_three_class;
    star_four.className=star_four_class;
    star_five.className=star_five_class;
});


star_four.addEventListener("mouseover", event => {
    star_one.className="fa-solid fa-star";
    star_two.className="fa-solid fa-star";
    star_three.className="fa-solid fa-star";
    star_four.className="fa-solid fa-star";
    star_five.className="fa-regular fa-star";
});
star_four.addEventListener("mouseout", event => {
    star_one.className=star_one_class;
    star_two.className=star_two_class;
    star_three.className=star_three_class;
    star_four.className=star_four_class;
    star_five.className=star_five_class;
});

star_five.addEventListener("mouseover", event => {
    star_one.className="fa-solid fa-star";
    star_two.className="fa-solid fa-star";
    star_three.className="fa-solid fa-star";
    star_four.className="fa-solid fa-star";
    star_five.className="fa-solid fa-star";
});
star_five.addEventListener("mouseout", event => {
    star_one.className=star_one_class;
    star_two.className=star_two_class;
    star_three.className=star_three_class;
    star_four.className=star_four_class;
    star_five.className=star_five_class;
});
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
if (sidebar.style.maxHeight === '0px' || sidebar.style.maxHeight === '') {
    sidebar.style.maxHeight = '500px'; // Slide down
} else {
    sidebar.style.maxHeight = '0px'; // Slide up
}
});