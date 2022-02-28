const blocks = [{
/*
  XXOX
*/
  rotations: 2,
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
  rotations: 0,
  definition: [[-1, -1], [-1, 0], [0, 0], [1, 0]]
}, {
/*
   OX
  XX
*/
  rotations: 2,
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
  rotations: 2,
  definition: [[-1, 0], [0, 0], [0, 1], [1, 1]]
}]

blocks.forEach(block => {
  const { rotations, definition } = block
  let xmin = 0, xmax = 0, ymin = 0, ymax = 0
  definition.forEach(([x, y]) => {
    xmin = Math.min(x, xmin)
    xmax = Math.max(x, xmax)
    ymin = Math.min(y, ymin)
    ymax = Math.max(y, ymax)
  })
  const width = xmax - xmin + 1
  const height = ymax - ymin + 1

  block.rotations = new Array(rotations).fill(0)
  block.rotations[0] = {
    width,
    height,
    cx: -xmin,
    cy: -ymin,
    squares: definition
  }
})
