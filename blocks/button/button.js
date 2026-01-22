export default function decorate(block){

    [...block.children].forEach((row) => {
        const button =document.createElement('a');
        const [text,hyperlink] = row.children;
        button.classList.add('btn-modern');
        button.text = text.textContent;
        button.href = hyperlink.textContent;
        row.replaceWith(button);
    }); 
    
};