//JONAS

function r1k1(element) {
    element.innerHTML = "<img src=https://akamai.vgc.no/drfront/images/2020/10/21/c=251,195,314,230;w=433;h=317;563089.jpg> Pol'ti bil"
}

function r3k3() {
    alert("Du har klikket på en dum, meningsløs rute. Gratulerer");
    
}


//ERIK

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


function r1k2(color) {
    var color = document.querySelector('.r1k2');
    color.style.background = colorArray[Math.floor(Math.random() * 50)];
};


function r1k3() {
    document.getElementById('rad1kol3').style.display = "flex";
    document.getElementById('rad1kol3').style.position = "relative";
    document.getElementById('rad1kol3').style.top = "900px";
    document.getElementById('rad1kol3').style.right = "900px";
};



//HENRIK
function r2k2() {
    document.getElementById('test').innerHTML = "<iframe width='280px' height='280px' src='https://www.youtube.com/embed/tRGDcwOxBzY' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}

function r2k3() {
    var answer = prompt('Hva brukes CSS til?(scripting, styling eller markup)')
    answer = answer.toLowerCase();
    if (answer == 'styling') {
        alert('Riktig!');
    } else {
        alert('Feil svar!');
    };
};

//STIAN
function r3k1(mekk) {
    mekk.innerHTML = "<img  height='300' width='300' src=https://img-9gag-fun.9cache.com/photo/a7WVB9b_460s.jpg><p>im good, thanks for checking</p>"
}


//FELLES

function getImage(){
    var randomNr = Math.floor(Math.random() * 1001); //genererer random tall mellom 0-1000
    document.getElementById("img").innerHTML = "<img style='height: auto; width: 100%;' src='https://picsum.photos/id/"+ randomNr +"/200/300'>";
   }

