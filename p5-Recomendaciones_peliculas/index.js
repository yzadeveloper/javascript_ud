function recomendar(genero) {
    let elementoRecomendacion = document.getElementById("recomendacion");
    
    let elementoEdad = document.getElementById("textoEdad");
    let edad = elementoEdad.value ;

    switch (genero){
        case "comedia":
            if (edad < 13){
                elementoRecomendacion.textContent = "Back to the Future";
            } else {
                if (edad < 16){
                    elementoRecomendacion.textContent = "The Truman Show";
                } else {
                    elementoRecomendacion.textContent = "The Wolf of Wall Street";
                }
            }
        break;
        case "crimen":
            if (edad < 13){
                elementoRecomendacion.textContent = "No hay peliculas";
            } else {
                if (edad < 16){
                    elementoRecomendacion.textContent = "El secreto de sus ojos";
                } else {
                    elementoRecomendacion.textContent = "The Godfather";
                }
            }
        break;
        case "drama":
            if (edad < 13){
                elementoRecomendacion.textContent = "Casablanca";
            } else {
                if (edad < 16){
                    elementoRecomendacion.textContent = "The Shawshank Redemption";
                } else {
                    elementoRecomendacion.textContent = "Taxi Driver";
                }
            }
        break;
        case "musical":
            if (edad < 13){
                elementoRecomendacion.textContent = "La La Land";
            } else {
                if (edad < 16){
                    elementoRecomendacion.textContent = "Les Miserables";
                } else {
                    elementoRecomendacion.textContent = "The Rocky Horror Picture Show";
                }
            }
        break;
    }
    
}