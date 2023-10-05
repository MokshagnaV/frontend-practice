const parent = Array.from(
  document.querySelectorAll(".BreakpointGrid_item__erUQQ")
);
const obj = [];
parent.forEach((child) => {
  const img = child.querySelector("img");
  obj.push({ src: img.src, title: img.alt });
});
console.log(obj);

const imgs = document.querySelectorAll("img");
