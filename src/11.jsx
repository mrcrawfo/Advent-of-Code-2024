const demoInput = [125, 17];

const testInput = [2701, 64945, 0, 9959979, 93, 781524, 620, 1];

const blink = (s) => {
	let output = [];

	for (let t = 0; t < s.length; t++) {
		const x = s[t];
		const xs = x.toString();

		if (x === 0) {
			output.push(1);
		} else if (xs.length % 2 === 0) {
			output.push(Number.parseInt(xs.substring(0, xs.length / 2)));
			output.push(Number.parseInt(xs.substring(xs.length / 2, xs.length)));
		} else {
			output.push(x * 2024);
		}
	}

	return output;
	// If the stone is engraved with the number 0, it is replaced by a stone engraved with the number 1.
	// If the stone is engraved with a number that has an even number of digits, it is replaced by two stones. The left half of the digits are engraved on the new left stone, and the right half of the digits are engraved on the new right stone. (The new numbers don't keep extra leading zeroes: 1000 would become stones 10 and 0.)
	// If none of the other rules apply, the stone is replaced by a new stone; the old stone's number multiplied by 2024 is engraved on the new stone.
};

const blink_precompute = (s, precompute, iterations) => {
	let output = [];

	for (let t = 0; t < s.length; t++) {
		const x = s[t];
		const xs = x.toString();

		if (!precompute[xs]) {
			let a = [x];
			for (let y = 0; y < iterations; y++) {
				a = blink(a);
			}
			precompute[xs] = a;
			output = output.concat(a);
		} else {
			output = output.concat(precompute[xs]);
		}
	}

	return [output, precompute];
};

const test1 = (input) => {
	let stones = [...input];

	for (let i = 0; i < 25; i++) {
		stones = blink(stones);
	}

	return stones.length;
};

const test2 = (input) => {
	let stones = [...input];

	let precompute = {};

	// 75 blinks
	for (let i = 0; i < 75; i++) {
		[stones, precompute] = blink_precompute(stones, precompute, 1);
		console.log(1 + i * 1, stones.length, Object.entries(precompute).length);
		console.log(stones);
	}
	console.log(precompute);

	return stones.length;
};

console.log("Answer - Part 1 - Input 1");
console.log(test1(demoInput));
// 55312
console.log("Answer - Part 1 - Input 2");
console.log(test1(testInput));
// 198075

console.log("Answer - Part 2 - Input 1");
console.log(test2(demoInput));
//
// console.log('Answer - Part 2 - Input 2');
// console.log(test2(testInput));
//
