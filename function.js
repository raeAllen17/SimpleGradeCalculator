function Calculate() {

    //retrieve values from html
    var textBox1 = document.getElementById("textBox1").value;
    var textBox2 = document.getElementById("textBox2").value;
    var textBox3 = document.getElementById("textBox3").value;
    var textBox4 = parseFloat(document.getElementById("textBox4").value);
    var textBox5 = parseFloat(document.getElementById("textBox5").value);
    var textBox6 = parseFloat(document.getElementById("textBox5").value);
    var textBox7 = parseFloat(document.getElementById("textBox7").value);

    document.getElementById("name").innerHTML = textBox1;
    document.getElementById("program").innerHTML = textBox2;
    document.getElementById("section").innerHTML = textBox3;

    //error handling
    if (textBox4 > 100 || textBox5 > 100 || textBox6 > 100 || textBox7 > 100 ) {
        document.getElementById("average").innerHTML = "Genius";
        return;
    } else {
        var average = (textBox4*0.15) + (textBox5*0.20) + (textBox6*0.25) + (textBox7*0.40);
        document.getElementById("average").innerHTML = average;
    }
}

