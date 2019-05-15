class CircularList {
  constructor(arr) {
    this.arr = arr;
    this.p = 0;
  }

  getStart() {
    return this.arr[0];
  }

  getNext() {
    if (this.p + 1 > this.arr.length - 1) this.p = 0;
    else this.p++;
    return this.arr[this.p];
  }

  deleteCurrent() {
    this.arr.splice(this.p, 1);
    if (this.p == this.arr.length - 1) this.p = 0;
    else {
        if(this.p == 0) this.p = this.arr.lenght - 1; 
        else this.p--;
    }
  }
}

function businessTasks(arr, N) {
  const cl = new CircularList(arr);
  while (arr.length > 1) {
    for (let i = 0; i < N; i++) {
      if (i == N - 1) {
        cl.deleteCurrent();
        break;
      }
      cl.getNext();
    }
  }
  return cl.getStart();
}

console.log(businessTasks(["a", "b", "c", "d"], 8)); // c

console.log(businessTasks(["a", "b", "c", "d", "e"], 3)); // d

console.log(businessTasks(["a", "b"], 1000)); // a

console.log(businessTasks(["alpha", "beta", "gamma", "delta", "epsilon"], 1)); // epsilon
