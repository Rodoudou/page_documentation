document.addEventListener("DOMContentLoaded", () => {
  const listeItems = document.querySelectorAll(".ma-liste li a");

  listeItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Supprimer la classe "selected" de tous les éléments
      listeItems.forEach((item) => {
        item.classList.remove("selected");
      });

      // Ajouter la classe "selected" à l'élément cliqué
      item.classList.add("selected");
    });
  });
});
