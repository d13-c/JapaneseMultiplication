document.addEventListener('DOMContentLoaded', function() {
    const question = document.querySelector('.question');

        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');

            // Show images when answer is toggled
            const images = answer.querySelectorAll('.center img');
            images.forEach(image => {
                image.style.display = 'block';
            });
        });
});

//---------------------------------------------------------------------------------------------------------

document.getElementById('multiplyButton').addEventListener('click', function() {
    var stringInput1 = document.getElementById('input1').value;
    var stringInput2 = document.getElementById('input2').value;

    // check if both multipliers inserted by the user are valid natural numbers between 0-99
    if (isNaN(stringInput1) || isNaN(stringInput2) || stringInput1 === "" || stringInput2 === "") {
        alert('INVALID VALUES! Please enter two natural numbers between 0 and 99!');
        return;
    }

    //add 0 in front of the single digit numbers to make them double digits 
    if (stringInput1.length === 1) {
        stringInput1 = "0" + stringInput1;
    }

    if (stringInput2.length === 1) {
        stringInput2 = "0" + stringInput2;
    }


    //split the two numbers into four separate digits
    var number1 = parseInt(stringInput1, 10);
    var number2 = parseInt(stringInput2, 10);

    if (number1 < 0 || number1 > 99 || number2 < 0 || number2 > 99) {
        alert("The numbers inserted do not respect the specified requirements. Add two numbers between 0 and 99.");
        return;
    }

    //splitting the numbers into 4 separate digits 
    digit1Number1 = parseInt(stringInput1.charAt(0), 10);
    digit2Number1 = parseInt(stringInput1.charAt(1), 10);
    digit1Number2 = parseInt(stringInput2.charAt(0), 10);
    digit2Number2 = parseInt(stringInput2.charAt(1), 10);

    //clear previous lines
    document.querySelector('.lines-container').innerHTML = '';

    document.getElementById("digit1").innerText = digit1Number1;
    document.getElementById("digit2").innerText = digit2Number1;
    document.getElementById("digit3").innerText = digit1Number2;
    document.getElementById("digit4").innerText = digit2Number2;

    //create lines based on the separated digits
    createLines(digit1Number1, digit2Number1, digit1Number2, digit2Number2);

    //count intersections between different groups of lines
    countIntersections();


    //hide the input container
    document.querySelector('.input-container').style.display = 'none';    

    //display the output container
    document.querySelector('.output-container').style.display = 'block';
    document.getElementById('output-table').style.display = 'table';
});

function createLines(n1d1_Red, n1d2_Orange, n2d1_Blue, n2d2_Green) {
    const container = document.querySelector('.lines-container');

    // Create Red Horizontal Lines
    for (let i = 0; i < n1d1_Red; i++) {
        const redLine = document.createElement('div');
        redLine.classList.add('line', 'red');
        redLine.style.top = `${60 + i * 4}%`;
        redLine.style.margin = 'auto';
        redLine.style.width = '57%';
        redLine.style.left = '22%'
        redLine.style.transform = 'rotate(-10deg)';
        redLine.style.height = '0.7%';
        container.appendChild(redLine);
    }
    
    // Create Orange Horizontal Lines
    for (let i = 0; i < n1d2_Orange; i++) {
        const orangeLine = document.createElement('div');
        orangeLine.classList.add('line', 'orange');
        orangeLine.style.top = `${99 + i * 4}%`;
        orangeLine.style.width = '57%';
        orangeLine.style.left = '22%';
        orangeLine.style.height = '0.7%';
        orangeLine.style.transform = 'rotate(-10deg)';
        container.appendChild(orangeLine);
    }
    
    // Create Blue Vertical Lines
    for (let i = 0; i < n2d1_Blue; i++) {
        const blueLine = document.createElement('div');
        blueLine.classList.add('line', 'blue');
        blueLine.style.left = `${25 + i * 2}%`;
        blueLine.style.height = '90%';
        blueLine.style.width = '0.3%';
        blueLine.style.top = `${55 - i * 0.5}%`;
        blueLine.style.transformOrigin = 'bottom';
        blueLine.style.transform = 'rotate(10deg)';
        container.appendChild(blueLine);
    }
 
    // Create Green Vertical Line
    for (let i = 0; i < n2d2_Green; i++) {
        const greenLine = document.createElement('div');
        greenLine.classList.add('line', 'green');
        greenLine.style.left = `${48 + i * 2}%`;
        greenLine.style.height = '90%';
        greenLine.style.width = '0.3%';
        greenLine.style.top = `${50 - i * 0.5}%`;
        greenLine.style.transformOrigin = 'bottom';
        greenLine.style.transform = 'rotate(10deg)';
        container.appendChild(greenLine);
    }
}
function countIntersections() {
    const redLines = document.querySelectorAll('.red');
    const orangeLines = document.querySelectorAll('.orange');
    const blueLines = document.querySelectorAll('.blue');
    const greenLines = document.querySelectorAll('.green');

    let intersections = {
        'red_blue': 0,
        'orange_blue': 0,
        'red_green': 0,
        'orange_green': 0
    };

    redLines.forEach(redLine => {
        blueLines.forEach(blueLine => {
            if (checkIntersection(redLine, blueLine)) {
                intersections['red_blue']++;
            }
        });

        greenLines.forEach(greenLine => {
            if (checkIntersection(redLine, greenLine)) {
                intersections['red_green']++;
            }
        });
    });

    orangeLines.forEach(orangeLine => {
        blueLines.forEach(blueLine => {
            if (checkIntersection(orangeLine, blueLine)) {
                intersections['orange_blue']++;
            }
        });

        greenLines.forEach(greenLine => {
            if (checkIntersection(orangeLine, greenLine)) {
                intersections['orange_green']++;
            }
        });
    });

    let d = intersections['red_green']+intersections['orange_blue'];

    // update intersection counts based on the condition
    if (intersections['orange_green'] >= 10) {
    const digits = intersections['orange_green'].toString().split('').map(Number);
    intersections['orange_green'] = digits[1];
    d += digits[0];
    }

    let tensValue = d;
    let hundredsVal = intersections['red_blue'];
    // Update intersection counts based on the condition
    if (d >= 10){
        tensValue  = tensValue % 10;
        const remainingDigitsD = Math.floor(d/10);
        hundredsVal += remainingDigitsD;
    }
    
    let cTemp = hundredsVal; 
    if (cTemp >= 10){
        hundredsVal = hundredsVal % 10; 
        thousandsVal = Math.floor(cTemp/10);
    }
    else {
        thousandsVal = "0";
    }

    


    // Update the table with intersection counts
    const intersectionRow = document.getElementById('intersectionRow');
    intersectionRow.children[0].textContent = thousandsVal;
    intersectionRow.children[1].textContent = hundredsVal;
    intersectionRow.children[2].textContent = tensValue;
    intersectionRow.children[3].textContent = intersections['orange_green'];

    console.log(intersections);
}

function checkIntersection(line1, line2) {
    const rect1 = line1.getBoundingClientRect();
    const rect2 = line2.getBoundingClientRect();
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

document.getElementById('restartButton').addEventListener('click', function() {
    //display the input container
    document.querySelector('.input-container').style.display = 'block';  
    document.getElementById("input1").value = "";  
    document.getElementById("input2").value = "";  

    //hide the output container
    document.querySelector('.output-container').style.display = 'none';
    document.getElementById('output-table').style.display = 'none';
});