// Master object holding all star system entries
const classInfo = {
  D: "Class D: Dwarf, Moon, or Planetoid",
  G: "Class G: Volcanic, Uninhabitable",
  H: "Class H: Harsh, Generally Uninhabitable",
  J: "Class J: Gas Giant",
  K: "Class K: Habitable with Biospheres",
  L: "Class L: Marginally Habitable (vegetation, limited fauna)",
  M: "Class M: Minshara class, Fully Habitable",
  P: "Class P: Vapor Oceans, Exotic Atmosphere",
  T: "Class T: Gas Giant (Superjovian)",
  V: "Class V: Void Halo",
  Y: "Class Y: Demon Class, Toxic, Superheated",
  B: "BLACK HOLE: Gravitational Singularity",
};

function formatRender(layoutString) {
  return layoutString
    .split(/[-—–]/)

    .map(token => {
      const trimmed = token.trim();

      // Only wrap SINGLE-LETTER class codes
      if (trimmed.length === 1 && classInfo[trimmed]) {
        return `<span class="class-letter" data-tip="${classInfo[trimmed]}">${trimmed}</span>`;
      }

      // Otherwise return the token unchanged
      return trimmed;
    })
    .join(" — ");
}




const systems = {

//-------Additional Pages--------

  // --- Foundation ---
  MorrisAlekstonFoundation: {
    name: "Morris-Alekston Foundation",
    layout: "Headquarters  Aurum",
    fullEntry: "maf.html",
    summary: {
      region: "Upper Triad Quadrant",
      inhabited: ["Aurum IV"],
      notes: [
        "Morris-Alekston Foundation Headquarters",
      ]
    }
  },

  // --- Registry ---
  RegistryOfSentientBeings: {
    name: "Registry Of Sentient Beings",
    layout: "Headquarters  Regula",
    fullEntry: "rsb.html",
    summary: {
      region: "Central Organized Govornment",
      inhabited: ["Regula III"],
      notes: [
        "Offical Registry of Sentiend Beings in the Galaxy",
        "Don't make other plans for that day.",
      ]
    }
  },


  // --- AURUM SYSTEM ---
  Aurum: {
    name: "Aurum",
    layout: "G — H — L — M — T — T — Y — J",
    fullEntry: "aurum.html",
    summary: {
      region: "Upper Triad Quadrant",
      inhabited: ["Aurum IV"],
      notes: [
        "Home of the Morris–Alekston Foundation",
        "Y‑Class planet at system edge due to Wave displacement"
      ]
    }
  },

  // --- OGANESSON SYSTEM ---
  Oganesson: {
    name: "Oganesson",
    layout: "D — K — M — M — M — T — J — D",
    fullEntry: "oganesson.html",
    summary: {
      region: "Triad Core",
      inhabited: ["Three habitable worlds"],
      notes: [
        "Yellow Supergiant primary star",
        "Home of Tempes University",
        "Major scientific research center",
        "Orbital research station around the outer dwarf world"
      ]
    }
  },
// --- XYRAXIS SYSTEM ---
Xyraxis: {
  name: "Xyraxis",
  layout: "B —",
  fullEntry: "xyraxis.html",
  summary: {
    region: "Black Hole Region",
    inhabited: [],
    notes: [
      "Singularity with extreme gravitational forces",
      "Only black hole in the Tempes Galaxy",
      "Hazard radius affects nearby travel corridors"
    ]
  }
},
// --- KALIUM SYSTEM ---
Kalium: {
  name: "Kalium",
  layout: "D — G — J — M — M — P — J",
    fullEntry: "kalium.html",
  summary: {
    region: "Triad Industrial Belt",
    inhabited: ["One primary inhabited world"],
    notes: [
      "Technological and manufacturing center of the Triad",
      "Secondary world used for materials extraction",
      "Extreme security forces in effect",
      "Clearance required to enter the system"
    ]
  }
},
// --- ARGENTUM SYSTEM ---
Argentum: {
  name: "Argentum",
  layout: "D — L — J — J — D",
    fullEntry: "argentum.html",
  summary: {
    region: "Unstable Outer Reaches",
    inhabited: ["One barely habitable world"],
    notes: [
      "Spelljamming currents highly unstable",
      "System cut off from Corridor Network",
      "No database synchronization available",
      "Not patrolled by any recognized security",
      "Entry strongly discouraged — high risk"
    ]
  }
},
// --- FERRON SYSTEM ---
Ferron: {
  name: "Ferron",
  layout: "D — D — L — G — Y — Y — G — D",
    fullEntry: "ferron.html",
  summary: {
    region: "Former Industrial Heartland",
    inhabited: ["One barely habitable world"],
    notes: [
      "System-wide devastation from Wave interaction",
      "Most planets rendered dead or hazardous",
      "Wimu corporate rise and collapse originated here",
      "Remaining worlds heavily scavenged for scrap",
      "Population minimal — system effectively deserted"
    ]
  }
},

// --- REGULA SYSTEM ---
Regula: {
  name: "Regula",
  layout: "G — H — M — L — D — J — T — T",
    fullEntry: "regula.html",
  summary: {
    region: "Galactic Administrative Core",
    inhabited: ["One densely populated world"],
    notes: [
      "Seat of the galactic government",
      "Extremely regulated and bureaucratic system",
      "Museum of Tempes located on primary world",
      "Home of the Galactic Registry of Sentient Beings",
      "All documentation must be in order to avoid delays"
    ]
  }
},

// --- ROCK OF BRAL SYSTEM ---
RockOfBral: {
  name: "Rock Of Bral",
  layout: "K —",
   fullEntry: "rockofbral.html",
  summary: {
    region: "Independent Corridor Crossroads",
    inhabited: ["Medium-sized asteroid settlement"],
    notes: [
      "Major junction for multiple corridor routes",
      "Former trading hub now dominated by criminal factions",
      "Pirate and organized crime presence pervasive",
      "Primary transit point for foodstuff shipments",
      "Extreme caution advised when approaching system"
    ]
  }
},

// --- HYGENIUM SYSTEM ---
Hygenium: {
  name: "Hygenium",
  layout: "D — G — M — M — M — T — J",
    fullEntry: "hygenium.html",
  summary: {
    region: "Isolated Agrarian Sector",
    inhabited: ["One primary populated world (Hyg. IV)"],
    notes: [
      "Agriculturally rich worlds recorded prior to link loss",
      "Assumed active due to foodstuffs routed through Rock Of Bral",
      "Direct approach attempts blocked by Rock Of Bral representatives",
      "System remains unsynchronized with Galactic Database",
      "Long-term status unverifiable without corridor access"
    ]
  }
},
// --- NATRIUM SYSTEM ---
Natrium: {
  name: "Natrium",
  layout: "G — M — J — D",
  fullEntry: "natrium.html",
  summary: {
    region: "Maritime Outer Systems",
    inhabited: ["One primarily oceanic world"],
    notes: [
      "Surface dominated by global water coverage",
      "Population centered around maritime culture",
      "Low strategic value — minimal conflict history",
      "mostly harmless"
    ]
  }
},

// --- CUPRUM SYSTEM ---
Cuprum: {
  name: "Cuprum",
  layout: "Y —",
  fullEntry: "cuprum.html",
  summary: {
    region: "Heavy Flux Exclusion Zone",
    inhabited: ["No habitable worlds"],
    notes: [
      "Former A‑Z Industries testing site",
      "System now fully enveloped by Heavy Flux",
      "All approach vectors destabilize on entry",
      "No corridor access or sensor penetration",
      "Do not attempt approach under any circumstances"
    ]
  }
},

// --- PLUMBIA SYSTEM ---
Plumbia: {
  name: "Plumbia",
  layout: "Y — Y — Y",
  fullEntry: "plumbia.html",
  summary: {
    region: "Heavy Flux Origin Zone",
    inhabited: ["No habitable worlds"],
    notes: [
      "Former forest worlds prior to Flux emergence",
      "System now fully encased in extremely dense Heavy Flux",
      "All sensor, corridor, and visual contact impossible",
      "Flux behavior uniquely unstable within this system",
      "Do not attempt approach under any circumstances"
    ]
  }
},

TriadArcway: {
    type: "corridor",

  name: "Triad Arcway",
  connects: ["Triad", "Regula", "Rock Of Bral", "Argentum"],

  summary: {
    region: "Outer Eastern Spiral Arm",
    inhabited: ["Corridor - NA"],
    notes: [
      "One of the earliest corridors established after FLASH gate creation",
      "Route geometry follows natural galactic curvature and Xyraxis influence",
      "Pilots must maintain continuous manual control throughout transit",
      "Heavy traffic between Regula and the Triad",
      "Branch to Argentum lightly used and minimally patrolled"
    ]
  },

 layout: `Triad  —  Regula  —  Rock of Bral
                               ↳ Argentum`,
           
},


ArgentumSpur: {
    type: "corridor",

  name: "Argentum Spur",
  connects: ["Regula", "Argentum"],

  summary: {
    region: "Southern Wastes",
    inhabited: ["Corridor - NA"],
    notes: [
      "The only corridor that approaches the Argentum system",
      "Seldom used due to Argentum's isolation and lack of synchronized database access",
      "Normal-space travel from the nearest FLASH gate is so vast that trade is unprofitable",
      "Maintained primarily for emergency access and rare scientific missions"
    ]
  },

  layout: `Regula  —  Argentum`,
},


BralLine: {
    type: "corridor",

  name: "Bral Line",
  connects: ["Natrium", "Rock of Bral", "Regula Bypass", "Triad Arcway"],

  summary: {
    region: "Western Central Line",
    inhabited: ["Corridor - NA"],
    notes: [
      "Moderately travelled corridor connecting Natrium to the Rock of Bral",
      "Regula Bypass allows travel toward Regula or onward to the Triad Arcway",
      "Watch for interceptors at the Rock of Bral FLASH gate exit",
      "Traffic density increases near the Bral junction due to irregular patrol patterns"
    ]
  },

  layout: `Natrium  —  Rock of Bral
                              ↳ Regula Bypass  —  Triad Arcway`,
},
HygeniumDescent: {
    type: "corridor",

  name: "Hygenium Descent",
  connects: ["Rock of Bral", "Hygenium"],

  summary: {
    region: "The Space Between",
    inhabited: ["Corridor - NA"],
    notes: [
      "Mostly abandoned corridor connecting Rock of Bral to the Hygenium system",
      "Vast stretches of normal space separate the FLASH gate from Hygenium",
      "The region is patrolled by pirates and thieves who exploit the isolation",
      "Corridor travel is not advised except under escort or emergency conditions"
    ]
  },

  layout: `Rock of Bral  —  Hygenium`,
},

ZenithCorridor: {
    type: "corridor",

  name: "Zenith Corridor",
  connects: ["Natrium", "Triad System"],

  summary: {
    region: "Northern Expanse",
    inhabited: ["Corridor - NA"],
    notes: [
      "Heavily affected by gravitational distortions from the Xyraxis Black Hole",
      "Pilots must remain alert at all times due to unpredictable flux currents",
      "WARNING: Exit corridor immediately at the Natrium Northern FLASH Gate",
      "Corridor merges into the closed Heavy Corridor beyond the Natrium gate",
      "Heavy Corridor terminates at the Heavy Flux — DO NOT ENTER under any circumstances"
    ]
  },

  layout: `Heavy Corridor X Natrium  —  Triad System`,
},
//-----REGULA BYPASS
RegulaBypass: {
    type: "corridor",

    name: "Regula Bypass",
    connects: ["Natrium", "Rock Of Bral", "Regula", "Argentum", "Triad"],

    summary: {
      region: "Central Corridor",
      inhabited: ["Corridor - NA"],
      notes: [
        "A spur off the Bral Line to ease navigation to and from Natrium",
        "Connects directly to the Triad Arcway",
        "Inline FLASH Gates allow departure or continuous travel",
        "Heavy traffic between Regula and the Triad",
        "Branch to Argentum lightly used and minimally patrolled"
      ]
    },

    layout: `Rock of Bral  —  Regula  —  Triad
                                            ↳ Argentum`,
},   // <-- THIS COMMA WAS MISSING




// --- AZ Void Halo
AZINDUSTRIES: {
  name: "A-Z Industries",
  layout: "V-",
  fullEntry: "az.html",
  summary: {
    region: "Void Halo formerly A-Z Industries",
    inhabited: ["No habitable worlds"],
    notes: [
      "Former site of A-Z Industries complex.",
      "Sector is impenetrable.  No navigation is possible.",
      "Pilots are directed to avoid this area."
    ]
  }
},


};
