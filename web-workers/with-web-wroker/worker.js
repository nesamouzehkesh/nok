onmessage = function(e) {
  console.log("Worker: Message received from main script", e.data);

  for (let i = 0; i < 44; i++) {
    var fib = fibonacci(i);
    postMessage({ i, fib });
  }
};

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
