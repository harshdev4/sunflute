document.addEventListener('DOMContentLoaded', ()=>{
    const elements = document.querySelectorAll('.fa-check');
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-me");
                observer.unobserve(entry.target);
            }
        });
    });
    if (elements) {
        elements.forEach(element =>{
            observer.observe(element);
        })
    };
})