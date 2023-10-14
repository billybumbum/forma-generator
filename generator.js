import { extrudePolygon } from "geometry-extrude";

export async function runGenerator(input) { 
  
  const { indices, position } = extrudePolygon(
    [[input.values.polygon.points]],
    {
      depth: 1000
    }
  );


  
  return {
    mesh: {
      verts: position,
      faces: indices,
    },
  };
}


// npx esbuild --bundle --format=esm --outfile=index.js generator.js
//npx http-server --cors -c-1