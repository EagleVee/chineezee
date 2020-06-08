import {any, string} from "prop-types";

// Unicode CJK Unified Ideographs
const MIN_UVALUE = 0x4e00;
const MAX_UVALUE = 0x9fa5;

const MIN_BIG5A = 0xa440;
const MAX_BIG5A = 0xc69f;

export default class CharacterHelper {
  // Returns true if the first character is Chinese
  static isChinese(ch: string) {
    if (!ch || ch.length === 0) {
      return false;
    }

    const i = ch.charCodeAt(0);
    return i >= MIN_UVALUE && i <= MAX_UVALUE;
  }

  // Returns true if the Big5 character code (as a string) is Big5a
  static isBig5a(value: any) {
    if (!value) {
      return false;
    }

    value = parseInt(value, 16);
    return value >= MIN_BIG5A && value <= MAX_BIG5A;
  }

  // functions

  // Return a new string by replacing one character with supplied string
  static setCharAt(str: string, i: number, ch: string) {
    if (i < str.length) {
      return str.substr(0, i) + ch + str.substr(i + 1);
    }

    return str;
  }

  // Given a string that contains 0 or more U+ values, return
  // an array of 0 or more corresponding Unicode characters
  static convertCode(value: string) {
    if (!value) {
      return [];
    }

    let splits = value.split("U+");
    if (splits.length < 2) {
      return [];
    }

    const result = [];
    splits = splits.slice(1);

    for (const i in splits) {
      result.push(String.fromCharCode(parseInt(splits[i], 16)));
    }

    return result;
  }

  // Given a string that contains 0 or more radical.stroke counts,
  // return an array of 0 or more {"R":int, "S":int} values.
  static parseRS(value: string) {
    if (!value) {
      return [];
    }

    const results = [];
    const splits = value.split(" ");

    for (const i in splits) {
      const str = splits[i];
      const iS = str.lastIndexOf(".");
      if (iS > 0) {
        const r = parseInt(str, 10);
        if (r) {
          const s = parseInt(str.substr(iS + 1), 10);
          results.push({R: r, S: s});
        }
      }
    }

    return results;
  }

  // Compares two RS strings.
  static compareRS(a: string, b: string) {
    const rs1 = this.parseRS(a);
    const rs2 = this.parseRS(b);
    if (rs1.length > 0 && rs2.length > 0) {
      return rs1[0].R === rs2[0].R && rs1[0].S === rs2[0].S;
    }

    return false;
  }

  // Find U+xxxx sequences and insert parenthetical Unicode characters
  static injectUnicode(value: string) {
    if (value === null) {
      return "";
    }

    let splits = value.split("U+");
    if (splits.length == 1) {
      return value;
    }

    let result = splits[0];
    splits = splits.slice(1);

    for (const s in splits) {
      const splits2 = splits[s].split(" ");
      const v = splits2[0];
      let x = "";
      if (splits2.length > 1) {
        x = " " + splits2.slice(1).join(" ");
      }

      result +=
        "U+" + v + " (" + String.fromCharCode(parseInt(v, 16)) + ")" + x;
    }

    return result;
  }

  // sounds

  // Split the given sound and its tone, if any
  static splitSound(value: string): [string, number] {
    let result = "";
    if (value) {
      result = value.toLowerCase();
    }

    let tone = parseInt(value.substr(value.length - 1), 10);
    if (isNaN(tone)) {
      tone = 0;
    } else {
      result = result.substr(0, result.length - 1);
    }

    const iV = result.indexOf("v");
    if (iV >= 0) {
      result = this.setCharAt(result, iV, "\u00FC");
    }

    return [result, tone];
  }

  static addDiacritic(value: string, tone: number) {
    if (value === "ng") {
      switch (tone) {
        case 2:
          value = this.setCharAt(value, 0, "\u0144");
          break;
        case 3:
          value = this.setCharAt(value, 0, "\u0148");
          break;
        case 4:
          value += "\u0300";
          break;
      }

      return value;
    }

    if (value === "m") {
      switch (tone) {
        case 2:
          value += "\u0301";
          break;
        case 4:
          value += "\u0300";
          break;
      }

      return value;
    }

    let iA = value.lastIndexOf("a"); // for Yale
    let iO = value.indexOf("o");
    let iE = value.indexOf("e");
    let iI = value.indexOf("i");
    let iU = value.indexOf("u");
    let iV = value.indexOf("\u00FC");

    const iIU = value.indexOf("iu");
    if (iIU >= 0) {
      iI = -1;
      iU = iIU + 1;
    }

    if (iA >= 0) {
      switch (tone) {
        case 1:
          value = this.setCharAt(value, iA, "\u0101");
          break;
        case 2:
          value = this.setCharAt(value, iA, "\u00E1");
          break;
        case 3:
          value = this.setCharAt(value, iA, "\u01CE");
          break;
        case 4:
          value = this.setCharAt(value, iA, "\u00E0");
          break;
      }
    } else if (iO >= 0) {
      switch (tone) {
        case 1:
          value = this.setCharAt(value, iO, "\u014D");
          break;
        case 2:
          value = this.setCharAt(value, iO, "\u00F3");
          break;
        case 3:
          value = this.setCharAt(value, iO, "\u01D2");
          break;
        case 4:
          value = this.setCharAt(value, iO, "\u00F2");
          break;
      }
    } else if (iE >= 0) {
      switch (tone) {
        case 1:
          value = this.setCharAt(value, iE, "\u0113");
          break;
        case 2:
          value = this.setCharAt(value, iE, "\u00E9");
          break;
        case 3:
          value = this.setCharAt(value, iE, "\u011B");
          break;
        case 4:
          value = this.setCharAt(value, iE, "\u00E8");
          break;
      }
    } else if (iI >= 0) {
      switch (tone) {
        case 1:
          value = this.setCharAt(value, iI, "\u012B");
          break;
        case 2:
          value = this.setCharAt(value, iI, "\u00ED");
          break;
        case 3:
          value = this.setCharAt(value, iI, "\u01D0");
          break;
        case 4:
          value = this.setCharAt(value, iI, "\u00EC");
          break;
      }
    } else if (iU >= 0) {
      switch (tone) {
        case 1:
          value = this.setCharAt(value, iU, "\u016B");
          break;
        case 2:
          value = this.setCharAt(value, iU, "\u00FA");
          break;
        case 3:
          value = this.setCharAt(value, iU, "\u01D4");
          break;
        case 4:
          value = this.setCharAt(value, iU, "\u00F9");
          break;
      }
    } else if (iV >= 0) {
      switch (tone) {
        case 1:
          value = this.setCharAt(value, iV, "\u01D6");
          break;
        case 2:
          value = this.setCharAt(value, iV, "\u01D8");
          break;
        case 3:
          value = this.setCharAt(value, iV, "\u01DA");
          break;
        case 4:
          value = this.setCharAt(value, iV, "\u01DC");
          break;
      }
    }

    return value;
  }

  ///////////////////////////////////////////////////////////////////////////
  // pinyin

  // Convert a list of space-separated Unihan-format sounds to an array of pinyin syllables
  static getSoundsPinyin(value: string) {
    let results: string[] = [];
    if (!value) {
      return results;
    }

    const splits = value.split(" ");
    for (const i in splits) {
      results.push(this.convertPinyin(splits[i]));
    }

    return results;
  }

  // Convert a list of space-separated Unihan-format sounds to pinyin
  static convertSoundsPinyin(value: string) {
    return this.getSoundsPinyin(value).join(" ");
  }

  // Convert from Unihan format (upper-case, with tone numbers) to real pinyin.
  static convertPinyin(value: string) {
    const split = this.splitSound(value);
    const result = split[0];
    const tone = split[1];
    if (tone < 1 || tone > 5) {
      return result;
    }

    return this.addDiacritic(result, tone);
  }

  // Yale romanization for Cantonese

  // Convert a list of space-separated Unihan-format sounds to an array of Yale syllables
  static getSoundsYale(value: string) {
    let results: (string | number)[] = [];
    if (!value) {
      return results;
    }

    const splits = value.split(" ");
    for (const i in splits) {
      results.push(this.convertYale(splits[i]));
    }

    return results;
  }

  // Convert a list of space-separated Unihan-format sounds to Yale
  static convertSoundsYale(value: string) {
    return this.getSoundsYale(value).join(" ");
  }

  // Convert from Unihan format (with tone numbers) to real Yale.
  static convertYale(value: string) {
    const split = this.splitSound(value);
    let result = split[0];
    let tone = split[1];
    if (tone < 1 || tone > 6) {
      return result;
    }

    if (tone >= 4) {
      result += "h";
    }

    if (tone === 3 || tone === 6) {
      return result;
    }

    if (tone === 5) {
      tone = 2;
    }

    return this.addDiacritic(result, tone);
  }

  // filters

  // Negate things like x, x+y, x|y
  static invertFilter(term: string) {
    let result = "";
    if (!term) {
      return result;
    }

    let sep = null;
    if (term.indexOf("+") > 0) {
      sep = "+";
    }

    if (term.indexOf("|") > 0) {
      if (sep) {
        return result;
      }

      sep = "|";
    }

    function invertOne(one: string) {
      if (one.charAt(0) === "!") {
        return one.substr(1);
      }

      return "!" + one;
    }

    if (!sep) {
      return invertOne(term.trim());
    }

    const fields = term.split(sep);
    sep = sep === "+" ? "|" : "+";

    for (let i = 0; i < fields.length; i++) {
      if (i > 0) {
        result += sep;
      }

      result += invertOne(fields[i].trim());
    }

    return result;
  }

  // Multiply out Boolean AND filter. Examples:
  //    a+b AND c+d = a+b+c+d
  //    a+b AND c|d = a+b+c|a+b+d
  //    a|b AND c|d = a+c|a+d|b+c|b+d
  static andFilters(x: string, y: string) {
    let result = "";
    if (!x || !y) {
      return result;
    }

    const f1 = x.split("|");
    const f2 = y.split("|");

    for (let i = 0; i < f1.length; i++) {
      for (let j = 0; j < f2.length; j++) {
        if (result.length > 0) {
          result += "|";
        }

        result += f1[i] + "+" + f2[j];
      }
    }

    return result;
  }
}
