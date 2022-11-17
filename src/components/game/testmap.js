const generateMap = require('../../../reference/generateMap')
const createTestMap = () => {
	//demo is 7x9

	const plains = {
		// pojo demoing a potential game terrainLayer object of a game cell - will likely become a class
		name: 'plains',
		defenseMultiplier: 1,
		moveCost: 1,
		passable: true,
		otherAttributes: [], // catch-all for other yet unforeseen edge cases and terrain behavior
	}

	const woods = {
		// pojo demoing a potential game terrainLayer object of a game cell
		name: 'woods',
		defenseMultiplier: 1.25,
		moveCost: 2,
		passable: true,
		otherAttributes: [], // catch-all for other yet unforeseen edge cases and terrain behavior
	}

	const testMapData = generateMap(7, 9, plains) // each cell has 3 layers: terrain, building, unit

	for (i = 0; i < 9; i++) {
		testMapData[i][0].terrainLayer = { name: woods } // dot natation has the x and y reversed to be y x
	}
	for (i = 0; i < 9; i++) {
		testMapData[i][7].terrainLayer = { name: woods } // dot natation has the x and y reversed to be y x
	}

	// terrainLayer , filled with plains ( regular )
	// [ [{woods},{},{},{},{},{},{woods}],
	//   [{woods},{},{},{},{},{},{woods}],
	//   [{woods},{},{},{},{},{},{woods}],
	//   [{woods},{},{},{},{},{},{woods}],
	//   [},{},{},{},{},{},{}],
	//   [{woods},{},{},{},{},{},{woods}],
	//   [{woods},{},{},{},{},{},{woods}],
	//   [{woods},{},{},{},{},{},{woods}],
	//   [{woods},{},{},{},{},{},{woods}]
	// ]

	const keep = {
		name: 'keep',
		defenseMultiplier: 1.75,
		moveCost: null,
		passable: false,
		owner: null,
		otherAttributes: [targetable, (hitPoints = { total: 100, current: 100 })],
	}

	const ruins = {
		name: 'ruins',
		defenseMultiplier: 1.5,
		moveCost: 2,
		passable: true,
		owner: null,
		otherAttributes: [],
	}

	const wall = {
		name: 'wall',
		defenseMultiplier: 1.5,
		moveCost: null,
		passable: false,
		owner: null,
		otherAttributes: [],
	}

	testMapData[0][3].buildingLayer = keep
	testMapData[2][1].buildingLayer = ruins
	testMapData[2][5].buildingLayer = ruins
	testMapData[7][1].buildingLayer = ruins
	testMapData[7][5].buildingLayer = ruins
	testMapData[4][0].buildingLayer = wall
	testMapData[4][3].buildingLayer = wall
	testMapData[4][6].buildingLayer = wall

	// buildingLayer
	// [ [{},{},{},{keep},{},{},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{ruins},{},{},{},{ruins},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{wall},{},{},{wall},{},{},{wall}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{ruins},{},{},{},{ruins},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{},{},{},{},{},{}]
	// ]

	const testUnit = {
		name: 'Andrew',
		movePoints: 3,
		team: 1,
		hasMoved: false,
		hasActed: false,
	}

	testMapData[8][3].unitLayer = testUnit
	// unitLayer
	// [ [{},{},{},{},{},{},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{},{},{},{},{},{}],
	//   [{},{},{},testUnit,{},{},{}]
	// ]
}

module.exports = { testMap: testMapData }
