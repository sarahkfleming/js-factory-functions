const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

// Get reference to shopping cart container in the DOM 
const shoppingCart = document.querySelector("#shopping-cart")

const createCustomRing = (style, carets, metal) => {
    return {
        toString() {
            return `Current ring order: ${this.carets} carat(s) with a ${this.metal} band in the ${this.style} style. `
        },
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: metal.price + style.price + carets.price
    }
}

const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])
// Then add order to customer's shopping cart

const renderRing = (ringString) => {
    shoppingCart.innerHTML += ringString
}

renderRing(newRingOrder)