import type { CategoryKey } from '../config/site';

type CategoryContent = {
  h1: string;
  lede: string;
  intro: string; // HTML
  topics: string[];
  faq: { q: string; a: string }[];
  aside: { title: string; text: string };
};

export const CATEGORY_CONTENT: Record<CategoryKey, CategoryContent> = {
  sante: {
    h1: 'Santé naturelle : ce qui marche vraiment',
    lede: "Compléments alimentaires, plantes, sommeil, digestion. On lit les études et les avis des agences sanitaires pour toi, puis on tranche.",
    intro: `
<h2>Pourquoi une rubrique santé qui fait le tri</h2>
<p>Le marché des compléments alimentaires et des remèdes naturels n'a jamais été aussi grand, ni aussi bruyant. Les fiches produits promettent tout, les forums se contredisent, et les articles les mieux classés sur Google sont souvent écrits par les marques qui vendent le produit. Résultat : il est presque impossible de savoir si le magnésium, l'ashwagandha ou la mélatonine vont réellement t'aider.</p>
<p>Ici, chaque sujet passe par la même méthode. On part des études publiées chez l'humain, on vérifie ce qu'en disent l'<strong>Anses</strong>, l'<strong>EFSA</strong> ou la <strong>HAS</strong>, on regarde ce que la tradition en dit, et on donne un <a href="/methode/#indice">indice de preuve</a> clair, de « Non démontré » à « Prouvé ». Quand un produit présente des risques ou des contre-indications, on le dit en haut de l'article, pas en petits caractères.</p>
<h2>Ce que tu trouveras ici</h2>
<p>Des analyses complètes sur les compléments les plus recherchés (formes, dosages, interactions), des dossiers sur les grands sujets du quotidien comme le sommeil, la fatigue ou la digestion, et des réponses franches aux questions que l'on n'ose pas toujours poser à son médecin. Nos articles santé ne remplacent jamais une consultation : ils t'aident à arriver chez ton médecin ou ton pharmacien avec les bonnes questions.</p>`,
    topics: ['Compléments alimentaires', 'Plantes adaptogènes', 'Sommeil', 'Fatigue et énergie', 'Digestion et microbiote', 'Stress', 'Cycle et hormones'],
    faq: [
      { q: 'Vos articles santé sont-ils relus par des professionnels ?', a: "C'est notre objectif pour chaque article santé : une relecture par un professionnel de santé, dont le nom et la qualification apparaissent en haut de l'article. Tous les articles s'appuient sur des sources publiques listées en bas de page." },
      { q: 'Est-ce que vous êtes payés par les marques de compléments ?', a: "Aucune marque ne peut acheter un verdict ou un indice de preuve. Certains liens vers des produits sont affiliés, ce qui veut dire que nous touchons une commission si tu achètes. C'est toujours signalé, et la règle est détaillée sur notre page transparence." },
      { q: 'Un complément naturel peut-il être dangereux ?', a: "Oui. « Naturel » ne veut pas dire sans risque : certaines plantes interagissent avec des médicaments, d'autres sont déconseillées pendant la grossesse ou en cas de maladie de la thyroïde ou du foie. Nous signalons systématiquement les précautions connues, et l'Anses tient un dispositif de nutrivigilance pour déclarer les effets indésirables." },
    ],
    aside: { title: "L'indice de preuve", text: "Chaque article affiche un indice de 1 à 5 sur son affirmation principale. Il mesure la solidité des études, pas notre enthousiasme." },
  },
  'peau-acne': {
    h1: 'Acné et problèmes de peau : démêler le vrai du faux',
    lede: "Boutons, acné adulte, rougeurs, peau grasse ou sensible. Les causes, les idées reçues, et ce qui aide vraiment, d'après les études et les recommandations des dermatologues.",
    intro: `
<h2>Pourquoi une rubrique dédiée à la peau</h2>
<p>L'acné touche une grande majorité d'adolescents, et beaucoup d'adultes, en particulier des femmes. C'est aussi l'un des sujets où circulent le plus de conseils contradictoires : supprimer le chocolat, mettre du dentifrice sur un bouton, tout miser sur l'huile essentielle de tea tree, se laver le visage plusieurs fois par jour. Certains aident, d'autres aggravent.</p>
<p>Ici, chaque conseil est passé au tamis : ce que disent les études et les sociétés de dermatologie, le rôle réel de l'alimentation, des hormones et du stress, et un <a href="/methode/#indice">indice de preuve</a> clair. On parle aussi des soins naturels qui ont des données sérieuses derrière eux, et de ceux qui n'en ont pas.</p>
<h2>Ce que tu trouveras ici</h2>
<p>Des dossiers sur l'acné de l'adolescent et de l'adulte, les routines simples pour peau grasse ou mixte, les marques post-acné, la peau sensible et les rougeurs, et des réponses franches aux idées reçues. Quand un problème de peau est étendu, douloureux, laisse des cicatrices ou dure, la bonne étape reste le médecin ou le dermatologue : des traitements efficaces existent.</p>`,
    topics: ['Acné adulte', 'Acné et alimentation', 'Routine peau grasse', 'Marques et cicatrices', 'Peau sensible et rougeurs', 'Idées reçues'],
    faq: [
      { q: "Faut-il arrêter le chocolat quand on a de l'acné ?", a: "Les données sur le chocolat seul sont faibles et contradictoires. Ce qui est mieux étudié, c'est l'effet d'une alimentation globalement riche en sucres rapides, et dans une moindre mesure des produits laitiers. Notre article sur l'acné et l'alimentation fait le point." },
      { q: "Quand faut-il consulter pour de l'acné ?", a: "Si l'acné est étendue, douloureuse, laisse des marques ou des cicatrices, ne s'améliore pas après plusieurs semaines de soins adaptés, ou te pèse moralement. Un médecin ou un dermatologue peut proposer des traitements efficaces." },
      { q: 'Les soins naturels peuvent-ils traiter l’acné ?', a: "Certains ingrédients ont des données encourageantes pour l'acné légère, mais leur effet est généralement plus modeste que celui des traitements médicaux. Nous indiquons pour chacun le niveau de preuve et les risques d'irritation." },
    ],
    aside: { title: 'Le bon réflexe', text: "Une acné qui laisse des marques ou qui dure mérite un avis médical. Des traitements efficaces existent, ne reste pas seule avec." },
  },
  'beaute-naturelle': {
    h1: 'Beauté naturelle : les ingrédients au banc d’essai',
    lede: "Huiles végétales, actifs naturels, routines de soin : ce qu'ils font vraiment pour ta peau et tes cheveux, et ce qui relève du marketing.",
    intro: `
<h2>La beauté naturelle mérite mieux que des promesses</h2>
<p>Huile de ricin pour les cils, bakuchiol à la place du rétinol, vinaigre de cidre pour les cheveux : la beauté naturelle regorge de conseils qui se transmettent d'un réseau social à l'autre sans que personne ne vérifie. Certains sont excellents. D'autres ne font rien. Quelques-uns irritent la peau.</p>
<p>On applique ici la même exigence qu'en santé : ce que dit la recherche en dermatologie et en cosmétologie, ce que dit l'usage traditionnel, les risques (allergies, photosensibilité, irritation), puis un verdict. Et parce que la beauté se vit aussi, on te dit comment utiliser un ingrédient pour en tirer le meilleur, avec des gestes précis.</p>
<h2>Nos sujets de prédilection</h2>
<p>Les huiles végétales et leurs vrais usages, les actifs naturels qui ont des études derrière eux, la lecture des listes d'ingrédients (INCI), les cosmétiques bio et leurs labels, et les routines simples pour les peaux sensibles.</p>`,
    topics: ['Huiles végétales', 'Cils et sourcils', 'Peau sensible', 'Cheveux', 'Labels bio', 'Lire une liste INCI', 'Alternatives au rétinol'],
    faq: [
      { q: 'Un cosmétique naturel est-il forcément meilleur ?', a: "Non. Un ingrédient naturel peut être très efficace, sans effet, ou allergisant, comme certaines huiles essentielles. Ce qui compte, c'est la formule, la concentration et ta peau. Nos articles jugent l'ingrédient, pas son origine." },
      { q: 'Comment savoir si un ingrédient me convient ?', a: "Avant toute nouvelle huile ou tout soin maison, fais un test sur une petite zone, par exemple le pli du coude, et attends 48 heures. En cas de rougeur ou de démangeaison, n'utilise pas le produit." },
    ],
    aside: { title: 'Le bon réflexe', text: "Un test de tolérance de 48 heures au pli du coude avant tout nouveau soin, même 100 % naturel." },
  },
  'fait-maison': {
    h1: 'Recettes maison : cuisine saine et cosmétiques DIY',
    lede: "Des recettes de cuisine saine qui restent gourmandes, et des cosmétiques maison sûrs, expliqués étape par étape avec les erreurs à éviter.",
    intro: `
<h2>Faire soi-même, mais bien</h2>
<p>Préparer son granola, son déodorant ou son baume à lèvres, c'est savoir exactement ce qu'on mange ou ce qu'on applique sur sa peau. C'est souvent moins cher, et c'est un vrai plaisir. Encore faut-il que la recette fonctionne, et qu'elle soit sûre : un cosmétique maison mal formulé peut irriter, rancir ou se contaminer en quelques jours.</p>
<p>Toutes nos recettes donnent les quantités précises, le temps de préparation, la durée de conservation réaliste et les points de vigilance. Pour la cuisine, on vise des recettes peu sucrées, riches en fibres, et faciles à intégrer à une semaine chargée. Pour les cosmétiques, on privilégie les formules courtes, anhydres (sans eau) quand c'est possible, et on t'explique pourquoi.</p>
<h2>Cuisine ou cosmétique, la même règle</h2>
<p>Une recette maison doit être meilleure que ce que tu trouves en magasin sur au moins un point : le goût, la composition ou le prix. Sinon, on te le dit, et on t'oriente vers une alternative du commerce bien choisie.</p>`,
    topics: ['Petit-déjeuner sain', 'Recettes peu sucrées', 'Batch cooking', 'Déodorant maison', 'Baumes et soins anhydres', 'Conservation des cosmétiques'],
    faq: [
      { q: 'Combien de temps se conserve un cosmétique maison ?', a: "Une formule sans eau (baume, déodorant solide, huile) se garde généralement quelques mois à l'abri de la chaleur et de la lumière. Dès qu'une recette contient de l'eau, un hydrolat ou de l'aloe vera, elle devient fragile et doit être utilisée très vite ou contenir un conservateur adapté." },
      { q: 'Faut-il du matériel spécial ?', a: "Pour la plupart de nos recettes, non : une balance de cuisine précise, un bain-marie et des contenants propres suffisent. Pour les cosmétiques, désinfecte ton matériel à l'alcool avant de commencer." },
    ],
    aside: { title: 'Avant de commencer', text: "Balance précise, ustensiles désinfectés, étiquette avec la date du jour : trois gestes qui évitent la plupart des ratés." },
  },
  'recettes-grand-mere': {
    h1: 'Recettes et remèdes de grand-mère passés au tamis',
    lede: "Miel contre la toux, tisanes, cataplasmes, recettes d'antan toutes simples. Ce que la tradition transmet, ce que la science confirme, et les précautions à connaître.",
    intro: `
<h2>La sagesse des grands-mères, vérifiée</h2>
<p>Les remèdes de grand-mère sont souvent la première chose qu'on essaie : un miel-citron quand la gorge gratte, une tisane de thym, une compresse chaude. Ils sont simples, peu coûteux, et rassurants. Certains ont aujourd'hui des études solides derrière eux, comme le miel contre la toux. D'autres relèvent surtout de l'habitude. Quelques-uns sont dangereux pour certaines personnes.</p>
<p>Chaque remède est passé au tamis : d'où il vient, ce qu'en dit la recherche, pour qui il est déconseillé, et comment le préparer correctement. Le respect de la tradition n'empêche pas l'honnêteté : on te dit quand un remède est surtout un plaisir réconfortant, et quand il a un vrai effet.</p>
<h2>Les recettes d'antan</h2>
<p>On partage aussi des recettes simples et anciennes, celles qu'on se transmet en famille : bouillons, soupes, confitures, pain perdu, desserts de saison. Des recettes sans chichi, avec des ingrédients du quotidien, et quelques ajustements quand ils les rendent meilleures pour la santé.</p>`,
    topics: ['Toux et gorge', 'Rhume et nez bouché', 'Digestion', 'Sommeil', 'Tisanes', 'Recettes d’antan'],
    faq: [
      { q: 'Les remèdes de grand-mère sont-ils sans danger ?', a: "Pas toujours. Le miel est déconseillé avant 1 an à cause du risque de botulisme, certaines huiles essentielles sont dangereuses pour les jeunes enfants et pendant la grossesse, et certaines plantes interagissent avec des médicaments. Chaque article indique les précautions en évidence." },
      { q: 'Un remède de grand-mère peut-il remplacer un médecin ?', a: "Non. Il peut soulager des symptômes bénins et passagers. Si les symptômes durent, s'aggravent, s'accompagnent de fièvre élevée ou concernent un nourrisson, une femme enceinte ou une personne fragile, il faut consulter." },
    ],
    aside: { title: 'Avant d’essayer', text: "Un remède naturel n'est pas forcément sans risque : vérifie toujours la rubrique précautions, surtout pour un enfant." },
  },
  'developpement-personnel': {
    h1: 'Développement personnel : ce que la psychologie a vraiment démontré',
    lede: "Habitudes, motivation, stress, confiance en soi. Le développement personnel sans gourou, avec les études qui tiennent et les mythes à oublier.",
    intro: `
<h2>Le développement personnel sans les raccourcis</h2>
<p>« Il faut 21 jours pour créer une habitude », « se lever à 5 heures change une vie », « il suffit de visualiser pour réussir » : le développement personnel est rempli de règles simples qui rassurent, mais qui reposent rarement sur des preuves. Le problème n'est pas qu'elles soient fausses, c'est qu'elles te font culpabiliser quand elles ne marchent pas.</p>
<p>Notre approche : partir de ce que la psychologie, les sciences du comportement et la recherche sur le sommeil ont réellement mesuré, et le traduire en méthodes concrètes, adaptées à une vraie vie avec des imprévus. On garde aussi une place à la sagesse des pratiques anciennes, comme la méditation ou l'écriture introspective, en distinguant ce qui est démontré de ce qui relève de l'expérience personnelle.</p>
<h2>Les sujets que l'on creuse</h2>
<p>La formation des habitudes, la gestion du stress, la motivation et la procrastination, les routines du matin et du soir, la confiance en soi, et les livres de développement personnel qui valent vraiment le détour.</p>`,
    topics: ['Habitudes', 'Motivation et procrastination', 'Stress et anxiété du quotidien', 'Routine du matin', 'Méditation', 'Écriture introspective', 'Livres qui valent le coup'],
    faq: [
      { q: 'Le développement personnel, ça marche ?', a: "Certaines méthodes sont bien étudiées, comme la planification « si… alors… » pour tenir ses objectifs ou la régularité du sommeil. D'autres reposent surtout sur des témoignages. Nos articles indiquent pour chaque méthode le niveau de preuve disponible." },
      { q: 'Vos conseils remplacent-ils un accompagnement psychologique ?', a: "Non. Si tu traverses une période difficile qui dure, la meilleure étape est d'en parler à ton médecin ou à un psychologue. Le développement personnel aide à mieux vivre au quotidien, il ne soigne pas." },
    ],
    aside: { title: 'Notre promesse', text: "Pas de méthode miracle, pas de culpabilisation. Ce qui marche, pour qui, et à quelles conditions." },
  },
  'bons-plans': {
    h1: 'Bons plans bien-être et comparatifs indépendants',
    lede: "Compléments, cosmétiques bio, matériel de yoga, livres et box. Des guides d'achat honnêtes et des réductions sélectionnées avec une méthode publique.",
    intro: `
<h2>Des bons plans, mais seulement les bons</h2>
<p>Un code promo n'est un bon plan que si le produit en vaut la peine. Avant de figurer ici, chaque offre passe par les mêmes questions : le produit est-il utile, sa composition ou sa qualité sont-elles au niveau de son prix, et l'offre est-elle réellement avantageuse par rapport au prix habituel ?</p>
<p>Nos <strong>guides d'achat</strong> t'expliquent les critères qui comptent vraiment pour choisir un complément, un tapis de yoga ou un soin bio, pour que tu puisses juger par toi-même, même sans passer par nos liens.</p>
<h2>Comment on gagne de l'argent, en clair</h2>
<p>Certains liens de cette rubrique sont des liens d'affiliation : si tu achètes, la marque nous verse une commission, sans surcoût pour toi. C'est ce qui finance le média. Mais aucune marque ne choisit les produits recommandés, et un produit peut être déconseillé même s'il nous rapporterait. Tout est détaillé sur <a href="/transparence/">notre page transparence</a>.</p>`,
    topics: ['Compléments alimentaires', 'Cosmétiques bio', 'Yoga et sport à la maison', 'Sommeil', 'Livres et formations', 'Box beauté et bien-être'],
    faq: [
      { q: 'Les bons plans sont-ils sponsorisés ?', a: "Les offres peuvent passer par des liens d'affiliation, ce qui est toujours indiqué. En revanche, aucune marque ne paie pour apparaître dans nos sélections ou pour obtenir un meilleur classement." },
      { q: 'Les codes promo sont-ils vérifiés ?', a: "Oui, chaque offre affiche sa date de validité. Une offre expirée est retirée de la page." },
    ],
    aside: { title: 'Notre règle', text: "Un produit qu'on ne recommanderait pas sans commission n'apparaît pas ici. Point." },
  },
};
