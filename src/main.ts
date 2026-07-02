import { initNavigationMenu } from './menu';

export async function setupPage(isRoot: boolean): Promise<void> {
    const basePath = isRoot ? "assets/partials/" : "../assets/partials/";
    
    try {
        const headerRes = await fetch(basePath + "header.html");
        if (headerRes.ok) {
            const html = await headerRes.text();
            const headerPlaceholder = document.getElementById("header-placeholder");
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = html;
                initNavigationMenu();
            }
        }
        
        const footerRes = await fetch(basePath + "footer.html");
        if (footerRes.ok) {
            const html = await footerRes.text();
            const footerPlaceholder = document.getElementById("footer-placeholder");
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = html;
            }
        }
    } catch (e) {
        console.error("Failed to load partials", e);
    }
}
