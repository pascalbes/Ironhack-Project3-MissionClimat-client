import React, { useState } from "react";
import Header from "components/partials/Header";
import { Helmet } from "react-helmet";

import "styles/concept.css";

const Concept = () => {
  const [selectedChapter, setSelectedChapter] = useState("concept");

  return (
    <div className="concept-page flex-item flex-column light-text">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mission Climat / Concept</title>
        <meta
          name="description"
          content="Description du concept Mission Climat : méthode de calcul des émissions de gaz à effert de serre, enjeux énergie et climat et réponse aux questions fréquentes"
        />
        <link rel="canonical" href="http://mission-climat.io/concept" />
      </Helmet>
      <Header />
      <div className="flex-item full-width margeup">
        <div className="flex-column">
          <div
            className={`chapter-selection ${selectedChapter === "concept" ? "active" : ""}`}
            onClick={() => setSelectedChapter("concept")}
          >
            <img src="/images/logo/Idea.svg" alt="" />
            <br />
            <span>Le concept</span>
          </div>
        </div>
        <div className="flex-column">
          <div
            className={`chapter-selection ${selectedChapter === "enjeux" ? "active" : ""}`}
            onClick={() => setSelectedChapter("enjeux")}
          >
            <img src="/images/logo/Enjeux.svg" alt="" />
            <br />
            <span>Les enjeux</span>
          </div>
        </div>
        <div className="flex-column">
          <div
            className={`chapter-selection ${selectedChapter === "qna" ? "active" : ""}`}
            onClick={() => setSelectedChapter("qna")}
          >
            <img src="/images/logo/Qna.svg" alt="" />
            <br />
            <span>Questions et réponses</span>
          </div>
        </div>
      </div>

      {selectedChapter === "concept" && (
        <div id="concept" className="concept-box border-btn flex-item flex-column">
          <h3 className="nomarge">Le concept</h3>
          <h5>Modèle de calcul</h5>
          <p>
            Le modèle de calcul utilisé sur ce simulateur reprend celui à la base de l’étude
            «Comment la France peut s’aligner sur une trajectoire compatible avec les 1,5°C» du
            cabinet de conseil B&L évolution. Ce modèle a été largement simplifié afin de faciliter
            la construction d’un scénario par toutes et tous. Par exemple, le nombre de paramètres
            associés aux mesures à mettre en place a été réduit. Un mode expert permet néanmoins de
            modifier plus de paramètres, pour ceux qui le souhaitent. Le modèle de calcul est
            téléchargeable à la page "à propos".
          </p>

          <h5>Calcul des émissions françaises</h5>

          <div className="concept-img-box flex-item">
            <img
              className="border-btn"
              src="/images/baisse-carbone.png"
              alt="Exemple de Paramètre"
            />
          </div>

          <p>
            Les émissions actuelles de chaque secteur (Bâtiments, Transports, Agriculture et
            alimentation, Biens et services, Énergie) sont modélisées à partir d’hypothèses et des
            meilleures données disponibles. L’approche retenue est celle de l’
            <b>empreinte carbone</b> : elle intègre les émissions importées en plus des émissions
            ayant directement lieu sur le territoire français et est en ce sens bien plus juste.
            Ainsi, l’inventaire national indique que les émissions de gaz à effet de serre
            territoriales sont de l’ordre de 6,6 tonnes de CO2e par habitant quand l’empreinte
            carbone des Français, incluant l’ensemble des émissions importées (liées le plus souvent
            à la fabrication de biens de consommation à l’étranger) s’élève à 10,5 tonnes de CO2e
            par habitant.
          </p>

          <div className="concept-img-box flex-item">
            <img
              className="border-btn"
              src="/images/exemple-paramètres.JPG"
              alt="Exemple de Paramètre"
            />
          </div>

          <p>
            Pour chaque secteur, un certain nombre de paramètres (nombre de logements à rénover,
            nombre de vols réalisés par an…) sont configurables par l’utilisateur, et impactent les
            émissions de gaz à effet de serre du secteur (indiqués par une jauge dédiée), et donc
            les émissions globales (visibles dans le volet de droite de la page simulateur). Un mode
            expert permet à l’utilisateur de modifier plus de paramètres, préremplis par défaut.
          </p>

          <div>
            <p>
              Pour guider l’utilisateur, les informations suivantes sont disponibles, associées à
              chaque paramètre (accessibles en cliquant sur le " ? ") :
            </p>
            <ul>
              <li>
                Calcul des émissions : hypothèses et données prises en compte pour calculer les
                émissions du secteur
              </li>
              <li>
                Tendances : Tendances observées sur les années précédentes ou attendues par les
                acteurs de référence dans le secteur
              </li>
              <li>
                Co-bénéfices : Impacts positifs associés à une baisse des émissions de gaz à effet
                de serre du secteur
              </li>
              <li>
                Contraintes : Freins et contraintes qui limitent une baisse rapide des émissions de
                ce secteur
              </li>
            </ul>
          </div>

          <div className="concept-img-box flex-item hide-835">
            <img
              className="border-btn"
              src="/images/exemple-expand.JPG"
              alt="Exemple de Paramètre"
            />
          </div>

          <div>
            <p>
              Avec l'ensemble des paramètres configurés, les émissions françaises sont calculées et
              représentées dans le volet de droite avec :
            </p>

            <ul>
              <li>
                3 indicateurs :
                <ul>
                  <li>l'évolution en pourcentage des émissions entre 2020 et 2030,</li>
                  <li>la moyenne annuelle des émissions,</li>
                  <li>l'empreinte carbone par habitant, en 2030.</li>
                </ul>
              </li>

              <div className="concept-img-box flex-item">
                <img
                  className="border-btn"
                  src="/images/exemple-indicateurs-fr.JPG"
                  alt="Exemple de Paramètre"
                />
              </div>

              <li>
                2 graphiques :
                <ul>
                  <li>l'évolution des émissions entre 2020 et 2030, par secteur</li>
                  <li>les émissions 2030 par secteur et sous secteurs</li>
                </ul>
              </li>

              <div className="concept-img-box flex-item">
                <img
                  className="border-btn"
                  src="/images/exemple-graphiques.JPG"
                  alt="Exemple de Paramètre"
                />
              </div>
            </ul>
            <p>
              Ainsi, vous disposez de tous les éléments pour guider les choix de votre scénario.
            </p>
          </div>

          <h5>Calcul des émissions mondiales</h5>
          <p>
            Une fois les émissions françaises calculées, comment obtenir les émissions mondiales ?
            Avec simplement 2 paramètres. D'abord, une estimation de l’évolution de la population
            mondiale, de 8 à 9 milliards d’individus en 2030.
          </p>

          <div>
            <p>
              Ensuite, une hypothèse sur la trajectoire des autres pays, à choisir parmi les 2
              suivantes :
            </p>
            <ul>
              <li>
                Egalité stricte : Tous les citoyens du monde ont la même empreinte carbone en 2030.
                Le niveau d'effort dépend du point de départ. Les pays développés réduisent plus
                leur empreinte. Certains pays en voie de développement peuvent légèrement
                l'augmenter.
              </li>
              <li>
                "Maintien des inégalités" : Tous les citoyens baissent (ou augmentent)
                proportionnellement leur empreinte carbone d'un même effort. A l'arrivée, les pays
                développés ont toujours une empreinte carbone plus élevée que les pays en voie de
                développement.
              </li>
            </ul>
          </div>
        </div>
      )}
      {selectedChapter === "enjeux" && (
        <div id="enjeux" className="concept-box border-btn  flex-item flex-column">
          <h3 className="nomarge">Les enjeux</h3>
          <p>
            Nous reprenons ici du contenu rédigé par l'association Avenir Climatique, simplement
            retouché. Elle a développé une série de vidéos pour décrypter les enjeux énergie climat
            qui peuvent être un excellent moyen de s'y former.
          </p>

          <div className="concept-img-box flex-item">
            <iframe
              width="560"
              height="315"
              title="Avenir Climatique"
              src="https://www.youtube.com/embed/3eXVnmI7_oE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;    picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="concept-img-box flex-item">
            <a href="https://avenirclimatique.org/mooc/" target="_blank" rel="noopener noreferrer">
              > MOOC
            </a>
            <div className="hidden">||</div>
            <a
              href="https://www.conventioncitoyennepourleclimat.fr/wp-content/uploads/2019/10/03102019-convcit-socledoc-web.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              > Autres sources
            </a>
          </div>

          <h5>Bienvenue dans un monde fini !</h5>
          <p>
            Pendant des millénaires l’humanité a vécu dans un monde qu’elle pouvait considérer comme
            infini. Le XXe siècle a vu la fin de cette ère ; le XXIe siècle sera le premier siècle
            en monde fini. Le monde fini est un système complexe ! Dans un monde fini, c'est à dire
            avec des limites, il n'est plus possible d'accroître notre utilisation d’énergies
            fossiles et de préserver le climat auquel nous sommes habitués. Il n'est plus possible
            d'accroître notre utilisation des ressources naturelles et laisser la possibilité aux
            générations futures de les utiliser. En monde fini, on ne peut plus à la fois accroître
            notre quantité de déchets et conserver la qualité de notre environnement.
          </p>

          <h5>Le climat</h5>
          <p>
            Le climat a toujours changé. Dans les millions d’années passées, il a parfois fait
            beaucoup plus chaud qu’aujourd’hui (climat tropical en France au temps des dinosaures)
            ou beaucoup plus froid (la dernière ère glaciaire s'est achevée il y a seulement 20 000
            ans). Depuis 500 000 ans, ces variations sont relativement cycliques avec une alternance
            d’ères glaciaires qui durent 100 000 ans, avec une température moyenne inférieure de 5°C
            à l'actuelle et d’ères interglaciaires de 10 000 ans, comme celle dans laquelle nous
            nous trouvons.
          </p>

          <p>
            Actuellement, on observe un changement du climat dû aux émissions de gaz à effet de
            serre de l’humanité. Ces gaz amplifient l’effet de serre, que l’on peut comparer au
            couvercle de la casserole qu’on chauffe : il permet de retenir une plus grande quantité
            de chaleur sur Terre. On constate déjà une élévation des températures moyennes du globe
            de 1°C (et 1,5°C sur les terres) en 100 ans et on attend, selon le niveau d’émissions
            futures, une augmentation de ces températures de 1.5°C à 6°C sur le XXIe siècle.
          </p>

          <p>
            D'où viennent ces gaz à effet de serre ? La combustion des énergies fossiles et la
            déforestation libèrent du dioxyde de carbone (CO2) dans l'atmosphère. L'élevage, les
            rizières et les fuites de gaz naturel libère du méthane (CH4). L’utilisation d’engrais
            azotés qui sont dégradés par des bactéries émet du protoxyde d’azote (N2O). D'autres
            activités humaines génèrent des gaz à effet de serre de manière plus marginale, comme
            les composés fluorés CFC. Depuis 1850, la concentration observée des différents gaz à
            effet de serre a explosé : +40% pour le CO2 ou +280% pour le méthane !
          </p>

          <h5>Des impacts importants</h5>
          <div className="concept-impact-box flex-item">
            <img src="/images/concept-1.png" alt="picto" />
            <p>
              En plus de l'amplitude du changement, la vitesse à laquelle il se produit, sans
              précédent, est un facteur de déstabilisation très important. Le changement climatique
              actuel est 100 fois plus rapide que par le passé, menaçant de très nombreux
              écosystèmes.
            </p>
          </div>

          <div className="concept-impact-box flex-item">
            <img src="/images/concept-2.png" alt="picto" />
            <p>
              On devrait ainsi observer des évènements climatiques extrêmes plus violents face
              auxquels nous ne sommes pas préparés et à des endroits où on ne les attend pas (vague
              de chaleur, cyclones, sécheresses, feux de forêts, inondations...)
            </p>
          </div>

          <div className="concept-impact-box flex-item">
            <img src="/images/concept-3.png" alt="picto" />
            <p>
              La fonte des calottes polaires et des glaciers, mais surtout le réchauffement de
              l'océan (et ainsi de sa dilatation), va causer l'augmentation du niveau de la mer.
              Beaucoup de villes côtières, dont des mégalopoles, risquent de se retrouver sous 1m ou
              2m d'eau. Des îles risquent tout simplement de disparaître.
            </p>
          </div>

          <div className="concept-impact-box flex-item">
            <img src="/images/concept-4.png" alt="picto" />
            <p>
              L'acidification de l'océan, causé par les gaz à effet de serre, menace de nombreux
              écosystèmes marins et les activités humaines qui en dépendent.
            </p>
          </div>

          <div className="concept-impact-box flex-item">
            <img src="/images/concept-5.png" alt="picto" />
            <p>
              Toutes ces perturbations forceront beaucoup de personnes à s’adapter notamment en
              cherchant une terre d’accueil. Ces mouvements migratoires sont un risque majeur de
              déstabilisation politique et de conflits dans les années à venir. On estime que d’ici
              à 2050, il y aura plus de 500 millions de réfugiés climatiques dans le monde.
            </p>
          </div>

          <p>
            Même si cela nous est difficilement perceptible, une petite variation de température
            peut avoir des conséquences importantes. Chaque dixième de degré compte. Chaque année
            d’émission de gaz à effet de serre compte. Chaque tonne de CO2 compte.
          </p>

          <div className="concept-img-box flex-item">
            <img className="border-btn" src="/images/concept-impact.png" alt="impacts" />
          </div>

          <div className="concept-img-box flex-item">
            <img className="border-btn" src="/images/nuages.png" alt="nuages C02" />
          </div>

          <p>
            Tout notre mode de vie actuel s’est construit sur l’idée d’une énergie et de matières
            premières surabondantes et inépuisables qui auraient permis une croissance économique
            infinie.
          </p>

          <p>
            Un nouveau monde est à construire, à toutes les échelles. Ce site internet vous
            permettra de configurer votre scénario climat à l’échelle nationale. Vous pouvez aussi
            vous appuyer sur l’outil MicMac (Mon Impact Climat, Mes Actions Concrètes) pour étudier
            l’impact carbone de votre mode et de vie et identifier les actions pertinentes pour
            faire baisser votre empreinte carbone.
            <a href="http://avenirclimatique.org/les-outils/">> Boîte à Outils</a>
          </p>

          <p>
            Tout est à réinventer, repenser et reconstruire, de l’agriculture à l’habitat, des modes
            d’organisation du travail à l’urbanisme, de ce que nous sommes aujourd'hui à ce que nous
            pouvons être demain. Bref, une vraie mission, au moins climatique, sûrement
            anthropologique.
          </p>
        </div>
      )}
      {selectedChapter === "qna" && (
        <div className="concept-box border-btn  flex-item flex-column question">
          <h3 className="nomarge">Questions & réponses</h3>
          <h5>
            La France ne représente que 1% des émissions mondiales, nos efforts ne sont-ils pas
            vains ?
          </h5>
          <p>
            Effectivement, la France ne représente que 0,9% des émissions de CO2 si on ne compte que
            les émissions "territoriales" qui ont lieu sur le sol français et les émissions
            énergétiques (issues de la combustion d'énergies fossiles).
          </p>

          <p>
            Il est donc clair qu'un effort isolé de la France n'aura que peu d'impact direct sur la
            trajectoire mondiale de réchauffement climatique. Cependant, plusieurs arguments peuvent
            remettre en question ce postulat.
          </p>

          <p>
            D'abord, la France est en fait responsable de près de 2% des émissions historiques (les
            émissions cumulées depuis 1850) alors qu'elle représente moins de 1% de la population
            mondiale. Ce total est encore plus important si on intègre les émissions non
            énergétiques (agriculture, déchets...) et les émissions importées (ces émissions
            représentent plus de 30% de l'empreinte carbone des français). Enfin, la France
            pourrait, si elle était exemplaire et par la capacité d'influence qu'elle possède, comme
            toute autre puissance, inspirer de nombreux pays dans son sillage. En tous cas, elle
            serait bien plus légitime pour négocier en ce sens.
          </p>

          <h5>Toutes les technologies sont elles intégrées dans votre modèle ?</h5>
          <p>
            Notre modèle de calculs modélise les émissions de gaz à effet de serre en France jusqu'à
            2030. En l'espace de 10 ans, il est très improbable qu'une rupture technologique,
            déployée à l'échelle industrielle dans le monde, modifie le système actuel de manière
            conséquente. Le modèle inclut toutes les technologies existantes, et permet de
            configurer la vitesse à laquelle certaines d'entres elles progressent. Pour conclure, le
            modèle repose sur la réalité : il ne propose pas de jouer notre avenir en jetant une
            pièce en l'air.
          </p>

          <h5>La transition va-t-elle assez vite ? </h5>
          <p>
            Clairement, non. Les émissions mondiales ne cessent d'augmenter. D'après les scénarios
            du GIEC, pour limiter le réchauffement climatique à 1,5°C, les émissions doivent
            commencer à stagner d'ici 2020 puis baisser jusqu'à atteindre la neutralité carbone
            entre 2040 et 2060.
          </p>

          <h5>Se fixer un objectif 1,5°C : c’est envisager un changement global de système ?</h5>
          <p>
            Notre modèle de calcul montre qu'une trajectoire 1,5°C à l'échelle de la France n'est
            possible que si on envisage une rupture complète dans nos modes de vie. La politique des
            petits pas ne suffira pas. Pour atteindre la neutralité carbone, chaque Français doit
            émettre moins de 2 tonnes de CO2 par an. Aujourd'hui, vivre avec 2 tonnes de CO2 par an
            relève du parcours du combattant car la société actuelle n'est pas du tout adaptée à
            cela et ne l'encourage en rien. C'est un mouvement d'ensemble, associant toutes les
            échelles et soucieux de tous, qui pourra permettre de répondre aux enjeux climatiques,
            sans oublier les autres enjeux environnementaux et, vous l'aurez compris, les enjeux
            sociaux.
          </p>

          <h5>Donc chaque année compte ?</h5>
          <p>
            En 2018, le GIEC estimait le budget carbone global restant (associé à une limitation du
            réchauffement climatique de 1,5°C) de 420 à 580 milliards de tonnes de CO2e (les
            incertitudes sont liées aux différences de résultats des modèles utilisés). Chaque
            année, nous émettons environ 50 milliards de tonnes de CO2e. Ainsi, d'ici une dizaine
            d'années, nous aurons épuisé notre budget carbone associé à une trajectoire 1,5°C.
            Chaque année de retard dans la baisse des émissions nous obligerait à rattraper cet
            effort dans les années suivantes.
          </p>
        </div>
      )}
    </div>
  );
};

export default Concept;
