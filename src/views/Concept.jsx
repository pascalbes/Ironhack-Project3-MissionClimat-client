import React from 'react'
import "../styles/concept.css"

const Concept = () => {
    return (
        <div className="concept-page flex-item flex-column">
            <div className="concept-box border-btn light flex-item flex-column">
                <h3>Le concept</h3>

                <h5>> Modèle de calcul</h5>
                <p>Le modèle de calcul utilisé sur ce simulateur reprend celui à la base de l’étude «Comment la France peut s’aligner sur une trajectoire compatible avec les 1,5°C» du cabinet de conseil B&L évolution. Ce modèle a été largement simplifié afin de faciliter la construction d’un scénario par toutes et tous. Par exemple, le nombre de paramètres associés aux mesures à mettre en place a été réduit. Un mode expert permet de modifier plus de paramètres. À terme, ce modèle de calcul a vocation à être publié et entièrement paramétrable par les utilisateurs du site. </p>

                <h5>> Comment sont calculées les émissions françaises ? </h5>

                <div className="concept-img-box flex-item">
                    <img className="border-btn" src="../../images/baisse-carbone.png" alt="Exemple de Paramètre"/>
                </div>

                <p>Les émissions actuelles de chaque secteur (Bâtiment, Transports, Agriculture) sont modélisées à partir d’hypothèses et des meilleures données disponibles. L’approche retenue est celle de l’empreinte carbone qui intègre les émissions importées en plus des émissions ayant directement lieu sur le territoire français. L’inventaire national indique que les émissions de gaz à effet de serre territoriales sont de l’ordre de 6,6 tonnes de CO2e par habitant. En revanche, l’empreinte carbone des Français, incluant l’ensemble des émissions importées, liées le plus souvent à la fabrication de biens de consommation à l’étranger, s’élève à 10,5 tonnes de CO2e par habitant.</p>

                <div className="concept-img-box flex-item">
                    <img className="border-btn" src="" alt="Exemple de Paramètre"/>
                </div>

                <p>Pour chaque secteur, un certain nombre de paramètres (nombre de logements à rénover, nombre de vols réalisés par an…) permettent à l’utilisateur de faire varier les émissions de gaz à effet de serre du secteur. Un mode expert permet à l’utilisateur de modifier plus de paramètres, préremplis par défaut.</p>

                <p>Pour guider l’utilisateur, plusieurs informations sont disponibles, pour chaque paramètre : 
                    <ul>
                        <li>Calcul des émissions : hypothèses et données prises en compte pour calculer les émissions du secteur</li>
                        <li>Tendances : Tendances observées sur les années précédentes ou attendues par les acteurs de référence dans le secteur</li>
                        <li>Co-bénéfices : Impacts positifs associés à une baisse des émissions de gaz à effet de serre du secteur</li>
                        <li>Contraintes : Freins et contraintes qui limitent une baisse rapide des émissions de ce secteur</li>
                    </ul>
                </p>

                <h5>> Vers une trajectoire de réchauffement climatique mondiale ?</h5>
                <p>
                Une première étape consiste à estimer l’évolution de la population française et mondiale. On estime que la population mondiale peut varier de 8 à 8,5 milliards d’individus en fonction des mesures prises à l’échelle mondiale. A partir de l’empreinte carbone totale de la France, il est alors facile d’estimer l’empreinte carbone par habitant.</p>

                <p>
                Une deuxième étape consiste à extrapoler à l’ensemble de la planète, la trajectoire d’émissions suivie par la France. Plusieurs hypothèses sont envisageables : 
                    <ul>
                        <li>Egalité stricte : tous les citoyens ont la même empreinte carbone</li>
                        <li>Réhausse proportionnelle : Chaque Pays revoit à la hausse ses engagements de manière proportionnelle. En considérant que la France représente 0,9% des émissions mondiales, on estime que les 90,1% restant évoluent selon la même trajectoire</li>
                    </ul>
                </p>
            </div>

            <div className="concept-box border-btn light flex-item flex-column">
                <h3>Les enjeux</h3>
                <p>En 2017, Avenir Climatique a développé une série de vidéos pour décrypter les enjeux énergie climat. Si tu n'as pas envie de lire tout ça, prépare le popcorn et clique à droite !</p>

                <div className="concept-img-box flex-item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3eXVnmI7_oE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;    picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="concept-img-box flex-item">
                    <a href="https://www.conventioncitoyennepourleclimat.fr/wp-content/uploads/2019/10/03102019-convcit-socledoc-web.pdf">MOOC</a>
                    <div className="hidden">||</div>
                    <a href="https://www.conventioncitoyennepourleclimat.fr/wp-content/uploads/2019/10/03102019-convcit-socledoc-web.pdf">Autres sources</a>
                </div>

                <h5>Bienvenue dans un monde fini !</h5>
                <p>Pendant des millénaires l’humanité a vécu dans un monde qu’elle pouvait considérer comme infini. Le XXe siècle a vu la fin de cette ère ; le XXIe siècle sera le premier siècle en monde fini. Le monde fini est un système complexe ! En monde fini, on ne peut plus à la fois accroître notre utilisation d’énergies fossiles et préserver le climat auquel nous sommes habitués. En monde fini, on ne peut plus à la fois accroître notre utilisation des ressources naturelles et laisser la possibilité aux générations futures de les utiliser. En monde fini, on ne peut plus à la fois accroître notre quantité de déchets et conserver la qualité de notre environnement.</p>

                <h5>Le climat</h5>
                <p>Le climat a toujours changé. Dans les millions d’années passées, il a parfois fait beaucoup plus chaud qu’aujourd’hui (climat tropical en France au temps des dinosaures) ou beaucoup plus froid (la dernière ère glaciaire date de 20 000 ans). Depuis 500 000 ans, ces variations sont relativement cycliques avec une alternance d’ères glaciaires qui durent 100 000 ans et où il fait 5°C de moins qu’aujourd’hui et d’ères interglaciaires de 10 000 ans où nous sommes aujourd’hui.</p>

                <p>Actuellement, on observe un changement du climat en cours qui est dû aux émissions de gaz à effet de serre de l’humanité. Ces gaz amplifient l’effet de serre que l’on peut comparer au couvercle de la casserole qu’on fait chauffer : il permet de retenir une plus grande quantité de chaleur sur Terre. On constate déjà une élévation des températures moyennes du globe de 1,2°C en 100 ans. On attend, selon le niveau d’émissions futures, une augmentation de ces températures de 2°C à 6°C sur le XXIe siècle.</p>

                <p>La combustion des énergies fossiles et la déforestation libèrent du dioxyde de carbone (CO2) dans l'atmosphère. L'élevage, les rizières et les fuites de gaz naturel libère du méthane (CH4). L’utilisation d’engrais azotés qui sont dégradés par des bactéries émet du protoxyde d’azote (N2O). D'autres activités humaines génèrent d'autres gaz à effet de serre de manière plus marginale, comme les composés fluorés CFC.
                Depuis 1850, la concentration observée des différents gaz à effet de serre a explosé : +40% pour le CO2 ou +280% pour le méthane !</p>

                <h5>Des impacts importants</h5>
                <div className="concept-impact-box flex-item">
                    <img src="../../images/concept-1.png" alt="picto"/>
                    <p>Tout d’abord, même s’il a fait plus chaud ou plus froid dans le passé de 6°C sur Terre sans conséquences sur les espèces vivantes, ce n’est pas l'écart de température qui est important. C'est la vitesse du changement. Le changement climatique qui commence aujourd’hui est 100 fois plus rapide que les changements passés. On peut se demander si les écosystèmes s’y adapteront</p>
                </div>

                <div className="concept-impact-box flex-item">
                    <img src="../../images/concept-2.png" alt="picto"/>
                    <p>On devrait observer des évènements climatiques extrêmes plus violents face auxquels nous ne sommes pas préparés et dans des endroits où on ne les attend pas (vague de chaleur, cyclones, sécheresses, feux de forêts, inondations...)</p>
                </div>

                <div className="concept-impact-box flex-item">
                    <img src="../../images/concept-3.png" alt="picto"/>
                    <p>A cause de la fonte de la banquise et des glaciers, l'eau va monter. Et pas qu'un peu. Beaucoup de villes côtières risque de se retrouver sous 1m ou 2m d'eau. Des îles risquent tout simplement de disparaître</p>
                </div>

                <div className="concept-impact-box flex-item">
                    <img src="../../images/concept-4.png" alt="picto"/>
                    <p>L'acidification de l'océan à cause de tous ces gaz à effet de serre menace de nombreux écosystèmes marins. Toi t'aimes peut-être pas trop le poisson mais beaucoup d'humaines vivent de la pêche</p>
                </div>

                <div className="concept-impact-box flex-item">
                    <img src="../../images/concept-5.png" alt="picto"/>
                    <p>Toutes ces perturbations forceront beaucoup de personnes à s’adapter notamment en cherchant une terre d’accueil ailleurs. Ces mouvements migratoires sont un risque majeur de déstabilisation politique et de conflits dans les années à venir ! On estime que d’ici à 2050, il y aura plus de 500 millions de réfugiés climatiques dans le monde</p>
                </div>

                <p>Même si cela nous est difficilement perceptible, une petite variation de température peut avoir des conséquences importantes.  Chaque 0,1°C compte. Chaque année d’émissions de gaz à effet de serre compte. Chaque tonne de CO2 compte.</p>

                <div className="concept-img-box flex-item">
                    <img className="border-btn" src="../../images/concept-impact.png" alt="impacts"/>
                </div>

                <div className="concept-img-box flex-item">
                    <img className="border-btn" src="../../images/nuages.png" alt="nuages C02"/>
                </div>

                <p>Tout notre mode de vie actuel s’est construit sur l’idée d’une énergie et de matières premières surabondantes et inépuisables qui auraient permis une croissance économique infinie. </p>

                <p>Un nouveau monde est à construire, à toutes les échelles. Ce site internet vous permettra de configurer votre scénario climat à l’échelle nationale. Vous pouvez aussi vous appuyer sur l’outil MicMac (Mon Impact Climat, Mes Actions Concrètes) pour étudier l’impact carbone de votre mode et de vie et identifier les actions pertinentes pour faire baisser votre empreinte carbone. <a href="http://avenirclimatique.org/les-outils/">(>> Boîte à Outils)</a></p>

                <p>Tout est à réinventer, repenser et construire, de l’agriculture à l’habitat, des modes d’organisation du travail à l’urbanisme, etc. Bref, cette aventure s’annonce passionnante !</p>
            </div>

            <div className="concept-box border-btn light flex-item flex-column">
                <h3>Les arguments</h3>
            </div>

            <div className="concept-box border-btn light flex-item flex-column">
                <h3>FAQ</h3>
            </div>
        </div>
    )
}

export default Concept
