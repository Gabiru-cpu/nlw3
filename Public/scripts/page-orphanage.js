const options = {
    dragging: false,
    touchZoom: false,
    doubleClick: false,
    scrollWheelZoom: false,
    zoomControl:false
}

const map = L.map('mapid', options).setView([-23.9605303,-46.3911739], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [38, 48],
    inconAnchor: [29, 68],
    popupAnchor:[170, 2]
})


L
.marker([-23.95416282268097,-46.41569076010679], { icon })
.addTo(map)

// galeria
function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    const image = button.children [0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src

    button.classList.add('active')
}