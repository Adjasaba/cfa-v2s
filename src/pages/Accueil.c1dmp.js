$w.onReady(function() {
    console.log("Le code démarre ");// test pour vérifier que le code se lance
    
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
        console.log("les compteurs se lancent ");
        
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
    $w("#statssection").onViewportEnter(() => {
        console.log("Section visible: l'animation se lance ");
        demarrerAnimations(); // Pas de vérification, on relance à chaque fois
    });
    
    // le compteur se réinitialise à chaque fois qu'il est scrollé
    $w("#statssection").onViewportLeave(() => {
        console.log(" Section scrollée - le compteur se réinitialise");
        $w("#counter1").text = "0";
        $w("#counter2").text = "0%";
        $w("#counter3").text = "0%";
        $w("#counter4").text = "0%";
    });
         // INIT
        $w("#mobileOverlay1").hide();
        $w("#mobileOverlay2").hide();
        $w("#mobileOverlay3").hide();
        


    $w("#mobileImage1").onClick(() => {
    console.log("clic sur img1");
    $w("#mobileOverlay1").show();
    // Masquer les autres overlays
    $w("#mobileOverlay2").hide();
    $w("#mobileOverlay3").hide();
});

// 2. Clic sur image2
$w("#mobileImage2").onClick(() => {
    console.log("clic sur img2");
    $w("#mobileOverlay2").show();
    $w("#mobileOverlay1").hide();
    $w("#mobileOverlay3").hide();
});

// 3. Clic sur image3
$w("#mobileImage3").onClick(() => {
    console.log("clic sur img3");
    $w("#mobileOverlay3").show();
    $w("#mobileOverlay1").hide();
    $w("#mobileOverlay2").hide();
});
   
 
  });
});
