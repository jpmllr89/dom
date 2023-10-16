// get elements that are displayed
// nodeList.length
// assign marquee-elms to nodeList.length

const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elms-displayed');
const marqueeItems = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elms', marqueeItems.children.length);

for(let i = 0; i<elmsDisplayed; i++){
  marqueeItems.appendChild(marqueeItems.children[i].cloneNode(true));
}