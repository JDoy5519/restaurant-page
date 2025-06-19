import armadilloImg from './images/armadillo.png';
 
 export default function contactUsPage() {
    const contentHolder = document.querySelector("#content");

    const containerDiv = document.querySelector("#containerDiv");
    if (containerDiv) containerDiv.remove();

    const oldMenuDiv = document.querySelector("#menuContainerDiv");
    if (oldMenuDiv) oldMenuDiv.remove();

    const newContainerDiv = document.createElement('div');
    newContainerDiv.setAttribute("id", "contactContainerDiv");
    const checkContainer = document.querySelector("#contactContainerDiv");
    if(!checkContainer) contentHolder.appendChild(newContainerDiv);

    const recommendationDiv = document.createElement('div');
    recommendationDiv.innerHTML = "<h3>Where to find us:</h3><span><b>Instagram:</b> @dillosandos</span><span><b>Facebook:</b> Armadillo Sandwiches</span>"
    recommendationDiv.setAttribute("id", "recommendationDiv");
    const imageDiv = document.createElement('div');
    const img = document.createElement("img");
    img.src = armadilloImg;
    imageDiv.appendChild(img);
    imageDiv.setAttribute("id", "imageDiv");
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute("id", "menuDiv");
    menuDiv.innerHTML = "<span><b>Address:</b> 99 Ben Stokes Avenue, Headingley</span><span><b>Phone:</b> 0161 400 1234</span><span><b>Email:</b> dillosandos@gmail.com</span>"
    newContainerDiv.appendChild(recommendationDiv);
    newContainerDiv.appendChild(imageDiv);
    newContainerDiv.appendChild(menuDiv);
}


