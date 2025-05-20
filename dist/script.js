//dark and light modes
const toggleBtn = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

toggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline";
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
    lightIcon.style.display = "inline";
    darkIcon.style.display = "none";
  }
});

// On page load, restore theme and update icons
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);

  if (savedTheme === "dark") {
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline";
  } else {
    lightIcon.style.display = "inline";
    darkIcon.style.display = "none";
  }
});

// Step 1: Get filter buttons and projects
const filterButtons = document.querySelectorAll('#filter-buttons a');
const projects = document.querySelectorAll('.card-project');

// Step 2: Add event listeners
filterButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent page jump

    const selectedFilter = button.dataset.filter;

    // Step 3: Highlight active button
    filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
    filterButtons.forEach(btn => btn.classList.add('btn-secondary'));
    button.classList.remove('btn-secondary');
    button.classList.add('btn-primary');

    // Step 4: Filter projects
    projects.forEach(project => {
      const category = project.dataset.category;

      if (selectedFilter === 'All' || category.includes(selectedFilter)) {
        project.style.display = 'flex'; // most of your projects use flex
      } else {
        project.style.display = 'none';
      }
    });
  });
});
