function hell(value, cb) {
  cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
  hell(valueFromA + 1, function (valueFromB) {
    hell(valueFromB + 1, function (valueFromC) {
      hell(valueFromC + 1, function (valueFromD) {
        console.log(valueFromD + 1);
      });
    });
  });
});