import { createBinarySearchTree } from './createBinarySearchTree';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(createBinarySearchTree()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(createBinarySearchTree()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(createBinarySearchTree()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(createBinarySearchTree()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { createBinarySearchTree(); }).toThrow();
 */

describe('createBinarySearchTree', () => {
  const tree = createBinarySearchTree([5,1,8,3,7,2,6,9,4]);

  it('createBinarySearchTree creates a search tree from an array', () => {
    expect(tree.search).toBeDefined();
    expect(tree.insert).toBeDefined();
  });

  it('createBinarySearchTree.search returns elements which exist', () => {
    expect(tree.search(1)).toEqual(1);
    expect(tree.search(2)).toEqual(2);
    expect(tree.search(3)).toEqual(3);
    expect(tree.search(4)).toEqual(4);
    expect(tree.search(5)).toEqual(5);
    expect(tree.search(6)).toEqual(6);
    expect(tree.search(7)).toEqual(7);
    expect(tree.search(8)).toEqual(8);
    expect(tree.search(9)).toEqual(9);
  });

  it('createBinarySearchTree returns null if element is not found', () => {
    expect(tree.search(999)).toEqual(null);
  });

  it('createBinarySearchTree can insert an element to a built tree', () => {
    let root = createBinarySearchTree([5,1,8,3,7,2,6,9,4]);
    expect(root.search(999)).toEqual(null);
    root.insert(999);
    expect(root.search(999)).toEqual(999);
  });
});


