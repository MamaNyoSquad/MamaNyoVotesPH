let senatorialResults = [
  { name: "ABALOS, BENHUR (PFP)",                 count: 11353272 },
  { name: "ADONIS, JEROME (MKBYN)",               count: 764455 },
  { name: "AMAD, WILSON (IND)",                   count: 604126 },
  { name: "ANDAMO, NARS ALYN (MKBYN)",            count: 814781 },
  { name: "AQUINO, BAM (KNP)",                    count: 20635411 },
  { name: "ARAMBULO, RONNEL (MKBYN)",             count: 3799476 },
  { name: "ARELLANO, ERNESTO (KTPNAN)",           count: 786204 },
  { name: "BALLON, ROBERTO (IND)",                count: 2357160 },
  { name: "BINAY, ABBY (NPC)",                    count: 11569206 },
  { name: "BONDOC, JIMMY (PDPLBN)",               count: 10352514 },
  { name: "BONG REVILLA,RAMON, JR.(LAKAS)",       count: 11788216 },
  { name: "BOSITA, COLONEL (IND)",                count: 9676724 },
  { name: "BROSAS, ARLENE (MKBYN)",               count: 4293799 },
  { name: "CABONEGRO, ROY (DPP)",                 count: 374562 },
  { name: "CAPUYAN, ALLEN (PPP)",                 count: 801052 },
  { name: "CASIÑO, TEDDY (MKBYN)",                count: 4596041 },
  { name: "CASTRO, TEACHER FRANCE (MKBYN)",       count: 3626586 },
  { name: "CAYETANO, PIA (NP)",                   count: 14306242 },
  { name: "D'ANGELO, DAVID (BUNYOG)",             count: 596481 },
  { name: "DE ALBAN,ATTORNEY ANGELO (IND)",       count: 2521968 },
  { name: "DE GUZMAN, KA LEODY (PLM)",            count: 4085653 },
  { name: "DELA ROSA, BATO (PDPLBN)",             count: 20265589 },
  { name: "DORINGO, NANAY MIMI (MKBYN)",          count: 729999 },
  { name: "ESCOBAL, ARNEL (PM)",                  count: 716172 },
  { name: "ESPIRITU, LUKE (PLM)",                 count: 6403571 },
  { name: "FLORANDA, MODY PISTON (MKBYN)",        count: 542626 },
  { name: "GAMBOA, MARC LOUIE (IND)",             count: 559810 },
  { name: "GO, BONG GO (PDPLBN)",                 count: 26481889 },
  { name: "GONZALES, NORBERTO (PDSP)",            count: 970462 },
  { name: "HINLO, JAYVEE (PDPLBN)",               count: 7292645 },
  { name: "HONASAN, GRINGO (RP)",                 count: 6592887 },
  { name: "JOSE, RELLY JR. (KBL)",                count: 447802 },
  { name: "LACSON, PING (IND)",                   count: 14856153 },
  { name: "LAMBINO, RAUL (PDPLBN)",               count: 8164911 },
  { name: "LAPID, LITO (NPC)",                    count: 13118714 },
  { name: "LEE, MANOY WILBERT (AKSYON)",          count: 575844 },
  { name: "LIDASAN, AMIRAH (MKBYN)",              count: 544476 },
  { name: "MARCOLETA, RODANTE (IND)",             count: 14905640 },
  { name: "MARCOS, IMEE R. (NP)",                 count: 13035902 },
  { name: "MARQUEZ, NORMAN (IND)",                count: 1130101 },
  { name: "MARTINEZ, ERIC (IND)",                 count: 1012086 },
  { name: "MATA, DOC MARITES (IND)",              count: 5667098 },
  { name: "MATULA, ATTY. SONNY (WPP)",            count: 3818675 },
  { name: "MAZA, LIZA (MKBYN)",                   count: 3880231 },
  { name: "MENDOZA, HEIDI (IND)",                 count: 8650724 },
  { name: "MONTEMAYOR, JOEY (IND)",               count: 658118 },
  { name: "MUSTAPHA, SUBAIR (WPP)",               count: 369640 },
  { name: "OLIVAR, JOSE JESSIE (IND)",            count: 438479 },
  { name: "ONG, DOC WILLIE (AKSYON)",             count: 7268754 },
  { name: "PACQUIAO, MANNY PACMAN (PFP)",         count: 10207609 },
  { name: "PANGILINAN, KIKO (LP)",                count: 15087601 },
  { name: "QUERUBIN, ARIEL PORFIRIO (NP)",        count: 3892358 },
  { name: "QUIBOLOY, APOLLO (IND)",               count: 5577353 },
  { name: "RAMOS, DANILO (MKBYN)",                count: 4036791 },
  { name: "REVILLAME, WILLIE WIL (IND)",          count: 8413483 },
  { name: "RODRIGUEZ, ATTY. VIC (IND)",           count: 8240751 },
  { name: "SAHIDULLA, NUR-ANA (IND)",             count: 449014 },
  { name: "SALVADOR, PHILLIP IPE (PDPLBN)",       count: 9979031 },
  { name: "SOTTO, TITO (NPC)",                    count: 14596181 },
  { name: "TAPADO, MICHAEL BONGBONG (PM)",        count: 449049 },
  { name: "TOLENTINO, FRANCIS TOL (PFP)",         count: 7563756 },
  { name: "TULFO, BEN BITAG (IND)",               count: 11886081 },
  { name: "TULFO, ERWIN (LAKAS)",                 count: 16814387 },
  { name: "VALBUENA, MAR MANIBELA (IND)",         count: 600228 },
  { name: "VERCELES, LEANDRO (IND)",              count: 304056 },
  { name: "VILLAR, CAMILLE (NP)",                 count: 13357784 },
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