/* =RESIZE NAV BAR ON SCROLL= */
var navbar = document.querySelector(".navbar");
/* when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar*/
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/* =SKILLS ANIMANTION= */
const skills_wrap = document.querySelector("about-skills"),
    skills_bar = document.querySelectorAll(".progress-line");
    window.addEventListener("scroll", () => {
       skillsEffect();
    });
    /*every scrol checking, we exceeded the about-skills or not */
    function checkScroll(el)
    {
        /*getting the top position of about-skills relative to view port, in other
        words get amount of pixels between about-skills and the top edge of the window. */
        let rect= el.getBoundingClientRect();
        /*After knowing the amount of pixels between the top edge of about skills and the 
        top edge of window now we will check exceeded the bottom edge of about skills or not*/
        if(window.innerHeight >= rect.top + el.offsetHeigt) return true;
        return false; 
    }
    function skillsEffect()
    {
        if (!checkScroll(skills_wrap)) return;
        skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
    }


