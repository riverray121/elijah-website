// Sample project data (you can load this dynamically from a database or API)
const projects = [
    { image: "project1.jpg", title: "Project 1", description: "Description of Project 1." },
    { image: "project2.jpg", title: "Project 2", description: "Description of Project 2." },
    // Add more project data as needed
];

// Function to create and append project listings to the "project-listings" div
function displayProjects() {
    const projectListings = document.getElementById("project-listings");

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        `;
        projectListings.appendChild(projectDiv);
    });
}

// Add an event listener to display the projects when the user scrolls
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // You can customize this threshold to determine when to load more projects
    if (scrollTop >= 500) {
        displayProjects();
    }
});
