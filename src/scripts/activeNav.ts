function initActiveNav() {
    const navElement = document.getElementById("main-nav") as HTMLElement | null;
    const trailElement = document.getElementById("nav-trail") as HTMLElement | null;

    const links = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(".nav-link")
    );

    const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]")
    );

    if (!navElement || !trailElement || links.length === 0 || sections.length === 0) {
        return;
    }

    const nav = navElement;
    const trail = trailElement;

    function moveTrailToLink(link: HTMLAnchorElement) {
        const navRect = nav.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();

        const top = linkRect.top - navRect.top + linkRect.height / 2;

        trail.style.top = `${top}px`;
        trail.style.opacity = "1";
        trail.style.transform = "translateY(-50%)";
    }

    function setActiveLink(sectionId: string) {
        links.forEach((link) => {
            const isActive = link.dataset.section === sectionId;

            link.classList.toggle("text-emerald-300", isActive);
            link.classList.toggle("text-slate-500", !isActive);
            link.classList.toggle(
                "drop-shadow-[0_0_10px_rgba(110,231,183,0.35)]",
                isActive
            );

            link.setAttribute("aria-current", isActive ? "true" : "false");

            if (isActive) {
                moveTrailToLink(link);
            }
        });
    }

    function getCurrentSection() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.35;

        let currentSection = sections[0];

        sections.forEach((section) => {
            if (section.offsetTop <= scrollPosition) {
                currentSection = section;
            }
        });

        return currentSection.id;
    }

    function updateActiveSection() {
        const currentSectionId = getCurrentSection();
        setActiveLink(currentSectionId);
    }

    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });

            ticking = true;
        }
    });

    window.addEventListener("resize", updateActiveSection);

    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            moveTrailToLink(link);
        });
    });

    nav.addEventListener("mouseleave", () => {
        const activeLink = document.querySelector<HTMLAnchorElement>(
            ".nav-link[aria-current='true']"
        );

        if (activeLink) {
            moveTrailToLink(activeLink);
        }
    });

    updateActiveSection();
}

initActiveNav();