
let distance = prompt("Quanti km devi percorrere?(scrivi in numeri per favore)");
const pricingPerKm = 0.21;
const refresh = "Ricarica la pagina, per favore"

distance = parseInt(distance)

console.log("distance", distance, typeof distance);

if(isNaN(distance)){
    alert("Mi dispiace non accettiamo valori testuali, ricomincia");
 
    document.querySelector("#price").innerHTML = refresh;

}

else if(distance < 0){

    alert("Scusa eh, ma che significa" + distance + ", ricomincia va!");

    document.querySelector("#price").innerHTML = refresh;


}

else if(distance == 0 ){
    alert("Cosa prendi a fare il treno?");

    document.querySelector("#price").innerHTML = refresh;

}

else{

    let age = prompt("Quanti anni hai?(scrivi in numeri per favore)");
    age = parseInt(age)

    console.log("age", age, typeof age);

    if(isNaN(age)){
        alert("Mi dispiace non accettiamo valori testuali, ricomincia");

        document.querySelector("#price").innerHTML = refresh;
     
    }
    
    else if(age < 0){
    
        alert("Scusa eh, ma che significa" + age + ", ricomincia va!");

        document.querySelector("#price").innerHTML = refresh;
    
    }
    
    else if(age == 0 ){
        alert("Crescono così in fretta...Ricomincia, burlone");

        document.querySelector("#price").innerHTML = refresh;
    }


    else if(age < 18){
        alert ("Hai diritto al 20% di sconto!");

        let ticketPrice = pricingPerKm * distance ;
        
        let discount = (ticketPrice / 100) * 20;

        console.log("discount", discount, typeof discount);

        ticketPrice = ticketPrice - discount;

        document.querySelector("#price").innerHTML = ticketPrice.toFixed(2) + "€";

    }

    else if(age > 65){
        alert ("Hai diritto al 40% di sconto!");

        let ticketPrice = pricingPerKm * distance ;
        
        let discount = (ticketPrice / 100) * 40;


        console.log("discount", discount, typeof discount);


        ticketPrice = ticketPrice - discount;

        document.querySelector("#price").innerHTML = ticketPrice.toFixed(2) + "€";

    }

    else{

        alert ("Purtroppo non hai diritto ad alcun tipo di sconto");

        let ticketPrice = pricingPerKm * distance ;
        
        let discount = (ticketPrice / 100) * 0;

        console.log("discount", discount, typeof discount);

        ticketPrice = ticketPrice - discount;

        document.querySelector("#price").innerHTML = ticketPrice.toFixed(2) + "€";


    }
}
