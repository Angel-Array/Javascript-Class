document.getElementById("demo").innerHTML=
(false && false) /*returns true */ + "<br>" +
(true && false) /*returns false */ + "<br>" +
(3==3 && 4==4) /*returns true */ + "<br>" +
(3==4 && 4==4) /*returns true */ + "<br>" +
(2<3 && 4>3) /*returns true */ + "<br>" +
(3<2 && 4<5) /*returns false */ + "<br>" 