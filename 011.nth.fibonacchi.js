function fibo(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibo(n-1) + fibo(n-2);
}

// test harness:
for (let i = 0; i < 10; i++ ) {
    console.log( fibo(i) + ", " );
}
console.log( fibo(10) );
