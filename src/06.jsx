const demoInput = {
	guard: {
		direction: "N",
		path: [[4, 6]],
	},
	obstacles: [
		"....#.....",
		".........#",
		"..........",
		"..#.......",
		".......#..",
		"..........",
		".#........",
		"........#.",
		"#.........",
		"......#...",
	],
};

const testInput = {
	guard: {
		direction: "N",
		path: [[91, 69]],
	},
	obstacles: [
		"........#.............................................#.........#..............#.......#....................#....................#",
		"......................#........#........................#.............##............................#.#.............#..........#..",
		"....#..................................#..................#.........#....#..............#..#......................#........#...#..",
		".....#...#...............#................#..........................#......#.....................#.......................#.......",
		"......................................................##.#....#..................................................................#",
		"#....#....................#..................................#.....................................#......................#.......",
		".......#...........................#.......................#......#...#.................................................#...#.....",
		"....................##..........................#................#..........................#.#..................#....#.........#.",
		"#..................................#...............#...............#.........................#............##......................",
		".............................#....................................#...............#.........#..........#.......................#..",
		".................................#............###.......#............##......#...............................#...............#.#..",
		".#..........................................#.......#.......................##..#........#........#...............#...............",
		"......#...#............#.#..............#...................#..........................................................##.........",
		"#................##....................................................................#........#.................#...#...........",
		"...#..........#..........................##......#....#..............................#......................................#.....",
		"..............................##.#..........................................................#..............................#......",
		"......#...........#....#..................#............#....................................................................#.....",
		".....................#........................#.......................................................#...........................",
		"...................#.#..........................................................................................#.#...............",
		".........................................##.........................................................#.......#...###......#........",
		"...............................................................##.......................#..........................#..............",
		"...#...........#.................#..............#......#.....#..........................#....................#....#...............",
		".................................#................#................#..............................................#.......##.....#",
		"........#..........................#................#.......................#...................#.................................",
		".............................#.............................#..........#.........................#........#........................",
		"....#................#.#................#...........................................................#...#....#......#......#......",
		"........#..............................#...............................#.................#........................................",
		"...........................................#..#........#...#...........#..#.............#.........................................",
		".#.................#.#................................#................#.#..................................#........#............",
		".......#..........................................#.................................................................#.............",
		"...................#....................................................#..#...............................................#......",
		"...#.#........#...#.....#.....................................................................................................#...",
		"......#.........................#......................#.............#.....................#......................................",
		"..........................#............#.................................#..#..........#........#......................#..........",
		"...#..#......#.......................#........................#...................................................................",
		"............#...........#................#..............#.........................................................................",
		".#........#....#.........................................#........................................#...............................",
		"...#......................##.........#.......#.#...........#................................................#...#.................",
		"...........#......#.........#....#.....#.......................................................#.............#....................",
		".............#...#..............................................#.........#.....##....................#...#.........#.............",
		"...............#................................#..........................................#.....#.#.........................#...#",
		"................#.....#..#.............#..............#..............#.......#....................................................",
		"......#.........................................................................................................#.........##......",
		"..#...........................#.#...........................................#..#.....#............................................",
		"...#...#..................#..................................#.........#...................#..................................#...",
		"............#..#.....................#.........................................#.......#..................................#.......",
		"...#.......................................................................#.............................#........................",
		"......#..................#....................................#......##...........................................................",
		".#...............#.....#..........................................................................................#...............",
		"...#.............#.........................#.....................#...#..........#....#............................#...............",
		"...#............................#.......#...........#.........#........#.....#...........#...................................#....",
		".....................#...................#................................#...............................#......#.........#..##..",
		".............#........................................................................................#........................##.",
		".....#.......#.......#............................................................................................................",
		"............................................#................................................................#..............#.....",
		"....#..#......................................................#...................................................#...............",
		".................................#...##..................#.................................................#....#.................",
		"........#...................................#...#..........................................................#......................",
		"........................#........##...........#.......#........#...................................#..............................",
		"...........#...#...................................................#..............#......#...............#.#..................#...",
		"........#.............................................#...........................................................................",
		"........#................#......#..........#..#........#.#.......#...#........................#..#......................#.......#.",
		".......#..........................................................................................................#.....#.....#...",
		"......................##....................#.....#.................#...........#.......................#.##..........#......#....",
		"....................................##....................................................................#.................#.....",
		"..#.................................#.#...........#............................................#....#.............................",
		"#...................................#...........................................#............#.........#...............#..........",
		".......................#.............................................................#..........#...#.............#.....#.........",
		"#..................#.#.............................................................................#.................#............",
		".....................#......#.......#...........#..........................................^...............................#......",
		"................................#......................#.#.....#..............#..................#....#.#......#....#.............",
		"............................................................................#........#.....................................#......",
		".............#......................................................#...................................#......##..#....#.........",
		"...............#.................#...................#...............#............................................................",
		"..............#...........#..#...........................................#...................................#..........#.........",
		"..........#...........................#...................#..............#...#.......#..........#...................#.............",
		".............#.#..................................#....#..#............#.....................#................#...#.....#.........",
		"...................#..........................................................#............##.....................................",
		"...........................................#............#........................................................................#",
		"..#..............................#....#...........................................................................................",
		"..#..#............#...........................#...#...........#............#.....#.................#..............................",
		"....#...................#.........#...............................................................................................",
		".......#..........................#....................................##........#.................##...#.#........#..#...........",
		".#........................#....#.......#.....#...................#.............................................#..................",
		"..#...............................................................#................................................#..............",
		".....#........................................#...................................................................................",
		"..........................................#..........................................................#............................",
		"....................###.........................#............................#...#...........#............#.......................",
		".....#.....#...............#........#.#....#...................#...........#........#...........#.................................",
		"................................................................................................#...##............................",
		"......................#............#.........................#.......................#.....#...........#...#.#....................",
		"............................#....................#..................#..............#..................................#...........",
		"...........................#...................................#..............................................................#...",
		"..................#................#.....................#...................#........#..............#............................",
		"............#.............#.....................#..................#.........#......................#............#............#...",
		"....#..........................#...............................................................................................#..",
		"................#.....................................#.............................#...........#........................#........",
		"#.##...........#.........................................#...............#..........................................#.#...........",
		"........................................#..............#.....................#............#.....#.................................",
		".......#....##..#..#.....#........................................................................................................",
		"....##.............#..............................#...............................................................................",
		".....#........................#.........#..#......#........#......................#.......#..............#..........#.......#.....",
		"..#....#.........................#.#....................#..#.......#.............#..................#........#..................#.",
		"..........##....#........................................................................#........................................",
		"........#......#................................................................................................#................#",
		".....#.......#...#.............#....................................#..#........................#...#..............#....#.........",
		".............#...................................................##...#...........................................................",
		"..............#.............................................#.............#................#.............#..............#.........",
		"..#....#..........#.....#......#......................#................................#...............................#..........",
		".................................................................................##......#...........................#.....#......",
		"..#....#..........#.......#.........................................#...............#..#............................#........#....",
		"...........#........#.#....................#........#.....................................#..................#....................",
		".......#............#................#...........#.............#......#.........#...........................#.....................",
		"#.#....#.#...............#....#.....#.......................#...............................#...................##...#............",
		".................##...#.................................................................#...........................#.............",
		".....#........................................#.........#...................................................#.....................",
		"....................#.....................#................................................#...##.....................#...........",
		"...............#...............................................................#....#.............................................",
		".................#................#...#.....................................#......#....................#...............#.#.......",
		"...................#............................................#..#....#..#........#...............................#.........#...",
		"..#........#...............#..................#.....#..................#.....................................#........##...#......",
		".....#.....#....#.....#................#.#.....................##.............................................................#...",
		"................#............#......#......#.......................................................#....................#........#",
		"........#..............#..#......................................................................##.....##........................",
		".........#.............................#.........#.......................................#..........................#.##..........",
		".#...................#........................................................#....#......................................#.......",
		"....#..........#.....#.........................................................................................#..................",
		".......#.............................#............#.........................#....#....#........#......#.....#.......#.............",
		"..#.......#........................#........................#.....................................................................",
		"........................#...............................#.#.............#................................#..................#.....",
	],
};

const turn = (d) => {
	if (d === "N") {
		return "E";
	}
	if (d === "E") {
		return "S";
	}
	if (d === "S") {
		return "W";
	}
	if (d === "W") {
		return "N";
	}
};

const move = (d, x, y, obstacles) => {
	// console.log('move', d, x, y);
	switch (d) {
		case "N":
			if (y === 0) {
				return [-1, x, y];
			} else if (obstacles[y - 1].charAt(x) !== "#") {
				y--;
			} else {
				d = turn(d);
			}
			break;
		case "E":
			if (x === obstacles[y].length - 1) {
				return [-1, x, y];
			} else if (obstacles[y].charAt(x + 1) !== "#") {
				x++;
			} else {
				d = turn(d);
			}
			break;
		case "S":
			if (y === obstacles.length - 1) {
				return [-1, x, y];
			} else if (obstacles[y + 1].charAt(x) !== "#") {
				y++;
			} else {
				d = turn(d);
			}
			break;
		case "W":
			if (x === 0) {
				return [-1, x, y];
			} else if (obstacles[y].charAt(x - 1) !== "#") {
				x--;
			} else {
				d = turn(d);
			}
			break;
	}

	return [d, x, y];
};

const test1 = (input) => {
	const { guard, obstacles } = input;

	let { direction, path } = guard;
	const originalDirection = direction;
	let leftArea = false;
	while (!leftArea) {
		const oldDirection = direction;
		const [newDirection, x, y] = move(
			direction,
			path[path.length - 1][0],
			path[path.length - 1][1],
			obstacles,
		);
		direction = newDirection;
		if (newDirection === -1) {
			leftArea = true;
		} else if (newDirection === oldDirection) {
			path.push([x, y]);
		}
	}

	const stringPath = path.map((s) => `${s[0]}-${s[1]}`);
	const uniquePath = [...new Set(stringPath)];

	return uniquePath.length;
};

const test2 = (input) => {
	const { guard, obstacles } = input;
	let { direction, path } = guard;
	const originalDirection = direction;
	let leftArea = false;
	while (!leftArea) {
		const oldDirection = direction;
		const [newDirection, x, y] = move(
			direction,
			path[path.length - 1][0],
			path[path.length - 1][1],
			obstacles,
		);
		direction = newDirection;
		if (newDirection === -1) {
			leftArea = true;
		} else if (newDirection === oldDirection) {
			path.push([x, y]);
		}
	}

	const stringPath = path.map((s) => `${s[0]}-${s[1]}`);
	const uniquePath = [...new Set(stringPath)].map((p) => [
		Number.parseInt(p.split("-")[0]),
		Number.parseInt(p.split("-")[1]),
	]);

	const addObstacle = (str, index) => {
		return str.substring(0, index) + "#" + str.substring(index + 1);
	};

	const loopingObstacles = [];
	for (let i = 1; i < uniquePath.length; i++) {
		const newObstacle = uniquePath[i];

		// reset position and direction to start for each iteration
		direction = originalDirection;
		path = path.slice(0, 1);
		leftArea = false;
		let looped = false;

		// create new copy of obstacles and set '#' at uniquePath x y position
		const testObstacles = [...obstacles];
		testObstacles[newObstacle[1]] = addObstacle(
			testObstacles[newObstacle[1]],
			newObstacle[0],
		);

		while (!leftArea && !looped) {
			const oldDirection = direction;
			const [newDirection, x, y] = move(
				direction,
				path[path.length - 1][0],
				path[path.length - 1][1],
				testObstacles,
			);
			direction = newDirection;
			if (newDirection === -1) {
				leftArea = true;
			} else if (newDirection === oldDirection) {
				path.push([x, y]);
				if (path.length > 20) {
					const lastThreeSteps = path.slice(-3);
					for (let j = path.length - 3; j > 3; j--) {
						if (
							path[j - 2][0] === lastThreeSteps[0][0] &&
							path[j - 2][1] === lastThreeSteps[0][1] &&
							path[j - 1][0] === lastThreeSteps[1][0] &&
							path[j - 1][1] === lastThreeSteps[1][1] &&
							path[j][0] === lastThreeSteps[2][0] &&
							path[j][1] === lastThreeSteps[2][1]
						) {
							loopingObstacles.push(newObstacle);
							looped = true;
						}
					}
				}
			}
		}
	}

	return loopingObstacles.length;
};

console.log("Answer - Part 1 - Input 1");
console.log(test1(demoInput));
// 41
console.log("Answer - Part 1 - Input 2");
console.log(test1(testInput));
// 4515

console.log("Answer - Part 2 - Input 1");
console.log(test2(demoInput));
// 6
console.log("Answer - Part 2 - Input 2");
console.log(test2(testInput));
// 1309
