let senatorialResults = [
  { name: "ABALOS, BENHUR (PFP)",                 count: 11531048 },
  { name: "ADONIS, JEROME (MKBYN)",               count: 776039 },
  { name: "AMAD, WILSON (IND)",                   count: 614173 },
  { name: "ANDAMO, NARS ALYN (MKBYN)",            count: 825351 },
  { name: "AQUINO, BAM (KNP)",                    count: 20895171 },
  { name: "ARAMBULO, RONNEL (MKBYN)",             count: 3838488 },
  { name: "ARELLANO, ERNESTO (KTPNAN)",           count: 797818 },
  { name: "BALLON, ROBERTO (IND)",                count: 2383607 },
  { name: "BINAY, ABBY (NPC)",                    count: 11768314 },
  { name: "BONDOC, JIMMY (PDPLBN)",               count: 10513907 },
  { name: "BONG REVILLA,RAMON, JR.(LAKAS)",       count: 11980023 },
  { name: "BOSITA, COLONEL (IND)",                count: 9786940 },
  { name: "BROSAS, ARLENE (MKBYN)",               count: 4336341 },
  { name: "CABONEGRO, ROY (DPP)",                 count: 380419 },
  { name: "CAPUYAN, ALLEN (PPP)",                 count: 814450 },
  { name: "CASIÑO, TEDDY (MKBYN)",                count: 4641398 },
  { name: "CASTRO, TEACHER FRANCE (MKBYN)",       count: 3664619 },
  { name: "CAYETANO, PIA (NP)",                   count: 14519660 },
  { name: "D'ANGELO, DAVID (BUNYOG)",             count: 604906 },
  { name: "DE ALBAN,ATTORNEY ANGELO (IND)",       count: 2549409 },
  { name: "DE GUZMAN, KA LEODY (PLM)",            count: 4128199 },
  { name: "DELA ROSA, BATO (PDPLBN)",             count: 20595325 },
  { name: "DORINGO, NANAY MIMI (MKBYN)",          count: 740263 },
  { name: "ESCOBAL, ARNEL (PM)",                  count: 726940 },
  { name: "ESPIRITU, LUKE (PLM)",                 count: 6467837 },
  { name: "FLORANDA, MODY PISTON (MKBYN)",        count: 550834 },
  { name: "GAMBOA, MARC LOUIE (IND)",             count: 567966 },
  { name: "GO, BONG GO (PDPLBN)",                 count: 26912697 },
  { name: "GONZALES, NORBERTO (PDSP)",            count: 984082 },
  { name: "HINLO, JAYVEE (PDPLBN)",               count: 7402175 },
  { name: "HONASAN, GRINGO (RP)",                 count: 6682302 },
  { name: "JOSE, RELLY JR. (KBL)",                count: 455178 },
  { name: "LACSON, PING (IND)",                   count: 15064155 },
  { name: "LAMBINO, RAUL (PDPLBN)",               count: 8302086 },
  { name: "LAPID, LITO (NPC)",                    count: 13333028 },
  { name: "LEE, MANOY WILBERT (AKSYON)",          count: 584004 },
  { name: "LIDASAN, AMIRAH (MKBYN)",              count: 555281 },
  { name: "MARCOLETA, RODANTE (IND)",             count: 15140342 },
  { name: "MARCOS, IMEE R. (NP)",                 count: 13258708 },
  { name: "MARQUEZ, NORMAN (IND)",                count: 1144404 },
  { name: "MARTINEZ, ERIC (IND)",                 count: 1027280 },
  { name: "MATA, DOC MARITES (IND)",              count: 5740765 },
  { name: "MATULA, ATTY. SONNY (WPP)",            count: 3857363 },
  { name: "MAZA, LIZA (MKBYN)",                   count: 3919895 },
  { name: "MENDOZA, HEIDI (IND)",                 count: 8741903 },
  { name: "MONTEMAYOR, JOEY (IND)",               count: 667758 },
  { name: "MUSTAPHA, SUBAIR (WPP)",               count: 385345 },
  { name: "OLIVAR, JOSE JESSIE (IND)",            count: 445539 },
  { name: "ONG, DOC WILLIE (AKSYON)",             count: 7353480 },
  { name: "PACQUIAO, MANNY PACMAN (PFP)",         count: 10360733 },
  { name: "PANGILINAN, KIKO (LP)",                count: 15290525 },
  { name: "QUERUBIN, ARIEL PORFIRIO (NP)",        count: 3938249 },
  { name: "QUIBOLOY, APOLLO (IND)",               count: 5667438 },
  { name: "RAMOS, DANILO (MKBYN)",                count: 4081605 },
  { name: "REVILLAME, WILLIE WIL (IND)",          count: 8539767 },
  { name: "RODRIGUEZ, ATTY. VIC (IND)",           count: 8371309 },
  { name: "SAHIDULLA, NUR-ANA (IND)",             count: 459889 },
  { name: "SALVADOR, PHILLIP IPE (PDPLBN)",       count: 10145595 },
  { name: "SOTTO, TITO (NPC)",                    count: 14795376 },
  { name: "TAPADO, MICHAEL BONGBONG (PM)",        count: 457324 },
  { name: "TOLENTINO, FRANCIS TOL (PFP)",         count: 7672929 },
  { name: "TULFO, BEN BITAG (IND)",               count: 12053096 },
  { name: "TULFO, ERWIN (LAKAS)",                 count: 17065384 },
  { name: "VALBUENA, MAR MANIBELA (IND)",         count: 608975 },
  { name: "VERCELES, LEANDRO (IND)",              count: 308369 },
  { name: "VILLAR, CAMILLE (NP)",                 count: 13578736 },
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