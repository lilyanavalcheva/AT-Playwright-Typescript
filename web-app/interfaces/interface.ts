interface Animal {
    species: string;
    breed?: string;
    age: number;
    weight?: number;
    name: string;
}

interface Car {
    make: string;
    model: string;
    year: number;
}

interface EngineSpecifications extends Car {
    engineType: string;
    horsePower: number;
}