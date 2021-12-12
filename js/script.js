let nav_toggle = document.getElementById ("nav-toggle");

nav_toggle.addEventListener ("click", () => {
    let bars = document.getElementsByClassName ("bar");

    Array.from (bars).forEach (element => {
        element.classList.toggle ("active");
    });

    let nav_links = document.getElementById ("nav-links");

    nav_links.classList.toggle ("active");
})


