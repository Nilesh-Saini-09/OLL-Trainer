function generateOll() {
    orientations = {
      oneEdgeOriented: [
        'alg1',
        'alg2',
        'alg3'
      ],
      twoEdgeOriented: [
        'alg4',
        'alg5',
        'alg6'
      ],
      fourEdgeOriented: [
        'alg7',
        'alg8',
        'alg9'
      ]
    }
    
    var numOrientedEdge;
    var algNum;
    var orientation;
    var alg;
    
    // numOrientedEdge = Math.floor(Math.random() * 3) + 1;
    
   algNum = Math.floor(Math.random() * 3) + 1;
    
    switch(algNum){
          case 1:
              alg = 0
              break;
  
          case 2:
              alg = 1
              break;
  
          case 3:
              alg = 2
              break;
      }
    
    orientation = `${dig}EdgeOriented`;
    var final = orientations[orientation][alg];
    //console.log(orientation, final);
    scr.innerHTML = final;
    
    
    
    
  //   switch(numOrientedEdge){
  //         case 1:
  //             orientation = `${dig}EdgeOriented`
  //             break;
  
  //         case 2:
  //             orientation = `${dig}EdgeOriented`
  //             break;
  
  //         case 3:
  //             orientation = `${dig}EdgeOriented`
  //             break;
  //         }
    // console.log(dig);
    // var final = orientations[orientation][alg];
    // scr.innerHTML = final;
    //console.log(orientation, alg, dig);
    
  }
  