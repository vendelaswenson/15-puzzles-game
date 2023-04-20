
Array.prototype.swap = function(i,j){// eslint-disable-line no-extend-native
    [this[i],this[j]] = [this[j],this[i]];
    return this;
  }
  
  const emptyBox = 0; 
  
  export default class BoardFunctions{
  
      constructor(data){
          const def = 3;
          if(Array.isArray(data)){
            this.size=Math.ceil(Math.sqrt(data.length));
            this.board = [...data];
          }else{
            this.size=isNaN(data)?def:data;
            this.board= this.getBoard(data);
          }
      }
  
      moves(i,j){
        const legalFriends = this.checkLegalFriends(i,j);
        const indexes = ({i,j}) => this.size*j+i;
        let empty = null;
        if(legalFriends.some(box=>(this.board[indexes(empty=box)] === emptyBox))){
           this.board.swap(indexes(empty),indexes({i,j}));
           return true;
        }
        return false;
      }

        
      getBoard(size){
        return Array.from({length:size*size},(_,b)=>b);
       }
       
       get matrix() {
         return this.board.reduce(
           (rows, key, index) => (index % this.size === 0 ? 
           rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
       }
       
  
  }