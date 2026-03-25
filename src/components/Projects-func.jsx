const goToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

export default goToProjects;