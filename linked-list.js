function createList() {
   let list;

   let headNode = null;

   let tailNode = null;

   function assignIndex() {
      let index = 0;
      const stack = [headNode];

      while (stack.length > 0) {
         let current = stack.pop();

         if (current) {
            current.index = index;
         }

         for (let key in current) {
            if (key === 'next' && current[key] !== null) {
               index++;
               stack.push(current[key]);
            }
         }
      }
   }

   list = {
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
         
         assignIndex();
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

         assignIndex();
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
         return headNode.value;
      },

      tail() {
         return tailNode.value;
      },

      at(index) {
         const stack = [headNode];

         while (stack.length >= 0) {
            let current = stack.pop();

            if (current) {
               if (current.index === index) {
                  return current.value;
               }
            } else {
               throw new Error(`Oops! The list is empty or doesn’t have an index at position ${index}`);
            }

            for (let key in current) {
               if (key === 'next' && current[key] !== null) {
                  stack.push(current[key]);
               }
            }
         }
      },

      pop() {
         if (headNode === null) {
            return;
         } else {
            if (tailNode.prev === null) {
               tailNode = tailNode.prev;
            } else {
               tailNode.prev.next = null;
               tailNode = tailNode.prev;
            }
         }
      },

      contains(value) {

      },

      find(value) {

      },

      toString() {

      },
   }

   return list;
}


function node(value = null, next = null) {
   return {
      value,
      next,
   }
}