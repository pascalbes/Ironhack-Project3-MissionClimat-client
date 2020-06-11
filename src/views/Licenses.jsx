import React from "react";
import "styles/contribuer.css";
import Header from "components/partials/Header";
import { Helmet } from "react-helmet";

const Licenses = () => {
  return (
    <div className="form-page flex-item flex-column light-text">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mission Climat / Contact</title>
        <meta name="description" content="Licences de Mission Climat" />
        <link rel="canonical" href="http://mission-climat.io/contact" />
      </Helmet>
      <Header />
      <div className="margeup contribuer">
        <div className="contribuer-title flex-item flex-column">
          <h3>
            Droits et licenses <br></br>des ressources utilisées sur ce site
          </h3>
        </div>

        <section id="contact-form" className="flex-item">
          <div className="flex-item flex-column light-text">
            <div className="flex-item contact-title">
              <h6>React</h6>
            </div>
            <p>
              <b>Framework Front-End</b>
            </p>

            <p>
              MIT License
              <br></br>
              <br></br>
            </p>
            <p>
              Copyright (c) Facebook, Inc. and its affiliates.
              <br></br>
              <br></br>
            </p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to deal in the Software
              without restriction, including without limitation the rights to use, copy, modify,
              merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject to the following
              conditions:
              <br></br>
              <br></br>
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies
              or substantial portions of the Software.
            </p>

            <div className="flex-item contact-title">
              {/* <img src="../../../images/logo/Idea.svg" alt=""/> */}
              <h6>Recharts</h6>
            </div>
            <p>
              <b>
                Librairie utilisée pour l'ensemble des graphiques (hormis les jauges, home made)
              </b>
            </p>
            <p>
              The MIT License (MIT)
              <br></br>
              <br></br>
            </p>
            <p>
              Copyright (c) 2015 recharts
              <br></br>
              <br></br>
            </p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to deal in the Software
              without restriction, including without limitation the rights to use, copy, modify,
              merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject to the following
              conditions:
              <br></br>
              <br></br>
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies
              or substantial portions of the Software.
            </p>

            <div className="flex-item contact-title">
              <img src="../../../images/about/liens articles - blanc.svg" alt="" />
              <h6>Material UI</h6>
            </div>
            <p>
              <b>Librairie utilisée pour les slider des paramètres</b>
            </p>
            <p>
              The MIT License (MIT)
              <br></br>
              <br></br>
            </p>
            <p>
              Copyright (c) 2014 Call-Em-All
              <br></br>
              <br></br>
            </p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to deal in the Software
              without restriction, including without limitation the rights to use, copy, modify,
              merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject to the following
              conditions:
              <br></br>
              <br></br>
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies
              or substantial portions of the Software.
            </p>
          </div>

          <div className="flex-item flex-column light-text">
            <div className="flex-item contact-title">
              {/* <img src="../../../images/logo/Qna.svg" alt=""/> */}
              <h6>Pauline Gautreau</h6>
            </div>
            <p>
              <b>Réalisation du logo Mission CLimat</b>
            </p>
            <p>Copyright (c) Pauline Gautreau</p>

            <div className="flex-item contact-title">
              {/* <img src="../../../images/logo/Qna.svg" alt=""/> */}
              <h6>Font awesome</h6>
            </div>
            <p>
              <b>Icônes</b>
            </p>
            <p>
              Ces icônes sont partagées sous la licence{" "}
              <b>
                <u>
                  <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
                </u>
              </b>
            </p>

            <div className="flex-item contact-title">
              {/* <img src="../../../images/logo/Qna.svg" alt=""/> */}
              <h6>Google Font</h6>
            </div>
            <p>
              <b>Pour la font Open Sans</b>
            </p>
            <p>
              Digitized data copyright 2010-2011, Google Corporation.{" "}
              <b>
                <u>
                  <a href="https://www.apache.org/licenses/LICENSE-2.0">
                    Apache License, version 2.
                  </a>
                </u>
              </b>
            </p>

            <div className="flex-item contact-title">
              {/* <img src="../../../images/logo/Qna.svg" alt=""/> */}
              <h6>Undraw</h6>
            </div>
            <p>
              <b>Site utilisé pour les illustrations du notre</b>
            </p>
            <p>
              Copyright 2020 Katerina Limpitsouni All images, assets and vectors published on unDraw
              can be used for free. You can use them for noncommercial and commercial purposes. You
              do not need to ask permission from or provide credit to the creator or unDraw.
              <br></br>
              <br></br>
            </p>
            <p>
              More precisely, unDraw grants you an nonexclusive, worldwide copyright license to
              download, copy, modify, distribute, perform, and use the assets provided from unDraw
              for free, including for commercial purposes, without permission from or attributing
              the creator or unDraw. This license does not include the right to compile assets,
              vectors or images from unDraw to replicate a similar or competing service, in any form
              or distribute the assets in packs. This extends to automated and non-automated ways to
              link, embed, scrape, search or download the assets included on the website without our
              consent.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Licenses;
