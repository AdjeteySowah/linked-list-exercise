# Linked List Exercise

A small Linked List implementation in JavaScript (factory pattern) built to meet [The Odin Project's Linked Lists assignment](https://www.theodinproject.com/lessons/javascript-linked-lists). This project implements the required linked-list functionality and the extra-credit methods (`insertAt`, `removeAt`) as a factory-based `createList()`.

## Features / API

The list exposes the following methods:

* `append(value)` — add node to end
* `prepend(value)` — add node to front
* `size()` — returns number of nodes
* `head()` — returns first node's value
* `tail()` — returns last node's value
* `at(index)` — returns the value at `index`
* `pop()` — removes the last element
* `contains(value)` — returns `true` if value exists, otherwise `false`
* `find(value)` — returns the index of value or `null` if not found
* `toString()` — returns string like `( value ) -> ( value ) -> null`
* `insertAt(value, index)` — **(extra credit)** inserts a node at `index`
* `removeAt(index)` — **(extra credit)** removes node at `index`


## Files

* `linked-list.js` — the linked list factory (`createList`) and all methods.
* `main.js` — example usage / test file that populates the list (used when running the project).

## Example / Expected output

In `main.js` you create an instance and append a few values:

```js
const list = createList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
```

Expected console output:

```
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

## Notes / Implementation details

* The implementation uses a factory `createList()` that keeps `headNode` and `tailNode` references and assigns an `index` property to nodes whenever the list structure changes (via internal `assignIndex()`).
* `insertAt` and `removeAt` update node links and then reassign indices.
* `toString()` builds the string representation by traversing from head to tail.
* No external dependencies or tests are included — the repo currently uses `main.js` for manual testing.
