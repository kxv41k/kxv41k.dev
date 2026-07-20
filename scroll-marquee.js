function scrollMarquee() {
    const container = document.getElementById('dev-current-2');
    if (!container) return;

    const repos = [
        { text: "📄 kxv41k - README - 7/3/2026", url: "https://github.com/kxv41k/kxv41k" },
        { text: "🔗 kxv41k.dev - Website hosted on Cloudflare - 7/3/2026", url: "https://github.com/kxv41k/kxv41k.dev" },
    ];

    container.innerHTML = ''; 

    const chain = document.createElement('div');
    chain.style.display = 'flex';

    repos.forEach(item => {
        const linkElement = document.createElement('a');
        linkElement.className = 'dev-list-item';
        linkElement.innerText = item.text;
        linkElement.href = item.url;
        chain.appendChild(linkElement);
        linkElement.target = "_blank"
    });

    container.appendChild(chain);

    const totalChainWidth = chain.offsetWidth;
    const viewportWidth = window.innerWidth;
    const repeatCount = Math.ceil(viewportWidth / totalChainWidth) + 1;

    for (let i = 0; i < repeatCount; i++) {
        const clone = chain.cloneNode(true);
    
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelectorAll('a').forEach(link => link.setAttribute('tabindex', '-1'));
    
        container.appendChild(clone);
    }

    container.style.setProperty('--scroll-distance', `-${totalChainWidth}px`);
}

window.addEventListener('DOMContentLoaded', scrollMarquee);
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(scrollMarquee, 150);
});
