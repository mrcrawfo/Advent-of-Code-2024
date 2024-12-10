const demoInput = [
	"............",
	"........0...",
	".....0......",
	".......0....",
	"....0.......",
	"......A.....",
	"............",
	"............",
	"........A...",
	".........A..",
	"............",
	"............",
];

// const demoInput = [
// 	'..........',
// 	'..........',
// 	'..........',
// 	'....a.....',
// 	'........a.',
// 	'.....a....',
// 	'..........',
// 	'......A...',
// 	'..........',
// 	'..........'
// ];

const testInput = [
	"...s..............................................",
	"...................w......K.......t...............",
	"........s.........................................",
	".......s......w...............1...................",
	".........w5.......................................",
	".......................t.F........................",
	"..................................................",
	"F................................1...........d....",
	".........................5......................K.",
	"............5.................R..............KZ...",
	"....F.....q.........w..............1.....t........",
	"............8.......I.............................",
	"..........8.................t....................K",
	"...........8.................5.....Z..............",
	".........q..............................Z...d..U..",
	"...................Y.q...R........................",
	"....................E.....z...............y.......",
	"..........................................U.......",
	".....F.................................k........S.",
	"............q...................d.................",
	".................................R................",
	"..x....................................U.........y",
	".......x.........................E..M...U..d......",
	"......z.......X............................4......",
	"...............I....m....M......R............y....",
	".......z...................................k..e...",
	"..f..z.......................................e....",
	"...f.I..........7..u..........M................D..",
	".......X..I.......x.................k.............",
	".........X.......7....................4.......S...",
	"....................u9...T.....3.Z....o..........6",
	"........f.......D..3....u..................S......",
	"...W...0.........................................D",
	".....................T................E.......m...",
	"...8....Y............f........T4..................",
	"......Y...........................................",
	"....0.............3...............................",
	"....................3.T.....................k.....",
	".......................u..............6...........",
	"...........................6..........9........e..",
	"..................4....7.............o..........D.",
	".................................M...E..o.........",
	"...i.................O...........................Q",
	".....0.i.....................................m.2..",
	".......Y.r........7..............S..O..2.......m..",
	".....r......0.............O.......................",
	"..................................Q...............",
	"........................6................o......Q.",
	"..W...r.................................9.........",
	".W.........................O........2.............",
];

const parseGrid = (input, xMax, yMax) => {
	const antennas = {};

	for (let y = 0; y < yMax; y++) {
		const row = input[y];
		for (let x = 0; x < xMax; x++) {
			const c = row.charAt(x);
			if (c !== ".") {
				if (antennas[c]) {
					antennas[c].push([x, y]);
				} else {
					antennas[c] = [[x, y]];
				}
			}
		}
	}

	return antennas;
};

const test1 = (input) => {
	const xMax = input[0].length;
	const yMax = input.length;

	const antennas = parseGrid(input, xMax, yMax);
	const antinodes = [];

	for (const [key, value] of Object.entries(antennas)) {
		for (let a = 0; a < value.length; a++) {
			for (let b = value.length - 1; b > a; b--) {
				const antennaA = value[a];
				const antennaB = value[b];
				const dx = antennaA[0] - antennaB[0];
				const dy = antennaA[1] - antennaB[1];

				const antinodeA = [antennaA[0] + dx, antennaA[1] + dy];
				const antinodeB = [antennaB[0] - dx, antennaB[1] - dy];

				if (
					antinodeA[0] >= 0 &&
					antinodeA[0] < xMax &&
					antinodeA[1] >= 0 &&
					antinodeA[1] < yMax
				) {
					antinodes.push(antinodeA);
				}
				if (
					antinodeB[0] >= 0 &&
					antinodeB[0] < xMax &&
					antinodeB[1] >= 0 &&
					antinodeB[1] < yMax
				) {
					antinodes.push(antinodeB);
				}
			}
		}
	}

	const stringAntinodes = antinodes.map((s) => `${s[0]}-${s[1]}`);
	const uniqueAntinodes = [...new Set(stringAntinodes)].map((p) => [
		Number.parseInt(p.split("-")[0]),
		Number.parseInt(p.split("-")[1]),
	]);

	return uniqueAntinodes.length;
};

const test2 = (input) => {
	const xMax = input[0].length;
	const yMax = input.length;

	const antennas = parseGrid(input, xMax, yMax);
	const antinodes = [];

	for (const [key, value] of Object.entries(antennas)) {
		for (let a = 0; a < value.length; a++) {
			for (let b = 0; b < value.length; b++) {
				if (a !== b) {
					let resonance = 1;

					const antennaA = value[a];
					const antennaB = value[b];
					const dx = antennaA[0] - antennaB[0];
					const dy = antennaA[1] - antennaB[1];

					let antinodeX = antennaB[0] + resonance * dx;
					let antinodeY = antennaB[1] + resonance * dy;

					while (
						antinodeX >= 0 &&
						antinodeX < xMax &&
						antinodeY >= 0 &&
						antinodeY < yMax
					) {
						antinodes.push([antinodeX, antinodeY]);

						resonance++;

						antinodeX = antennaB[0] + resonance * dx;
						antinodeY = antennaB[1] + resonance * dy;
					}
				}
			}
		}
	}

	const stringAntinodes = antinodes.map((s) => `${s[0]}-${s[1]}`);
	const uniqueAntinodes = [...new Set(stringAntinodes)].map((p) => [
		Number.parseInt(p.split("-")[0]),
		Number.parseInt(p.split("-")[1]),
	]);

	return uniqueAntinodes.length;
};

console.log("Answer - Part 1 - Input 1");
console.log(test1(demoInput));
// 14
console.log("Answer - Part 1 - Input 2");
console.log(test1(testInput));
// 240

console.log("Answer - Part 2 - Input 1");
console.log(test2(demoInput));
// 34
console.log("Answer - Part 2 - Input 2");
console.log(test2(testInput));
// 955
