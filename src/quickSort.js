const quickSort = list => {
    if(!list || list.length < 2) return list       
    if(list.length === 2) {
        if(list[0] > list[1]) {
            return [list[1], list[0]]
        }
    }
    
    
  };
  
  module.exports = quickSort;
  