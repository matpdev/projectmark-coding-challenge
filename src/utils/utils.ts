interface color {
  main: string;
  second: string;
  third: string;
}

let colors: color[] = [
  {
    main: "#F7F1FF",
    second: "#E9D9FF",
    third: "#DABFFF",
  },
  {
    main: "#FEF6EF",
    second: "#FFE4CC",
    third: "#FFD6B3",
  },
  {
    main: "#E6F4FF",
    second: "#BFE3FF",
    third: "#99D1FF",
  },
  {
    main: "#DEF5F7",
    second: "#AAECF2",
    third: "#81DDE5",
  },
  {
    main: "#FFF2F6",
    second: "#FFD9E4",
    third: "#FFBFD2",
  },
  {
    main: "#F2F7FA",
    second: "#E2E8F0",
    third: "#CBD5E0",
  },
];

export function getColor(y: number): color {
  let index = y;

  while (index >= colors.length) {
    index = y - index;
  }

  return index < 0 ? colors[0] : colors[index];
}
