const demoInput = [
	'89010123',
	'78121874',
	'87430965',
	'96549874',
	'45678903',
	'32019012',
	'01329801',
	'10456732'
];

const testInput = [
	'652101223431010123212787018120123432102123',
	'743012214321123434303692189011014501343012',
	'898129805010698543214543274320329691256765',
	'210036776234567690165567865411298780269834',
	'378945689103698789876458976502332109100121',
	'463210187892789870122345689965423458236780',
	'554109096701098565031018769876210967745698',
	'695678125432145678540019810567305870894327',
	'788987030120130989654321001498456701765016',
	'018976546543221078765478212312565432120145',
	'327348987012344569876569801108976789013237',
	'456256780109853078903478412217789676567898',
	'216107891238762169012894323306587987401298',
	'307898994345667654321765401455496096300347',
	'456767287454108991210101232960345145212456',
	'378950106543211280890810345871232234336765',
	'567843217017870376721987496432821101123898',
	'454107898726965445432896587501910787034567',
	'303210789634231030567801457601801896543298',
	'211023676540142121056932368212769787432109',
	'072124545035658762346541079345678891001876',
	'189433032123769654390670988454501762018967',
	'276542121054898323481787643367432053323458',
	'345633654765433210672696652298749144310549',
	'498726547890121306543545781121878235699632',
	'765017630987010129401235690030965456788701',
	'834198921256100438767624510549854307890123',
	'920183210343221245658913025678123210019834',
	'813274101254234986541002134765089876521765',
	'104565431069145875632101098834456785430345',
	'211278922378036780749812367903321896101216',
	'810189810467929891898701456512010787236707',
	'983210123567810432325600210105677698945898',
	'874301034512345587014511343234988767650789',
	'765212965403476696523329858943439656501090',
	'650163874301984785489834767652034565432781',
	'543254989218943210390765789621129210345652',
	'432167878307654101281087656780098761231243',
	'545089861056743105672390543890145687650987',
	'456778352149892234365401232763230896501276',
	'327863243434501345696543201054221245434345',
	'018954100123410210787894102343101230123656',
];

const test = (input, allowMultipleRoutes) => {
	const trailheads = [];
	
	const xMax = input[0].length;
	const yMax = input.length;

	for (let y = 0; y < yMax; y++) {
		for (let x = 0; x < xMax; x++) {
			if (input[y].charAt(x) === '0') {
				trailheads.push([x, y]);
			}
		}
	}

	let trailsInProgress = trailheads.map((t) => {
		return {
			step: 0,
			trailhead: t,
			path: [t],
		}
	});
	const trailsCompleted = [];

	while (trailsInProgress.length) {
		const trailsNextStep = [];
		
		trailsInProgress.forEach((trail) => {
			const { step, path, trailhead } = trail;
			const [x, y] = path[path.length - 1];

			// up
			const stepUp = y > 0 ? parseInt(input[y - 1].charAt(x)) : -1;
			if (stepUp === step + 1) {
				const nextTrail = { trailhead, step: stepUp, path: [...path, [x, y - 1]]};
				if (stepUp === 9) {
					trailsCompleted.push(nextTrail);
				} else {
					trailsNextStep.push(nextTrail);
				}
			}
			// right
			const stepRight = x < xMax - 1 ? parseInt(input[y].charAt(x + 1)) : -1;
			if (stepRight === step + 1) {
				const nextTrail = { trailhead, step: stepRight, path: [...path, [x + 1, y]]};
				if (stepRight === 9) {
					trailsCompleted.push(nextTrail);
				} else {
					trailsNextStep.push(nextTrail);
				}
			}
			// down
			const stepDown = y < yMax - 1 ? parseInt(input[y + 1].charAt(x)) : -1;
			if (stepDown === step + 1) {
				const nextTrail = { trailhead, step: stepDown, path: [...path, [x, y + 1]]};
				if (stepDown === 9) {
					trailsCompleted.push(nextTrail);
				} else {
					trailsNextStep.push(nextTrail);
				}
			}
			// left
			const stepLeft = x > 0 ? parseInt(input[y].charAt(x - 1)) : -1;
			if (stepLeft === step + 1) {
				const nextTrail = { trailhead, step: stepLeft, path: [...path, [x - 1, y]]};
				if (stepLeft === 9) {
					trailsCompleted.push(nextTrail);
				} else {
					trailsNextStep.push(nextTrail);
				}
			}
		});

		trailsInProgress = [...trailsNextStep];
	}

	let total = 0;

	for (let i = 0; i < trailheads.length; i++) {
		const trailhead = trailheads[i];
		let trailScore;
		if (allowMultipleRoutes) {
			trailScore = trailsCompleted.filter((tc) => tc.trailhead.join('-') === trailhead.join('-')).length;;
		} else {
			trailScore = [...new Set(trailsCompleted.filter((t) => t.trailhead.join('-') === trailhead.join('-')).map((t) => t.path[t.path.length - 1].join('-')))].length;
		}
		total += trailScore;
	}

	return total;
};

console.log('Answer - Part 1 - Input 1');
console.log(test(demoInput, false));
// 36
console.log('Answer - Part 1 - Input 2');
console.log(test(testInput, false));
// 514

console.log('Answer - Part 2 - Input 1');
console.log(test(demoInput, true));
// 81
console.log('Answer - Part 2 - Input 2');
console.log(test(testInput, true));
// 1162
