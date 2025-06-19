import armadilloImg from './images/armadillo.png';
 
 export default function menuPage() {
    const contentHolder = document.querySelector("#content");

    const containerDiv = document.querySelector("#containerDiv");
    if (containerDiv) containerDiv.remove();

    const oldContactDiv = document.querySelector("#contactContainerDiv");
    if (oldContactDiv) oldContactDiv.remove();

    const newContainerDiv = document.createElement('div');
    newContainerDiv.setAttribute("id", "menuContainerDiv");
    const checkContainer = document.querySelector("#menuContainerDiv");
    if(!checkContainer) contentHolder.appendChild(newContainerDiv);

    const recommendationDiv = document.createElement('div');
    recommendationDiv.innerHTML = "<h3>Menu:</h3><span>Philly Cheesesteak - £15</span><span>Buffalo Chicken Wrap - £12.50</span>"
    recommendationDiv.setAttribute("id", "recommendationDiv");
    const imageDiv = document.createElement('div');
    const img = document.createElement("img");
    img.src = armadilloImg;
    imageDiv.appendChild(img);
    imageDiv.setAttribute("id", "imageDiv");
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute("id", "menuDiv");
    menuDiv.innerHTML = "<span>BLT - £9</span><span>Hello! - £12.50</span><span>Steak Sandwich - £20</span>"
    newContainerDiv.appendChild(recommendationDiv);
    newContainerDiv.appendChild(imageDiv);
    newContainerDiv.appendChild(menuDiv);
}