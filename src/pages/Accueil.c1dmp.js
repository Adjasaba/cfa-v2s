$w.onReady(function() {
    console.log("Le code démarre !");
    
    function animerCompteur(elementID, debut, fin, duree, avecPourcent) {
        let momentDepart = Date.now();
        
        function mettreAJour() {
            let maintenant = Date.now();
            let tempsEcoule = maintenant - momentDepart;
            let pourcentage = tempsEcoule / duree;
            
            if (pourcentage > 1) {
                pourcentage = 1;
            }
            
            let valeurActuelle = debut + (pourcentage * (fin - debut));
            valeurActuelle = Math.floor(valeurActuelle);
            
            if (avecPourcent) {
                $w(elementID).text = valeurActuelle + "%";
            } else {
                $w(elementID).text = String(valeurActuelle);
            }
            
            if (pourcentage < 1) {
                setTimeout(mettreAJour, 16);
            }
        }
        
        mettreAJour();
    }
    
    function demarrerAnimations() {
        console.log("🚀 Les animations démarrent !");
        
        animerCompteur("#counter1", 0, 400, 3000, false);
        
        setTimeout(function() {
            animerCompteur("#counter2", 0, 95, 3000, true);
        }, 300);
        
        setTimeout(function() {
            animerCompteur("#counter3", 0, 65, 3000, true);
        }, 600);
        
        setTimeout(function() {
            animerCompteur("#counter4", 0, 90, 3000, true);
        }, 900);
    }
    
    // Détecter CHAQUE FOIS que la section devient visible
    $w("#statsSection").onViewportEnter(() => {
        console.log("📍 Section visible - Animation lancée !");
        demarrerAnimations(); // Pas de vérification, on relance à chaque fois
    });
    
    // BONUS : Réinitialiser quand on quitte la section
    $w("#statsSection").onViewportLeave(() => {
        console.log("👋 Section quittée - Réinitialisation");
        $w("#counter1").text = "0";
        $w("#counter2").text = "0%";
        $w("#counter3").text = "0%";
        $w("#counter4").text = "0%";
    });
});
