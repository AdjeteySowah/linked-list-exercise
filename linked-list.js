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
               // when there's at least one node in the list
         } else {
            tailNode.next = newNode;
            newNode.prev = tailNode;
            tailNode = newNode;
         }    
      },

      prepend(value) {
         let newNode = {
            prev: null,
            value,
            next: headNode,
         };

         if (headNode === null) {
            headNode = newNode;
            tailNode = newNode;
            newNode.next = null;
         } else {
            headNode.prev = newNode;
            headNode = newNode;
         }
      },

      size() {
         let numOfNodes = 0;
         const stack = [headNode];

         while (stack.length > 0) {
            let current = stack.pop();
            
            if (current && typeof current === 'object') {
               if (current.hasOwnProperty('next')) {
                  numOfNodes++;
               }
            }

            for (let key in current) {
               if (key === 'next' && current[key] !== null) {
                  stack.push(current[key]);
               }
            }
         }

         return numOfNodes;
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