document.querySelectorAll('.btn').forEach(Button => {
    Button.addEventListener('click', function(){
        const faqItem = this.parentNode;
        faqItem.classList.toggle('answers')
    });
});