// setTimeout with callback

setTimeout(function cb() { // when js ecounters this line it registers a callback with timer on
  console.log("Callback function setTimeout 🕰️"); 
});

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y")
});

/// output x
        // y
        // Callback function setTimeout 🕰️