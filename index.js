const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let batteryAdder = (total, batteryCount) => total += batteryCount
const totalBatteries = batteryBatches.reduce(batteryAdder,0)