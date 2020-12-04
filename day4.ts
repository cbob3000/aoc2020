import fs = require("fs");

const file = fs.readFileSync('input/day4.txt', 'utf-8');
const input = file.split("\r\n\r\n");

const reqFields: string[] = [ "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid" ];

const hcl = new RegExp(/^#[0-9a-f]{6}$/);
const pid = new RegExp(/^\d{9}$/);

var valids = 0;

input.forEach(element => {
    const line = element.replace(/(\r\n|\n|\r)/gm, " ");
    var valid = true;
    reqFields.forEach(reqField => {
        if (!line.includes(reqField)) valid = false;
    });

    if (valid) {
        const fields: any = {}
        line.split(" ").forEach(field => {
          const [k, v] = field.split(":");
          fields[k] = v == undefined ? "" : v.trim();
        });

        if (valid) {
          const hgtValue = fields["hgt"];
          const hgtUnit = hgtValue.substring(hgtValue.length - 2);
          const hgt = hgtValue.substring(0, hgtValue.length - 2);

          valid = hgtUnit === "cm" || hgtUnit === "in";

          if (valid) {
            if (hgtUnit === "cm" && (+hgt < 150 || +hgt > 193)) {
              valid = false;
            }
            else if (hgtUnit === "in" && (+hgt < 59 || +hgt > 76)) {
              valid = false;
            }
          }
        }

        valid =
          (+fields["byr"] >= 1920 && +fields["byr"] <= 2002) &&
          (+fields["iyr"] >= 2010 && +fields["iyr"] <= 2020) &&
          (+fields["eyr"] >= 2020 && +fields["eyr"] <= 2030) &&
          [ "amb", "blu", "brn", "gry", "grn", "hzl", "oth" ].indexOf(fields["ecl"]) !== -1 &&
          null !== fields["pid"].match(pid) &&
          null !== fields["hcl"].match(hcl);

        if (valid) {
          valids++;
        }
    }
});

console.log(valids);
