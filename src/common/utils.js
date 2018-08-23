export function convertCoorinates(stand) {
    const pixelPerDegree = 0.00602409639;
    if (!stand.coordX1Y1 || !stand.coordX2Y1 || !stand.coordX2Y2) return;

    const coords = [
        [(stand.coordX1Y1[0] - 4980 + 385) * pixelPerDegree, (stand.coordX1Y1[1] - 4980) * pixelPerDegree],
        [(stand.coordX2Y1[0] - 4980 + 385) * pixelPerDegree, (stand.coordX2Y1[1] - 4980) * pixelPerDegree],
        [(stand.coordX2Y1[0] - 4980 + 385) * pixelPerDegree, (stand.coordX2Y1[1] - 4980) * pixelPerDegree],
        [(stand.coordX2Y2[0] - 4980 + 385) * pixelPerDegree, (stand.coordX2Y2[1] - 4980) * pixelPerDegree]
    ];

    return coords;
}