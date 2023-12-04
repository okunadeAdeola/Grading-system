// var drink = "fanta"

// if(drink == "sprite"){
//     show.innerHTML = "Buy fanta"
// } else {
//     show.innerHTML = "Sha buy any drink for me" 
// }

// var food = "Amala"

// if(food == "Amala"){
//     show.innerHTML = "Buy abula"
// } else if(food == "Eba"){
//     show.innerHTML = "Buy ila/egusi"
// } else if(food == "iyan"){
//     show.innerHTML = "Buy efo riro/egusi"
// } else {
//     show.innerHTML = "Buy me bread and beans with chilled fanta"
// }



         
    // function displayResult(){
    //     if (value != ""){
    //         if (value >= 0 && value < 40)
    //         console.log("F-FAIL 😢");
    //     show.innerHTML = "F-FAIL 😢"
    //     } else if (value >= 40 && value < 44){
    //     console.log("E-PASS 🤦‍♂️");
    // show.innerHTML = "E-PASS 🤦‍♂️"
    //  } else if (value >= 44 && value < 49)
    //     console.log("D-PASS 🤦‍♂️");
    // show.innerHTML = "D-PASS 🤦‍♂️"
    
    //     }
    
    
    // function display(){
    //     if ()
 
    // }

    var song = "audios/songC.mp3"
     var songToPlay =new Audio(song)
     var song = "audios/mumu.mp3"
     var ToPlay =new Audio(song)
     var song = "audios/fucx.mp3"
     var dullBrain =new Audio(song)
     var song = "audios/Post Malone - Better Now  mp3clan .mp3"
     var cRing =new Audio(song)
     var song = "audios/Ruger_-_Asiwaju_Video_.mp3.mp3"
     var oneOfTheBest =new Audio(song)
     var song = "audios/Sia_-_Unstoppable_(Lyrics)(360p)_high_quality.mp3"
     var veryBest =new Audio(song)

    function checkValue(){
        if (num.value != ""){
            if (num.value >= 0 && num.value <40){
                console.log("F-fail😢");
            show.innerHTML = "F-fail😢"
            songToPlay.play()
            } else if (num.value >= 40 && num.value < 50){
                console.log("E-PASS 🤦‍♂️");
                show.innerHTML = "E-PASS 🤦‍♂️"
                ToPlay.play()
            } else if (num.value >= 50 && num.value < 60){
                console.log("D-PASS 😒");
                show.innerHTML = "D-PASS 😒"
                dullBrain.play()
            } else if (num.value >= 60 && num.value < 70){
                console.log("C-GOOD 👍");
                show.innerHTML = "C-GOOD 👍"
                cRing.play()
            }else if (num.value >= 70 && num.value < 80){
                console.log("B-VERY GOOD 👌");
                show.innerHTML = "B-VERY GOOD 👌"
                oneOfTheBest.play()
            }else if (num.value >= 80 && num.value <= 100){
                console.log("A-EXCELLENT 👏");
                show.innerHTML = "A-EXCELLENT 👏"
                veryBest.play()
            } else if(num.value > 100){
                console.log("ERROR/INVALID NUMBER");
                show.innerHTML = "ERROR/INVALID NUMBER"
            }
        }
    }
