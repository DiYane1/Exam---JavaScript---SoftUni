function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let greenPaintRate = 3.4;
    let redPaintRate = 4.3;

    //WALLS
    let frontBackWallArea = x * y;
    let window = 1.5 * 1.5; 
    let sides =(2 * frontBackWallArea) - (2 * window); 
    let backWall = x * x; 
    let enter = 1.2 * 2; 
    let walls = (2 * backWall) - enter; 
    let totalArea = sides + walls;
    let greenPaintVolume = totalArea / greenPaintRate;

    // ROOF 
    let roofSquare = 2 * (x * y); 
    let roofTriangle = 2 * (x * h / 2); 
    let roofArea = roofSquare + roofTriangle; 
    let redPaintVolume = roofArea / redPaintRate

    console.log(`${greenPaintVolume.toFixed(2)}`);
    console.log(`${redPaintVolume.toFixed(2)}`);
  }
