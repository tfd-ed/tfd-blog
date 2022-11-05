export default function convertKhmerNumber(number) {
  const symbolMap = {
    1: "១",
    2: "២",
    3: "៣",
    4: "៤",
    5: "៥",
    6: "៦",
    7: "៧",
    8: "៨",
    9: "៩",
    0: "០",
  };
  return number.toString().replace(/\d/g, function (match) {
    return symbolMap[match];
  });
}
