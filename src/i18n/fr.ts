import type { Dictionary } from "./en";

/**
 * Français standard métropolitain, rédigé (et non traduit mot à mot) pour
 * conserver le rythme, la brièveté et la force commerciale de la version anglaise.
 */
export const fr: Dictionary = {
  meta: {
    localeTag: "fr-FR",
    home: {
      title: "Social Currency — Transformez les conversations en clients",
      description:
        "Le commerce conversationnel pour les entreprises africaines. Nous construisons des systèmes de vente sur WhatsApp qui relient réseaux sociaux, conversations, paiements et relances.",
    },
    howItWorks: {
      title: "Comment ça marche — Social Currency",
      description:
        "L’attention devient conversation. La conversation devient transaction. Découvrez comment Social Currency relie le parcours.",
    },
    solutions: {
      title: "Solutions — Social Currency",
      description:
        "Boutique WhatsApp, Du social à la vente, Automatisation WhatsApp et Croissance. Choisissez le problème à résoudre.",
    },
    industries: {
      title: "Secteurs — Social Currency",
      description:
        "Restauration, immobilier, beauté, écoles, commerce et services professionnels. Des métiers différents, un même principe.",
    },
    pricing: {
      title: "Tarifs — Social Currency",
      description:
        "Des tarifs clairs. Commencez petit, développez ensuite. Prix affichés dans votre devise.",
    },
    about: {
      title: "À propos — Social Currency",
      description:
        "Une entreprise de commerce conversationnel conçue pour les entreprises africaines.",
    },
    contact: {
      title: "Contact — Social Currency",
      description: "Lancez la conversation sur WhatsApp, ou écrivez-nous.",
    },
  },

  nav: {
    howItWorks: "Comment ça marche",
    solutions: "Solutions",
    industries: "Secteurs",
    pricing: "Tarifs",
    contact: "Contact",
    cta: "Commencer à vendre",
    menu: "Menu",
    close: "Fermer",
    skip: "Aller au contenu",
  },

  localisation: {
    utilityLabel: "Changer de langue, de pays et de devise",
    title: "Préférences régionales",
    language: "Langue",
    country: "Pays / Région",
    currency: "Devise",
    apply: "Appliquer",
    cancel: "Annuler",
    note: "Langue, pays et devise se règlent séparément. Modifiez ce que vous voulez.",
    approximate:
      "Les prix affichés dans votre devise peuvent être approximatifs. Le prix définitif vous est confirmé avant tout paiement.",
    suggestCurrency: (country: string, currency: string) =>
      `Vous semblez être ${country}. Afficher les prix en ${currency} ?`,
    suggestLanguage: "Vous semblez préférer le français. Continuer en français ?",
    useCurrency: (code: string) => `Passer en ${code}`,
    keepCurrency: (code: string) => `Rester en ${code}`,
    useFrench: "Français",
    keepEnglish: "English",
    dismiss: "Fermer",
  },

  hero: {
    tapHint: "Appuyez pour avancer",
    replay: "Rejouer",
    eyebrow: "Le commerce conversationnel pour l’Afrique",
    headlineA: "Transformez vos échanges",
    headlineB: "en clients.",
    body: "Nous construisons des systèmes de vente sur WhatsApp qui relient réseaux sociaux, conversations clients, paiements et relances. L’attention devient enfin du chiffre d’affaires.",
    primary: "Transformer mon WhatsApp en boutique",
    secondary: "Voir comment ça marche",
    closing: "Voilà le commerce conversationnel.",
    steps: {
      post: "Nouvelle publication en ligne",
      postMeta: "Instagram · 4 120 personnes touchées",
      open: "Le client ouvre WhatsApp",
      openMeta: "À un seul geste de la publication",
      ask: "« Bonjour, c’est disponible ? »",
      askMeta: "La vente commence par une question",
      select: "Produit sélectionné",
      selectMeta: "Depuis votre catalogue",
      order: "Commande confirmée",
      orderMeta: "Informations enregistrées automatiquement",
      pay: "Paiement reçu",
      payMeta: "Mobile Money",
      deliver: "Livraison confirmée",
      deliverMeta: "Le client est prévenu",
      follow: "Relance envoyée",
      followMeta: "Deux semaines plus tard, il recommande",
    },
  },

  problem: {
    headline: "Votre entreprise est déjà sur WhatsApp.",
    lines: [
      "Vos clients y demandent les prix.",
      "Ils y réclament des photos.",
      "Ils y vérifient la disponibilité.",
      "Ils y prennent rendez-vous.",
      "Ils y passent commande.",
      "Ils y envoient leur localisation.",
      "Ils y font leurs relances.",
      "Ils vous y recommandent.",
    ],
    punch: "Alors pourquoi n’est-ce pas conçu pour vendre ?",
  },

  thesis: {
    eyebrow: "Comment le commerce africain circule",
    headlineA: "La découverte commence sur les réseaux.",
    headlineB: "Les affaires se font dans la conversation.",
    closing: "Social Currency relie tout le parcours.",
    chain: "Attention → Conversation → Transaction → Relation",
    stages: [
      { title: "Découvrir", detail: "Facebook · Instagram · TikTok" },
      { title: "Échanger", detail: "WhatsApp" },
      { title: "Vendre", detail: "Produits · Commandes · Rendez-vous · Devis" },
      { title: "Payer", detail: "Mobile Money · Carte · Virement" },
      { title: "Livrer", detail: "Livraison · Retrait · Rendez-vous" },
      { title: "Fidéliser", detail: "Relances · Offres · Réachats" },
    ],
  },

  solutions: {
    eyebrow: "Solutions",
    bestStart: "Le meilleur point de départ",
    headline: "Choisissez le problème à résoudre.",
    from: "À partir de",
    perMonth: "/ mois",
    viewAll: "Voir toutes les solutions",
    whatYouGet: "Ce que vous obtenez",
    delivery: {
      delivery72: "En ligne en 72 heures",
      delivery57: "5 à 7 jours",
      delivery710: "7 à 10 jours",
      deliveryOngoing: "En continu, chaque mois",
    },
    deliveryNote:
      "Le délai de 72 heures démarre une fois le paiement et tous les éléments nécessaires reçus.",
    items: {
      "whatsapp-store": {
        name: "Boutique WhatsApp",
        headlineA: "Votre WhatsApp.",
        headlineB: "Conçu pour vendre.",
        copy: "Le numéro que vos clients utilisent déjà devient une véritable expérience de vente, claire et organisée.",
        cta: "Construire la mienne",
        features: [
          "Profil professionnel",
          "Structure de catalogue",
          "Réponses rapides",
          "Organisation des clients",
          "Messages de vente",
          "Liens clic-vers-WhatsApp",
          "Parcours de conversion",
        ],
      },
      "social-to-sale": {
        name: "Du social à la vente",
        headlineA: "Transformez l’attention",
        headlineB: "en conversations.",
        copy: "Reliez votre activité Facebook et Instagram à un parcours de vente structuré sur WhatsApp.",
        cta: "Connecter mes réseaux",
        features: [
          "Liens clic-vers-WhatsApp sur toutes les plateformes",
          "Contenus pensés pour déclencher la conversation",
          "Captation et routage des demandes",
          "Modèles de réponse",
          "Suivi des campagnes",
          "Point mensuel",
        ],
      },
      automation: {
        name: "Automatisation WhatsApp",
        headlineA: "Automatisez",
        headlineB: "le répétitif.",
        copy: "Questions fréquentes, qualification, réservations, commandes et routage se gèrent automatiquement. Un humain reste disponible dès que nécessaire.",
        cta: "Automatiser mon WhatsApp",
        features: [
          "Réponses automatiques aux questions fréquentes",
          "Qualification des prospects",
          "Réservations et commandes",
          "Routage des conversations",
          "Reprise par un humain",
          "Reporting",
        ],
      },
      growth: {
        name: "Croissance",
        headlineA: "Gardez la machine",
        headlineB: "en mouvement.",
        copy: "Acquisition, campagnes, optimisation, relances et amélioration continue.",
        cta: "M’aider à croître",
        features: [
          "Campagnes d’acquisition",
          "Contenus et offres",
          "Optimisation de la conversion",
          "Séquences de relance",
          "Reporting mensuel",
          "Amélioration continue",
        ],
      },
    },
  },

  demo: {
    tryDemo: "Essayer la démo",
    restart: "Recommencer",
    business: "Chola Kitchen",
    you: "Vous",
    scanTitle: "Scannez le code.",
    scanCopy: "Faites comme si vous commandiez à dîner.",
    adapt: "Ce parcours complet peut être adapté à votre activité.",
    demoNote: "Simulation uniquement. Aucun paiement n’est traité et aucune donnée n’est collectée.",
    sim: {
      welcome: "Bonjour 👋 Bienvenue chez Chola Kitchen. Que souhaitez-vous aujourd’hui ?",
      categories: {
        burgers: "Burgers",
        pizza: "Pizzas",
        drinks: "Boissons",
      },
      items: {
        "classic-burger": "Burger classique",
        "chicken-burger": "Burger poulet",
        "double-burger": "Double burger",
        margherita: "Margherita",
        pepperoni: "Pepperoni",
        "veg-pizza": "Pizza jardin",
        soda: "Soda",
        water: "Eau",
        juice: "Jus frais",
      },
      categoryPrompt: (name: string) => `Voici notre sélection : ${name}.`,
      qtyPrompt: "Excellent choix. Quelle quantité ?",
      summaryTitle: "Récapitulatif de commande",
      fulfilPrompt: "Livraison ou retrait ?",
      delivery: "Livraison",
      pickup: "Retrait",
      locationPrompt: "Dans quel quartier livrons-nous ?",
      locations: ["Kabulonga", "Woodlands", "Rhodes Park"],
      paymentPrompt: "Comment souhaitez-vous payer ?",
      payments: {
        momo: "Mobile Money",
        card: "Carte",
        cod: "Paiement à la livraison",
      },
      paid: "Paiement reçu ✓",
      confirmed: "Commande confirmée ✓",
      eta: "Livreur en route. 25 à 35 minutes.",
      etaPickup: "Prêt pour le retrait dans 20 minutes.",
      closing: "Voilà le commerce conversationnel.",
    },
    headlineA: "Ne le lisez pas.",
    headlineB: "Essayez-le.",
    copy: "Scannez le code. Faites comme si vous commandiez à dîner.",
    qrPending: "Code de démonstration bientôt disponible",
    qrNote: "La ligne de démonstration est en cours de connexion.",
    open: "Ouvrir la démo sur WhatsApp",
    closing: "Ce parcours complet peut être adapté à votre activité.",
    cta: "Construire ça pour mon entreprise",
    journey: [
      { label: "Restaurant", line: "Bienvenue chez Chola Kitchen 👋" },
      { label: "Menu", line: "1. Plats  2. Grillades  3. Boissons" },
      { label: "Catégorie", line: "Vous avez choisi Grillades" },
      { label: "Produit", line: "Demi-poulet + nshima · K95" },
      { label: "Commande", line: "Quantité 2 · Total K190" },
      { label: "Localisation", line: "Position reçue. Kabulonga." },
      { label: "Paiement", line: "Mobile Money confirmé ✅" },
      { label: "Confirmation", line: "Livreur en route, 25 min." },
    ],
  },

  industries: {
    eyebrow: "Secteurs",
    headlineA: "Des métiers différents.",
    headlineB: "Un même principe.",
    cta: "Voir mon secteur",
    recommended: "Point de départ conseillé",
    items: {
      restaurants: {
        name: "Restauration",
        steps: ["Envie", "Menu", "Commande", "Paiement", "Livraison"],
        copy: "Les commandes arrivent par message. Menu, commande et paiement tiennent en une seule conversation.",
      },
      "real-estate": {
        name: "Immobilier",
        steps: ["Découverte", "Demande", "Qualification", "Visite", "Relance"],
        copy: "La plupart des demandes ne sont pas prêtes à acheter. Qualifiez-les avant de vous déplacer.",
      },
      beauty: {
        name: "Beauté",
        steps: ["Découverte", "Réservation", "Rappel", "Visite", "Nouveau rendez-vous"],
        copy: "Un agenda plein, c’est un système, pas de la chance. Réservations, rappels et réservations suivantes dans la conversation.",
      },
      education: {
        name: "Écoles",
        steps: ["Découverte", "Questions", "Candidature", "Relance", "Inscription"],
        copy: "Les parents posent les mêmes questions à chaque rentrée. Répondez instantanément et suivez chaque dossier.",
      },
      retail: {
        name: "Commerce",
        steps: ["Voir", "Demander", "Choisir", "Payer", "Recevoir"],
        copy: "Fini les prix retapés dix fois par jour. Un catalogue structuré transforme la curiosité en achat.",
      },
      "professional-services": {
        name: "Services professionnels",
        steps: ["Découverte", "Qualification", "Devis", "Rendez-vous", "Relance"],
        copy: "Qualifiez les demandes, envoyez les devis et fixez les rendez-vous sans perdre le fil.",
      },
    },
  },

  websites: {
    eyebrow: "À propos des sites web",
    headlineA: "Et oui,",
    headlineB: "nous créons des sites.",
    secondary: "Quand vous en avez réellement besoin.",
    body1: "Un site apporte de la crédibilité, de la visibilité et une adresse numérique permanente.",
    body2: "Mais ce n’est pas forcément le premier investissement à faire.",
    list: [
      "Certaines entreprises ont besoin d’une page d’atterrissage.",
      "D’autres, d’un catalogue.",
      "D’autres, d’une boutique en ligne.",
      "D’autres, d’un site complet.",
      "D’autres, simplement d’un WhatsApp qui fonctionne mieux.",
    ],
    closingA: "Nous vous aidons à construire",
    closingB: "la bonne dose d’internet.",
    cta: "De quoi mon entreprise a-t-elle besoin ?",
  },

  pricing: {
    eyebrow: "Tarifs",
    headline: "Des tarifs sans mystère.",
    copy: "Commencez petit. Ajoutez le reste quand votre activité le demande.",
    from: "À partir de",
    perMonth: "/ mois",
    approximate:
      "Les prix affichés dans votre devise peuvent être approximatifs. Le prix définitif vous est confirmé avant tout paiement.",
    changeCurrency: "Changer de devise",
    cta: "Commencer sur WhatsApp",
  },

  trust: {
    flow: ["Réseaux sociaux", "WhatsApp", "Paiement", "Livraison"],
    headlineA: "Construit autour des outils",
    headlineB: "que vos clients utilisent déjà.",
    copy: "Pas de statistiques inventées ni de logos empruntés. Uniquement les canaux sur lesquels le commerce africain fonctionne vraiment.",
    items: [
      { title: "WhatsApp", detail: "Là où se tient la conversation" },
      { title: "Réseaux sociaux", detail: "Là où se fait la découverte" },
      { title: "Paiements mobiles", detail: "Là où circule l’argent" },
      { title: "Commerce local", detail: "Livraison, retrait, rendez-vous" },
    ],
    note: "Les études de cas et résultats clients apparaîtront ici dès leur publication.",
  },

  finalCta: {
    eyebrow: "Prêt ?",
    headlineA: "Vos clients",
    headlineB: "vous parlent déjà.",
    secondA: "Faites en sorte que la conversation",
    secondB: "rapporte quelque chose.",
    cta: "Transformer mon WhatsApp en boutique",
    supporting: (price: string) => `À partir de ${price} · En ligne en 72 heures.`,
  },

  qualifier: {
    open: "Obtenir une recommandation",
    title: "Diagnostic en deux minutes",
    intro:
      "Bonjour 👋 Bienvenue chez Social Currency. Nous aidons les entreprises africaines à faire de WhatsApp un canal de vente plus clair et plus rapide. Quelques questions rapides et nous vous recommandons la bonne formule. Environ 2 minutes.",
    start: "Commencer",
    back: "Retour",
    talk: "Parler à quelqu’un",
    result: "Notre recommandation",
    resultCta: "Continuer sur WhatsApp",
    restart: "Recommencer",
    questions: [
      {
        q: "Quel type d’activité exercez-vous ?",
        options: [
          "Restauration / Alimentation",
          "Commerce / Produits",
          "Immobilier",
          "Beauté / Salon",
          "École / Éducation",
          "Services professionnels",
          "Autre",
        ],
      },
      {
        q: "Comment vos clients vous contactent-ils habituellement ?",
        options: [
          "Surtout WhatsApp",
          "Facebook + WhatsApp",
          "Instagram + WhatsApp",
          "Par téléphone",
          "En boutique",
          "Un peu de tout",
        ],
      },
      {
        q: "Combien de demandes recevez-vous en une semaine type ?",
        options: ["Moins de 10", "10 à 30", "30 à 100", "Plus de 100"],
      },
      {
        q: "Quel est le principal problème aujourd’hui ?",
        options: [
          "Je réponds sans cesse aux mêmes questions",
          "On me demande, mais on n’achète pas",
          "Je perds le fil des demandes",
          "J’ai besoin de plus de demandes",
          "Je dois organiser les commandes et rendez-vous",
          "Je ne sais pas. Aidez-moi à voir clair",
        ],
      },
    ],
  },

  howItWorks: {
    eyebrow: "Comment ça marche",
    headline: "De l’attention au réachat.",
    intro:
      "Chacune de ces étapes existe déjà dans votre entreprise. Nous les relions pour que rien ne se perde entre elles.",
    stepsTitle: "La mise en place",
    steps: [
      { title: "Diagnostic", copy: "Une courte conversation sur la façon dont vos clients achètent réellement aujourd’hui." },
      { title: "Mise en place", copy: "Profil, catalogue, messages et parcours qui amènent les gens dans la conversation." },
      { title: "Lancement", copy: "Votre WhatsApp devient un canal de vente, avec les liens et contenus pour l’alimenter." },
      { title: "Amélioration", copy: "Nous observons ce que demandent vos clients et resserrons le parcours mois après mois." },
    ],
  },

  about: {
    eyebrow: "À propos",
    headline: "Une seule Social Currency. Plusieurs marchés africains.",
    body1: "Social Currency est une entreprise de commerce conversationnel conçue pour les entreprises africaines.",
    body2: "Nous ne sommes pas une agence de marketing avec un chatbot en option. Nous construisons le système commercial qui relie l’attention que vous gagnez à l’argent que vous encaissez.",
    body3: "Langue locale. Devise locale. Habitudes commerciales locales. Un système cohérent.",
    cta: "Lancer la conversation",
  },

  contact: {
    eyebrow: "Contact",
    headline: "Lançons la conversation.",
    body: "Le plus rapide reste WhatsApp. Si vous préférez écrire, le formulaire arrive dans la même boîte.",
    whatsapp: "Nous écrire sur WhatsApp",
    orForm: "Ou envoyer un message",
    response: "Nous répondons sous 2 jours ouvrés.",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "E-mail",
      emailPlaceholder: "vous@exemple.com",
      company: "Entreprise",
      companyPlaceholder: "Votre entreprise (facultatif)",
      message: "Message",
      messagePlaceholder: "Dites-nous ce que vous construisez...",
      send: "Envoyer",
      sending: "Envoi...",
      error: "Une erreur est survenue. Merci de réessayer.",
      successTitle: "C’est le début de quelque chose.",
    },
  },

  footer: {
    tagline: "Transformez les conversations en clients.",
    linksTitle: "Explorer",
    localeTitle: "Région",
    closing: "Conçu pour le commerce africain.",
    parent: "Membre de SoCu Systems.",
    rights: (year: number) => `© ${year} Social Currency. Tous droits réservés.`,
  },

  common: {
    whatsappMessage:
      "Bonjour Social Currency, je souhaite transformer mon WhatsApp en véritable système de vente.",
    solutionMessage: (name: string) =>
      `Bonjour Social Currency, je suis intéressé par ${name}. Pouvez-vous m’en dire plus ?`,
    backHome: "Retour à l’accueil",
    notFound: "Cette page n’existe pas.",
  },
};
