window.onload = () => {
    const jobCards = [...document.getElementsByClassName('jobCard')]
    jobCards.forEach(jobCard => {
        jobCard.addEventListener('click', () => {
            console.log(jobCard)
        })
    });
}