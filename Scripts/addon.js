document.addEventListener("DOMContentLoaded", function () {
    // Create notification element
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = `
        <div class="notiglow"></div>
        <div class="notiborderglow"></div>
        <div class="notititle">Well,I knew you'd show up sooner or later!</div>
        <div class="notibody">Rate this site! Your opinion matters (mostly).</div>
    `;

    // Append to the body
    document.body.appendChild(notification);

    // Slide in after a short delay
    setTimeout(() => {
        notification.classList.add("slide-in");
    }, 100);

    // Slide out after 7 seconds
    setTimeout(() => {
        notification.classList.remove("slide-in");
        notification.classList.add("slide-out");

        setTimeout(() => notification.remove(), 500); // Remove after transition
    }, 7000);
});
