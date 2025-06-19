import armadilloImg from './images/armadillo.png';
 
 export default function returnHome() {
    const contentHolder = document.querySelector("#content");

    const oldContainerDiv = document.querySelector("#containerDiv");
    if (oldContainerDiv) oldContainerDiv.remove();

    const oldMenuDiv = document.querySelector("#menuContainerDiv");
    if (oldMenuDiv) oldMenuDiv.remove();

    const oldContactDiv = document.querySelector("#contactContainerDiv");
    if (oldContactDiv) oldContactDiv.remove();

    const containerDiv = document.createElement('div');
    containerDiv.setAttribute("id", "containerDiv")
    contentHolder.appendChild(containerDiv);

    const recommendationDiv = document.createElement('div');
    recommendationDiv.innerHTML = "<em>This is by far and away the best sandwich I have ever eaten! I have eaten banh mi in Vietnam and this doesn't even come close to Armadillo's. Always fresh, get yourself there now!</em> - Anthony Bourdain"
    recommendationDiv.setAttribute("id", "recommendationDiv");
    const imageDiv = document.createElement('div');
    const img = document.createElement("img");
    img.src = armadilloImg;
    imageDiv.appendChild(img);
    imageDiv.setAttribute("id", "imageDiv");
    const welcomeDiv = document.createElement('div');
    welcomeDiv.setAttribute("id", "welcomeDiv");
    welcomeDiv.textContent = "Come and see why we are #1 on Trip Advisor, we promise not to disappoint!"
    containerDiv.appendChild(recommendationDiv);
    containerDiv.appendChild(imageDiv);
    containerDiv.appendChild(welcomeDiv);
}