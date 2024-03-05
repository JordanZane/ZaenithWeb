import React from 'react';
import ArrowRight from '../../assets/images/arrow-right.svg';
import MediumLogo from '../../assets/images/medium-logo-icon.svg';

const Legal = ({ handleHideLegalPage }) => {
  return (
    <div className="legal-page" id="legal-page">
      <div className="container">
        <div className="btn-container">
          <a href="/" onClick={handleHideLegalPage}>
            <img src={ArrowRight} /> Accueil
          </a>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Mentions légales</h2>
            <div className="img-container">
              <img src={MediumLogo} alt="" />
            </div>
          </div>
          <div className="section-content">
            <div className="legal-section">
              <h2>1 - ÉDITION DU SITE</h2>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004
                pour la confiance dans l'économie numérique, il est précisé aux
                utilisateurs du site{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a>{' '}
                l'identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi :
              </p>
              <p>
                Propriétaire du site : Zanetti Jordan - Contact :
                jzanetti57100@gmail.com - 0666179121 - Adresse : 109 Rue de
                Meilbourg.
              </p>
              <p>
                Identification de l'entreprise : Zanetti Jordan - Raison social
                : Zaenith Web - SIREN : 924196397 - Adresse postale : 109 Rue de
                Meilbourg
              </p>
              <p>
                Directeur de la publication : Jordan Zanetti - Contact :
                jzanetti57100@gmail.com.
              </p>
              <p>
                Hébergeur : 1&1 / IONOS - 7 Place de la Gare - 57200
                Sarreguemines - Téléphone : 09.70.80.89.11
              </p>
            </div>
            <div className="legal-section">
              <h2>2 - PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS</h2>
              <p>
                Zanetti Jordan est propriétaire des droits de propriété
                intellectuelle et/ou détient les droits d’usage sur tous les
                éléments accessibles sur le site internet, notamment les textes,
                images, graphismes, logos, vidéos, architecture, icônes et sons.{' '}
                <a href="#credits">Crédits</a>
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable de Zanetti Jordan.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l’un quelconque
                des éléments qu’il contient sera considérée comme constitutive
                d’une contrefaçon et poursuivie conformément aux dispositions
                des articles L.335-2 et suivants du Code de Propriété
                Intellectuelle.
              </p>
            </div>
            <div className="legal-section">
              <h2>3 - LIMITATIONS DE RESPONSABILITÉ</h2>
              <p>
                Zanetti Jordan ne pourra être tenu pour responsable des dommages
                directs et indirects causés au matériel de l’utilisateur, lors
                de l’accès au site{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a>
              </p>
              <p>
                Zanetti Jordan décline toute responsabilité quant à
                l’utilisation qui pourrait être faite des informations et
                contenus présents sur{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a>
              </p>
              <p>
                Zanetti Jordan s’engage à sécuriser au mieux le site{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a>,
                cependant sa responsabilité ne pourra être mise en cause si des
                données indésirables sont importées et installées sur son site à
                son insu.
              </p>
            </div>
            <div className="legal-section">
              <h2>4 - CNIL ET GESTION DES DONNÉES PERSONNELLES</h2>
              <p>
                Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
                modifiée, l’utilisateur du site{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a>{' '}
                dispose d’un droit d’accès, de modification et de suppression
                des informations collectées. Notamment celles collectées lors de
                la soumission du formulaire de contact. Pour exercer ce droit,
                envoyez un message à notre Délégué à la Protection des Données :
                Jordan Zanetti - jzanetti57100@gmail.com
              </p>
              <p>
                Vos données personnelles ne sont PAS stockés dans une base de
                données.
              </p>
            </div>
            <div className="legal-section">
              <h2>5 - LIENS HYPERTEXTES ET COOKIES</h2>
              <p>
                Le site{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a>{' '}
                contient des liens hypertextes vers d’autres sites et dégage
                toute responsabilité à propos de ces liens externes ou des liens
                créés par d’autres sites vers{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a>.
              </p>
              <p>
                La navigation sur le site{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a> est
                susceptible de provoquer l’installation de cookie(s) sur
                l’ordinateur de l’utilisateur.
              </p>
              <p>
                Le site web{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a> ne
                deposera aucun cookie sur votre navigateur
              </p>
            </div>
            <div className="legal-section">
              <h2>6 - DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION</h2>
              <p>
                Tout litige en relation avec l’utilisation du site{' '}
                <a href="https://zaenithweb.fr/">https://zaenithweb.fr/</a> est
                soumis au droit français. En dehors des cas où la loi ne le
                permet pas, il est fait attribution exclusive de juridiction aux
                tribunaux compétents de Thionville.
              </p>
            </div>
            <div className="legal-section">
              <h2 id="credits">7 - Crédits</h2>
              <p>
                Le modèle de mentions légales est offert par{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://la-webeuse.com/"
                >
                  le générateur de la-webeuse.com
                </a>
              </p>
              <p>
                Images :{' '}
                <a
                  href="https://fr.freepik.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Freepiks
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
