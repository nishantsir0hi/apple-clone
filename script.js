document.querySelector('.cta-btn').addEventListener('click', () => {
    window.location.href = "https://www.apple.com/iphone-13/";
});

document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        alert("You clicked on " + e.target.innerText);
    });
});
