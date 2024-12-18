const demoInput1 = {
	a: 729,
	b: 0,
	c: 0,
	p: [0, 1, 5, 4, 3, 0],
};

const demoInput2 = {
	a: 2024,
	b: 0,
	c: 0,
	p: [0, 3, 5, 4, 3, 0],
};

const testInput = {
	a: 59590048,
	b: 0,
	c: 0,
	p: [2, 4, 1, 5, 7, 5, 0, 3, 1, 6, 4, 3, 5, 5, 3, 0],
};

const run = (a, b, c, p, target) => {
	const output = [];
	const A = a;

	const combo = (o) => {
		return [0, 1, 2, 3, a, b, c][o];
	};

	for (let i = 0; i < p.length; i += 2) {
		const operator = p[i];
		const operand = p[i + 1];

		switch (operator) {
			case 0:
				// The adv instruction (opcode 0) performs division. The numerator is the value in the A register. The denominator is found by raising 2 to the power of the instruction's combo operand. (So, an operand of 2 would divide A by 4 (2^2); an operand of 5 would divide A by 2^B.) The result of the division operation is truncated to an integer and then written to the A register.
				a = Math.floor(a / Math.pow(2, combo(operand)));
				break;
			case 1:
				// The bxl instruction (opcode 1) calculates the bitwise XOR of register B and the instruction's literal operand, then stores the result in register B.
				b = Number(BigInt(b) ^ BigInt(operand));
				break;
			case 2:
				// The bst instruction (opcode 2) calculates the value of its combo operand modulo 8 (thereby keeping only its lowest 3 bits), then writes that value to the B register.
				b = combo(operand) % 8;
				break;
			case 3:
				// The jnz instruction (opcode 3) does nothing if the A register is 0. However, if the A register is not zero, it jumps by setting the instruction pointer to the value of its literal operand; if this instruction jumps, the instruction pointer is not increased by 2 after this instruction.
				if (a > 0) {
					i = operand - 2;
				}
				break;
			case 4:
				// The bxc instruction (opcode 4) calculates the bitwise XOR of register B and register C, then stores the result in register B. (For legacy reasons, this instruction reads an operand but ignores it.)
				b = Number(BigInt(b) ^ BigInt(c));
				break;
			case 5:
				// The out instruction (opcode 5) calculates the value of its combo operand modulo 8, then outputs that value. (If a program outputs multiple values, they are separated by commas.)
				output.push(combo(operand) % 8);

				// break early if the output is not matching the target
				if (target) {
					const ost = output.join(",");
					if (target.substring(0, ost.length) !== ost) {
						return ost;
					}
				}
				break;
			case 6:
				// The bdv instruction (opcode 6) works exactly like the adv instruction except that the result is stored in the B register. (The numerator is still read from the A register.)
				b = Math.floor(a / Math.pow(2, combo(operand)));
				break;
			case 7:
				// The cdv instruction (opcode 7) works exactly like the adv instruction except that the result is stored in the C register. (The numerator is still read from the A register.)
				c = Math.floor(a / Math.pow(2, combo(operand)));
				break;
		}
	}

	return output.join(",");
};

const test1 = (input) => {
	let { a, b, c, p } = input;
	return run(a, b, c, p);
};

const test2 = (input) => {
	let { a, b, c, p } = input;
	const target = p.join(",");

	// console.log(1000000000000, Math.floor(run(10000000000000, b, c, p).length / 2));	// 15 numbers in the output
	// console.log(10000000000000, Math.floor(run(100000000000000, b, c, p).length / 2)); // 17 numbers in the output

	// TODO: Refactor non-brute-force approach by working backwards - see what numbers are needed to generate the output rather than incrementing a values
	// note that brute force did get as far as 1084612998792 so the number would be above that, but that was 0.8% through the set after 10 hours of running

	// for (let i = 1000000000000; i < 100000000000000; i++) {
	// 	if (i !== a) {
	// 		const result = run(i, b, c, p, target);
	// 		if (result === target) {
	// 			return i;
	// 		}
	// 	}
	// 	if (Math.random() > 0.999999) {
	// 		console.log(i);
	// 	}
	// }

	return 0;
};

// console.log("Answer - Part 1 - Input 1");
// console.log(test1(demoInput1));
// 4,6,3,5,6,3,5,2,1,0
console.log("Answer - Part 1 - Input 2");
console.log(test1(testInput));
// 6,5,7,4,5,7,3,1,0

// console.log('Answer - Part 2 - Input 1');
// console.log(test2(demoInput2));
// 117440
console.log("Answer - Part 2 - Input 2");
console.log(test2(testInput));
//
