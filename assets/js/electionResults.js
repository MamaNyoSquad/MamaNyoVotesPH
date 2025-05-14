let senatorialResults = [
  { name: "ABALOS, BENHUR (PFP)",                 count: 11354378 },
  { name: "ADONIS, JEROME (MKBYN)",               count: 764533 },
  { name: "AMAD, WILSON (IND)",                   count: 604256 },
  { name: "ANDAMO, NARS ALYN (MKBYN)",            count: 814862 },
  { name: "AQUINO, BAM (KNP)",                    count: 20637824 },
  { name: "ARAMBULO, RONNEL (MKBYN)",             count: 3799541 },
  { name: "ARELLANO, ERNESTO (KTPNAN)",           count: 786293 },
  { name: "BALLON, ROBERTO (IND)",                count: 2357237 },
  { name: "BINAY, ABBY (NPC)",                    count: 11570099 },
  { name: "BONDOC, JIMMY (PDPLBN)",               count: 10357957 },
  { name: "BONG REVILLA,RAMON, JR.(LAKAS)",       count: 11790196 },
  { name: "BOSITA, COLONEL (IND)",                count: 9677520 },
  { name: "BROSAS, ARLENE (MKBYN)",               count: 4293764 },
  { name: "CABONEGRO, ROY (DPP)",                 count: 374652 },
  { name: "CAPUYAN, ALLEN (PPP)",                 count: 801584 },
  { name: "CASIÑO, TEDDY (MKBYN)",                count: 4595971 },
  { name: "CASTRO, TEACHER FRANCE (MKBYN)",       count: 3626605 },
  { name: "CAYETANO, PIA (NP)",                   count: 14307112 },
  { name: "D'ANGELO, DAVID (BUNYOG)",             count: 596548 },
  { name: "DE ALBAN,ATTORNEY ANGELO (IND)",       count: 2522055 },
  { name: "DE GUZMAN, KA LEODY (PLM)",            count: 4085667 },
  { name: "DELA ROSA, BATO (PDPLBN)",             count: 20273810 },
  { name: "DORINGO, NANAY MIMI (MKBYN)",          count: 730103 },
  { name: "ESCOBAL, ARNEL (PM)",                  count: 716297 },
  { name: "ESPIRITU, LUKE (PLM)",                 count: 6403568 },
  { name: "FLORANDA, MODY PISTON (MKBYN)",        count: 542721 },
  { name: "GAMBOA, MARC LOUIE (IND)",             count: 559884 },
  { name: "GO, BONG GO (PDPLBN)",                 count: 26490710 },
  { name: "GONZALES, NORBERTO (PDSP)",            count: 970602 },
  { name: "HINLO, JAYVEE (PDPLBN)",               count: 7296432 },
  { name: "HONASAN, GRINGO (RP)",                 count: 6593407 },
  { name: "JOSE, RELLY JR. (KBL)",                count: 447879 },
  { name: "LACSON, PING (IND)",                   count: 14857254 },
  { name: "LAMBINO, RAUL (PDPLBN)",               count: 8169268 },
  { name: "LAPID, LITO (NPC)",                    count: 13121545 },
  { name: "LEE, MANOY WILBERT (AKSYON)",          count: 575912 },
  { name: "LIDASAN, AMIRAH (MKBYN)",              count: 544657 },
  { name: "MARCOLETA, RODANTE (IND)",             count: 14911663 },
  { name: "MARCOS, IMEE R. (NP)",                 count: 13038627 },
  { name: "MARQUEZ, NORMAN (IND)",                count: 1130193 },
  { name: "MARTINEZ, ERIC (IND)",                 count: 1012180 },
  { name: "MATA, DOC MARITES (IND)",              count: 5669603 },
  { name: "MATULA, ATTY. SONNY (WPP)",            count: 3818691 },
  { name: "MAZA, LIZA (MKBYN)",                   count: 3880726 },
  { name: "MENDOZA, HEIDI (IND)",                 count: 8650975 },
  { name: "MONTEMAYOR, JOEY (IND)",               count: 658194 },
  { name: "MUSTAPHA, SUBAIR (WPP)",               count: 369901 },
  { name: "OLIVAR, JOSE JESSIE (IND)",            count: 438674 },
  { name: "ONG, DOC WILLIE (AKSYON)",             count: 7269143 },
  { name: "PACQUIAO, MANNY PACMAN (PFP)",         count: 10208499 },
  { name: "PANGILINAN, KIKO (LP)",                count: 15088642 },
  { name: "QUERUBIN, ARIEL PORFIRIO (NP)",        count: 3892919 },
  { name: "QUIBOLOY, APOLLO (IND)",               count: 5579359 },
  { name: "RAMOS, DANILO (MKBYN)",                count: 4036844 },
  { name: "REVILLAME, WILLIE WIL (IND)",          count: 8414788 },
  { name: "RODRIGUEZ, ATTY. VIC (IND)",           count: 8244587 },
  { name: "SAHIDULLA, NUR-ANA (IND)",             count: 449242 },
  { name: "SALVADOR, PHILLIP IPE (PDPLBN)",       count: 9984512 },
  { name: "SOTTO, TITO (NPC)",                    count: 14596819 },
  { name: "TAPADO, MICHAEL BONGBONG (PM)",        count: 449137 },
  { name: "TOLENTINO, FRANCIS TOL (PFP)",         count: 7564087 },
  { name: "TULFO, BEN BITAG (IND)",               count: 11886979 },
  { name: "TULFO, ERWIN (LAKAS)",                 count: 16815945 },
  { name: "VALBUENA, MAR MANIBELA (IND)",         count: 600283 },
  { name: "VERCELES, LEANDRO (IND)",              count: 304074 },
  { name: "VILLAR, CAMILLE (NP)",                 count: 13360444 },
];

function countResults() {
  let out = "";
  senatorialResults.sort((high, low) => {
    return ((high.count > low.count) ? -1 : ((high.count == low.count) ? 0 : 1));
  });
  for (let v = 0; v < 12; v++) {
    // console.log(`${senatorialResults[v].name}: ${senatorialResults[v].count.toLocaleString()} votes`);
    out += `
      <div>
        <h3>${senatorialResults[v].name}</h3>
        <p>${senatorialResults[v].count.toLocaleString()} votes</p>
      </div>
    `;
  }
  document.getElementById("senateResults").innerHTML = out;
}