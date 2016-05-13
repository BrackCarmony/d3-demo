var dataFromOtherFile = []

function resetData(){
    dataFromOtherFile = []
    for (var i=0;i<30;i++){
      dataFromOtherFile.push(Math.random());
    }

    dataFromOtherFile = dataFromOtherFile.map(function(x){
      return x*15;
    })

    dataFromOtherFile = dataFromOtherFile.map(function(x){
      return x*x;
    })
}

resetData();

// data = data.map(function(x){
//   return x*100;
// })
//
// data = data.map(function(x){
//
// })
