const blocks = [{
/*
  XXOX
*/
  rotations: 4,
  definition: [[-2, 0], [-1, 0], [0, 0], [1, 0]]
}, {
/*
  X
  XOX
*/
  rotations: 4,
  definition: [[-1, -1], [-1, 0], [0, 0], [1, 0]]
}, {
/*
    X
  XOX
*/
  rotations: 4,
  definition: [[-1, 0], [0, 0], [1, 0], [1, -1]]
}, {
/*
  XX
  XO
*/
  rotations: 1,
  definition: [[-1, -1], [-1, 0], [0, -1], [0, 0]]
}, {
/*
   OX
  XX
*/
  rotations: 4,
  definition: [[-1, 1], [0, 1], [0, 0], [1, 0]]
}, {
/*
   X
  XOX
*/
  rotations: 4,
  definition: [[-1, 0], [0, -1], [0, 0], [1, 0]]
}, {
/*
  XO
   XX
*/
  rotations: 4,
  definition: [[-1, 0], [0, 0], [0, 1], [1, 1]]
}]

blocks.forEach(block => {
  const { rotations, definition } = block

  function finalize (rotation) {
    let xMin = 0, xMax = 0, yMin = 0, yMax = 0
    rotation.squares.forEach(([x, y]) => {
      xMin = Math.min(x, xMin)
      xMax = Math.max(x, xMax)
      yMin = Math.min(y, yMin)
      yMax = Math.max(y, yMax)
    })
    rotation.width = xMax - xMin + 1
    rotation.height = yMax - yMin + 1
    rotation.cx = -xMin
    rotation.cy = -yMin
  }
  
  let squares = definition
  block.rotations = new Array(rotations)
    .fill(0)
    .map((_, index) => {
      const rotation = {
        squares: [...squares]
      }
      squares = squares.map(([x, y]) => [-y, x])
      return rotation
    })
  block.rotations.forEach(finalize)
})
