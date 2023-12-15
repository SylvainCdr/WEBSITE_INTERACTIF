const navbartoggle = document.getElementById('navbar-toggle');
const navbarcontainer = document.getElementById('navbar-container');
const burger = document.querySelector('.burger');

//ecouteur d evenement sur la redimension de la fenetre


window.addEventListener('resize', function() {
    if (window.innerWidth < 600) {
        burger.style.display = 'block';
    } 
    else if  (this.window.innerWidth < 900) {
        
        burger.style.display = 'block';
    }
    else {
        burger.style.display = 'none';
    }
}
);

navbartoggle.addEventListener('click', function() {
    navbarcontainer.classList.toggle('active');

});


//app.js : Changer les paragraphes sous les boutons Description, Spécifications et Avis au clic

//Parent des boutons
const parentBoutons = document.querySelector('.tabs__btns');
//Boutons
const boutons = document.querySelectorAll('.tabs__btn');
//Ajouter un écouteur d'événement sur le parent des boutons
parentBoutons.addEventListener('click', function(e){
    //Si l'élément cliqué est un bouton
    if(e.target.tagName === 'BUTTON'){
        //Récupérer la valeur de data-target du bouton
        const bouton = e.target.dataset.target;
        //Sélectionner la classe contenant les contenus correpondant à la valeur du bouton
        const contenu = document.querySelector(bouton);
        if (contenu.classList.contains('tabs__info--active')) {
            //Si le contenu est déjà actif, on ne fait rien
            return;
        }else{
            //Sinon, on retire la classe active du contenu actif
            document.querySelector('.tabs__info--active').classList.remove('tabs__info--active');
            //On ajoute la classe active au contenu correspondant au bouton cliqué
            contenu.classList.add('tabs__info--active');
        }
    }
});



















