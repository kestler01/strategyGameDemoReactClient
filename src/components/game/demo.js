// demo game object- will later be carried in from an api call 
const demo = {
		title: 'demo',
		owner: null,
		data: {
            sizeX:7,
            sizeY:7,
            map:null
        } 
}

const mapGenerator = (game => {
    const x = game.data.sizeX
    const y =game.data.sizeY
	const mapArray = []
	for (let mapY = 0; mapY < y; mapY++) {
		mapArray.push([])
		for (let mapX = 0; mapX < x; mapX++) {
			// MapCellData Class Constructor expects: x, y
			mapArray[mapY].push({x:mapX, y:mapY, other:{}})
		}
	}
	return mapArray
})

demo.map = mapGenerator(demo)

export default demo