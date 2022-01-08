function check() {
    let year = +document.getElementById("year").value;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
          if (year % 400 == 0) {
            document.getElementById("result").innerHTML= year + "là năm nhuận ";
          } else {
            document.getElementById("result").innerHTML= year + "không là năm nhuận "; 
          }
        } else {
            document.getElementById("result").innerHTML= year + "là năm nhuận ";
        }
      } else {
        document.getElementById("result").innerHTML= year + "không là năm nhuận ";
      }
}