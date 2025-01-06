const demoInput = {
	wires: {
		x00: 1,
		x01: 0,
		x02: 1,
		x03: 1,
		x04: 0,
		y00: 1,
		y01: 1,
		y02: 1,
		y03: 1,
		y04: 1,
	},
	gates: [
		"ntg XOR fgs -> mjb",
		"y02 OR x01 -> tnw",
		"kwq OR kpj -> z05",
		"x00 OR x03 -> fst",
		"tgd XOR rvg -> z01",
		"vdt OR tnw -> bfw",
		"bfw AND frj -> z10",
		"ffh OR nrd -> bqk",
		"y00 AND y03 -> djm",
		"y03 OR y00 -> psh",
		"bqk OR frj -> z08",
		"tnw OR fst -> frj",
		"gnj AND tgd -> z11",
		"bfw XOR mjb -> z00",
		"x03 OR x00 -> vdt",
		"gnj AND wpb -> z02",
		"x04 AND y00 -> kjc",
		"djm OR pbm -> qhw",
		"nrd AND vdt -> hwm",
		"kjc AND fst -> rvg",
		"y04 OR y02 -> fgs",
		"y01 AND x02 -> pbm",
		"ntg OR kjc -> kwq",
		"psh XOR fgs -> tgd",
		"qhw XOR tgd -> z09",
		"pbm OR djm -> kpj",
		"x03 XOR y03 -> ffh",
		"x00 XOR y04 -> ntg",
		"bfw OR bqk -> z06",
		"nrd XOR fgs -> wpb",
		"frj XOR qhw -> z04",
		"bqk OR frj -> z07",
		"y03 OR x01 -> nrd",
		"hwm AND bqk -> z03",
		"tgd XOR rvg -> z12",
		"tnw OR pbm -> gnj",
	],
};

const testInput = {
	wires: {
		x00: 1,
		x01: 0,
		x02: 1,
		x03: 1,
		x04: 0,
		x05: 0,
		x06: 1,
		x07: 1,
		x08: 0,
		x09: 1,
		x10: 1,
		x11: 1,
		x12: 1,
		x13: 1,
		x14: 1,
		x15: 1,
		x16: 0,
		x17: 1,
		x18: 1,
		x19: 1,
		x20: 0,
		x21: 0,
		x22: 1,
		x23: 0,
		x24: 1,
		x25: 1,
		x26: 0,
		x27: 1,
		x28: 1,
		x29: 1,
		x30: 1,
		x31: 1,
		x32: 0,
		x33: 0,
		x34: 0,
		x35: 1,
		x36: 0,
		x37: 1,
		x38: 0,
		x39: 0,
		x40: 0,
		x41: 0,
		x42: 1,
		x43: 1,
		x44: 1,
		y00: 1,
		y01: 0,
		y02: 0,
		y03: 1,
		y04: 1,
		y05: 0,
		y06: 0,
		y07: 0,
		y08: 0,
		y09: 0,
		y10: 0,
		y11: 1,
		y12: 0,
		y13: 0,
		y14: 1,
		y15: 0,
		y16: 0,
		y17: 0,
		y18: 0,
		y19: 1,
		y20: 0,
		y21: 1,
		y22: 1,
		y23: 0,
		y24: 0,
		y25: 0,
		y26: 0,
		y27: 0,
		y28: 0,
		y29: 1,
		y30: 1,
		y31: 0,
		y32: 0,
		y33: 1,
		y34: 1,
		y35: 0,
		y36: 0,
		y37: 0,
		y38: 0,
		y39: 0,
		y40: 1,
		y41: 1,
		y42: 1,
		y43: 0,
		y44: 1,
	},
	gates: [
		"x41 XOR y41 -> twk",
		"qpf XOR gqf -> z17",
		"y22 XOR x22 -> qhv",
		"pmc XOR gsj -> z09",
		"fqf AND rfm -> gvs",
		"bsv OR rjn -> sgf",
		"y44 AND x44 -> jth",
		"y07 AND x07 -> tcs",
		"ssf OR khd -> qqr",
		"y11 XOR x11 -> dpd",
		"qqr XOR bps -> z28",
		"y39 AND x39 -> mgj",
		"y32 XOR x32 -> wjn",
		"wpq OR kpd -> ttj",
		"pmw XOR nkv -> z26",
		"kts AND mbb -> cfr",
		"smm XOR pnh -> z20",
		"y27 AND x27 -> khd",
		"x16 XOR y16 -> mdk",
		"y05 AND x05 -> mqf",
		"y12 AND x12 -> bcg",
		"dpb AND hvf -> dbg",
		"hpg AND krq -> brp",
		"x15 AND y15 -> wrn",
		"bhd OR gjg -> vcn",
		"mjf AND mrr -> hnp",
		"ddq AND csn -> ssn",
		"krq XOR hpg -> z12",
		"vdm XOR qhv -> z22",
		"x04 AND y04 -> qbn",
		"y03 XOR x03 -> gsr",
		"y05 XOR x05 -> rdw",
		"y06 XOR x06 -> frf",
		"pmw AND nkv -> vdp",
		"qtc XOR hgh -> z14",
		"cfr OR pww -> fsn",
		"dqp XOR brk -> z11",
		"vdm AND qhv -> sbj",
		"ddq XOR csn -> z02",
		"x23 AND y23 -> gjg",
		"cqr AND nhb -> fdf",
		"x38 AND y38 -> z38",
		"qtc AND hgh -> kdb",
		"nwf OR jth -> z45",
		"y29 XOR x29 -> nhb",
		"y37 AND x37 -> nhv",
		"wjn XOR cbw -> z32",
		"cnm OR kdb -> nhw",
		"x07 XOR y07 -> kwn",
		"y28 XOR x28 -> bps",
		"y01 AND x01 -> kkp",
		"y33 AND x33 -> rsb",
		"y40 AND x40 -> jcd",
		"stm OR vdp -> trb",
		"dhg AND kwn -> pvc",
		"twk XOR smp -> z41",
		"cbw AND wjn -> sjw",
		"cwp OR wjj -> dqp",
		"vcn AND grp -> dhd",
		"x30 AND y30 -> pww",
		"nvf OR jvk -> z06",
		"jpc OR cjd -> mjh",
		"x32 AND y32 -> vtc",
		"dpd OR cgn -> krq",
		"ttj AND fkh -> hsv",
		"ntc XOR twj -> z37",
		"dqp AND brk -> cgn",
		"x25 XOR y25 -> wcb",
		"twk AND smp -> prv",
		"htq XOR hfd -> z13",
		"vkf AND trb -> ssf",
		"kwn XOR dhg -> z07",
		"wrn OR brq -> vpw",
		"y18 XOR x18 -> rdr",
		"sgf AND ckp -> vft",
		"x00 AND y00 -> fhd",
		"scp OR fnj -> vdm",
		"vpw AND mdk -> vpt",
		"y41 AND x41 -> mvd",
		"y34 AND x34 -> fkp",
		"y21 AND x21 -> fnj",
		"x25 AND y25 -> qqq",
		"y08 XOR x08 -> cbg",
		"pmt OR rsb -> qsj",
		"pkq OR nqb -> cbw",
		"qqq OR wng -> pmw",
		"y21 XOR x21 -> cqh",
		"jgm AND tng -> jbk",
		"y20 AND x20 -> wnv",
		"bff OR sbj -> fmm",
		"ktj AND qsj -> pws",
		"rdw AND jmc -> jpw",
		"tgw AND dbp -> vms",
		"y06 AND x06 -> nvf",
		"x26 AND y26 -> stm",
		"jrm XOR mjk -> z44",
		"y26 XOR x26 -> nkv",
		"y43 XOR x43 -> mrr",
		"hfd AND htq -> jwg",
		"y33 XOR x33 -> vrp",
		"mtp OR fgw -> gsj",
		"y09 AND x09 -> cpf",
		"brp OR bcg -> htq",
		"y12 XOR x12 -> hpg",
		"y40 XOR x40 -> rfm",
		"y38 XOR x38 -> dfg",
		"sgf XOR ckp -> z04",
		"x17 XOR y17 -> gqf",
		"y42 XOR x42 -> gmb",
		"jvs XOR fsn -> z31",
		"qsj XOR ktj -> z34",
		"mmj AND cqh -> scp",
		"qwk AND cbg -> fgw",
		"dhd OR csr -> vks",
		"y03 AND x03 -> rjn",
		"mjf XOR mrr -> z43",
		"y36 AND x36 -> gkv",
		"gqf AND qpf -> jpc",
		"wcb AND vks -> wng",
		"x29 AND y29 -> tgg",
		"cmb AND fmm -> z23",
		"wcb XOR vks -> z25",
		"rdr AND mjh -> kpd",
		"x34 XOR y34 -> ktj",
		"y02 XOR x02 -> ddq",
		"rfw OR vms -> tng",
		"x31 AND y31 -> pkq",
		"sqt XOR gmb -> z42",
		"frf XOR mmp -> dhg",
		"y10 XOR x10 -> cfw",
		"x14 XOR y14 -> hgh",
		"pws OR fkp -> dbp",
		"x22 AND y22 -> bff",
		"grp XOR vcn -> z24",
		"y36 XOR x36 -> jgm",
		"y13 XOR x13 -> hfd",
		"y35 XOR x35 -> tgw",
		"x14 AND y14 -> cnm",
		"fmm XOR cmb -> bhd",
		"prv OR mvd -> sqt",
		"x39 XOR y39 -> dpb",
		"nhv OR pjh -> nfb",
		"y20 XOR x20 -> pnh",
		"gtf OR cpf -> dds",
		"jjg OR kkp -> csn",
		"y16 AND x16 -> hnb",
		"vkf XOR trb -> z27",
		"x23 XOR y23 -> cmb",
		"x09 XOR y09 -> pmc",
		"pfm XOR nhw -> z15",
		"y28 AND x28 -> hkm",
		"tng XOR jgm -> z36",
		"fhd AND hbw -> jjg",
		"vtc OR sjw -> mtd",
		"rtr OR jwh -> mjf",
		"y24 XOR x24 -> grp",
		"gkv OR jbk -> ntc",
		"pvc OR tcs -> qwk",
		"mtd AND vrp -> pmt",
		"hnb OR vpt -> qpf",
		"y11 AND x11 -> brk",
		"ssn OR jns -> hct",
		"x19 AND y19 -> mss",
		"x01 XOR y01 -> hbw",
		"y00 XOR x00 -> z00",
		"fqf XOR rfm -> z40",
		"hkm OR cqq -> cqr",
		"x13 AND y13 -> fjs",
		"x17 AND y17 -> cjd",
		"x24 AND y24 -> csr",
		"x37 XOR y37 -> twj",
		"hvf XOR dpb -> z39",
		"smm AND pnh -> cbq",
		"mtd XOR vrp -> z33",
		"x10 AND y10 -> cwp",
		"qwk XOR cbg -> z08",
		"cfw XOR dds -> z10",
		"bps AND qqr -> cqq",
		"mbb XOR kts -> z30",
		"cdj OR nbf -> hvf",
		"y31 XOR x31 -> jvs",
		"gsj AND pmc -> gtf",
		"x18 AND y18 -> wpq",
		"cfw AND dds -> wjj",
		"mjh XOR rdr -> z18",
		"hct AND gsr -> bsv",
		"vft OR qbn -> jmc",
		"jrm AND mjk -> nwf",
		"x35 AND y35 -> rfw",
		"nfb XOR dfg -> nbf",
		"jvs AND fsn -> nqb",
		"x08 AND y08 -> mtp",
		"y30 XOR x30 -> mbb",
		"y19 XOR x19 -> fkh",
		"mmj XOR cqh -> z21",
		"jcd OR gvs -> smp",
		"sqt AND gmb -> rtr",
		"hbw XOR fhd -> z01",
		"y44 XOR x44 -> jrm",
		"x43 AND y43 -> sjk",
		"rdw XOR jmc -> z05",
		"y04 XOR x04 -> ckp",
		"x42 AND y42 -> jwh",
		"y15 XOR x15 -> pfm",
		"mmp AND frf -> jvk",
		"hsv OR mss -> smm",
		"x02 AND y02 -> jns",
		"cqr XOR nhb -> z29",
		"fjs OR jwg -> qtc",
		"fkh XOR ttj -> z19",
		"nhw AND pfm -> brq",
		"wnv OR cbq -> mmj",
		"dbp XOR tgw -> z35",
		"mgj OR dbg -> fqf",
		"hct XOR gsr -> z03",
		"tgg OR fdf -> kts",
		"x27 XOR y27 -> vkf",
		"hnp OR sjk -> mjk",
		"vpw XOR mdk -> z16",
		"mqf OR jpw -> mmp",
		"twj AND ntc -> pjh",
		"nfb AND dfg -> cdj",
	],
};

const test1 = (input) => {
	const { wires, gates } = input;

	const cycle = () => {
		for (let g = 0; g < gates.length; g++) {
			let gate = gates[g];
			const [a, operator, b, _, output] = gate.split(" ");
			// console.log(a, operator, b, output);
			if (wires[a] !== undefined && wires[b] !== undefined) {
				if (wires[output] === undefined) {
					const A = parseInt(wires[a]);
					const B = parseInt(wires[b]);
					switch (operator) {
						case "AND":
							wires[output] = A & B;
							// console.log('AND', output, A, B, A & B);
							break;
						case "XOR":
							wires[output] = A ^ B;
							// console.log('XOR', output, A, B, A ^ B);
							break;
						case "OR":
							wires[output] = A | B;
							// console.log('OR', output, A, B, A | B);
							break;
					}
				}
			} else {
				wires[output] = undefined;
			}
		}

		// console.log('cycle');
		// console.log(wires);
	};

	cycle();
	while (Object.values(wires).includes(undefined)) {
		cycle();
	}

	let output = [];

	for (let key of Object.keys(wires)) {
		if (key.indexOf("z") === 0) {
			let index = parseInt(key.split("z")[1]);
			output[index] = wires[key];
		}
	}

	console.log(output);
	console.log(output.join(""));

	return parseInt(output.reverse().join(""), 2);
};

const test2 = (input) => {};

console.log("Answer - Part 1 - Input 1");
console.log(test1(demoInput));
// 2024
console.log("Answer - Part 1 - Input 2");
console.log(test1(testInput));
// 56278503604006

//console.log('Answer - Part 2 - Input 1');
//console.log(test2(demoInput));
//
//console.log('Answer - Part 2 - Input 2');
//console.log(test2(testInput));
//