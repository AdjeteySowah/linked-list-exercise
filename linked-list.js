function createList() {
   let headNode = null;
   let tailNode = null;

   return {
      append(value) {
         let newNode = {
            prev: null,
            value,
            next: null,
         };

            // when list is empty
         if (headNode === null) {
            headNode = newNode;
            tailNode = newNode;
         }

            // when there's at least one node in the list
         if (headNode !== null) {
            tailNode.next = newNode;
            newNode.prev = tailNode;
            tailNode = newNode;      
         } 
      },
      
      prepend(value) {
         let newNode = {
            prev: null,
            value,
            next: this,
         };

         if (headNode === null) {
            headNode = newNode;
            tailNode = newNode;
         }

         if (headNode !== null) {
            headNode = newNode;
         }
      },

      size() {

      },

      head() {

      },

      tail() {

      },

      at(index) {

      },

      pop() {

      },

      contains(value) {

      },

      find(value) {

      },

      toString() {

      },
   }
}


function node(value = null, next = null) {
   return {
      value,
      next,
   }
}