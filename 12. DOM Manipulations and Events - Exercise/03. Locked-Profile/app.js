function lockedProfile() {
    Array.from(document.querySelectorAll(".profile button")).forEach(button => 
            button.addEventListener("click", onClick)
        );

    function onClick(event) {
        const parent = event.target.parentElement;
        const checkLock = parent.querySelector('input[value="unlock"]');

        if (checkLock.checked) {
            const hideDiv = parent.querySelector("div");
            hideDiv.style.display === "block"
                ? (hideDiv.style.display = "none")
                : (hideDiv.style.display = "block");

            event.target.textContent === "Show more"
                ? (event.target.textContent = 'Hide it')
                : (event.target.textContent = 'Show more');
        }
    }
}