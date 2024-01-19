/*
I typically dont really work with B trees so this is going to be a bit weird for me. 
I think there is a "right way" to do this that I could just look up the concept for and get a head
start, but i dont really want to do that. If yo are wondering why this is an nightmare to look at
that is probably why.

i wrote out some of the code on a sheet of paper. My idea is this

push unexplored nodes into an array then itterate through them
whilst itterating, add an attribute of visited as well as an attribute of parrent data
this visited will prevent revisits and the parent data will contain an object that maybe has something like
"must be greater than x" "must be less than Y" or something like that.
if it's not, then we will return -1 and if we get through all of them we will return 1 (i think ill have to look 
  at the req again later)
*/

const isBST = (root) => {
  let location = root;
  location.parentData = { max: null, min: null };
  let nodes = [root];
  let isBST = true;

  while (nodes.length > 0) {
    location = nodes[nodes.length - 1];
    location.visited = true;

    // checking to see if BST
    if (location.parentData.max) {
      if (location.parentData.max <= location.data) {
        isBST = false;
        nodes = [];
        console.log(location);
      }
    }

    // checking to see if BST
    if (location.parentData.min) {
      if (location.parentData.min >= location.data) {
        isBST = false;
        nodes = [];
        console.log(location);
      }
    }

    // Adding the left node and setting the location data
    if (location.left && !location.left.visited) {
      if (location.parentData.left) {
        location.left.parentData = location.parentData;
      } else {
        location.left.parentData = {
          min: location.parentData.min,
          max: location.data,
        };
      }
      nodes.unshift(location.left);
    }

    // Adding the right node and setting the location data
    if (location.right && !location.right.visited) {
      if (location.parentData.right) {
        location.right.parentData = location.parentData;
      } else {
        location.right.parentData = {
          min: location.data,
          max: location.parentData.max,
        };
      }
      nodes.unshift(location.right);
    }

    nodes.pop();
  }

  return isBST;
};

const data = {
  data: 20,
  left: {
    data: 10,
    left: { data: 1, left: null, right: null },
    right: { data: 15, left: null, right: null },
  },
  right: {
    data: 30,
    left: { data: 30, left: null, right: null },
    right: { data: 31, left: null, right: null },
  },
};

const data1 = {
  data: 0,
  left: {
    data: 6,
    left: {
      data: 4,
      left: { data: 2, left: null, right: null },
      right: { data: 5, left: null, right: null },
    },
    right: {
      data: 9,
      left: null,
      right: {
        data: 7,
        left: null,
        right: { data: 3, left: null, right: null },
      },
    },
  },
  right: {
    data: 0,
    left: { data: 0, left: null, right: null },
    right: { data: 0, left: null, right: { data: 8, left: null, right: null } },
  },
};

const data3 = {
  data: 10,
  left: {
    data: 5,
    left: { data: 4, left: null, right: null },
    right: {
      data: 12,
      left: null,
      right: { data: 20, left: null, right: null },
    },
  },
  right: { data: 15, left: null, right: null },
};

const data4 = {
  data: 0,
  left: {
    data: 6,
    left: {
      data: 4,
      left: { data: 2, left: null, right: null },
      right: { data: 5, left: null, right: null },
    },
    right: {
      data: 9,
      left: { data: 7, left: null, right: null },
      right: { data: 3, left: null, right: null },
    },
  },
  right: { data: 8, left: null, right: null },
};

// 0 6 N 4 9 2 5 7 N N 3 N N N 8 N N N N

const isBSTGFGSubmission = (root) => {
  let location = root;
  location.parentData = { max: null, min: null };
  let nodes = [root];
  let isBST = true;

  while (nodes.length > 0) {
    location = nodes[nodes.length - 1];
    location.visited = true;

    if (location.parentData.max) {
      if (location.parentData.max <= location.data) {
        isBST = false;
        nodes = [];
      }
    }

    if (location.parentData.min) {
      if (location.parentData.min >= location.data) {
        isBST = false;
        nodes = [];
      }
    }

    if (location.left && !location.left.visited) {
      if (location.parentData.left) {
        location.left.parentData = location.parentData;
      } else {
        location.left.parentData = {
          min: location.parentData.min,
          max: location.data,
        };
      }
      nodes.unshift(location.left);
    }

    if (location.right && !location.right.visited) {
      if (location.parentData.right) {
        location.right.parentData = location.parentData;
      } else {
        location.right.parentData = {
          min: location.data,
          max: location.parentData.max,
        };
      }
      nodes.unshift(location.right);
    }

    nodes.pop();
  }

  return isBST;
};

console.log(isBSTGFGSubmission(data4));
