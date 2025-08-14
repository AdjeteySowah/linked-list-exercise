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
         const stack = [headNode];

         while (stack.length >= 0) {
            let current = stack.pop();

            if (current) {
               if (current.value === value) {
                  return true;
               }
            } else {
               return false;
            }

            for (let key in current) {
               if (key === 'next' && current[key] !== null) {
                  stack.push(current[key]);
               }
            }
         }
      },

      find(value) {
         const stack = [headNode];

         while (stack.length >= 0) {
            let current = stack.pop();

            if (current) {
               if (current.value === value) {
                  return current.index;
               }
            } else {
               return null;
            }

            for (let key in current) {
               if (key === 'next' && current[key] !== null) {
                  stack.push(current[key]);
               }
            }
         }
      },

      toString() {
         let listInStringForm;
         const stack = [headNode];

         while (stack.length > 0) {
            let current = stack.pop();

            if (current) {
               if (typeof current === 'object' && current.prev === null && current.next === null) {
                  listInStringForm = `( ${current.value} ) -> null`;
               } else if (typeof current === 'object' && current.prev === null) {
                  listInStringForm = `( ${current.value} ) -> `;
               } else if (typeof current === 'object' && current.next !== null) {
                  listInStringForm = `${listInStringForm}( ${current.value} ) -> `;
               } else {
                  listInStringForm = `${listInStringForm}( ${current.value} ) -> null`;
               }
            } else {
               throw new Error(`Oops! The list is empty.`);
            }

            for (let key in current) {
               if (key === 'next' && current[key] !== null) {
                  stack.push(current[key]);
               }
            }
         }

         return listInStringForm;
      },

      insertAt(value, index) {
         let newNode = {};
         const stack = [headNode];

         while (stack.length >= 0 && newNode !== null) {
            let current = stack.pop();

            if (current) {
               if (current.index === index) {
                  if (index === 0) {
                     current.prev = {};
                     current.prev.prev = null;
                     current.prev.value = value;
                     current.prev.next = current;
                     headNode = current.prev;
                  } else {
                     newNode.prev = current.prev;
                     newNode.value = value;
                     newNode.next = current;
                     
                     current.prev.next = newNode;
                     current.prev = newNode;
                  }
                  
                  newNode = null;
               }
            } else {
               throw new Error(`Oops! Can't insert. Use list.append(value) instead.`);
            }

            for (let key in current) {
               if (key === 'next' && current[key] !== null) {
                  stack.push(current[key]);
               }
            }
         }

         assignIndex();
      },

      removeAt(index) {
         let nodeRemoved = false;
         const stack = [headNode];

         while (stack.length >= 0 && nodeRemoved === false) {
            let current = stack.pop();

            if (current) {
               if (current.index === index) {
                  if (index === 0 && current.next !== null) {
                     current.next.prev = null;
                     headNode = current.next;
                  } else if (index === 0) {
                     headNode = current.next;
                  } else {
                     current.prev.next = current.next;
                     current.next.prev = current.prev;
                  }

                  nodeRemoved = true;
               }
            } else {
               throw new Error(`Oops! List is empty or list does not accomodate items up to index ${index}`);
            }

            for (let key in current) {
               if (key === 'next' && current[key] !== null) {
                  stack.push(current[key]);
               }
            }
         }

         assignIndex();
      },
   }

   return list;
}