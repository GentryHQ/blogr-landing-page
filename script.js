window.onload = () => {
    let allLinks = document.querySelector('.links');
    let subMenuLinks = document.querySelectorAll('.nav_submenu');
    let openSubMenu = document.querySelectorAll('.tag');
    let openMenu = document.getElementById('nav_open')
    let closeMenu = document.getElementById('nav__close')


    openMenu.onclick = () => {
        allLinks.classList.toggle('active');
        closeMenu.classList.toggle('active');
        openMenu.classList.toggle('active');
    };

    closeMenu.onclick = () => {
        allLinks.classList.toggle('active');
        closeMenu.classList.toggle('active');
        openMenu.classList.toggle('active');
    };

    

    openSubMenu.forEach((openSubMenu) => {
        openSubMenu.onclick = () => {
            subMenuLinks.forEach((subMenuLinks) => {
                subMenuLinks.classList.toggle('active');
            })
        }
    }
    )
}