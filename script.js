document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const gallery = document.getElementById("gallery");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const [titleInput, imageInput, descInput] = form.querySelectorAll("input, textarea");
        const title = titleInput.value.trim();
        const image = imageInput.value.trim();
        const description = descInput.value.trim();

        if (title && image && description) {
            const article = document.createElement("article");
            article.innerHTML = `
        <h3>${title}</h3>
        <img src="${image}" alt="${title}" loading="lazy">
        <p>${description}</p>
    `;
            gallery.appendChild(article);
            form.reset();
            alert("Ілюзію додано до галереї!");
        } else {
            alert("Будь ласка, заповніть усі поля.");
        }
    });
});
