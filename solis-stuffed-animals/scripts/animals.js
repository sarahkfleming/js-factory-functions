const animalContainer = document.querySelector("#animals")

const render = (animalString) => {
    animalContainer.innerHTML += animalString
}

const createAnimal = (stuffingMaterial, furMaterial, eyeballMaterial, color, hasClothing, species) => {
    return {
        toString () {
            // We're determining how the content will be represented but not how it is structured in the DOM
         return `The ${this.color} ${this.species} filled with ${this.material.stuffing}.`
        },
        material: {
            stuffing: stuffingMaterial,
            fur: furMaterial,
            eyeball: eyeballMaterial
        },
        color: color,
        hasClothing: hasClothing,
        species: species
    }
}

const sonic = createAnimal(
    "beans",
    "tortilla",
    "human",
    "fuschia",
    false,
    "Hedgehog"
)

// render(sonic.toString())

// The above function call returns the same result as the below since we invoked the toString method when we returned the object
render(sonic)