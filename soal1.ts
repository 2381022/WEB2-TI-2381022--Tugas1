function countingValleys(steps: number, path: string): number {
    let seaLevel = 0;
    let valleys = 0;
    let altitude = 0;

    for (let step of path) {
        if (step === 'U') {
            altitude++;
        } else {
            altitude--;
        }

        if (altitude === 0 && step === 'U') {
            valleys++;
        }
    }

    return valleys;
}

// Contoh penggunaan
const steps = 8;
const path = "UDDDUDUU";
console.log(countingValleys(steps, path)); // Output: 1

