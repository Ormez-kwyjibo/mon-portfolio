/* =RESIZE NAV BAR ON SCROLL= */
var navbar = document.querySelector(".navbar");
/* when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar*/
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/* =NAV TOOGLER= */
const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle)
      {
        navToggle.addEventListener("click", () =>
        {
            navMenu.classList.toggle("aactive");        
        })
      }
      /* =CLOSING menu when link is clicked= */
      const navlink = document.querySelectorAll(".nav-link");
      function linkAction()
      {
        const navMenu = document.querySelector(".menu");
        navMenu.classList.remove("active")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))
/* SCROLL SECTION ACTIVE LINK */
      const Section=document.querySelectorAll('section[id]')
      function scrollActive()
      {
        const scrollY = window.pageYOffset
        Section.forEach(current => {
            const sectionHeight = current.offsetHeigt
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
            }
            else
            {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.removes('active')
            }
        })
      }
      window.addEventListener('scroll', scrollActive)


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
    /* =PORTFOLIO ITEM FILTER= */ 
      const FilterContainer = document.querySelector(".portfolio-filter");
            filterBtns = FilterContainer.children;
            totalFilterBtn = filterBtns.length;
            PortfolioItems = document.querySelectorAll(".portfolio-item");
            totalportfolioItem = PortfolioItems.length;
            for(let i=0; i< totalFilterBtn; i++)
            {
                filterBtns[i].addEventListener("click",fonction()
                {
                    FilterContainer.querySelector(".active").classList.remove("active");
                    this.classList.add("active");
                    const filterValue = this.getAttribute("data-filter");
                    for(let k=0; k< totalportfolioItem; k++; )
                    {
                        if(filterValue === PortfolioItems[k].getAttribute("data-category"))
                        {
                            PortfolioItems[k].classList.remove("hide");
                            PortfolioItems[k].classList.add("show");
                        }
                        else
                        {
                            PortfolioItems[k].classList.remove("show");
                            PortfolioItems[k].classList.add("hide");
                        }
                        if(filterValue === "all")
                        {
                            PortfolioItems[k].classList.remove("show");
                            PortfolioItems[k].classList.add("hide");
                        }
                    } 
                })
            }
            /* LIGHTBOX */
            const lightbox = document.querySelector(".lightbox"),
                  lightboxImg = lightbox.querySelector(".lightbox-img"),
                  lightboxClose = lightbox.querySelector(".lightbox-close"),
                  lightboxText = lightbox.querySelector(".caption-text"),
                  lightboxCounter = lightbox.querySelector(".caption-counter");
                  let itemIndex = 0;
                  for(let i=0; i<totalportfolioItem; i++)
                  {
                    PortfolioItems[i].addEventListener("click", fonction()
                    {
                        itemIndex=i;
                        changeItem();
                        toggleLightbox();
                    })
                  }

                function nextItem()
                {
                    if(itemIndex == totalportfolioItem-1);
                    {
                        itemIndex = 0;
                    }
                    else
                    {
                        itemIndex++;
                    }
                    changeItem(); 
                }
                function prevItem()
                {
                    if(itemIndex == 0)
                    {
                        itemIndex=totalportfolioItem-1;
                    }
                    else
                    {
                        itemIndex--
                    }
                    changeItem();
                }
                  function toggleLightbox()
                  {
                    lightbox.classList.toogle("open");
                  }
                  function changeItem()
                  {
                    imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
                    lightboxImg.src=imgSrc;
                    lightboxText.innerHTML=PortfolioItems[itemIndex].querySelector("h4").innerHTML;
                    lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
                  }
                  /* Close LIGHTBOX*/
                  lightbox.addEventListener("click", function(event)
                  {
                    if (event.target === lightboxClose || event.target === lightbox)
                    {
                        toggleLightbox()
                    }


                  })