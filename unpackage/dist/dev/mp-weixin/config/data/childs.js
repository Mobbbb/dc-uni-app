"use strict";
const CHILDS_CODE_MAP = {
  "c000": {
    "name": "男主",
    "star": "",
    "attribute": "",
    "id": "c000",
    "variants": {
      "10": {
        "title": "Mysterious",
        "id": "10"
      },
      "11": {
        "title": "Girl's School",
        "id": "11"
      },
      "12": {
        "title": "Swimsuit",
        "id": "12"
      },
      "13": {
        "title": "Summer Pants",
        "id": "13"
      },
      "14": {
        "title": "Dress",
        "id": "14"
      },
      "15": {
        "title": "",
        "id": "15"
      },
      "16": {
        "title": "",
        "id": "16"
      },
      "17": {
        "title": "",
        "id": "17"
      },
      "18": {
        "title": "",
        "id": "18"
      },
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c001": {
    "name": "莫娜",
    "star": "3",
    "attribute": "D",
    "id": "c001",
    "variants": {
      "10": {
        "title": "未知",
        "id": "10"
      },
      "11": {
        "title": "未知",
        "id": "11"
      },
      "12": {
        "title": "Seaside",
        "id": "12"
      },
      "14": {
        "title": "Teacher",
        "id": "14"
      },
      "16": {
        "title": "Swimsuit",
        "id": "16"
      },
      "17": {
        "title": "Petit",
        "id": "17"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Battlesuit",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c002": {
    "name": "丽萨",
    "star": "3",
    "attribute": "W",
    "id": "c002",
    "variants": {
      "10": {
        "title": "Seaside",
        "id": "10"
      },
      "11": {
        "title": "Student",
        "id": "11"
      },
      "12": {
        "title": "Summer Camp",
        "id": "12"
      },
      "00": {
        "title": "",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Battlesuit",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c003": {
    "name": "达比",
    "star": "3",
    "attribute": "F",
    "id": "c003",
    "variants": {
      "10": {
        "title": "Seaside",
        "id": "10"
      },
      "11": {
        "title": "Student",
        "id": "11"
      },
      "12": {
        "title": "封面",
        "id": "12"
      },
      "13": {
        "title": "Summer Dream",
        "id": "13"
      },
      "14": {
        "title": "Lucifer",
        "id": "14"
      },
      "15": {
        "title": "Satan",
        "id": "15"
      },
      "16": {
        "title": "Crimson",
        "id": "16"
      },
      "17": {
        "title": "Mini",
        "id": "17"
      },
      "18": {
        "title": "Cheerleader",
        "id": "18"
      },
      "89": {
        "title": "Lucifer",
        "id": "89"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Battlesuit",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c004": {
    "name": "处容",
    "star": "3",
    "attribute": "L",
    "id": "c004",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Neighborly",
        "id": "01"
      },
      "02": {
        "title": "Warmharted",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c005": {
    "name": "马尔斯",
    "star": "5",
    "attribute": "W",
    "id": "c005",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Zooming",
        "id": "01"
      },
      "02": {
        "title": "Rampaging",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c007": {
    "name": "普伊尼斯",
    "star": "3",
    "attribute": "F",
    "id": "c007",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hot",
        "id": "01"
      },
      "02": {
        "title": "Fiery",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c008": {
    "name": "普利卡",
    "star": "4",
    "attribute": "L",
    "id": "c008",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Warrior",
        "id": "01"
      },
      "02": {
        "title": "Militant",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c009": {
    "name": "辛图勒",
    "star": "4",
    "attribute": "F",
    "id": "c009",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Mercenary",
        "id": "01"
      },
      "02": {
        "title": "Fixer",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c010": {
    "name": "Demeter",
    "star": "3",
    "attribute": "F",
    "id": "c010",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Bluffing",
        "id": "01"
      },
      "02": {
        "title": "Vain",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c011": {
    "name": "Deino",
    "star": "3",
    "attribute": "W",
    "id": "c011",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Volunteer",
        "id": "01"
      },
      "02": {
        "title": "Devoted",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c012": {
    "name": "Agamemnon",
    "star": "4",
    "attribute": "G",
    "id": "c012",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hotblooded",
        "id": "01"
      },
      "02": {
        "title": "Final",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c013": {
    "name": "Artemis",
    "star": "4",
    "attribute": "D",
    "id": "c013",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Moonless",
        "id": "01"
      },
      "02": {
        "title": "Lunar",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c014": {
    "name": "Astrea",
    "star": "5",
    "attribute": "G",
    "id": "c014",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Starry",
        "id": "01"
      },
      "02": {
        "title": "Galaxy",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c015": {
    "name": "Helena",
    "star": "",
    "attribute": "",
    "id": "c015",
    "variants": {
      "01": {
        "title": "Seasonal",
        "id": "01"
      }
    }
  },
  "c017": {
    "name": "Cu Sith",
    "star": "3",
    "attribute": "L",
    "id": "c017",
    "variants": {
      "00": {
        "title": "Puppy",
        "id": "00"
      },
      "01": {
        "title": "Guard Dog",
        "id": "01"
      },
      "02": {
        "title": "Defenser",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c018": {
    "name": "Korra",
    "star": "4",
    "attribute": "G",
    "id": "c018",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Little",
        "id": "01"
      },
      "02": {
        "title": "Immature",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c019": {
    "name": "Eris",
    "star": "3",
    "attribute": "G",
    "id": "c019",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Frenzied",
        "id": "01"
      },
      "02": {
        "title": "Raging",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c020": {
    "name": "Fortuna",
    "star": "4",
    "attribute": "F",
    "id": "c020",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dangerous",
        "id": "01"
      },
      "02": {
        "title": "Gambling",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c022": {
    "name": "玛雅维尔",
    "star": "4",
    "attribute": "W",
    "id": "c022",
    "variants": {
      "10": {
        "title": "Maid Mood",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lazy",
        "id": "01"
      },
      "02": {
        "title": "Woeful",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c023": {
    "name": "Camineu",
    "star": "",
    "attribute": "",
    "id": "c023",
    "variants": {
      "00": {
        "title": "",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c026": {
    "name": "Eos",
    "star": "4",
    "attribute": "L",
    "id": "c026",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Delightful",
        "id": "01"
      },
      "02": {
        "title": "Delirious",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c027": {
    "name": "Cynthia",
    "star": "3",
    "attribute": "D",
    "id": "c027",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Awakened",
        "id": "01"
      },
      "02": {
        "title": "Genuine",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c028": {
    "name": "Leda",
    "star": "4",
    "attribute": "L",
    "id": "c028",
    "variants": {
      "10": {
        "title": "Day Dream",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "type": "S"
  },
  "c029": {
    "name": "Selene",
    "star": "4",
    "attribute": "G",
    "id": "c029",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Night",
        "id": "01"
      },
      "02": {
        "title": "Lunar",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c030": {
    "name": "Maiden Detective",
    "star": "4",
    "attribute": "L",
    "id": "c030",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Roaming",
        "id": "01"
      },
      "02": {
        "title": "Tom-Boy",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c031": {
    "name": "Freyja",
    "star": "3",
    "attribute": "G",
    "id": "c031",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Innocent",
        "id": "01"
      },
      "02": {
        "title": "Pure",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c032": {
    "name": "Alecto",
    "star": "3",
    "attribute": "D",
    "id": "c032",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lively",
        "id": "01"
      },
      "02": {
        "title": "Non-Stop",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c033": {
    "name": "Diana",
    "star": "3",
    "attribute": "G",
    "id": "c033",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Tranquil",
        "id": "01"
      },
      "02": {
        "title": "Reclusive",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c034": {
    "name": "Mnemosyne",
    "star": "3",
    "attribute": "W",
    "id": "c034",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lazy",
        "id": "01"
      },
      "02": {
        "title": "Haughty",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c035": {
    "name": "Persephone",
    "star": "4",
    "attribute": "D",
    "id": "c035",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dawn",
        "id": "01"
      },
      "02": {
        "title": "Bound",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c036": {
    "name": "Hermes",
    "star": "5",
    "attribute": "F",
    "id": "c036",
    "variants": {
      "10": {
        "title": "Collector",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Squandering",
        "id": "01"
      },
      "02": {
        "title": "Buyer",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c037": {
    "name": "Judas",
    "star": "3",
    "attribute": "F",
    "id": "c037",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Dark Lord",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c038": {
    "name": "Calypso",
    "star": "3",
    "attribute": "W",
    "id": "c038",
    "variants": {
      "10": {
        "title": "Kr Base E",
        "id": "10"
      },
      "11": {
        "title": "Kr Awaken S",
        "id": "11"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Spiteful",
        "id": "01"
      },
      "02": {
        "title": "Charming",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c039": {
    "name": "莫里尤",
    "star": "4",
    "attribute": "D",
    "id": "c039",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Furious",
        "id": "01"
      },
      "02": {
        "title": "Devout",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c040": {
    "name": "Shamash",
    "star": "3",
    "attribute": "F",
    "id": "c040",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lawful",
        "id": "01"
      },
      "02": {
        "title": "Law-Abiding",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c041": {
    "name": "Tiamat",
    "star": "3",
    "attribute": "F",
    "id": "c041",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Night",
        "id": "01"
      },
      "02": {
        "title": "Abyssal",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c043": {
    "name": "Hera",
    "star": "5",
    "attribute": "G",
    "id": "c043",
    "variants": {
      "10": {
        "title": "Shooting Star",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Conceited",
        "id": "01"
      },
      "02": {
        "title": "Egotistical",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c044": {
    "name": "Pantheon",
    "star": "5",
    "attribute": "D",
    "id": "c044",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Aimless",
        "id": "01"
      },
      "02": {
        "title": "Vagabond",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c045": {
    "name": "亚里亚",
    "star": "5",
    "attribute": "L",
    "id": "c045",
    "variants": {
      "10": {
        "title": "Christmas",
        "id": "10"
      },
      "11": {
        "title": "Highlight",
        "id": "11"
      },
      "12": {
        "title": "Break Time",
        "id": "12"
      },
      "13": {
        "title": "Lovely Star",
        "id": "13"
      },
      "89": {
        "title": "Highlight",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Singing",
        "id": "01"
      },
      "02": {
        "title": "Delightful",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c047": {
    "name": "Hestia",
    "star": "5",
    "attribute": "F",
    "id": "c047",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Smoldering",
        "id": "01"
      },
      "02": {
        "title": "White Flame",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c048": {
    "name": "Neamhain",
    "star": "4",
    "attribute": "D",
    "id": "c048",
    "variants": {
      "10": {
        "title": "Role of the Nurse",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Melancholy",
        "id": "01"
      },
      "02": {
        "title": "Love-Hate",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c049": {
    "name": "Maat",
    "star": "5",
    "attribute": "L",
    "id": "c049",
    "variants": {
      "10": {
        "title": "Abyssal",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lost",
        "id": "01"
      },
      "02": {
        "title": "Blind Faith",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c050": {
    "name": "Od",
    "star": "",
    "attribute": "",
    "id": "c050",
    "variants": {
      "02": {
        "title": "Tyrannical",
        "id": "02"
      },
      "01": {
        "title": "Tyrannical",
        "id": "01"
      }
    }
  },
  "c051": {
    "name": "弗雷",
    "star": "5",
    "attribute": "D",
    "id": "c051",
    "variants": {
      "12": {
        "title": "Role of Tybalt",
        "id": "12"
      },
      "21": {
        "title": "Cursed Doll",
        "id": "21"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Bad Boy",
        "id": "02"
      },
      "c383_10": {
        "title": "Toxic",
        "id": "c383_10"
      },
      "c383_01": {
        "title": "Resurrected",
        "id": "c383_01"
      },
      "c383_02": {
        "title": "Unleashed",
        "id": "c383_02"
      },
      "sc383_01": {
        "title": "温泉2",
        "id": "sc383_01"
      }
    },
    "type": "G"
  },
  "c052": {
    "name": "Berit",
    "star": "3",
    "attribute": "L",
    "id": "c052",
    "variants": {
      "01": {
        "title": "Dramatic",
        "id": "01"
      },
      "02": {
        "title": "Deceptive",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c053": {
    "name": "Metis",
    "star": "5",
    "attribute": "D",
    "id": "c053",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "11": {
        "title": "",
        "id": "11"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hesitant",
        "id": "01"
      },
      "02": {
        "title": "Clairvoyant",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c054": {
    "name": "Legend",
    "star": "3",
    "attribute": "D",
    "id": "c054",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Guardian",
        "id": "01"
      },
      "02": {
        "title": "Heroic",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c055": {
    "name": "Minerva",
    "star": "5",
    "attribute": "L",
    "id": "c055",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c056": {
    "name": "Jeanne d'Arc",
    "star": "3",
    "attribute": "W",
    "id": "c056",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Martyr",
        "id": "01"
      },
      "02": {
        "title": "Sacrificial",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c057": {
    "name": "Lan Fei",
    "star": "5",
    "attribute": "D",
    "id": "c057",
    "variants": {
      "10": {
        "title": "Night of Drinking",
        "id": "10"
      },
      "87": {
        "title": "Night of Drinking",
        "id": "87"
      },
      "88": {
        "title": "Blackstar",
        "id": "88"
      },
      "89": {
        "title": "",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Blackstar",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c058": {
    "name": "Nirrti",
    "star": "5",
    "attribute": "L",
    "id": "c058",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Exorcist",
        "id": "01"
      },
      "02": {
        "title": "Rakshasa",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c060": {
    "name": "Tisiphone",
    "star": "4",
    "attribute": "G",
    "id": "c060",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Counterattack",
        "id": "01"
      },
      "02": {
        "title": "Avenger",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c061": {
    "name": "Siren",
    "star": "5",
    "attribute": "G",
    "id": "c061",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Underground",
        "id": "01"
      },
      "02": {
        "title": "Midnight",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c062": {
    "name": "欧若巴",
    "star": "4",
    "attribute": "G",
    "id": "c062",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Fragrant",
        "id": "01"
      },
      "02": {
        "title": "Alluring",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c063": {
    "name": "Freesia",
    "star": "4",
    "attribute": "F",
    "id": "c063",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Timid",
        "id": "01"
      },
      "02": {
        "title": "Speculative",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c064": {
    "name": "Medusa",
    "star": "5",
    "attribute": "D",
    "id": "c064",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Reigning",
        "id": "01"
      },
      "02": {
        "title": "Conquering",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c065": {
    "name": "Erato",
    "star": "4",
    "attribute": "L",
    "id": "c065",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Blooming",
        "id": "01"
      },
      "02": {
        "title": "Profuse",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c066": {
    "name": "Aten",
    "star": "4",
    "attribute": "D",
    "id": "c066",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Self-Righteous",
        "id": "01"
      },
      "02": {
        "title": "Machiavellian",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c067": {
    "name": "Thanatos",
    "star": "5",
    "attribute": "W",
    "id": "c067",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Unknown",
        "id": "01"
      },
      "02": {
        "title": "Trancendent",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c068": {
    "name": "Ambrosia",
    "star": "4",
    "attribute": "G",
    "id": "c068",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Challenger",
        "id": "01"
      },
      "02": {
        "title": "Gourmet",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c069": {
    "name": "Ptah",
    "star": "3",
    "attribute": "G",
    "id": "c069",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Restorative",
        "id": "01"
      },
      "02": {
        "title": "Tuning",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c070": {
    "name": "Yui",
    "star": "4",
    "attribute": "W",
    "id": "c070",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Future",
        "id": "01"
      },
      "02": {
        "title": "Universal",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c072": {
    "name": "Fenrir",
    "star": "4",
    "attribute": "F",
    "id": "c072",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Explorer",
        "id": "01"
      },
      "02": {
        "title": "Shadow",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c073": {
    "name": "Navi",
    "star": "5",
    "attribute": "G",
    "id": "c073",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Self-Deprecating",
        "id": "01"
      },
      "02": {
        "title": "Hollow",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c074": {
    "name": "Quirinus",
    "star": "4",
    "attribute": "W",
    "id": "c074",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Cheerful",
        "id": "01"
      },
      "02": {
        "title": "Passionate",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c081": {
    "name": "Themis",
    "star": "3",
    "attribute": "L",
    "id": "c081",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Broken",
        "id": "01"
      },
      "02": {
        "title": "Drifting",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c082": {
    "name": "Calchas",
    "star": "4",
    "attribute": "L",
    "id": "c082",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Artisanal",
        "id": "01"
      },
      "02": {
        "title": "Prophetic",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c083": {
    "name": "Neith",
    "star": "4",
    "attribute": "F",
    "id": "c083",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Battlefield",
        "id": "01"
      },
      "02": {
        "title": "Tactician",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c085": {
    "name": "Paris",
    "star": "3",
    "attribute": "G",
    "id": "c085",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Malicious",
        "id": "01"
      },
      "02": {
        "title": "Judge",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c086": {
    "name": "Goga",
    "star": "3",
    "attribute": "W",
    "id": "c086",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Seasoned",
        "id": "01"
      },
      "02": {
        "title": "Flavored",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c087": {
    "name": "Ninurta",
    "star": "",
    "attribute": "",
    "id": "c087",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Pure-White",
        "id": "01"
      },
      "02": {
        "title": "Brilliant",
        "id": "02"
      }
    }
  },
  "c090": {
    "name": "Vulcan",
    "star": "3",
    "attribute": "W",
    "id": "c090",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Resurgent",
        "id": "01"
      },
      "02": {
        "title": "Reviving",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c091": {
    "name": "Myra",
    "star": "5",
    "attribute": "F",
    "id": "c091",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Guardian",
        "id": "01"
      },
      "02": {
        "title": "Loyal",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c092": {
    "name": "Eames",
    "star": "5",
    "attribute": "F",
    "id": "c092",
    "variants": {
      "01": {
        "title": "Hygienic",
        "id": "01"
      },
      "02": {
        "title": "Fastidious",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c095": {
    "name": "Vesta",
    "star": "3",
    "attribute": "F",
    "id": "c095",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "HotBlooded",
        "id": "01"
      },
      "02": {
        "title": "Passionate",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c099": {
    "name": "Melpomene",
    "star": "4",
    "attribute": "D",
    "id": "c099",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Bored",
        "id": "01"
      },
      "02": {
        "title": "Roaring",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c101": {
    "name": "Syrinx",
    "star": "5",
    "attribute": "G",
    "id": "c101",
    "variants": {
      "10": {
        "title": "Miracle",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Naive",
        "id": "01"
      },
      "02": {
        "title": "Praising",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c106": {
    "name": "Medeia",
    "star": "3",
    "attribute": "D",
    "id": "c106",
    "variants": {
      "01": {
        "title": "Vengeful",
        "id": "01"
      },
      "02": {
        "title": "Plotting",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c107": {
    "name": "Apollo",
    "star": "3",
    "attribute": "G",
    "id": "c107",
    "variants": {
      "10": {
        "title": "Atré Akihabara's mascot style",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Glittering",
        "id": "01"
      },
      "02": {
        "title": "Admirable",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c109": {
    "name": "阿瑞图萨",
    "star": "3",
    "attribute": "G",
    "id": "c109",
    "variants": {
      "01": {
        "title": "Acoustic",
        "id": "01"
      },
      "02": {
        "title": "Full Bloom",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c110": {
    "name": "Flins",
    "star": "4",
    "attribute": "F",
    "id": "c110",
    "variants": {
      "10": {
        "title": "Christmas",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Persistent",
        "id": "01"
      },
      "02": {
        "title": "Venturer",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c112": {
    "name": "Elias",
    "star": "3",
    "attribute": "D",
    "id": "c112",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Truth-Seeker",
        "id": "01"
      },
      "02": {
        "title": "Sage",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c115": {
    "name": "Sonnet",
    "star": "4",
    "attribute": "W",
    "id": "c115",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Sorrowful",
        "id": "01"
      },
      "02": {
        "title": "Reconciliatory",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c116": {
    "name": "Pluto",
    "star": "",
    "attribute": "",
    "id": "c116",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Perceptive",
        "id": "01"
      },
      "02": {
        "title": "Prima",
        "id": "02"
      }
    }
  },
  "c117": {
    "name": "Yaga",
    "star": "4",
    "attribute": "W",
    "id": "c117",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Loyal",
        "id": "01"
      },
      "02": {
        "title": "Pious",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c120": {
    "name": "Flora",
    "star": "4",
    "attribute": "G",
    "id": "c120",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Meadow",
        "id": "01"
      },
      "02": {
        "title": "Free",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c121": {
    "name": "Muse",
    "star": "4",
    "attribute": "G",
    "id": "c121",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Night",
        "id": "01"
      },
      "02": {
        "title": "Thundering",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c122": {
    "name": "萨马尔",
    "star": "5",
    "attribute": "F",
    "id": "c122",
    "variants": {
      "10": {
        "title": "小兔子萨马尔",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Materialistic",
        "id": "01"
      },
      "02": {
        "title": "Covetous",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c123": {
    "name": "Baphomet",
    "star": "3",
    "attribute": "W",
    "id": "c123",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Creative",
        "id": "01"
      },
      "02": {
        "title": "Cheerful",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c124": {
    "name": "Eve",
    "star": "5",
    "attribute": "W",
    "id": "c124",
    "variants": {
      "10": {
        "title": "Cyan Rose",
        "id": "10"
      },
      "11": {
        "title": "Christmas",
        "id": "11"
      },
      "12": {
        "title": "Racia Suit",
        "id": "12"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Forbidden",
        "id": "01"
      },
      "02": {
        "title": "Original Sin",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c125": {
    "name": "Attis",
    "star": "5",
    "attribute": "G",
    "id": "c125",
    "variants": {
      "10": {
        "title": "Romantic",
        "id": "10"
      },
      "89": {
        "title": "Romantic",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Comedy",
        "id": "01"
      },
      "02": {
        "title": "Sworn Blade Hero",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c126": {
    "name": "Salmacis",
    "star": "3",
    "attribute": "L",
    "id": "c126",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Your",
        "id": "01"
      },
      "02": {
        "title": "Exclusive",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c127": {
    "name": "Bastet",
    "star": "5",
    "attribute": "L",
    "id": "c127",
    "variants": {
      "10": {
        "title": "Second Coming",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Wild",
        "id": "01"
      },
      "02": {
        "title": "Phantom Night",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c128": {
    "name": "Galatea",
    "star": "",
    "attribute": "",
    "id": "c128",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Fragmented",
        "id": "01"
      },
      "02": {
        "title": "Weird",
        "id": "02"
      }
    }
  },
  "c129": {
    "name": "Nike",
    "star": "",
    "attribute": "",
    "id": "c129",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Honorable",
        "id": "01"
      },
      "02": {
        "title": "Empress",
        "id": "02"
      }
    }
  },
  "c130": {
    "name": "Genius",
    "star": "3",
    "attribute": "D",
    "id": "c130",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Strategic",
        "id": "01"
      },
      "02": {
        "title": "Master",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c131": {
    "name": "Osiris",
    "star": "",
    "attribute": "",
    "id": "c131",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Returned",
        "id": "01"
      },
      "02": {
        "title": "Lion",
        "id": "02"
      }
    }
  },
  "c132": {
    "name": "木基佬",
    "star": "5",
    "attribute": "G",
    "id": "c132",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Composed",
        "id": "01"
      },
      "02": {
        "title": "Aesthetic",
        "id": "02"
      },
      "c373_01": {
        "title": "Ruffian",
        "id": "c373_01"
      },
      "c373_02": {
        "title": "Black-Winged Messenger",
        "id": "c373_02"
      },
      "sc373_01": {
        "title": "温泉2",
        "id": "sc373_01"
      }
    },
    "type": "J"
  },
  "c133": {
    "name": "Titania",
    "star": "4",
    "attribute": "L",
    "id": "c133",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Armageddon",
        "id": "01"
      },
      "02": {
        "title": "Showdown",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c134": {
    "name": "Mentes",
    "star": "5",
    "attribute": "L",
    "id": "c134",
    "variants": {
      "88": {
        "title": "",
        "id": "88"
      },
      "00": {
        "title": "",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c135": {
    "name": "Valkyrie",
    "star": "3",
    "attribute": "D",
    "id": "c135",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Warrior",
        "id": "01"
      },
      "02": {
        "title": "Loner",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c139": {
    "name": "Pomona",
    "star": "4",
    "attribute": "L",
    "id": "c139",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Floral",
        "id": "01"
      },
      "02": {
        "title": "Hidden",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c140": {
    "name": "Nodens",
    "star": "",
    "attribute": "",
    "id": "c140",
    "variants": {
      "01": {
        "title": "Guarding",
        "id": "01"
      }
    }
  },
  "c141": {
    "name": "Amor",
    "star": "4",
    "attribute": "G",
    "id": "c141",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Monolouging",
        "id": "01"
      },
      "02": {
        "title": "One Sided",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c142": {
    "name": "Hypnos",
    "star": "3",
    "attribute": "F",
    "id": "c142",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Night Maiden",
        "id": "01"
      },
      "02": {
        "title": "Dreamer",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c144": {
    "name": "Medea",
    "star": "3",
    "attribute": "F",
    "id": "c144",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Black Night",
        "id": "01"
      },
      "02": {
        "title": "Festive",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c147": {
    "name": "Baal",
    "star": "3",
    "attribute": "D",
    "id": "c147",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Frenzied",
        "id": "01"
      },
      "02": {
        "title": "Bloody",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c148": {
    "name": "Inanna",
    "star": "4",
    "attribute": "D",
    "id": "c148",
    "variants": {
      "10": {
        "title": "Purple Diamond",
        "id": "10"
      },
      "11": {
        "title": "Red Diamond",
        "id": "11"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Harlequin",
        "id": "01"
      },
      "02": {
        "title": "Tyrannical",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c149": {
    "name": "Rusalka",
    "star": "5",
    "attribute": "W",
    "id": "c149",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Indecisive",
        "id": "01"
      },
      "02": {
        "title": "Confessing",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c152": {
    "name": "Hebe",
    "star": "4",
    "attribute": "W",
    "id": "c152",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Summer",
        "id": "01"
      },
      "02": {
        "title": "Youthful",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c153": {
    "name": "Epona",
    "star": "5",
    "attribute": "G",
    "id": "c153",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Adventurer",
        "id": "01"
      },
      "02": {
        "title": "Wandering",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c154": {
    "name": "Thoth",
    "star": "4",
    "attribute": "W",
    "id": "c154",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Stern",
        "id": "01"
      },
      "02": {
        "title": "Severe",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c155": {
    "name": "Echo",
    "star": "4",
    "attribute": "F",
    "id": "c155",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Singing",
        "id": "01"
      },
      "02": {
        "title": "Girl Group",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c156": {
    "name": "Elizabeth",
    "star": "5",
    "attribute": "D",
    "id": "c156",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "89": {
        "title": "",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Autocratic",
        "id": "01"
      },
      "02": {
        "title": "Empress",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c158": {
    "name": "Naias",
    "star": "5",
    "attribute": "W",
    "id": "c158",
    "variants": {
      "10": {
        "title": "Marine Flower",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dreaming",
        "id": "01"
      },
      "02": {
        "title": "Märchen",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c159": {
    "name": "Semele",
    "star": "5",
    "attribute": "D",
    "id": "c159",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Daybreak",
        "id": "01"
      },
      "02": {
        "title": "Little Demon",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c160": {
    "name": "Sara",
    "star": "4",
    "attribute": "W",
    "id": "c160",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Gentle",
        "id": "01"
      },
      "02": {
        "title": "Smiling",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c161": {
    "name": "Youth",
    "star": "",
    "attribute": "",
    "id": "c161",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Referee",
        "id": "01"
      },
      "02": {
        "title": "Punishable",
        "id": "02"
      }
    }
  },
  "c164": {
    "name": "Ishtar",
    "star": "4",
    "attribute": "L",
    "id": "c164",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Bound",
        "id": "01"
      },
      "02": {
        "title": "Liberated",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c167": {
    "name": "Chang'e",
    "star": "5",
    "attribute": "W",
    "id": "c167",
    "variants": {
      "10": {
        "title": "Midnight",
        "id": "10"
      },
      "11": {
        "title": "Beautiful",
        "id": "11"
      },
      "12": {
        "title": "Ravishing",
        "id": "12"
      },
      "87": {
        "title": "Ravishing",
        "id": "87"
      },
      "88": {
        "title": "Incarnated",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Sunny",
        "id": "01"
      },
      "02": {
        "title": "Incarnated",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c168": {
    "name": "Thalia",
    "star": "4",
    "attribute": "F",
    "id": "c168",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Cheering",
        "id": "01"
      },
      "02": {
        "title": "Joyous",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c169": {
    "name": "Euros",
    "star": "3",
    "attribute": "W",
    "id": "c169",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Happy",
        "id": "01"
      },
      "02": {
        "title": "Glorious",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c172": {
    "name": "Yuna",
    "star": "4",
    "attribute": "F",
    "id": "c172",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Shining",
        "id": "01"
      },
      "02": {
        "title": "Glittering",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c173": {
    "name": "Daoine Sidhe",
    "star": "5",
    "attribute": "F",
    "id": "c173",
    "variants": {
      "10": {
        "title": "Dangerous",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Small",
        "id": "01"
      },
      "02": {
        "title": "Kid Sister",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c174": {
    "name": "A.I",
    "star": "5",
    "attribute": "D",
    "id": "c174",
    "variants": {
      "10": {
        "title": "Little Star",
        "id": "10"
      },
      "11": {
        "title": "Summer Vacation",
        "id": "11"
      },
      "12": {
        "title": "Electro-Pop",
        "id": "12"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Limited",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c175": {
    "name": "Red Cross",
    "star": "5",
    "attribute": "D",
    "id": "c175",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Guardian",
        "id": "01"
      },
      "02": {
        "title": "Sentinel",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c176": {
    "name": "Eshu",
    "star": "5",
    "attribute": "W",
    "id": "c176",
    "variants": {
      "01": {
        "title": "Eye Catching",
        "id": "01"
      },
      "02": {
        "title": "Dealer",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c178": {
    "name": "Morgana",
    "star": "3",
    "attribute": "L",
    "id": "c178",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Mirage",
        "id": "01"
      },
      "02": {
        "title": "Fantasy",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c180": {
    "name": "Mammon",
    "star": "5",
    "attribute": "G",
    "id": "c180",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Ambitious",
        "id": "01"
      },
      "02": {
        "title": "Greedy",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c183": {
    "name": "Dana",
    "star": "5",
    "attribute": "L",
    "id": "c183",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Preacher",
        "id": "01"
      },
      "02": {
        "title": "Declarative",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c184": {
    "name": "Elysion",
    "star": "4",
    "attribute": "W",
    "id": "c184",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Wandering",
        "id": "01"
      },
      "02": {
        "title": "Paradise",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c185": {
    "name": "Hermod",
    "star": "4",
    "attribute": "L",
    "id": "c185",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Foolhardy",
        "id": "01"
      },
      "02": {
        "title": "Dictator",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c186": {
    "name": "Erebus",
    "star": "5",
    "attribute": "F",
    "id": "c186",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Controller",
        "id": "01"
      },
      "02": {
        "title": "Ruler",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c187": {
    "name": "Thetis",
    "star": "5",
    "attribute": "W",
    "id": "c187",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "89": {
        "title": "Sorrowful",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Greiving",
        "id": "01"
      },
      "02": {
        "title": "Sorrowful",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c188": {
    "name": "Atalanta",
    "star": "3",
    "attribute": "W",
    "id": "c188",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Charging",
        "id": "01"
      },
      "02": {
        "title": "Renowned Assistant",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c189": {
    "name": "Kratos",
    "star": "3",
    "attribute": "D",
    "id": "c189",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Bound",
        "id": "01"
      },
      "02": {
        "title": "Liberated",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c190": {
    "name": "Isis",
    "star": "4",
    "attribute": "W",
    "id": "c190",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Mimic",
        "id": "01"
      },
      "02": {
        "title": "Actress",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c191": {
    "name": "Sekhmet",
    "star": "3",
    "attribute": "F",
    "id": "c191",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Destructive",
        "id": "01"
      },
      "02": {
        "title": "Furious",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c193": {
    "name": "Virupa",
    "star": "5",
    "attribute": "W",
    "id": "c193",
    "variants": {
      "10": {
        "title": "Tathagatagarbha",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Exorcist",
        "id": "01"
      },
      "02": {
        "title": "Virupaksa",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c194": {
    "name": "Ashtoreth",
    "star": "5",
    "attribute": "L",
    "id": "c194",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "White",
        "id": "01"
      },
      "02": {
        "title": "Pure White",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c195": {
    "name": "Cybele",
    "star": "4",
    "attribute": "D",
    "id": "c195",
    "variants": {
      "20": {
        "title": "Human",
        "id": "20"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Little Princess",
        "id": "01"
      },
      "02": {
        "title": "Dark Princess",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c196": {
    "name": "Idun",
    "star": "3",
    "attribute": "D",
    "id": "c196",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Floral",
        "id": "01"
      },
      "02": {
        "title": "Alluring",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c198": {
    "name": "Zelos",
    "star": "4",
    "attribute": "D",
    "id": "c198",
    "variants": {
      "10": {
        "title": "Mirage",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Silent",
        "id": "01"
      },
      "02": {
        "title": "Turncoat",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c199": {
    "name": "Aurora",
    "star": "5",
    "attribute": "F",
    "id": "c199",
    "variants": {
      "10": {
        "title": "Nightmare",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Western",
        "id": "01"
      },
      "02": {
        "title": "Benevolent",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c200": {
    "name": "Seshat",
    "star": "3",
    "attribute": "W",
    "id": "c200",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Running",
        "id": "01"
      },
      "02": {
        "title": "Fixer",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c202": {
    "name": "Victorix",
    "star": "4",
    "attribute": "L",
    "id": "c202",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Mirror",
        "id": "01"
      },
      "02": {
        "title": "Green",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c203": {
    "name": "Harmonia",
    "star": "5",
    "attribute": "G",
    "id": "c203",
    "variants": {
      "88": {
        "title": "Peaceful",
        "id": "88"
      },
      "01": {
        "title": "Human",
        "id": "01"
      },
      "02": {
        "title": "Guardian",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c205": {
    "name": "Merlin",
    "star": "4",
    "attribute": "L",
    "id": "c205",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Otherworldly",
        "id": "01"
      },
      "02": {
        "title": "Visitor",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c206": {
    "name": "Jonah",
    "star": "5",
    "attribute": "D",
    "id": "c206",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Otherworldly",
        "id": "01"
      },
      "02": {
        "title": "Talking",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c208": {
    "name": "Firo",
    "star": "3",
    "attribute": "F",
    "id": "c208",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hot",
        "id": "01"
      },
      "02": {
        "title": "Fiery",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c209": {
    "name": "Hecate",
    "star": "3",
    "attribute": "W",
    "id": "c209",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dreaming",
        "id": "01"
      },
      "02": {
        "title": "Delusional",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c210": {
    "name": "Tartarus",
    "star": "3",
    "attribute": "F",
    "id": "c210",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Abyssal",
        "id": "01"
      },
      "02": {
        "title": "Emperor",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c213": {
    "name": "Naga",
    "star": "5",
    "attribute": "D",
    "id": "c213",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "89": {
        "title": "",
        "id": "89"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c214": {
    "name": "Jupiter",
    "star": "5",
    "attribute": "F",
    "id": "c214",
    "variants": {
      "10": {
        "title": "Gambler",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Experimental",
        "id": "01"
      },
      "02": {
        "title": "Dominating",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c216": {
    "name": "Werewolf",
    "star": "5",
    "attribute": "D",
    "id": "c216",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "Moonlight",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Moonlight",
        "id": "01"
      },
      "02": {
        "title": "Samhain",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c218": {
    "name": "Alf",
    "star": "5",
    "attribute": "L",
    "id": "c218",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Full",
        "id": "01"
      },
      "02": {
        "title": "Happy",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c219": {
    "name": "Ymir",
    "star": "5",
    "attribute": "W",
    "id": "c219",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Ice Blade",
        "id": "01"
      },
      "02": {
        "title": "Psychopath",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c220": {
    "name": "Atropos",
    "star": "3",
    "attribute": "G",
    "id": "c220",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Zooming",
        "id": "01"
      },
      "02": {
        "title": "Charging",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c221": {
    "name": "Jana",
    "star": "3",
    "attribute": "L",
    "id": "c221",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Full Moon",
        "id": "01"
      },
      "02": {
        "title": "Full Bloom",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c222": {
    "name": "El Dorado",
    "star": "4",
    "attribute": "F",
    "id": "c222",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hypnotic",
        "id": "01"
      },
      "02": {
        "title": "Golden",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c223": {
    "name": "Air",
    "star": "5",
    "attribute": "W",
    "id": "c223",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "River's Flow",
        "id": "01"
      },
      "02": {
        "title": "Roaming Waters",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c225": {
    "name": "Rudolph",
    "star": "4",
    "attribute": "F",
    "id": "c225",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Uninvited",
        "id": "01"
      },
      "02": {
        "title": "Night Theif",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c226": {
    "name": "Ragnar",
    "star": "",
    "attribute": "",
    "id": "c226",
    "variants": {
      "01": {
        "title": "Plundering",
        "id": "01"
      }
    }
  },
  "c227": {
    "name": "Mafdet",
    "star": "5",
    "attribute": "L",
    "id": "c227",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Righteous",
        "id": "01"
      },
      "02": {
        "title": "Dogmatic",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c228": {
    "name": "Vivian",
    "star": "5",
    "attribute": "L",
    "id": "c228",
    "variants": {
      "10": {
        "title": "Mommy",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Involved",
        "id": "01"
      },
      "02": {
        "title": "Concealing",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c229": {
    "name": "Brownie",
    "star": "5",
    "attribute": "G",
    "id": "c229",
    "variants": {
      "10": {
        "title": "Postie",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Info Broker",
        "id": "01"
      },
      "02": {
        "title": "Delivery Girl",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c230": {
    "name": "Skuld",
    "star": "3",
    "attribute": "D",
    "id": "c230",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Cursed",
        "id": "01"
      },
      "02": {
        "title": "Extinct",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c231": {
    "name": "Rhea Silvia",
    "star": "5",
    "attribute": "D",
    "id": "c231",
    "variants": {
      "10": {
        "title": "The Great",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Tempting",
        "id": "01"
      },
      "02": {
        "title": "Temptress",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c232": {
    "name": "Daphne",
    "star": "4",
    "attribute": "F",
    "id": "c232",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Fantasy",
        "id": "01"
      },
      "02": {
        "title": "Utopian",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c233": {
    "name": "Arges",
    "star": "4",
    "attribute": "W",
    "id": "c233",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lightning",
        "id": "01"
      },
      "02": {
        "title": "Corona",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c234": {
    "name": "Hercules",
    "star": "4",
    "attribute": "L",
    "id": "c234",
    "variants": {
      "10": {
        "title": "Young Lion",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Militant",
        "id": "01"
      },
      "02": {
        "title": "Triumphant",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c235": {
    "name": "Danu",
    "star": "4",
    "attribute": "W",
    "id": "c235",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Explosive",
        "id": "01"
      },
      "02": {
        "title": "Antihero",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c236": {
    "name": "小丑兔",
    "star": "5",
    "attribute": "D",
    "id": "c236",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Explosive",
        "id": "01"
      },
      "02": {
        "title": "Antihero",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c237": {
    "name": "Typhon",
    "star": "4",
    "attribute": "D",
    "id": "c237",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Night Festival",
        "id": "01"
      },
      "02": {
        "title": "Samhain",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c238": {
    "name": "火南瓜",
    "star": "5",
    "attribute": "F",
    "id": "c238",
    "variants": {
      "10": {
        "title": "Samhain",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Harmony",
        "id": "01"
      },
      "02": {
        "title": "Prima",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c239": {
    "name": "Dianus",
    "star": "5",
    "attribute": "D",
    "id": "c239",
    "variants": {
      "10": {
        "title": "Sugar",
        "id": "10"
      },
      "01": {
        "title": "Nocturnal",
        "id": "01"
      },
      "02": {
        "title": "Midnight Sun",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c241": {
    "name": "Orcus",
    "star": "",
    "attribute": "",
    "id": "c241",
    "variants": {
      "01": {
        "title": "Underworld",
        "id": "01"
      }
    }
  },
  "c242": {
    "name": "Ailill",
    "star": "5",
    "attribute": "F",
    "id": "c242",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Magician",
        "id": "01"
      },
      "02": {
        "title": "Parade",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c244": {
    "name": "春丽",
    "star": "5",
    "attribute": "W",
    "id": "c244",
    "variants": {
      "01": {
        "title": "Tai-Chi",
        "id": "01"
      },
      "02": {
        "title": "Dress",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c245": {
    "name": "Cammy",
    "star": "5",
    "attribute": "G",
    "id": "c245",
    "variants": {
      "01": {
        "title": "Delta Red",
        "id": "01"
      },
      "02": {
        "title": "Dolls",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c246": {
    "name": "Krampus",
    "star": "5",
    "attribute": "G",
    "id": "c246",
    "variants": {
      "10": {
        "title": "Nightmare",
        "id": "10"
      },
      "11": {
        "title": "Naughty",
        "id": "11"
      },
      "88": {
        "title": "Nightmare",
        "id": "88"
      },
      "89": {
        "title": "Naughty",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Deceptive",
        "id": "01"
      },
      "02": {
        "title": "False",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c247": {
    "name": "Myrina",
    "star": "5",
    "attribute": "W",
    "id": "c247",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Glorious",
        "id": "01"
      },
      "02": {
        "title": "Autocratic",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c250": {
    "name": "Xenie",
    "star": "5",
    "attribute": "G",
    "id": "c250",
    "variants": {
      "88": {
        "title": "Water Sprite",
        "id": "88"
      },
      "01": {
        "title": "Underwater",
        "id": "01"
      },
      "02": {
        "title": "Water Sprite",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c251": {
    "name": "Ganymede",
    "star": "",
    "attribute": "",
    "id": "c251",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hermit",
        "id": "01"
      },
      "02": {
        "title": "Tactician",
        "id": "02"
      }
    }
  },
  "c252": {
    "name": "Arhat",
    "star": "5",
    "attribute": "D",
    "id": "c252",
    "variants": {
      "10": {
        "title": "(Suhana)",
        "id": "10"
      },
      "11": {
        "title": "(Kumari Suhana)",
        "id": "11"
      },
      "12": {
        "title": "Innocent",
        "id": "12"
      },
      "13": {
        "title": "Innocent",
        "id": "13"
      },
      "88": {
        "title": "Altruism",
        "id": "88"
      },
      "89": {
        "title": "Exorcist",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Exorcist",
        "id": "01"
      },
      "02": {
        "title": "Altruism",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c253": {
    "name": "Nicole",
    "star": "5",
    "attribute": "G",
    "id": "c253",
    "variants": {
      "10": {
        "title": "Christmas Eve",
        "id": "10"
      },
      "89": {
        "title": "Christmas Eve",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Holy",
        "id": "01"
      },
      "02": {
        "title": "Saint",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c254": {
    "name": "Davi",
    "star": "",
    "attribute": "",
    "id": "c254",
    "variants": {
      "01": {
        "title": "Child 5★ Animation",
        "id": "01"
      },
      "02": {
        "title": "Summoning Animation",
        "id": "02"
      }
    }
  },
  "c255": {
    "name": "Mona",
    "star": "",
    "attribute": "",
    "id": "c255",
    "variants": {
      "01": {
        "title": "Soul Carta 5★ Animation",
        "id": "01"
      }
    }
  },
  "c256": {
    "name": "Lisa",
    "star": "",
    "attribute": "",
    "id": "c256",
    "variants": {
      "01": {
        "title": "5★ Animation",
        "id": "01"
      }
    }
  },
  "c257": {
    "name": "Carlos",
    "star": "",
    "attribute": "",
    "id": "c257",
    "variants": {
      "01": {
        "title": "Colony Leader",
        "id": "01"
      },
      "02": {
        "title": "Colony Leader",
        "id": "02"
      }
    }
  },
  "c258": {
    "name": "Pixie",
    "star": "2",
    "attribute": "F",
    "id": "c258",
    "variants": {
      "01": {
        "title": "Imaginative",
        "id": "01"
      },
      "02": {
        "title": "Ideal",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c261": {
    "name": "Sarasu",
    "star": "5",
    "attribute": "G",
    "id": "c261",
    "variants": {
      "01": {
        "title": "Heaven",
        "id": "01"
      },
      "02": {
        "title": "Reality",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c262": {
    "name": "Daphnis",
    "star": "5",
    "attribute": "G",
    "id": "c262",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Knight",
        "id": "01"
      },
      "02": {
        "title": "Brave",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c265": {
    "name": "Mona",
    "star": "",
    "attribute": "",
    "id": "c265",
    "variants": {
      "01": {
        "title": "SD",
        "id": "01"
      }
    }
  },
  "c266": {
    "name": "Horus",
    "star": "5",
    "attribute": "L",
    "id": "c266",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Desert",
        "id": "01"
      },
      "02": {
        "title": "Ra",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c267": {
    "name": "Cleopatra",
    "star": "5",
    "attribute": "L",
    "id": "c267",
    "variants": {
      "10": {
        "title": "Sun",
        "id": "10"
      },
      "11": {
        "title": "Immortal",
        "id": "11"
      },
      "88": {
        "title": "Immortal",
        "id": "88"
      },
      "89": {
        "title": "Sun",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Transmigration",
        "id": "01"
      },
      "02": {
        "title": "Pharoah",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c269": {
    "name": "Pixie",
    "star": "2",
    "attribute": "D",
    "id": "c269",
    "variants": {
      "01": {
        "title": "Chaotic",
        "id": "01"
      },
      "02": {
        "title": "Cosmos",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c270": {
    "name": "Pixie",
    "star": "2",
    "attribute": "L",
    "id": "c270",
    "variants": {
      "01": {
        "title": "Light",
        "id": "01"
      },
      "02": {
        "title": "Platinum",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c271": {
    "name": "Pixie",
    "star": "2",
    "attribute": "W",
    "id": "c271",
    "variants": {
      "01": {
        "title": "Silent",
        "id": "01"
      },
      "02": {
        "title": "Sapphire",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c272": {
    "name": "Pixie",
    "star": "2",
    "attribute": "G",
    "id": "c272",
    "variants": {
      "01": {
        "title": "Sprout",
        "id": "01"
      },
      "02": {
        "title": "Verdure",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c274": {
    "name": "Bast",
    "star": "4",
    "attribute": "L",
    "id": "c274",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Singing",
        "id": "01"
      },
      "02": {
        "title": "Howling",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c275": {
    "name": "Harpy",
    "star": "5",
    "attribute": "W",
    "id": "c275",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Fugitive",
        "id": "01"
      },
      "02": {
        "title": "Escape",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c277": {
    "name": "Leuce",
    "star": "3",
    "attribute": "L",
    "id": "c277",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lowly Nymph",
        "id": "01"
      },
      "02": {
        "title": "Partner",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c278": {
    "name": "Hel",
    "star": "5",
    "attribute": "G",
    "id": "c278",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Bespoke",
        "id": "01"
      },
      "02": {
        "title": "Prototype",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c279": {
    "name": "Laufey",
    "star": "5",
    "attribute": "F",
    "id": "c279",
    "variants": {
      "88": {
        "title": "Customized",
        "id": "88"
      },
      "89": {
        "title": "Bespoke",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Bespoke",
        "id": "01"
      },
      "02": {
        "title": "Customized",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c280": {
    "name": "Tyche",
    "star": "3",
    "attribute": "F",
    "id": "c280",
    "variants": {
      "01": {
        "title": "Innocent",
        "id": "01"
      },
      "02": {
        "title": "Dreaming",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c281": {
    "name": "Thisbe",
    "star": "5",
    "attribute": "W",
    "id": "c281",
    "variants": {
      "87": {
        "title": "",
        "id": "87"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Runaway",
        "id": "01"
      },
      "02": {
        "title": "Labyrinth",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c283": {
    "name": "Morgan",
    "star": "5",
    "attribute": "F",
    "id": "c283",
    "variants": {
      "10": {
        "title": "Loyal Keeper",
        "id": "10"
      },
      "11": {
        "title": "Anti-Rust",
        "id": "11"
      },
      "12": {
        "title": "Classic Servant",
        "id": "12"
      },
      "89": {
        "title": "Loyal Keeper",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Maid",
        "id": "01"
      },
      "02": {
        "title": "Servant",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c285": {
    "name": "Natalis",
    "star": "5",
    "attribute": "L",
    "id": "c285",
    "variants": {
      "10": {
        "title": "En Garde",
        "id": "10"
      },
      "11": {
        "title": "Fortune of War",
        "id": "11"
      },
      "87": {
        "title": "En Garde",
        "id": "87"
      },
      "88": {
        "title": "Revelator",
        "id": "88"
      },
      "89": {
        "title": "Initiator",
        "id": "89"
      },
      "01": {
        "title": "Initiator",
        "id": "01"
      },
      "02": {
        "title": "Revelator",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c286": {
    "name": "Verdelet",
    "star": "5",
    "attribute": "F",
    "id": "c286",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Waiting",
        "id": "01"
      },
      "02": {
        "title": "Butler",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c287": {
    "name": "Salome",
    "star": "5",
    "attribute": "W",
    "id": "c287",
    "variants": {
      "88": {
        "title": "Leaping",
        "id": "88"
      },
      "89": {
        "title": "Dancer",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dancer",
        "id": "01"
      },
      "02": {
        "title": "Leaping",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c289": {
    "name": "Durandal",
    "star": "5",
    "attribute": "D",
    "id": "c289",
    "variants": {
      "10": {
        "title": "Mighty Blade",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Illusory",
        "id": "01"
      },
      "02": {
        "title": "Nightmare",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c290": {
    "name": "Brigid",
    "star": "5",
    "attribute": "F",
    "id": "c290",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Glamorous",
        "id": "01"
      },
      "02": {
        "title": "Scarlet",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c292": {
    "name": "Luin",
    "star": "5",
    "attribute": "G",
    "id": "c292",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Blind",
        "id": "01"
      },
      "02": {
        "title": "Spear of Vengeance",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c294": {
    "name": "Bathory",
    "star": "5",
    "attribute": "G",
    "id": "c294",
    "variants": {
      "10": {
        "title": "Snake Pit",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lady",
        "id": "01"
      },
      "02": {
        "title": "Bloody",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c295": {
    "name": "Unknown",
    "star": "4",
    "attribute": "D",
    "id": "c295",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dreaming",
        "id": "01"
      },
      "02": {
        "title": "Silence",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c296": {
    "name": "Hildr",
    "star": "5",
    "attribute": "L",
    "id": "c296",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Gunslinger",
        "id": "01"
      },
      "02": {
        "title": "Sniper",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c297": {
    "name": "Red Queen",
    "star": "5",
    "attribute": "F",
    "id": "c297",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Affectionate",
        "id": "01"
      },
      "02": {
        "title": "Flawless",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c299": {
    "name": "Santa Claus",
    "star": "5",
    "attribute": "W",
    "id": "c299",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Memorable",
        "id": "01"
      },
      "02": {
        "title": "Satan",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c300": {
    "name": "Pietas",
    "star": "4",
    "attribute": "D",
    "id": "c300",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Beloved",
        "id": "01"
      },
      "02": {
        "title": "Devoted",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c301": {
    "name": "Jacheongbi",
    "star": "5",
    "attribute": "G",
    "id": "c301",
    "variants": {
      "01": {
        "title": "Indomitable",
        "id": "01"
      },
      "02": {
        "title": "Revolutionary",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c302": {
    "name": "Atum",
    "star": "",
    "attribute": "",
    "id": "c302",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dark Night",
        "id": "01"
      }
    }
  },
  "c304": {
    "name": "Nebula",
    "star": "4",
    "attribute": "L",
    "id": "c304",
    "variants": {
      "01": {
        "title": "Drifting",
        "id": "01"
      },
      "02": {
        "title": "Cosmic",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c305": {
    "name": "Rita",
    "star": "5",
    "attribute": "D",
    "id": "c305",
    "variants": {
      "10": {
        "title": "Paradise Exiled",
        "id": "10"
      },
      "89": {
        "title": "Paradise Exiled",
        "id": "89"
      },
      "01": {
        "title": "Guiding",
        "id": "01"
      },
      "02": {
        "title": "Dark Saint",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c308": {
    "name": "老太婆",
    "star": "5",
    "attribute": "D",
    "id": "c308",
    "variants": {
      "10": {
        "title": "High Speed",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Rider",
        "id": "01"
      },
      "02": {
        "title": "Revenge",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c310": {
    "name": "Bes",
    "star": "5",
    "attribute": "W",
    "id": "c310",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Spring",
        "id": "01"
      },
      "02": {
        "title": "Blossom",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c311": {
    "name": "Khepri",
    "star": "5",
    "attribute": "D",
    "id": "c311",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "89": {
        "title": "Vicious",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dark Luster",
        "id": "01"
      },
      "02": {
        "title": "Vicious",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c312": {
    "name": "Tyrving",
    "star": "5",
    "attribute": "F",
    "id": "c312",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Cynical",
        "id": "01"
      },
      "02": {
        "title": "Cursed Sword",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c314": {
    "name": "Mona",
    "star": "",
    "attribute": "",
    "id": "c314",
    "variants": {
      "01": {
        "title": "Debut",
        "id": "01"
      }
    }
  },
  "c315": {
    "name": "Methuselah",
    "star": "5",
    "attribute": "W",
    "id": "c315",
    "variants": {
      "10": {
        "title": "Formal",
        "id": "10"
      },
      "89": {
        "title": "Formal",
        "id": "89"
      },
      "01": {
        "title": "Alchemist",
        "id": "01"
      },
      "02": {
        "title": "Seeker",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c316": {
    "name": "Wodan",
    "star": "5",
    "attribute": "G",
    "id": "c316",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Alchemist",
        "id": "01"
      },
      "02": {
        "title": "Seeker",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c317": {
    "name": "Babel",
    "star": "5",
    "attribute": "W",
    "id": "c317",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hypocrite",
        "id": "01"
      },
      "02": {
        "title": "False Prophet",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c318": {
    "name": "Bari",
    "star": "5",
    "attribute": "W",
    "id": "c318",
    "variants": {
      "10": {
        "title": "Equinoctial",
        "id": "10"
      },
      "11": {
        "title": "Banshee",
        "id": "11"
      },
      "12": {
        "title": "Spirit Guide",
        "id": "12"
      },
      "87": {
        "title": "Spirit Guide",
        "id": "87"
      },
      "88": {
        "title": "Banshee",
        "id": "88"
      },
      "89": {
        "title": "Equinoctial",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Praying",
        "id": "01"
      },
      "02": {
        "title": "Prayer",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c319": {
    "name": "文道令",
    "star": "5",
    "attribute": "W",
    "id": "c319",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Reincarnated",
        "id": "01"
      },
      "02": {
        "title": "Guardian",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c320": {
    "name": "Yan Zisuka",
    "star": "5",
    "attribute": "D",
    "id": "c320",
    "variants": {
      "00": {
        "title": "Young",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Awakened",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c321": {
    "name": "Luna",
    "star": "5",
    "attribute": "L",
    "id": "c321",
    "variants": {
      "01": {
        "title": "Crescent",
        "id": "01"
      },
      "02": {
        "title": "Full Moon",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c322": {
    "name": "Saladin",
    "star": "5",
    "attribute": "F",
    "id": "c322",
    "variants": {
      "10": {
        "title": "Past",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Awakened",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c324": {
    "name": "Mona",
    "star": "5",
    "attribute": "G",
    "id": "c324",
    "variants": {
      "21": {
        "title": "Hurt",
        "id": "21"
      },
      "01": {
        "title": "Newbie",
        "id": "01"
      },
      "02": {
        "title": "Rookie",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c325": {
    "name": "John",
    "star": "",
    "attribute": "",
    "id": "c325",
    "variants": {
      "00": {
        "title": "",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c326": {
    "name": "Valla",
    "star": "",
    "attribute": "",
    "id": "c326",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c327": {
    "name": "Guard",
    "star": "",
    "attribute": "",
    "id": "c327",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c328": {
    "name": "Guard",
    "star": "",
    "attribute": "",
    "id": "c328",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c329": {
    "name": "Davi",
    "star": "4",
    "attribute": "F",
    "id": "c329",
    "variants": {
      "01": {
        "title": "Racer",
        "id": "01"
      },
      "02": {
        "title": "Dark Horse",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c330": {
    "name": "Ottoman",
    "star": "",
    "attribute": "",
    "id": "c330",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c331": {
    "name": "Saladin",
    "star": "",
    "attribute": "",
    "id": "c331",
    "variants": {
      "01": {
        "title": "Altruistic",
        "id": "01"
      }
    }
  },
  "c332": {
    "name": "Ganesha",
    "star": "5",
    "attribute": "G",
    "id": "c332",
    "variants": {
      "01": {
        "title": "Maverick",
        "id": "01"
      },
      "02": {
        "title": "Nandikesvara",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c333": {
    "name": "Deborah",
    "star": "5",
    "attribute": "L",
    "id": "c333",
    "variants": {
      "88": {
        "title": "Capturing",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Exorcist",
        "id": "01"
      },
      "02": {
        "title": "Capturing",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c334": {
    "name": "Lisa",
    "star": "5",
    "attribute": "D",
    "id": "c334",
    "variants": {
      "01": {
        "title": "Fantasy Dream",
        "id": "01"
      },
      "02": {
        "title": "Disillusioned",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c335": {
    "name": "Hathor",
    "star": "5",
    "attribute": "L",
    "id": "c335",
    "variants": {
      "10": {
        "title": "Assured Victory",
        "id": "10"
      },
      "01": {
        "title": "Peerless Power",
        "id": "01"
      },
      "02": {
        "title": "Extinction",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c336": {
    "name": "Pan",
    "star": "5",
    "attribute": "G",
    "id": "c336",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "89": {
        "title": "Farm Sheep",
        "id": "89"
      },
      "01": {
        "title": "Field",
        "id": "01"
      },
      "02": {
        "title": "Farm Sheep",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c337": {
    "name": "芙蕾雅",
    "star": "5",
    "attribute": "G",
    "id": "c337",
    "variants": {
      "01": {
        "title": "Mascot",
        "id": "01"
      },
      "02": {
        "title": "Sprinter",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c338": {
    "name": "Pomona",
    "star": "5",
    "attribute": "L",
    "id": "c338",
    "variants": {
      "01": {
        "title": "Pure White",
        "id": "01"
      },
      "02": {
        "title": "Pure Bride",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c339": {
    "name": "Davi",
    "star": "5",
    "attribute": "F",
    "id": "c339",
    "variants": {
      "01": {
        "title": "Love & Hate",
        "id": "01"
      },
      "02": {
        "title": "Ambivalence",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c342": {
    "name": "Yami",
    "star": "5",
    "attribute": "D",
    "id": "c342",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "11": {
        "title": "Dark Scent",
        "id": "11"
      },
      "01": {
        "title": "Full Bloom",
        "id": "01"
      },
      "02": {
        "title": "Phantosmia",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c343": {
    "name": "Tiamat",
    "star": "5",
    "attribute": "F",
    "id": "c343",
    "variants": {
      "01": {
        "title": "One Sword",
        "id": "01"
      },
      "02": {
        "title": "Slashing",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c344": {
    "name": "Isolde",
    "star": "5",
    "attribute": "W",
    "id": "c344",
    "variants": {
      "10": {
        "title": "Summer Spike",
        "id": "10"
      },
      "11": {
        "title": "Enchanting",
        "id": "11"
      },
      "87": {
        "title": "Enchanting",
        "id": "87"
      },
      "88": {
        "title": "Nova",
        "id": "88"
      },
      "89": {
        "title": "Summer Spike",
        "id": "89"
      },
      "01": {
        "title": "White Handed",
        "id": "01"
      },
      "02": {
        "title": "Nova",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c345": {
    "name": "Anemone",
    "star": "5",
    "attribute": "W",
    "id": "c345",
    "variants": {
      "10": {
        "title": "Sunrise",
        "id": "10"
      },
      "11": {
        "title": "Burning Passion",
        "id": "11"
      },
      "87": {
        "title": "Burning Passion",
        "id": "87"
      },
      "88": {
        "title": "Gambler",
        "id": "88"
      },
      "89": {
        "title": "Sunrise",
        "id": "89"
      },
      "01": {
        "title": "Midsummer",
        "id": "01"
      },
      "02": {
        "title": "Gambler",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c346": {
    "name": "特里斯丹",
    "star": "4",
    "attribute": "G",
    "id": "c346",
    "variants": {
      "01": {
        "title": "Blocking",
        "id": "01"
      },
      "02": {
        "title": "Solitary",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c347": {
    "name": "Dana",
    "star": "5",
    "attribute": "F",
    "id": "c347",
    "variants": {
      "01": {
        "title": "Prophet",
        "id": "01"
      },
      "02": {
        "title": "Second Advent",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c348": {
    "name": "Mars",
    "star": "5",
    "attribute": "D",
    "id": "c348",
    "variants": {
      "10": {
        "title": "Sweet Love",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Pretty",
        "id": "01"
      },
      "02": {
        "title": "Sweet Devi",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c349": {
    "name": "Saturn",
    "star": "5",
    "attribute": "W",
    "id": "c349",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Mysterious",
        "id": "01"
      },
      "02": {
        "title": "Starlight",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c350": {
    "name": "Neptune",
    "star": "5",
    "attribute": "L",
    "id": "c350",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hard Worker",
        "id": "01"
      },
      "02": {
        "title": "Pure Smile",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c351": {
    "name": "Venus",
    "star": "5",
    "attribute": "L",
    "id": "c351",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Naive",
        "id": "01"
      },
      "02": {
        "title": "Heavenly Flower",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c353": {
    "name": "Charlotte",
    "star": "5",
    "attribute": "L",
    "id": "c353",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Glorious",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c354": {
    "name": "Demeter",
    "star": "5",
    "attribute": "F",
    "id": "c354",
    "variants": {
      "10": {
        "title": "Mad Nurse",
        "id": "10"
      },
      "89": {
        "title": "Crimson",
        "id": "89"
      },
      "01": {
        "title": "Needfire",
        "id": "01"
      },
      "02": {
        "title": "Crimson",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c355": {
    "name": "Chang'e",
    "star": "5",
    "attribute": "G",
    "id": "c355",
    "variants": {
      "01": {
        "title": "Guardian",
        "id": "01"
      },
      "02": {
        "title": "Inugami",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c357": {
    "name": "Occasio",
    "star": "4",
    "attribute": "L",
    "id": "c357",
    "variants": {
      "01": {
        "title": "Unjust",
        "id": "01"
      },
      "02": {
        "title": "Opportune",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c358": {
    "name": "初音未来",
    "star": "5",
    "attribute": "W",
    "id": "c358",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Diva",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c359": {
    "name": "雪初音",
    "star": "5",
    "attribute": "W",
    "id": "c359",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Snow Priestess",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c360": {
    "name": "Maat",
    "star": "5",
    "attribute": "D",
    "id": "c360",
    "variants": {
      "10": {
        "title": "Chasm",
        "id": "10"
      },
      "01": {
        "title": "Liberated",
        "id": "01"
      },
      "02": {
        "title": "Descended",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c361": {
    "name": "Caduceus",
    "star": "5",
    "attribute": "F",
    "id": "c361",
    "variants": {
      "10": {
        "title": "Weaponized",
        "id": "10"
      },
      "87": {
        "title": "Weaponized",
        "id": "87"
      },
      "88": {
        "title": "Black Snake",
        "id": "88"
      },
      "89": {
        "title": "Devouring",
        "id": "89"
      },
      "01": {
        "title": "Devouring",
        "id": "01"
      },
      "02": {
        "title": "Black Snake",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c362": {
    "name": "Leo",
    "star": "5",
    "attribute": "W",
    "id": "c362",
    "variants": {
      "10": {
        "title": "Maid",
        "id": "10"
      },
      "11": {
        "title": "Butler",
        "id": "11"
      },
      "01": {
        "title": "Kind",
        "id": "01"
      },
      "02": {
        "title": "Incubus",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c363": {
    "name": "Lupin",
    "star": "5",
    "attribute": "D",
    "id": "c363",
    "variants": {
      "01": {
        "title": "Phantom Thief",
        "id": "01"
      },
      "02": {
        "title": "Vanguard",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c364": {
    "name": "Sytry",
    "star": "5",
    "attribute": "L",
    "id": "c364",
    "variants": {
      "10": {
        "title": "So Sicktry",
        "id": "10"
      },
      "01": {
        "title": "Sweet",
        "id": "01"
      },
      "02": {
        "title": "Lovey-Dovey",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c365": {
    "name": "Lisa",
    "star": "5",
    "attribute": "W",
    "id": "c365",
    "variants": {
      "01": {
        "title": "Dark Buster",
        "id": "01"
      },
      "02": {
        "title": "Devil Buster",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c366": {
    "name": "Deino",
    "star": "5",
    "attribute": "W",
    "id": "c366",
    "variants": {
      "01": {
        "title": "Hard Worker",
        "id": "01"
      },
      "02": {
        "title": "Hopeful",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c367": {
    "name": "Archfiend Davi",
    "star": "",
    "attribute": "",
    "id": "c367",
    "variants": {
      "88": {
        "title": "True",
        "id": "88"
      },
      "89": {
        "title": "",
        "id": "89"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "True",
        "id": "02"
      }
    }
  },
  "c370": {
    "name": "Mona",
    "star": "5",
    "attribute": "F",
    "id": "c370",
    "variants": {
      "10": {
        "title": "Hot Pink",
        "id": "10"
      },
      "89": {
        "title": "Sunbeach",
        "id": "89"
      },
      "01": {
        "title": "Sunbeach",
        "id": "01"
      },
      "02": {
        "title": "Diver",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c371": {
    "name": "Lisa",
    "star": "5",
    "attribute": "G",
    "id": "c371",
    "variants": {
      "10": {
        "title": "Rashguard",
        "id": "10"
      },
      "01": {
        "title": "Marine Suit",
        "id": "01"
      },
      "02": {
        "title": "Summer Blue",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c372": {
    "name": "Davi",
    "star": "5",
    "attribute": "W",
    "id": "c372",
    "variants": {
      "10": {
        "title": "Sports Bikini",
        "id": "10"
      },
      "01": {
        "title": "School Swimsuit",
        "id": "01"
      },
      "02": {
        "title": "Summer",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c374": {
    "name": "Hildr",
    "star": "5",
    "attribute": "L",
    "id": "c374",
    "variants": {
      "01": {
        "title": "White Wedding",
        "id": "01"
      },
      "02": {
        "title": "Wedding Gown",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c375": {
    "name": "Wodan",
    "star": "",
    "attribute": "",
    "id": "c375",
    "variants": {
      "01": {
        "title": "Rebirth Synthesis Animation",
        "id": "01"
      }
    }
  },
  "c377": {
    "name": "Iphis",
    "star": "5",
    "attribute": "L",
    "id": "c377",
    "variants": {
      "10": {
        "title": "Bridal",
        "id": "10"
      },
      "11": {
        "title": "Shadow",
        "id": "11"
      },
      "89": {
        "title": "Bridal",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Romantic",
        "id": "01"
      },
      "02": {
        "title": "Scarlet",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c378": {
    "name": "Pallas",
    "star": "5",
    "attribute": "D",
    "id": "c378",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Darkness Clad",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c379": {
    "name": "Athena",
    "star": "5",
    "attribute": "L",
    "id": "c379",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Benign Devotion",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c381": {
    "name": "Sytry",
    "star": "5",
    "attribute": "G",
    "id": "c381",
    "variants": {
      "10": {
        "title": "Enchanting",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "89": {
        "title": "",
        "id": "89"
      },
      "01": {
        "title": "Fluttering",
        "id": "01"
      },
      "02": {
        "title": "Summer Love",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c382": {
    "name": "Neamhain",
    "star": "5",
    "attribute": "L",
    "id": "c382",
    "variants": {
      "10": {
        "title": "Inca Rose",
        "id": "10"
      },
      "01": {
        "title": "Catgirl",
        "id": "01"
      },
      "02": {
        "title": "Battle Kitty",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c384": {
    "name": "Narvi",
    "star": "",
    "attribute": "",
    "id": "c384",
    "variants": {
      "01": {
        "title": "Prototype",
        "id": "01"
      },
      "02": {
        "title": "Devilized",
        "id": "02"
      }
    }
  },
  "c385": {
    "name": "玛丽罗斯",
    "star": "5",
    "attribute": "G",
    "id": "c385",
    "variants": {
      "10": {
        "title": "Swimsuit",
        "id": "10"
      },
      "11": {
        "title": "Russian Blue",
        "id": "11"
      },
      "12": {
        "title": "Minuet",
        "id": "12"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Battlesuit",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c386": {
    "name": "Kasumi",
    "star": "5",
    "attribute": "W",
    "id": "c386",
    "variants": {
      "10": {
        "title": "Geranium",
        "id": "10"
      },
      "11": {
        "title": "Nemophila",
        "id": "11"
      },
      "12": {
        "title": "Margarita",
        "id": "12"
      },
      "13": {
        "title": "Geranium",
        "id": "13"
      },
      "88": {
        "title": "World Boss",
        "id": "88"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Immaculate",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c387": {
    "name": "穗花",
    "star": "5",
    "attribute": "F",
    "id": "c387",
    "variants": {
      "10": {
        "title": "Moo-Moo Denim",
        "id": "10"
      },
      "11": {
        "title": "Delphinium",
        "id": "11"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Casual",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c388": {
    "name": "Kouka",
    "star": "5",
    "attribute": "F",
    "id": "c388",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Mass Produced",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c390": {
    "name": "Eochaid",
    "star": "5",
    "attribute": "G",
    "id": "c390",
    "variants": {
      "88": {
        "title": "Death March",
        "id": "88"
      },
      "89": {
        "title": "Witch",
        "id": "89"
      },
      "01": {
        "title": "Witch",
        "id": "01"
      },
      "02": {
        "title": "Death March",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c391": {
    "name": "南瓜妹",
    "star": "5",
    "attribute": "F",
    "id": "c391",
    "variants": {
      "01": {
        "title": "Party Star",
        "id": "01"
      },
      "02": {
        "title": "Party Night",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c392": {
    "name": "Davi",
    "star": "5",
    "attribute": "D",
    "id": "c392",
    "variants": {
      "10": {
        "title": "Dark Tears",
        "id": "10"
      },
      "89": {
        "title": "Altered",
        "id": "89"
      },
      "01": {
        "title": "Altered",
        "id": "01"
      },
      "02": {
        "title": "Neo",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c393": {
    "name": "Mona",
    "star": "5",
    "attribute": "L",
    "id": "c393",
    "variants": {
      "10": {
        "title": "Radiant",
        "id": "10"
      },
      "01": {
        "title": "Lightbeam",
        "id": "01"
      },
      "02": {
        "title": "Heavenly Ray",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c394": {
    "name": "Bathory",
    "star": "5",
    "attribute": "F",
    "id": "c394",
    "variants": {
      "01": {
        "title": "Courtesan",
        "id": "01"
      },
      "02": {
        "title": "Supreme Courtesan",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c395": {
    "name": "Eve",
    "star": "5",
    "attribute": "F",
    "id": "c395",
    "variants": {
      "01": {
        "title": "Mysterious Student",
        "id": "01"
      },
      "02": {
        "title": "Pink Blazer",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c396": {
    "name": "Werewolf",
    "star": "5",
    "attribute": "L",
    "id": "c396",
    "variants": {
      "01": {
        "title": "Dancing Maiden",
        "id": "01"
      },
      "02": {
        "title": "Oracle",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c397": {
    "name": "Leda",
    "star": "5",
    "attribute": "F",
    "id": "c397",
    "variants": {
      "01": {
        "title": "Christmas",
        "id": "01"
      },
      "02": {
        "title": "Sexy Santa",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c398": {
    "name": "Jacheongbi",
    "star": "5",
    "attribute": "L",
    "id": "c398",
    "variants": {
      "01": {
        "title": "String",
        "id": "01"
      },
      "02": {
        "title": "Gayageum",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c399": {
    "name": "Mona",
    "star": "",
    "attribute": "",
    "id": "c399",
    "variants": {
      "01": {
        "title": "Heartbeat",
        "id": "01"
      }
    }
  },
  "c400": {
    "name": "Banshee",
    "star": "5",
    "attribute": "D",
    "id": "c400",
    "variants": {
      "01": {
        "title": "Grieving",
        "id": "01"
      },
      "02": {
        "title": "Scattering",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c401": {
    "name": "公主初音",
    "star": "5",
    "attribute": "W",
    "id": "c401",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "PRINCESS",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c402": {
    "name": "诺尔",
    "star": "5",
    "attribute": "W",
    "id": "c402",
    "variants": {
      "10": {
        "title": "μ-12",
        "id": "10"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Fourth Squadron",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c403": {
    "name": "马科托",
    "star": "5",
    "attribute": "W",
    "id": "c403",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "NOL Intel Dept",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c404": {
    "name": "拏音",
    "star": "5",
    "attribute": "F",
    "id": "c404",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Six Heroes",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c405": {
    "name": "Luin",
    "star": "5",
    "attribute": "G",
    "id": "c405",
    "variants": {
      "88": {
        "title": "King's Lancer",
        "id": "88"
      },
      "89": {
        "title": "Piercing",
        "id": "89"
      },
      "01": {
        "title": "Piercing",
        "id": "01"
      },
      "02": {
        "title": "King's Lancer",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c406": {
    "name": "Serval",
    "star": "5",
    "attribute": "G",
    "id": "c406",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Savanna",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c407": {
    "name": "Raccoon",
    "star": "5",
    "attribute": "W",
    "id": "c407",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Arboreal",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c408": {
    "name": "Fennec",
    "star": "5",
    "attribute": "F",
    "id": "c408",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Desert",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c409": {
    "name": "Limos",
    "star": "5",
    "attribute": "F",
    "id": "c409",
    "variants": {
      "10": {
        "title": "Satisfied",
        "id": "10"
      },
      "01": {
        "title": "Hungry",
        "id": "01"
      },
      "02": {
        "title": "Full",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c410": {
    "name": "Failnaught",
    "star": "5",
    "attribute": "F",
    "id": "c410",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Proud",
        "id": "01"
      },
      "02": {
        "title": "Demonic Deadeye",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c411": {
    "name": "Mei",
    "star": "",
    "attribute": "",
    "id": "c411",
    "variants": {
      "01": {
        "title": "Spa 5★ Animation",
        "id": "01"
      }
    }
  },
  "c412": {
    "name": "Cain",
    "star": "5",
    "attribute": "F",
    "id": "c412",
    "variants": {
      "88": {
        "title": "Heretic",
        "id": "88"
      },
      "89": {
        "title": "Exorcist",
        "id": "89"
      },
      "00": {
        "title": "人间体",
        "id": "00"
      },
      "01": {
        "title": "Exorcist",
        "id": "01"
      },
      "02": {
        "title": "Heretic",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c414": {
    "name": "Billy",
    "star": "5",
    "attribute": "W",
    "id": "c414",
    "variants": {
      "10": {
        "title": "Splash",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Gunner",
        "id": "01"
      },
      "02": {
        "title": "Deadshot",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c415": {
    "name": "Annie",
    "star": "5",
    "attribute": "G",
    "id": "c415",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Risk Taker",
        "id": "01"
      },
      "02": {
        "title": "Wild Hunt",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c416": {
    "name": "Keino",
    "star": "5",
    "attribute": "F",
    "id": "c416",
    "variants": {
      "10": {
        "title": "Chancing",
        "id": "10"
      },
      "87": {
        "title": "Chancing",
        "id": "87"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Demon Princess",
        "id": "01"
      },
      "02": {
        "title": "Phantom",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c417": {
    "name": "Tamamo",
    "star": "5",
    "attribute": "F",
    "id": "c417",
    "variants": {
      "10": {
        "title": "Summer",
        "id": "10"
      },
      "89": {
        "title": "Nine-Tailed Fox",
        "id": "89"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Nine-Tailed Fox",
        "id": "01"
      },
      "02": {
        "title": "Bewitching",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c418": {
    "name": "Mafdet",
    "star": "5",
    "attribute": "W",
    "id": "c418",
    "variants": {
      "01": {
        "title": "Flower of Justice",
        "id": "01"
      },
      "02": {
        "title": "Justice Incarnate",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c419": {
    "name": "凯瑟琳",
    "star": "5",
    "attribute": "F",
    "id": "c419",
    "variants": {
      "01": {
        "title": "Cheating",
        "id": "01"
      },
      "02": {
        "title": "Inverted & Devilish",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c420": {
    "name": "凯瑟琳",
    "star": "5",
    "attribute": "G",
    "id": "c420",
    "variants": {
      "10": {
        "title": "Wild Crimson",
        "id": "10"
      },
      "89": {
        "title": "Wild Crimson",
        "id": "89"
      },
      "01": {
        "title": "Girlfriend",
        "id": "01"
      },
      "02": {
        "title": "Pure Bride",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c421": {
    "name": "琳",
    "star": "5",
    "attribute": "W",
    "id": "c421",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Pure",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c422": {
    "name": "Heket",
    "star": "5",
    "attribute": "G",
    "id": "c422",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "88": {
        "title": "Mother",
        "id": "88"
      },
      "01": {
        "title": "Temptress",
        "id": "01"
      },
      "02": {
        "title": "Mother",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c423": {
    "name": "Laima",
    "star": "5",
    "attribute": "D",
    "id": "c423",
    "variants": {
      "10": {
        "title": "Pure Love",
        "id": "10"
      },
      "87": {
        "title": "Pure Love",
        "id": "87"
      },
      "88": {
        "title": "Biased",
        "id": "88"
      },
      "89": {
        "title": "Swift",
        "id": "89"
      },
      "01": {
        "title": "Swift",
        "id": "01"
      },
      "02": {
        "title": "Persistent",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c425": {
    "name": "Seth",
    "star": "5",
    "attribute": "D",
    "id": "c425",
    "variants": {
      "10": {
        "title": "Legion",
        "id": "10"
      },
      "87": {
        "title": "Legion",
        "id": "87"
      },
      "88": {
        "title": "Sacrificing",
        "id": "88"
      },
      "89": {
        "title": "Punishing",
        "id": "89"
      },
      "01": {
        "title": "Punishing",
        "id": "01"
      },
      "02": {
        "title": "Sacrificing",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c426": {
    "name": "Ophois",
    "star": "5",
    "attribute": "D",
    "id": "c426",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Hasty",
        "id": "01"
      },
      "02": {
        "title": "Pioneer",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c428": {
    "name": "Seth",
    "star": "5",
    "attribute": "L",
    "id": "c428",
    "variants": {
      "88": {
        "title": "Avatar",
        "id": "88"
      },
      "89": {
        "title": "Substitute",
        "id": "89"
      },
      "01": {
        "title": "Substitute",
        "id": "01"
      },
      "02": {
        "title": "Avatar",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c429": {
    "name": "Ziva",
    "star": "5",
    "attribute": "F",
    "id": "c429",
    "variants": {
      "10": {
        "title": "Christmas",
        "id": "10"
      },
      "88": {
        "title": "Frozen Wasteland",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Peaceful",
        "id": "01"
      },
      "02": {
        "title": "Frozen Wasteland",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c430": {
    "name": "Giltine",
    "star": "5",
    "attribute": "W",
    "id": "c430",
    "variants": {
      "10": {
        "title": "Christmas",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Tundra",
        "id": "01"
      },
      "02": {
        "title": "Ice Field Hunter",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c431": {
    "name": "Eshu",
    "star": "5",
    "attribute": "L",
    "id": "c431",
    "variants": {
      "10": {
        "title": "Christmas",
        "id": "10"
      },
      "01": {
        "title": "Skiing",
        "id": "01"
      },
      "02": {
        "title": "Snow",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c432": {
    "name": "Artemis",
    "star": "5",
    "attribute": "D",
    "id": "c432",
    "variants": {
      "10": {
        "title": "Lunar Eclipse",
        "id": "10"
      },
      "01": {
        "title": "Moonlight",
        "id": "01"
      },
      "02": {
        "title": "Berserk",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c433": {
    "name": "Pakhet",
    "star": "5",
    "attribute": "W",
    "id": "c433",
    "variants": {
      "10": {
        "title": "Lovely Summer",
        "id": "10"
      },
      "01": {
        "title": "Peppy",
        "id": "01"
      },
      "02": {
        "title": "Cutesy",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c434": {
    "name": "Leda",
    "star": "5",
    "attribute": "F",
    "id": "c434",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "01": {
        "title": "Sweet",
        "id": "01"
      },
      "02": {
        "title": "Lovely",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c435": {
    "name": "Sytry",
    "star": "5",
    "attribute": "G",
    "id": "c435",
    "variants": {
      "10": {
        "title": "Heartfelt",
        "id": "10"
      },
      "01": {
        "title": "Fancy",
        "id": "01"
      },
      "02": {
        "title": "Maid",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c436": {
    "name": "Serket",
    "star": "5",
    "attribute": "W",
    "id": "c436",
    "variants": {
      "10": {
        "title": "Agape",
        "id": "10"
      },
      "89": {
        "title": "Agape",
        "id": "89"
      },
      "01": {
        "title": "Anxious",
        "id": "01"
      },
      "02": {
        "title": "Maid",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c437": {
    "name": "Euros",
    "star": "5",
    "attribute": "W",
    "id": "c437",
    "variants": {
      "01": {
        "title": "Cute",
        "id": "01"
      },
      "02": {
        "title": "Joyful",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c438": {
    "name": "Semele",
    "star": "5",
    "attribute": "L",
    "id": "c438",
    "variants": {
      "10": {
        "title": "Dress-up",
        "id": "10"
      },
      "11": {
        "title": "Degenerated",
        "id": "11"
      },
      "12": {
        "title": "Young",
        "id": "12"
      },
      "01": {
        "title": "Mate",
        "id": "01"
      },
      "02": {
        "title": "Enchant",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c439": {
    "name": "土星",
    "star": "5",
    "attribute": "L",
    "id": "c439",
    "variants": {
      "01": {
        "title": "Dreamer",
        "id": "01"
      },
      "02": {
        "title": "Actress",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c440": {
    "name": "Mona",
    "star": "5",
    "attribute": "G",
    "id": "c440",
    "variants": {
      "10": {
        "title": "Exquisite",
        "id": "10"
      },
      "01": {
        "title": "Perfect",
        "id": "01"
      },
      "02": {
        "title": "Lovely",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c441": {
    "name": "Robin",
    "star": "5",
    "attribute": "G",
    "id": "c441",
    "variants": {
      "01": {
        "title": "Ritual Sword",
        "id": "01"
      },
      "02": {
        "title": "Hero",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c442": {
    "name": "Nirrti",
    "star": "5",
    "attribute": "W",
    "id": "c442",
    "variants": {
      "10": {
        "title": "Neighbor",
        "id": "10"
      },
      "11": {
        "title": "Zen Master",
        "id": "11"
      },
      "12": {
        "title": "",
        "id": "12"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Nirodhasatya",
        "id": "01"
      },
      "02": {
        "title": "Tathata",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c443": {
    "name": "Raffles",
    "star": "5",
    "attribute": "G",
    "id": "c443",
    "variants": {
      "01": {
        "title": "Phantom Thief",
        "id": "01"
      },
      "02": {
        "title": "Phantom",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c444": {
    "name": "Mitra",
    "star": "",
    "attribute": "",
    "id": "c444",
    "variants": {
      "10": {
        "title": "Uniform",
        "id": "10"
      },
      "11": {
        "title": "",
        "id": "11"
      },
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c445": {
    "name": "Kalaratri",
    "star": "5",
    "attribute": "F",
    "id": "c445",
    "variants": {
      "10": {
        "title": "Office Worker",
        "id": "10"
      },
      "11": {
        "title": "Casual",
        "id": "11"
      },
      "12": {
        "title": "Aurora",
        "id": "12"
      },
      "87": {
        "title": "Aurora",
        "id": "87"
      },
      "88": {
        "title": "Luminous",
        "id": "88"
      },
      "89": {
        "title": "Pitch-dark",
        "id": "89"
      },
      "01": {
        "title": "Pitch-dark",
        "id": "01"
      },
      "02": {
        "title": "First Dawn",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c446": {
    "name": "Argos",
    "star": "5",
    "attribute": "F",
    "id": "c446",
    "variants": {
      "88": {
        "title": "Bodyguard",
        "id": "88"
      },
      "01": {
        "title": "Fierce",
        "id": "01"
      },
      "02": {
        "title": "Bodyguard",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c447": {
    "name": "Miriam",
    "star": "5",
    "attribute": "G",
    "id": "c447",
    "variants": {
      "10": {
        "title": "Punishing",
        "id": "10"
      },
      "11": {
        "title": "",
        "id": "11"
      },
      "89": {
        "title": "Punishing",
        "id": "89"
      },
      "01": {
        "title": "Exorcist",
        "id": "01"
      },
      "02": {
        "title": "Slanderous",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c448": {
    "name": "Mircalla",
    "star": "5",
    "attribute": "D",
    "id": "c448",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "88": {
        "title": "Seductive",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Cunning",
        "id": "01"
      },
      "02": {
        "title": "Seductive",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c449": {
    "name": "Laura",
    "star": "5",
    "attribute": "L",
    "id": "c449",
    "variants": {
      "01": {
        "title": "Determined",
        "id": "01"
      },
      "02": {
        "title": "Chaser",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c450": {
    "name": "Rusalka",
    "star": "5",
    "attribute": "F",
    "id": "c450",
    "variants": {
      "01": {
        "title": "Tragedy",
        "id": "01"
      },
      "02": {
        "title": "Heroine",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c451": {
    "name": "Ayane",
    "star": "5",
    "attribute": "G",
    "id": "c451",
    "variants": {
      "10": {
        "title": "Fylgja",
        "id": "10"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Peach Blossom",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c452": {
    "name": "Leifang",
    "star": "5",
    "attribute": "F",
    "id": "c452",
    "variants": {
      "10": {
        "title": "Five-Colored Mirage",
        "id": "10"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Vermilion Bird",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c453": {
    "name": "Mercury",
    "star": "5",
    "attribute": "W",
    "id": "c453",
    "variants": {
      "01": {
        "title": "Warmhearted",
        "id": "01"
      },
      "02": {
        "title": "Embracing",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c454": {
    "name": "Juno",
    "star": "5",
    "attribute": "L",
    "id": "c454",
    "variants": {
      "88": {
        "title": "Pleading",
        "id": "88"
      },
      "89": {
        "title": "Lord",
        "id": "89"
      },
      "01": {
        "title": "Lord",
        "id": "01"
      },
      "02": {
        "title": "Pleading",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c455": {
    "name": "Tiwaz",
    "star": "5",
    "attribute": "D",
    "id": "c455",
    "variants": {
      "10": {
        "title": "Fancy",
        "id": "10"
      },
      "11": {
        "title": "Queen",
        "id": "11"
      },
      "12": {
        "title": "Bridal",
        "id": "12"
      },
      "86": {
        "title": "Bridal",
        "id": "86"
      },
      "87": {
        "title": "Fancy",
        "id": "87"
      },
      "01": {
        "title": "Lady",
        "id": "01"
      },
      "02": {
        "title": "Passionate",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c456": {
    "name": "Clotho",
    "star": "5",
    "attribute": "D",
    "id": "c456",
    "variants": {
      "01": {
        "title": "Mascot",
        "id": "01"
      },
      "02": {
        "title": "Destiny",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c457": {
    "name": "Odysseus",
    "star": "4",
    "attribute": "G",
    "id": "c457",
    "variants": {
      "01": {
        "title": "Onlooker",
        "id": "01"
      },
      "02": {
        "title": "Neutral",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c458": {
    "name": "Zephyros",
    "star": "5",
    "attribute": "D",
    "id": "c458",
    "variants": {
      "10": {
        "title": "Fastest",
        "id": "10"
      },
      "01": {
        "title": "Racing",
        "id": "01"
      },
      "02": {
        "title": "Gale",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c459": {
    "name": "Caca",
    "star": "5",
    "attribute": "W",
    "id": "c459",
    "variants": {
      "01": {
        "title": "Chaser",
        "id": "01"
      },
      "02": {
        "title": "Shadow",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c460": {
    "name": "Cacus",
    "star": "5",
    "attribute": "F",
    "id": "c460",
    "variants": {
      "10": {
        "title": "Boss Cow",
        "id": "10"
      },
      "88": {
        "title": "Freedom",
        "id": "88"
      },
      "01": {
        "title": "Marauder",
        "id": "01"
      },
      "02": {
        "title": "Freedom",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c461": {
    "name": "Aurora",
    "star": "5",
    "attribute": "G",
    "id": "c461",
    "variants": {
      "10": {
        "title": "Mate",
        "id": "10"
      },
      "01": {
        "title": "Remembering",
        "id": "01"
      },
      "02": {
        "title": "Confessing",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c462": {
    "name": "Theresa",
    "star": "5",
    "attribute": "F",
    "id": "c462",
    "variants": {
      "01": {
        "title": "Sworn",
        "id": "01"
      },
      "02": {
        "title": "Rosary",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c463": {
    "name": "Eve",
    "star": "5",
    "attribute": "D",
    "id": "c463",
    "variants": {
      "10": {
        "title": "Autumn",
        "id": "10"
      },
      "01": {
        "title": "Paradise Lost",
        "id": "01"
      },
      "02": {
        "title": "Dejected",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c464": {
    "name": "Arhat",
    "star": "5",
    "attribute": "W",
    "id": "c464",
    "variants": {
      "10": {
        "title": "Bodhisattva",
        "id": "10"
      },
      "11": {
        "title": "Naive",
        "id": "11"
      },
      "01": {
        "title": "Magnificent",
        "id": "01"
      },
      "02": {
        "title": "Immortal",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c465": {
    "name": "Sunah",
    "star": "5",
    "attribute": "L",
    "id": "c465",
    "variants": {
      "88": {
        "title": "Upright",
        "id": "88"
      },
      "01": {
        "title": "Loyal",
        "id": "01"
      },
      "02": {
        "title": "Upright",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c466": {
    "name": "Nezha",
    "star": "5",
    "attribute": "D",
    "id": "c466",
    "variants": {
      "01": {
        "title": "Carefree",
        "id": "01"
      },
      "02": {
        "title": "Yearning",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c467": {
    "name": "Ziva",
    "star": "5",
    "attribute": "F",
    "id": "c467",
    "variants": {
      "01": {
        "title": "Severe",
        "id": "01"
      },
      "02": {
        "title": "Burning",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c468": {
    "name": "Metis",
    "star": "5",
    "attribute": "F",
    "id": "c468",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Whispering",
        "id": "01"
      },
      "02": {
        "title": "Truth",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c469": {
    "name": "Aria",
    "star": "5",
    "attribute": "L",
    "id": "c469",
    "variants": {
      "10": {
        "title": "Tip Top",
        "id": "10"
      },
      "11": {
        "title": "School Uniform",
        "id": "11"
      },
      "01": {
        "title": "Brilliant",
        "id": "01"
      },
      "02": {
        "title": "Frozen Gale",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c470": {
    "name": "海王星",
    "star": "5",
    "attribute": "W",
    "id": "c470",
    "variants": {
      "01": {
        "title": "Sparkling",
        "id": "01"
      },
      "02": {
        "title": "Snowy",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c471": {
    "name": "Mars",
    "star": "5",
    "attribute": "D",
    "id": "c471",
    "variants": {
      "88": {
        "title": "Snowfall",
        "id": "88"
      },
      "01": {
        "title": "Shining",
        "id": "01"
      },
      "02": {
        "title": "Snowfall",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c472": {
    "name": "Venus",
    "star": "5",
    "attribute": "G",
    "id": "c472",
    "variants": {
      "01": {
        "title": "Dazzling",
        "id": "01"
      },
      "02": {
        "title": "Winter",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c473": {
    "name": "Titania",
    "star": "5",
    "attribute": "L",
    "id": "c473",
    "variants": {
      "01": {
        "title": "Overtaker",
        "id": "01"
      },
      "02": {
        "title": "High Spirit",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c474": {
    "name": "Hephaestus",
    "star": "5",
    "attribute": "D",
    "id": "c474",
    "variants": {
      "10": {
        "title": "Teacher",
        "id": "10"
      },
      "88": {
        "title": "Blazing",
        "id": "88"
      },
      "89": {
        "title": "Blacksmith",
        "id": "89"
      },
      "01": {
        "title": "Blacksmith",
        "id": "01"
      },
      "02": {
        "title": "Blazing",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c475": {
    "name": "土星",
    "star": "5",
    "attribute": "L",
    "id": "c475",
    "variants": {
      "01": {
        "title": "Dawn",
        "id": "01"
      },
      "02": {
        "title": "Frosty",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c476": {
    "name": "Nephthys",
    "star": "5",
    "attribute": "G",
    "id": "c476",
    "variants": {
      "88": {
        "title": "Peaceful",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Cheerful",
        "id": "01"
      },
      "02": {
        "title": "Peaceful",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c479": {
    "name": "Maupin",
    "star": "5",
    "attribute": "F",
    "id": "c479",
    "variants": {
      "20": {
        "title": "Undergraduate",
        "id": "20"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Tenacious",
        "id": "01"
      },
      "02": {
        "title": "Legendary",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c480": {
    "name": "Bradamante",
    "star": "5",
    "attribute": "L",
    "id": "c480",
    "variants": {
      "20": {
        "title": "Undergraduatet",
        "id": "20"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lovely",
        "id": "01"
      },
      "02": {
        "title": "Carefree",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c481": {
    "name": "Wyatt",
    "star": "5",
    "attribute": "F",
    "id": "c481",
    "variants": {
      "88": {
        "title": "Gunslinger",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Grenade",
        "id": "01"
      },
      "02": {
        "title": "Gunslinger",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c482": {
    "name": "Theophano",
    "star": "5",
    "attribute": "W",
    "id": "c482",
    "variants": {
      "10": {
        "title": "Rabbit",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Innocent",
        "id": "01"
      },
      "02": {
        "title": "Quirky",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c483": {
    "name": "Artemisia",
    "star": "5",
    "attribute": "F",
    "id": "c483",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Commander",
        "id": "01"
      },
      "02": {
        "title": "Claw Commander",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c484": {
    "name": "Judas",
    "star": "",
    "attribute": "",
    "id": "c484",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "c485": {
    "name": "Yuna",
    "star": "5",
    "attribute": "G",
    "id": "c485",
    "variants": {
      "10": {
        "title": "Light of Hope",
        "id": "10"
      },
      "01": {
        "title": "Dark Shadow",
        "id": "01"
      },
      "02": {
        "title": "Apathetic Shade",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c486": {
    "name": "Kubaba",
    "star": "5",
    "attribute": "W",
    "id": "c486",
    "variants": {
      "10": {
        "title": "Shotgun",
        "id": "10"
      },
      "87": {
        "title": "Shotgun",
        "id": "87"
      },
      "88": {
        "title": "Top Speed",
        "id": "88"
      },
      "89": {
        "title": "Chaser",
        "id": "89"
      },
      "01": {
        "title": "Chaser",
        "id": "01"
      },
      "02": {
        "title": "Top Speed",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c488": {
    "name": "Driades",
    "star": "5",
    "attribute": "D",
    "id": "c488",
    "variants": {
      "20": {
        "title": "Cosplaying",
        "id": "20"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Carefree Fairy",
        "id": "01"
      },
      "02": {
        "title": "Tomboy Fairy",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c489": {
    "name": "Loki",
    "star": "5",
    "attribute": "L",
    "id": "c489",
    "variants": {
      "10": {
        "title": "Abyssal",
        "id": "10"
      },
      "11": {
        "title": "Hermit",
        "id": "11"
      },
      "87": {
        "title": "Abyssal",
        "id": "87"
      },
      "88": {
        "title": "Dark Conspiracy",
        "id": "88"
      },
      "89": {
        "title": "",
        "id": "89"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Dark Conspiracy",
        "id": "02"
      },
      "c224_00": {
        "title": "人间体",
        "id": "c224_00"
      }
    },
    "type": "G"
  },
  "c490": {
    "name": "Guren",
    "star": "5",
    "attribute": "F",
    "id": "c490",
    "variants": {
      "10": {
        "title": "Determined",
        "id": "10"
      },
      "88": {
        "title": "Aspiring",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Assistant",
        "id": "01"
      },
      "02": {
        "title": "Aspiring",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c491": {
    "name": "Souka",
    "star": "5",
    "attribute": "W",
    "id": "c491",
    "variants": {
      "10": {
        "title": "Resigned",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Mourning",
        "id": "01"
      },
      "02": {
        "title": "Nihilistic",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c492": {
    "name": "何仙姑",
    "star": "5",
    "attribute": "F",
    "id": "c492",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c493": {
    "name": "Messier",
    "star": "5",
    "attribute": "W",
    "id": "c493",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "Empress",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Glorious",
        "id": "01"
      },
      "02": {
        "title": "Empress",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c494": {
    "name": "Rosanna",
    "star": "5",
    "attribute": "G",
    "id": "c494",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Merciful",
        "id": "01"
      },
      "02": {
        "title": "Embracing",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c495": {
    "name": "Catsi",
    "star": "5",
    "attribute": "G",
    "id": "c495",
    "variants": {
      "00": {
        "title": "Pactmaker",
        "id": "00"
      },
      "01": {
        "title": "Problem Kitty",
        "id": "01"
      },
      "02": {
        "title": "Freed Kitty",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c496": {
    "name": "Lassi",
    "star": "5",
    "attribute": "L",
    "id": "c496",
    "variants": {
      "00": {
        "title": "Pactmaker",
        "id": "00"
      },
      "01": {
        "title": "Dreaming Poppy",
        "id": "01"
      },
      "02": {
        "title": "Happy Poppy",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c497": {
    "name": "Wodan",
    "star": "5",
    "attribute": "L",
    "id": "c497",
    "variants": {
      "10": {
        "title": "Dreamer",
        "id": "10"
      },
      "01": {
        "title": "Returning",
        "id": "01"
      },
      "02": {
        "title": "Perfect",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c498": {
    "name": "索尔",
    "star": "5",
    "attribute": "F",
    "id": "c498",
    "variants": {
      "10": {
        "title": "Hellfire God",
        "id": "10"
      },
      "87": {
        "title": "Hellfire God",
        "id": "87"
      },
      "01": {
        "title": "初始",
        "id": "01"
      },
      "02": {
        "title": "满好感",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c499": {
    "name": "拉姆",
    "star": "5",
    "attribute": "W",
    "id": "c499",
    "variants": {
      "01": {
        "title": "初始",
        "id": "01"
      },
      "02": {
        "title": "满好感",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c500": {
    "name": "米莉娅",
    "star": "5",
    "attribute": "L",
    "id": "c500",
    "variants": {
      "01": {
        "title": "初始",
        "id": "01"
      },
      "02": {
        "title": "铁娘子",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c501": {
    "name": "Ragaraja",
    "star": "5",
    "attribute": "F",
    "id": "c501",
    "variants": {
      "10": {
        "title": "The Wisdom",
        "id": "10"
      },
      "11": {
        "title": "Frustrated",
        "id": "11"
      },
      "86": {
        "title": "Frustrated",
        "id": "86"
      },
      "87": {
        "title": "The Wisdom",
        "id": "87"
      },
      "88": {
        "title": "Detached",
        "id": "88"
      },
      "89": {
        "title": "Passionate",
        "id": "89"
      },
      "01": {
        "title": "Passionate",
        "id": "01"
      },
      "02": {
        "title": "Detached",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c502": {
    "name": "To Keika",
    "star": "5",
    "attribute": "W",
    "id": "c502",
    "variants": {
      "10": {
        "title": "Ghost",
        "id": "10"
      },
      "11": {
        "title": "School Uniform",
        "id": "11"
      },
      "01": {
        "title": "Psychic",
        "id": "01"
      },
      "02": {
        "title": "Ghost-Calling",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c503": {
    "name": "Bari",
    "star": "5",
    "attribute": "L",
    "id": "c503",
    "variants": {
      "10": {
        "title": "Summer Solstice",
        "id": "10"
      },
      "88": {
        "title": "Haughty",
        "id": "88"
      },
      "01": {
        "title": "Obedient",
        "id": "01"
      },
      "02": {
        "title": "Haughty",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c504": {
    "name": "Marduk",
    "star": "5",
    "attribute": "D",
    "id": "c504",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Aspiring Goddess",
        "id": "01"
      },
      "02": {
        "title": "Governing Goddess",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c505": {
    "name": "Boreas",
    "star": "5",
    "attribute": "L",
    "id": "c505",
    "variants": {
      "10": {
        "title": "Resting",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Sprinting",
        "id": "01"
      },
      "02": {
        "title": "Sweeping",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c506": {
    "name": "Notus",
    "star": "5",
    "attribute": "D",
    "id": "c506",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Leading",
        "id": "01"
      },
      "02": {
        "title": "Stormy",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c507": {
    "name": "Phorcus",
    "star": "5",
    "attribute": "D",
    "id": "c507",
    "variants": {
      "10": {
        "title": "Boozer",
        "id": "10"
      },
      "88": {
        "title": "Imbiber",
        "id": "88"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Stand-In Shrine Maiden",
        "id": "01"
      },
      "02": {
        "title": "Imbiber",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c508": {
    "name": "Chandra",
    "star": "5",
    "attribute": "L",
    "id": "c508",
    "variants": {
      "01": {
        "title": "Shaman",
        "id": "01"
      },
      "02": {
        "title": "Blade of Vengeance",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c509": {
    "name": "Strigoy",
    "star": "5",
    "attribute": "G",
    "id": "c509",
    "variants": {
      "10": {
        "title": "Bloody",
        "id": "10"
      },
      "87": {
        "title": "Bloody",
        "id": "87"
      },
      "88": {
        "title": "Immortal",
        "id": "88"
      },
      "89": {
        "title": "Scarlet Blood",
        "id": "89"
      },
      "01": {
        "title": "Scarlet Blood",
        "id": "01"
      },
      "02": {
        "title": "Immortal",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c510": {
    "name": "Krsnik",
    "star": "5",
    "attribute": "F",
    "id": "c510",
    "variants": {
      "10": {
        "title": "Smoker",
        "id": "10"
      },
      "01": {
        "title": "Adversary",
        "id": "01"
      },
      "02": {
        "title": "Martyr",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c511": {
    "name": "Philotes",
    "star": "5",
    "attribute": "D",
    "id": "c511",
    "variants": {
      "01": {
        "title": "Indecisive",
        "id": "01"
      },
      "02": {
        "title": "Befriending",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c512": {
    "name": "Turan",
    "star": "5",
    "attribute": "W",
    "id": "c512",
    "variants": {
      "01": {
        "title": "Confident",
        "id": "01"
      },
      "02": {
        "title": "Liberated",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c513": {
    "name": "Akrasia",
    "star": "5",
    "attribute": "L",
    "id": "c513",
    "variants": {
      "10": {
        "title": "War Goddess",
        "id": "10"
      },
      "87": {
        "title": "War Goddess",
        "id": "87"
      },
      "88": {
        "title": "Almighty",
        "id": "88"
      },
      "89": {
        "title": "Worshipped",
        "id": "89"
      },
      "01": {
        "title": "Worshipped",
        "id": "01"
      },
      "02": {
        "title": "Almighty",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c514": {
    "name": "Duetsha",
    "star": "5",
    "attribute": "D",
    "id": "c514",
    "variants": {
      "01": {
        "title": "Con Artist",
        "id": "01"
      },
      "02": {
        "title": "Deceiver",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c516": {
    "name": "Erysichthon",
    "star": "5",
    "attribute": "F",
    "id": "c516",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Luscious",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c517": {
    "name": "Grendel",
    "star": "5",
    "attribute": "G",
    "id": "c517",
    "variants": {
      "01": {
        "title": "Retaliator",
        "id": "01"
      },
      "02": {
        "title": "Aggressor",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c518": {
    "name": "Sunny",
    "star": "5",
    "attribute": "D",
    "id": "c518",
    "variants": {
      "88": {
        "title": "",
        "id": "88"
      },
      "01": {
        "title": "Unlucky",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c519": {
    "name": "Orion",
    "star": "5",
    "attribute": "L",
    "id": "c519",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c520": {
    "name": "Ishimi",
    "star": "5",
    "attribute": "W",
    "id": "c520",
    "variants": {
      "10": {
        "title": "Transforming",
        "id": "10"
      },
      "87": {
        "title": "Transforming",
        "id": "87"
      },
      "88": {
        "title": "False",
        "id": "88"
      },
      "89": {
        "title": "Draconic",
        "id": "89"
      },
      "01": {
        "title": "Draconic",
        "id": "01"
      },
      "02": {
        "title": "False",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c521": {
    "name": "Zegati",
    "star": "5",
    "attribute": "F",
    "id": "c521",
    "variants": {
      "10": {
        "title": "Torrent",
        "id": "10"
      },
      "87": {
        "title": "Torrent",
        "id": "87"
      },
      "88": {
        "title": "Free",
        "id": "88"
      },
      "89": {
        "title": "Resisting",
        "id": "89"
      },
      "01": {
        "title": "Resisting",
        "id": "01"
      },
      "02": {
        "title": "Free",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c522": {
    "name": "Dalia",
    "star": "5",
    "attribute": "W",
    "id": "c522",
    "variants": {
      "01": {
        "title": "Dashing",
        "id": "01"
      },
      "02": {
        "title": "Charging",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c523": {
    "name": "Nicole",
    "star": "5",
    "attribute": "W",
    "id": "c523",
    "variants": {
      "88": {
        "title": "Reincarnation",
        "id": "88"
      },
      "01": {
        "title": "Epiphany",
        "id": "01"
      },
      "02": {
        "title": "Reincarnation",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c524": {
    "name": "Pepita",
    "star": "5",
    "attribute": "G",
    "id": "c524",
    "variants": {
      "01": {
        "title": "Polar",
        "id": "01"
      },
      "02": {
        "title": "White Rain",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c525": {
    "name": "Grilla",
    "star": "5",
    "attribute": "G",
    "id": "c525",
    "variants": {
      "10": {
        "title": "Summer Night Mistake",
        "id": "10"
      },
      "01": {
        "title": "Predator",
        "id": "01"
      },
      "02": {
        "title": "Snowfall",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c526": {
    "name": "Rani",
    "star": "5",
    "attribute": "G",
    "id": "c526",
    "variants": {
      "10": {
        "title": "Beloved Daughter",
        "id": "10"
      },
      "87": {
        "title": "Beloved Daughter",
        "id": "87"
      },
      "88": {
        "title": "Black Tiger",
        "id": "88"
      },
      "89": {
        "title": "Stern",
        "id": "89"
      },
      "01": {
        "title": "Stern",
        "id": "01"
      },
      "02": {
        "title": "Black Tiger",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c527": {
    "name": "Reynard",
    "star": "5",
    "attribute": "F",
    "id": "c527",
    "variants": {
      "10": {
        "title": "Sea Lord",
        "id": "10"
      },
      "87": {
        "title": "Sea Lord",
        "id": "87"
      },
      "88": {
        "title": "Selfish",
        "id": "88"
      },
      "01": {
        "title": "Crafty",
        "id": "01"
      },
      "02": {
        "title": "Selfish",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c528": {
    "name": "Zemyna",
    "star": "5",
    "attribute": "G",
    "id": "c528",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "H"
  },
  "c529": {
    "name": "Kubera",
    "star": "5",
    "attribute": "D",
    "id": "c529",
    "variants": {
      "01": {
        "title": "Northern",
        "id": "01"
      },
      "02": {
        "title": "Wise",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c530": {
    "name": "Kanaloa",
    "star": "5",
    "attribute": "W",
    "id": "c530",
    "variants": {
      "10": {
        "title": "Bikini",
        "id": "10"
      },
      "87": {
        "title": "Bikini",
        "id": "87"
      },
      "88": {
        "title": "Wild",
        "id": "88"
      },
      "89": {
        "title": "Lord",
        "id": "89"
      },
      "01": {
        "title": "Lord",
        "id": "01"
      },
      "02": {
        "title": "Wild",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c532": {
    "name": "Anubis",
    "star": "5",
    "attribute": "D",
    "id": "c532",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c533": {
    "name": "梦神",
    "star": "5",
    "attribute": "W",
    "id": "c533",
    "variants": {
      "01": {
        "title": "Well-rounded",
        "id": "01"
      },
      "02": {
        "title": "Dreamy",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c534": {
    "name": "Legend",
    "star": "5",
    "attribute": "W",
    "id": "c534",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "F"
  },
  "c537": {
    "name": "Elysion",
    "star": "5",
    "attribute": "G",
    "id": "c537",
    "variants": {
      "10": {
        "title": "Sorrowful",
        "id": "10"
      },
      "01": {
        "title": "Captain",
        "id": "01"
      },
      "02": {
        "title": "Freed",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c538": {
    "name": "Sallos",
    "star": "5",
    "attribute": "L",
    "id": "c538",
    "variants": {
      "01": {
        "title": "Sagacious",
        "id": "01"
      },
      "02": {
        "title": "Salacious",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c539": {
    "name": "Belial",
    "star": "5",
    "attribute": "L",
    "id": "c539",
    "variants": {
      "10": {
        "title": "Executioner",
        "id": "10"
      },
      "87": {
        "title": "Executioner",
        "id": "87"
      },
      "88": {
        "title": "Destructive",
        "id": "88"
      },
      "89": {
        "title": "Chaotic",
        "id": "89"
      },
      "01": {
        "title": "Chaotic",
        "id": "01"
      },
      "02": {
        "title": "Destructive",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c540": {
    "name": "维利塔",
    "star": "5",
    "attribute": "D",
    "id": "c540",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c541": {
    "name": "阿罗汉",
    "star": "5",
    "attribute": "D",
    "id": "c541",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c543": {
    "name": "梅加拉",
    "star": "5",
    "attribute": "G",
    "id": "c543",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c544": {
    "name": "青钢刀",
    "star": "5",
    "attribute": "W",
    "id": "c544",
    "variants": {
      "01": {
        "title": "初始",
        "id": "01"
      },
      "02": {
        "title": "满好感",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c545": {
    "name": "爱丽儿",
    "star": "5",
    "attribute": "W",
    "id": "c545",
    "variants": {
      "01": {
        "title": "Watcher",
        "id": "01"
      },
      "02": {
        "title": "Messenger",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c547": {
    "name": "狄蜜特",
    "star": "5",
    "attribute": "D",
    "id": "c547",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c548": {
    "name": "犹大",
    "star": "5",
    "attribute": "D",
    "id": "c548",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c549": {
    "name": "妲努",
    "star": "5",
    "attribute": "G",
    "id": "c549",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c550": {
    "name": "斯克鲁奇",
    "star": "5",
    "attribute": "G",
    "id": "c550",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Blessed",
        "id": "01"
      },
      "02": {
        "title": "Fiesta",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c552": {
    "name": "乌波斯",
    "star": "5",
    "attribute": "L",
    "id": "c552",
    "variants": {
      "01": {
        "title": "Black",
        "id": "01"
      },
      "02": {
        "title": "White",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c557": {
    "name": "鲁弗斯",
    "star": "5",
    "attribute": "F",
    "id": "c557",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "87": {
        "title": "",
        "id": "87"
      },
      "88": {
        "title": "",
        "id": "88"
      },
      "89": {
        "title": "",
        "id": "89"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      },
      "c024_00": {
        "title": "Neighbor",
        "id": "c024_00"
      }
    },
    "type": "J"
  },
  "c558": {
    "name": "格琳达",
    "star": "5",
    "attribute": "W",
    "id": "c558",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c560": {
    "name": "奈德",
    "star": "5",
    "attribute": "F",
    "id": "c560",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c561": {
    "name": "摩根",
    "star": "5",
    "attribute": "L",
    "id": "c561",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c562": {
    "name": "小圆",
    "star": "5",
    "attribute": "F",
    "id": "c562",
    "variants": {
      "88": {
        "title": "",
        "id": "88"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c563": {
    "name": "薄荷",
    "star": "5",
    "attribute": "W",
    "id": "c563",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c564": {
    "name": "奶光",
    "star": "5",
    "attribute": "L",
    "id": "c564",
    "variants": {
      "00": {
        "title": "",
        "id": "00"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c565": {
    "name": "芙蕾雅",
    "star": "5",
    "attribute": "W",
    "id": "c565",
    "variants": {
      "00": {
        "title": "",
        "id": "00"
      },
      "01": {
        "title": "初始",
        "id": "01"
      },
      "02": {
        "title": "满好感",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c566": {
    "name": "欧罗巴",
    "star": "5",
    "attribute": "G",
    "id": "c566",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c567": {
    "name": "火蝴蝶",
    "star": "5",
    "attribute": "F",
    "id": "c567",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c568": {
    "name": "黛安娜",
    "star": "5",
    "attribute": "F",
    "id": "c568",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c569": {
    "name": "黑卡蒂",
    "star": "5",
    "attribute": "G",
    "id": "c569",
    "variants": {
      "10": {
        "title": "",
        "id": "10"
      },
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "S"
  },
  "c573": {
    "name": "雅娜",
    "star": "5",
    "attribute": "L",
    "id": "c573",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c575": {
    "name": "苏内特",
    "star": "5",
    "attribute": "D",
    "id": "c575",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "",
        "id": "02"
      }
    },
    "type": "G"
  },
  "c576": {
    "name": "凯龙",
    "star": "5",
    "attribute": "W",
    "id": "c576",
    "variants": {
      "01": {
        "title": "Ninja",
        "id": "01"
      },
      "02": {
        "title": "Great Leader",
        "id": "02"
      }
    },
    "type": "J"
  },
  "c577": {
    "name": "瑟琳",
    "star": "5",
    "attribute": "G",
    "id": "c577",
    "variants": {
      "01": {
        "title": "Darkness",
        "id": "01"
      },
      "02": {
        "title": "Ghostly",
        "id": "02"
      }
    },
    "type": "S"
  },
  "m077": {
    "name": "魔方",
    "star": "5",
    "attribute": "L",
    "id": "m077",
    "variants": {
      "10": {
        "title": "Gloomy",
        "id": "10"
      },
      "11": {
        "title": "Purple Gloomy",
        "id": "11"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Cube",
        "id": "01"
      },
      "02": {
        "title": "Big Cube",
        "id": "02"
      }
    },
    "type": "J"
  },
  "m038": {
    "name": "白斩鸡",
    "id": "m038",
    "star": "5",
    "attribute": "L",
    "variants": {
      "10": {
        "title": "Evil Flower",
        "id": "10"
      },
      "11": {
        "title": "Pure Flower",
        "id": "11"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "White Wing",
        "id": "01"
      },
      "02": {
        "title": "Black Wing",
        "id": "02"
      }
    },
    "type": "F"
  },
  "m057": {
    "name": "基佬龙",
    "id": "m057",
    "star": "5",
    "attribute": "W",
    "variants": {
      "10": {
        "title": "Azure Night",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Blue Shadow",
        "id": "01"
      },
      "02": {
        "title": "Black Shadow",
        "id": "02"
      }
    },
    "type": "J"
  },
  "m261": {
    "name": "摩亚",
    "id": "m261",
    "star": "5",
    "attribute": "D",
    "variants": {
      "88": {
        "title": "Monochrome",
        "id": "88"
      },
      "01": {
        "title": "Two-Sided",
        "id": "01"
      },
      "02": {
        "title": "Monochrome",
        "id": "02"
      }
    },
    "type": "J"
  },
  "m054": {
    "name": "Gomorrah",
    "id": "m054",
    "star": "4",
    "attribute": "L",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Judge",
        "id": "01"
      },
      "02": {
        "title": "Extinct",
        "id": "02"
      }
    },
    "type": "F"
  },
  "m045": {
    "name": "孤独的精灵",
    "id": "m045",
    "star": "3",
    "attribute": "L",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Lonely",
        "id": "01"
      },
      "02": {
        "title": "Obsessed",
        "id": "02"
      }
    },
    "type": "J"
  },
  "m056": {
    "name": "高达",
    "id": "m056",
    "star": "5",
    "attribute": "G",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Villanious",
        "id": "01"
      },
      "02": {
        "title": "Heavy Fire",
        "id": "02"
      }
    },
    "type": "G"
  },
  "m154": {
    "name": "Gungnir",
    "id": "m154",
    "star": "4",
    "attribute": "D",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Dark",
        "id": "01"
      },
      "02": {
        "title": "Red",
        "id": "02"
      }
    },
    "type": "G"
  },
  "m215": {
    "name": "史莱姆王",
    "id": "m215",
    "star": "5",
    "attribute": "L",
    "variants": {
      "88": {
        "title": "Passionate Ruler ",
        "id": "88"
      },
      "89": {
        "title": "Fervent Ruler",
        "id": "89"
      },
      "01": {
        "title": "Passionate Ruler",
        "id": "01"
      },
      "02": {
        "title": "Fervent Ruler",
        "id": "02"
      }
    },
    "type": "F"
  },
  "m224": {
    "name": "法老",
    "id": "m224",
    "star": "5",
    "attribute": "L",
    "variants": {
      "89": {
        "title": "Immovable",
        "id": "89"
      },
      "01": {
        "title": "Gatekeeper",
        "id": "01"
      },
      "02": {
        "title": "Immovable",
        "id": "02"
      }
    },
    "type": "J"
  },
  "m264": {
    "name": "白斩鸡",
    "id": "m264",
    "star": "5",
    "attribute": "W",
    "variants": {
      "88": {
        "title": "Abyssal",
        "id": "88"
      },
      "89": {
        "title": "",
        "id": "89"
      },
      "01": {
        "title": "Devouring",
        "id": "01"
      },
      "02": {
        "title": "Abyssal",
        "id": "02"
      }
    },
    "type": "G"
  },
  "m051": {
    "name": "哈迪斯",
    "id": "m051",
    "star": "5",
    "attribute": "F",
    "variants": {
      "10": {
        "title": "Dead End",
        "id": "10"
      },
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "type": "F"
  },
  "m278": {
    "name": "Ox",
    "id": "m278",
    "star": "1",
    "attribute": "W",
    "variants": {
      "01": {
        "title": "Water Drop",
        "id": "01"
      },
      "02": {
        "title": "Water Cloud",
        "id": "02"
      }
    },
    "type": "F"
  },
  "m279": {
    "name": "Ox",
    "id": "m279",
    "star": "1",
    "attribute": "F",
    "variants": {
      "01": {
        "title": "Ember",
        "id": "01"
      },
      "02": {
        "title": "Flame",
        "id": "02"
      }
    },
    "type": "F"
  },
  "m280": {
    "name": "Ox",
    "id": "m280",
    "star": "1",
    "attribute": "G",
    "variants": {
      "01": {
        "title": "Sprout",
        "id": "01"
      },
      "02": {
        "title": "Leaf",
        "id": "02"
      }
    },
    "type": "F"
  },
  "m281": {
    "name": "Ox",
    "id": "m281",
    "star": "1",
    "attribute": "L",
    "variants": {
      "01": {
        "title": "Sparkle",
        "id": "01"
      },
      "02": {
        "title": "Sunlight",
        "id": "02"
      }
    },
    "type": "F"
  },
  "m282": {
    "name": "Ox",
    "id": "m282",
    "star": "1",
    "attribute": "D",
    "variants": {
      "01": {
        "title": "Star Shade",
        "id": "01"
      },
      "02": {
        "title": "Moon Shade",
        "id": "02"
      }
    },
    "type": "F"
  },
  "m059": {
    "name": "Bazooka",
    "id": "m059",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Green Helmet",
        "id": "01"
      },
      "02": {
        "title": "Red Helmet",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "G"
  },
  "m063": {
    "name": "Ampoule",
    "id": "m063",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Poison",
        "id": "01"
      },
      "02": {
        "title": "New Poison",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "G",
    "type": "H"
  },
  "m191": {
    "name": "Chimera",
    "id": "m191",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Silent",
        "id": "01"
      },
      "02": {
        "title": "Apocalyptic",
        "id": "02"
      }
    },
    "star": "4",
    "attribute": "F",
    "type": "F"
  },
  "m200": {
    "name": "Ankh",
    "id": "m200",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Guard",
        "id": "01"
      },
      "02": {
        "title": "Enforcer",
        "id": "02"
      }
    },
    "star": "4",
    "attribute": "G",
    "type": "J"
  },
  "m201": {
    "name": "Mech Commander",
    "id": "m201",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Bombing",
        "id": "01"
      },
      "02": {
        "title": "Blasting",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "G",
    "type": "G"
  },
  "m202": {
    "name": "Mech Soldier",
    "id": "m202",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Armed",
        "id": "01"
      },
      "02": {
        "title": "Teeth",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "G",
    "type": "F"
  },
  "m203": {
    "name": "Bremen",
    "id": "m203",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      },
      "01": {
        "title": "Twirling",
        "id": "01"
      },
      "02": {
        "title": "Spinning",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "L",
    "type": "J"
  },
  "m008": {
    "name": "果冻",
    "id": "m008",
    "variants": {
      "01": {
        "title": "Strawberry Gelatin",
        "id": "01"
      }
    },
    "star": "1",
    "attribute": "F",
    "type": "S"
  },
  "m009": {
    "name": "果冻",
    "id": "m009",
    "variants": {
      "01": {
        "title": "Soda Pop Gelatin",
        "id": "01"
      }
    },
    "star": "1",
    "attribute": "W",
    "type": "S"
  },
  "m010": {
    "name": "布灵",
    "id": "m010",
    "variants": {
      "01": {
        "title": "Soda Pop Pudding",
        "id": "01"
      }
    },
    "star": "1",
    "attribute": "W",
    "type": "G"
  },
  "m011": {
    "name": "布灵",
    "id": "m011",
    "variants": {
      "01": {
        "title": "Strawberry Pudding",
        "id": "01"
      }
    },
    "star": "1",
    "attribute": "F",
    "type": "G"
  },
  "m012": {
    "name": "Dondon",
    "id": "m012",
    "variants": {
      "02": {
        "title": "Multi-Year",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "G",
    "type": "G"
  },
  "m018": {
    "name": "Pom",
    "id": "m018",
    "variants": {
      "01": {
        "title": "Fate",
        "id": "01"
      },
      "02": {
        "title": "Destiny",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "F",
    "type": "F"
  },
  "m021": {
    "name": "Donkey",
    "id": "m021",
    "variants": {
      "01": {
        "title": "Idle",
        "id": "01"
      },
      "02": {
        "title": "Pleasure-Seeking",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "G",
    "type": "J"
  },
  "m022": {
    "name": "Puppy",
    "id": "m022",
    "variants": {
      "01": {
        "title": "Free",
        "id": "01"
      },
      "02": {
        "title": "Obedient",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "W",
    "type": "F"
  },
  "m026": {
    "name": "Chick",
    "id": "m026",
    "variants": {
      "10": {
        "title": "Summer",
        "id": "10"
      },
      "01": {
        "title": "Lazy",
        "id": "01"
      },
      "02": {
        "title": "Lazy Fused",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "W",
    "type": "F"
  },
  "m028": {
    "name": "松鼠",
    "id": "m028",
    "variants": {
      "01": {
        "title": "Ouro Squirrel",
        "id": "01"
      },
      "02": {
        "title": "Ouro Tiger",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "L",
    "type": "F"
  },
  "m029": {
    "name": "Tooth",
    "id": "m029",
    "variants": {
      "01": {
        "title": "Glowing",
        "id": "01"
      },
      "02": {
        "title": "Flaming",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "W",
    "type": "H"
  },
  "m030": {
    "name": "Ball",
    "id": "m030",
    "variants": {
      "01": {
        "title": "Green",
        "id": "01"
      },
      "02": {
        "title": "E-Green",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "G",
    "type": "S"
  },
  "m031": {
    "name": "Tree",
    "id": "m031",
    "variants": {
      "01": {
        "title": "Dreary",
        "id": "01"
      },
      "02": {
        "title": "Old",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "G",
    "type": "F"
  },
  "m040": {
    "name": "链锯杀手",
    "id": "m040",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "star": "3",
    "attribute": "D",
    "type": "F"
  },
  "m047": {
    "name": "Egg",
    "id": "m047",
    "variants": {
      "01": {
        "title": "Mysterious",
        "id": "01"
      },
      "02": {
        "title": "Columbus",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "W",
    "type": "S"
  },
  "m048": {
    "name": "Bunny",
    "id": "m048",
    "variants": {
      "01": {
        "title": "Back",
        "id": "01"
      },
      "02": {
        "title": "Front",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "L",
    "type": "F"
  },
  "m049": {
    "name": "剥制",
    "id": "m049",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "star": "4",
    "attribute": "D",
    "type": "F"
  },
  "m050": {
    "name": "断头台",
    "id": "m050",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "star": "4",
    "attribute": "D",
    "type": "G"
  },
  "m052": {
    "name": "Basilisk",
    "id": "m052",
    "variants": {
      "01": {
        "title": "Desert",
        "id": "01"
      },
      "02": {
        "title": "Plains",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "G",
    "type": "F"
  },
  "m053": {
    "name": "锡德拉",
    "id": "m053",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "star": "4",
    "attribute": "D",
    "type": "J"
  },
  "m061": {
    "name": "Syringe",
    "id": "m061",
    "variants": {
      "01": {
        "title": "Strawberry",
        "id": "01"
      },
      "02": {
        "title": "Strawberry",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "F",
    "type": "H"
  },
  "m062": {
    "name": "Syringe",
    "id": "m062",
    "variants": {
      "01": {
        "title": "Grape",
        "id": "01"
      },
      "02": {
        "title": "Grape",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "D",
    "type": "H"
  },
  "m064": {
    "name": "普可利",
    "id": "m064",
    "variants": {
      "01": {
        "title": "Piglet Pukli",
        "id": "01"
      },
      "02": {
        "title": "Piglet Pukli Jin",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "G",
    "type": "G"
  },
  "m065": {
    "name": "可可利",
    "id": "m065",
    "variants": {
      "01": {
        "title": "Piglet Kokuri",
        "id": "01"
      },
      "02": {
        "title": "Piglet Kokuri Jin",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "L",
    "type": "G"
  },
  "m066": {
    "name": "古可利",
    "id": "m066",
    "variants": {
      "01": {
        "title": "Piglet Kukuri",
        "id": "01"
      },
      "02": {
        "title": "Piglet Kukuri Jin",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "F",
    "type": "G"
  },
  "m067": {
    "name": "Food",
    "id": "m067",
    "variants": {
      "01": {
        "title": "Aqua",
        "id": "01"
      },
      "02": {
        "title": "B. Aqua",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "W",
    "type": "S"
  },
  "m068": {
    "name": "Food",
    "id": "m068",
    "variants": {
      "01": {
        "title": "Dark",
        "id": "01"
      },
      "02": {
        "title": "B. Dark",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "D",
    "type": "S"
  },
  "m069": {
    "name": "Food",
    "id": "m069",
    "variants": {
      "01": {
        "title": "Light",
        "id": "01"
      },
      "02": {
        "title": "B. Light",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "L",
    "type": "S"
  },
  "m070": {
    "name": "Red Chain",
    "id": "m070",
    "variants": {
      "01": {
        "title": "Bound",
        "id": "01"
      },
      "02": {
        "title": "Liberated",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "F",
    "type": "F"
  },
  "m071": {
    "name": "Green Chain",
    "id": "m071",
    "variants": {
      "01": {
        "title": "Bound",
        "id": "01"
      },
      "02": {
        "title": "Liberated",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "G",
    "type": "F"
  },
  "m072": {
    "name": "Blue Chain",
    "id": "m072",
    "variants": {
      "01": {
        "title": "Bound",
        "id": "01"
      },
      "02": {
        "title": "Liberated",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "W",
    "type": "F"
  },
  "m073": {
    "name": "Cube",
    "id": "m073",
    "variants": {
      "01": {
        "title": "Cure",
        "id": "01"
      },
      "02": {
        "title": "Cure",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "G",
    "type": "J"
  },
  "m074": {
    "name": "Cube",
    "id": "m074",
    "variants": {
      "01": {
        "title": "Poison",
        "id": "01"
      },
      "02": {
        "title": "Poison",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "D",
    "type": "J"
  },
  "m075": {
    "name": "Cube",
    "id": "m075",
    "variants": {
      "01": {
        "title": "Evil",
        "id": "01"
      },
      "02": {
        "title": "Evil",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "W",
    "type": "J"
  },
  "m076": {
    "name": "Cube",
    "id": "m076",
    "variants": {
      "01": {
        "title": "Honey",
        "id": "01"
      },
      "02": {
        "title": "Honey",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "L",
    "type": "J"
  },
  "m078": {
    "name": "Cocoon",
    "id": "m078",
    "variants": {
      "01": {
        "title": "Emerald",
        "id": "01"
      },
      "02": {
        "title": "Emerald",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "G",
    "type": "J"
  },
  "m080": {
    "name": "Cocoon",
    "id": "m080",
    "variants": {
      "01": {
        "title": "Ruby",
        "id": "01"
      },
      "02": {
        "title": "Ruby",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "F",
    "type": "J"
  },
  "m081": {
    "name": "Cocoon",
    "id": "m081",
    "variants": {
      "01": {
        "title": "Citrine",
        "id": "01"
      },
      "02": {
        "title": "Citrine",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "L",
    "type": "J"
  },
  "m082": {
    "name": "Cocoon",
    "id": "m082",
    "variants": {
      "01": {
        "title": "Sapphire",
        "id": "01"
      },
      "02": {
        "title": "Sapphire",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "W",
    "type": "J"
  },
  "m083": {
    "name": "Cocoon",
    "id": "m083",
    "variants": {
      "01": {
        "title": "Amethyst",
        "id": "01"
      },
      "02": {
        "title": "Amethyst",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "D",
    "type": "J"
  },
  "m084": {
    "name": "Cube",
    "id": "m084",
    "variants": {
      "01": {
        "title": "Pie",
        "id": "01"
      },
      "02": {
        "title": "Pie",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "F",
    "type": "J"
  },
  "m086": {
    "name": "Light Chain",
    "id": "m086",
    "variants": {
      "01": {
        "title": "Bound",
        "id": "01"
      },
      "02": {
        "title": "Liberated",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "L",
    "type": "F"
  },
  "m087": {
    "name": "Dark Chain",
    "id": "m087",
    "variants": {
      "01": {
        "title": "Bound",
        "id": "01"
      },
      "02": {
        "title": "Liberated",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "D",
    "type": "F"
  },
  "m089": {
    "name": "姆可利",
    "id": "m089",
    "variants": {
      "01": {
        "title": "Piglet Mukuri",
        "id": "01"
      },
      "02": {
        "title": "Piglet Mukuri Jin",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "W",
    "type": "G"
  },
  "m090": {
    "name": "荷可利",
    "id": "m090",
    "variants": {
      "01": {
        "title": "Piglet Fukli",
        "id": "01"
      },
      "02": {
        "title": "Piglet Fukli Jin",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "D",
    "type": "F"
  },
  "m092": {
    "name": "Syringe",
    "id": "m092",
    "variants": {
      "01": {
        "title": "Mint",
        "id": "01"
      },
      "02": {
        "title": "Mint",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "G",
    "type": "H"
  },
  "m093": {
    "name": "Syringe",
    "id": "m093",
    "variants": {
      "01": {
        "title": "Apple",
        "id": "01"
      },
      "02": {
        "title": "Apple",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "L",
    "type": "H"
  },
  "m095": {
    "name": "Syringe",
    "id": "m095",
    "variants": {
      "01": {
        "title": "Soda Pop",
        "id": "01"
      },
      "02": {
        "title": "Soda Pop",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "W",
    "type": "H"
  },
  "m096": {
    "name": "Ball",
    "id": "m096",
    "variants": {
      "01": {
        "title": "Light",
        "id": "01"
      },
      "02": {
        "title": "E. Light",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "L",
    "type": "S"
  },
  "m097": {
    "name": "Ball",
    "id": "m097",
    "variants": {
      "01": {
        "title": "Blue",
        "id": "01"
      },
      "02": {
        "title": "E. Blue",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "W",
    "type": "S"
  },
  "m098": {
    "name": "Ball",
    "id": "m098",
    "variants": {
      "01": {
        "title": "Purple",
        "id": "01"
      },
      "02": {
        "title": "E. Dark",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "D",
    "type": "S"
  },
  "m100": {
    "name": "Ball",
    "id": "m100",
    "variants": {
      "01": {
        "title": "Fire",
        "id": "01"
      },
      "02": {
        "title": "E. Fire",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "F",
    "type": "S"
  },
  "m107": {
    "name": "Food",
    "id": "m107",
    "variants": {
      "01": {
        "title": "Green",
        "id": "01"
      },
      "02": {
        "title": "B. Green",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "G",
    "type": "S"
  },
  "m109": {
    "name": "Food",
    "id": "m109",
    "variants": {
      "01": {
        "title": "Fire",
        "id": "01"
      },
      "02": {
        "title": "B. Fire",
        "id": "02"
      }
    },
    "star": "1",
    "attribute": "F",
    "type": "S"
  },
  "m110": {
    "name": "Gron",
    "id": "m110",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Gron",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "G",
    "type": "G"
  },
  "m111": {
    "name": "Firon",
    "id": "m111",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Firon",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "F",
    "type": "G"
  },
  "m112": {
    "name": "Bluron",
    "id": "m112",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Bluron",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "W",
    "type": "G"
  },
  "m113": {
    "name": "Daron",
    "id": "m113",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Daron",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "D",
    "type": "G"
  },
  "m114": {
    "name": "Liron",
    "id": "m114",
    "variants": {
      "01": {
        "title": "",
        "id": "01"
      },
      "02": {
        "title": "Liron",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "L",
    "type": "G"
  },
  "m117": {
    "name": "多米",
    "id": "m117",
    "variants": {
      "01": {
        "title": "G. Cat Dummy",
        "id": "01"
      },
      "02": {
        "title": "G. Cat Devil",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "D",
    "type": "G"
  },
  "m124": {
    "name": "Watcher",
    "id": "m124",
    "variants": {
      "01": {
        "title": "Red",
        "id": "01"
      },
      "02": {
        "title": "Hellfire",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "F"
  },
  "m125": {
    "name": "Watcher",
    "id": "m125",
    "variants": {
      "01": {
        "title": "Blue",
        "id": "01"
      },
      "02": {
        "title": "Freezing",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "W",
    "type": "F"
  },
  "m126": {
    "name": "Watcher",
    "id": "m126",
    "variants": {
      "01": {
        "title": "Darkness",
        "id": "01"
      },
      "02": {
        "title": "Darkest",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "D",
    "type": "F"
  },
  "m127": {
    "name": "Watcher",
    "id": "m127",
    "variants": {
      "01": {
        "title": "Green",
        "id": "01"
      },
      "02": {
        "title": "Dark Green",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "G",
    "type": "F"
  },
  "m128": {
    "name": "Watcher",
    "id": "m128",
    "variants": {
      "01": {
        "title": "Light",
        "id": "01"
      },
      "02": {
        "title": "Sun",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "L",
    "type": "F"
  },
  "m136": {
    "name": "女士",
    "id": "m136",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "star": "4",
    "attribute": "F",
    "type": "F"
  },
  "m141": {
    "name": "万圣节",
    "id": "m141",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "star": "4",
    "attribute": "W",
    "type": "F"
  },
  "m142": {
    "name": "Revenge Girl",
    "id": "m142",
    "variants": {
      "01": {
        "title": "Red",
        "id": "01"
      },
      "02": {
        "title": "Flame",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "J"
  },
  "m143": {
    "name": "Revenge Girl",
    "id": "m143",
    "variants": {
      "01": {
        "title": "Blue",
        "id": "01"
      },
      "02": {
        "title": "Flood",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "W",
    "type": "J"
  },
  "m144": {
    "name": "Revenge Girl",
    "id": "m144",
    "variants": {
      "01": {
        "title": "Green",
        "id": "01"
      },
      "02": {
        "title": "Bloom",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "G",
    "type": "J"
  },
  "m145": {
    "name": "Revenge Girl",
    "id": "m145",
    "variants": {
      "01": {
        "title": "Light",
        "id": "01"
      },
      "02": {
        "title": "Flash",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "L",
    "type": "J"
  },
  "m146": {
    "name": "Revenge Girl",
    "id": "m146",
    "variants": {
      "01": {
        "title": "Purple",
        "id": "01"
      },
      "02": {
        "title": "Darkness",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "D",
    "type": "J"
  },
  "m185": {
    "name": "Actyon",
    "id": "m185",
    "variants": {
      "10": {
        "title": "Dark Knight",
        "id": "10"
      },
      "01": {
        "title": "Silent",
        "id": "01"
      },
      "02": {
        "title": "Reclusive",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "G",
    "type": "F"
  },
  "m186": {
    "name": "Saab",
    "id": "m186",
    "variants": {
      "01": {
        "title": "Pure",
        "id": "01"
      },
      "02": {
        "title": "Cancer",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "L",
    "type": "H"
  },
  "m187": {
    "name": "Dagon",
    "id": "m187",
    "variants": {
      "01": {
        "title": "Drifting",
        "id": "01"
      },
      "02": {
        "title": "Wandering",
        "id": "02"
      }
    }
  },
  "m188": {
    "name": "Gold Coin",
    "id": "m188",
    "variants": {
      "01": {
        "title": "Ancient",
        "id": "01"
      },
      "02": {
        "title": "Greedy",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "F",
    "type": "G"
  },
  "m189": {
    "name": "Mimic",
    "id": "m189",
    "variants": {
      "01": {
        "title": "Startling",
        "id": "01"
      },
      "02": {
        "title": "Horror",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "J"
  },
  "m190": {
    "name": "Boxer",
    "id": "m190",
    "variants": {
      "01": {
        "title": "Hot-Blooded ",
        "id": "01"
      },
      "02": {
        "title": "Fiery",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "L",
    "type": "G"
  },
  "m192": {
    "name": "Blood Dragon",
    "id": "m192",
    "variants": {
      "01": {
        "title": "Flame King",
        "id": "01"
      },
      "02": {
        "title": "Flame Emperor",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "F"
  },
  "m193": {
    "name": "Pompoms",
    "id": "m193",
    "variants": {
      "01": {
        "title": "Yackety",
        "id": "01"
      },
      "02": {
        "title": "Jabbering",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "G",
    "type": "S"
  },
  "m194": {
    "name": "Gron",
    "id": "m194",
    "variants": {
      "01": {
        "title": "Green-Feathered",
        "id": "01"
      },
      "02": {
        "title": "Green Winged",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "G",
    "type": "F"
  },
  "m195": {
    "name": "Liron",
    "id": "m195",
    "variants": {
      "01": {
        "title": "Light-Feather",
        "id": "01"
      },
      "02": {
        "title": "Light-Winged",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "L",
    "type": "F"
  },
  "m196": {
    "name": "Firon",
    "id": "m196",
    "variants": {
      "01": {
        "title": "Fire-Feather",
        "id": "01"
      },
      "02": {
        "title": "Fire-Winged",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "F"
  },
  "m197": {
    "name": "Charonn",
    "id": "m197",
    "variants": {
      "01": {
        "title": "Water-Feather",
        "id": "01"
      },
      "02": {
        "title": "Water-Winged",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "W",
    "type": "F"
  },
  "m198": {
    "name": "Daron",
    "id": "m198",
    "variants": {
      "01": {
        "title": "Dark-Feather",
        "id": "01"
      },
      "02": {
        "title": "Dark-Winged",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "D",
    "type": "F"
  },
  "m199": {
    "name": "Azure Dragon",
    "id": "m199",
    "variants": {
      "01": {
        "title": "Ice King",
        "id": "01"
      },
      "02": {
        "title": "Ice Emperor",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "W",
    "type": "F"
  },
  "m205": {
    "name": "Barf",
    "id": "m205",
    "variants": {
      "01": {
        "title": "Chaste",
        "id": "01"
      },
      "02": {
        "title": "Witch",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "D",
    "type": "J"
  },
  "m206": {
    "name": "Boss Pig",
    "id": "m206",
    "variants": {
      "01": {
        "title": "Relentless",
        "id": "01"
      },
      "02": {
        "title": "Murderous",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "F"
  },
  "m211": {
    "name": "Angel Lot",
    "id": "m211",
    "variants": {
      "01": {
        "title": "Archer",
        "id": "01"
      },
      "02": {
        "title": "Sharpshooter",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "L",
    "type": "H"
  },
  "m212": {
    "name": "Rune",
    "id": "m212",
    "variants": {
      "01": {
        "title": "Emerald",
        "id": "01"
      },
      "02": {
        "title": "Pharaoh",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "G"
  },
  "m214": {
    "name": "Pumpkin",
    "id": "m214",
    "variants": {
      "01": {
        "title": "Unexpected",
        "id": "01"
      },
      "02": {
        "title": "Unexpected",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "F",
    "type": "G"
  },
  "m216": {
    "name": "Fairy",
    "id": "m216",
    "variants": {
      "01": {
        "title": "Silent",
        "id": "01"
      },
      "02": {
        "title": "Holiday",
        "id": "02"
      }
    },
    "star": "4",
    "attribute": "F",
    "type": "F"
  },
  "m217": {
    "name": "Red Nose",
    "id": "m217",
    "variants": {
      "01": {
        "title": "Silent",
        "id": "01"
      },
      "02": {
        "title": "Holiday",
        "id": "02"
      }
    },
    "star": "4",
    "attribute": "G",
    "type": "S"
  },
  "m223": {
    "name": "Gift Bag",
    "id": "m223",
    "variants": {
      "01": {
        "title": "Good Kid's",
        "id": "01"
      },
      "02": {
        "title": "Bad Kid's",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "D",
    "type": "G"
  },
  "m231": {
    "name": "Cross",
    "id": "m231",
    "variants": {
      "01": {
        "title": "Grave",
        "id": "01"
      },
      "02": {
        "title": "Deadman's",
        "id": "02"
      }
    },
    "star": "2",
    "attribute": "D",
    "type": "J"
  },
  "m245": {
    "name": "Creature",
    "id": "m245",
    "variants": {
      "01": {
        "title": "Abandoned",
        "id": "01"
      },
      "02": {
        "title": "The Creator's",
        "id": "02"
      }
    },
    "star": "4",
    "attribute": "F",
    "type": "S"
  },
  "m255": {
    "name": "Ampoule",
    "id": "m255",
    "variants": {
      "01": {
        "title": "Toy",
        "id": "01"
      },
      "02": {
        "title": "Venom",
        "id": "02"
      }
    },
    "star": "3",
    "attribute": "F",
    "type": "J"
  },
  "m007": {
    "name": "泰迪",
    "id": "m007",
    "variants": {
      "00": {
        "title": "Human",
        "id": "00"
      }
    },
    "star": "3",
    "attribute": "L",
    "type": "F"
  },
  "m227": {
    "name": "Crocell",
    "id": "m227",
    "variants": {
      "89": {
        "title": "Fire",
        "id": "89"
      },
      "01": {
        "title": "",
        "id": "01"
      }
    }
  },
  "m257": {
    "name": "Crocell",
    "id": "m257",
    "variants": {
      "89": {
        "title": "Wood",
        "id": "89"
      }
    }
  },
  "m258": {
    "name": "Crocell",
    "id": "m258",
    "variants": {
      "89": {
        "title": "Giant",
        "id": "89"
      }
    }
  },
  "m259": {
    "name": "Crocell",
    "id": "m259",
    "variants": {
      "89": {
        "title": "Water",
        "id": "89"
      }
    }
  },
  "m260": {
    "name": "Crocell",
    "id": "m260",
    "variants": {
      "89": {
        "title": "Light",
        "id": "89"
      }
    }
  },
  "m262": {
    "name": "Cocoon",
    "id": "m262",
    "variants": {
      "89": {
        "title": "Created",
        "id": "89"
      }
    }
  },
  "c075": {
    "name": "No-Name",
    "id": "c075",
    "variants": {
      "00": {
        "title": "No-Name",
        "id": "00"
      },
      "01": {
        "title": "No-Name",
        "id": "01"
      },
      "02": {
        "title": "No-Name",
        "id": "02"
      }
    }
  },
  "c113": {
    "name": "No-Name",
    "id": "c113",
    "variants": {
      "00": {
        "title": "No-Name",
        "id": "00"
      }
    }
  },
  "c215": {
    "name": "No-Name",
    "id": "c215",
    "variants": {
      "00": {
        "title": "No-Name",
        "id": "00"
      }
    }
  },
  "c240": {
    "name": "No-Name",
    "id": "c240",
    "variants": {
      "01": {
        "title": "No-Name",
        "id": "01"
      },
      "02": {
        "title": "No-Name",
        "id": "02"
      }
    }
  },
  "c352": {
    "name": "No-Name",
    "id": "c352",
    "variants": {
      "00": {
        "title": "No-Name",
        "id": "00"
      }
    }
  },
  "c369": {
    "name": "No-Name",
    "id": "c369",
    "variants": {
      "00": {
        "title": "No-Name",
        "id": "00"
      }
    }
  },
  "c413": {
    "name": "No-Name",
    "id": "c413",
    "variants": {
      "21": {
        "title": "No-Name",
        "id": "21"
      },
      "00": {
        "title": "No-Name",
        "id": "00"
      }
    }
  },
  "c515": {
    "name": "No-Name",
    "id": "c515",
    "variants": {
      "00": {
        "title": "No-Name",
        "id": "00"
      }
    }
  },
  "c570": {
    "name": "No-Name",
    "id": "c570",
    "variants": {
      "00": {
        "title": "No-Name",
        "id": "00"
      }
    }
  },
  "c574": {
    "name": "No-Name",
    "id": "c574",
    "variants": {
      "02": {
        "title": "No-Name",
        "id": "02"
      }
    }
  },
  "m003": {
    "name": "炎龙",
    "star": "3",
    "attribute": "F",
    "id": "m003",
    "variants": {
      "sm003_01": {
        "title": "温泉皮",
        "id": "sm003_01"
      }
    },
    "type": "F"
  },
  "m036": {
    "name": "传达者",
    "star": "3",
    "attribute": "D",
    "id": "m036",
    "variants": {
      "sm036_01": {
        "title": "温泉皮",
        "id": "sm036_01"
      }
    },
    "type": "F"
  },
  "m037": {
    "name": "追逐者",
    "star": "3",
    "attribute": "D",
    "id": "m037",
    "variants": {
      "sm037_01": {
        "title": "温泉皮",
        "id": "sm037_01"
      }
    },
    "type": "H"
  },
  "m039": {
    "name": "利嘉",
    "star": "3",
    "attribute": "L",
    "id": "m039",
    "variants": {
      "sm039_01": {
        "title": "温泉皮",
        "id": "sm039_01"
      }
    },
    "type": "F"
  },
  "m137": {
    "name": "铃铛男孩",
    "star": "3",
    "attribute": "G",
    "id": "m137",
    "variants": {
      "sm137_01": {
        "title": "温泉皮",
        "id": "sm137_01"
      }
    },
    "type": "F"
  },
  "m148": {
    "name": "噪音圆",
    "star": "3",
    "attribute": "L",
    "id": "m148",
    "variants": {
      "sm148_01": {
        "title": "温泉皮",
        "id": "sm148_01"
      }
    },
    "type": "J"
  },
  "m149": {
    "name": "赫兹",
    "star": "3",
    "attribute": "W",
    "id": "m149",
    "variants": {
      "sm149_01": {
        "title": "温泉皮",
        "id": "sm149_01"
      }
    },
    "type": "S"
  },
  "m150": {
    "name": "帽子戏法",
    "star": "4",
    "attribute": "G",
    "id": "m150",
    "variants": {
      "sm150_01": {
        "title": "温泉皮",
        "id": "sm150_01"
      }
    },
    "type": "F"
  },
  "m151": {
    "name": "疯狂兔子",
    "star": "3",
    "attribute": "L",
    "id": "m151",
    "variants": {
      "sm151_01": {
        "title": "温泉皮",
        "id": "sm151_01"
      }
    },
    "type": "F"
  },
  "m152": {
    "name": "格斗家",
    "star": "3",
    "attribute": "F",
    "id": "m152",
    "variants": {
      "sm152_01": {
        "title": "温泉皮",
        "id": "sm152_01"
      }
    },
    "type": "G"
  },
  "m153": {
    "name": "螳螂",
    "star": "3",
    "attribute": "G",
    "id": "m153",
    "variants": {
      "sm153_01": {
        "title": "温泉皮",
        "id": "sm153_01"
      }
    },
    "type": "G"
  }
};
exports.CHILDS_CODE_MAP = CHILDS_CODE_MAP;
