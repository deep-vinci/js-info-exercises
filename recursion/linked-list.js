// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Write a function printList(list) that outputs list items one-by-one.


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


const outputLinkedList = list => {
    console.log(list.value)

    if (list.next == null) {
        return list
    } else {
        return outputLinkedList(list.next)        
    }
}

outputLinkedList(list)