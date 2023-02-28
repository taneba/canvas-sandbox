import "./styles.css";

// ページ上に描画するキャンバスを作成する
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// キャンバスのコンテキストを取得する
const context = canvas.getContext("2d");

// 図形のサイズを決定する
// const size = 10;
// // 多角形の最小サイズを設定する
const minSize = 0.4;

// // 多角形の最大サイズを設定する
const maxSize = 4;

// 複数の螺旋状に図形を描画する
for (let j = 0; j < 10; j++) {
  // 図形を配置する位置をランダムに決定する

  // 図形を描画する
  for (let i = 0; i < 200; i++) {
    let x = canvas.width / 2;
    let y = canvas.height / 2;

    // 多角形の頂点数をランダムに決定する
    const numSides = Math.floor(Math.random() * 6) + 3; // 3から8までの整数

    // 図形を回転させる
    const angle = i * 0.4;
    const dx = angle * Math.cos(angle + j * 0.5) * 10;
    const dy = angle * Math.sin(angle + j * 0.5) * 10;
    x += dx;
    y += dy;
    // 多角形のサイズをランダムに決定する
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    context.beginPath();
    context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

    for (let j = 1; j < numSides; j++) {
      context.lineTo(
        x + size * Math.cos((j * 2 * Math.PI) / numSides),
        y + size * Math.sin((j * 2 * Math.PI) / numSides)
      );
    }
    context.closePath();

    var color = getRandomSpringColorRGB();

    // 四角形を描画
    context.fillStyle =
      "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    context.fill();
  }
}

function getRandomSpringColorRGB() {
  var colors = [
    // 桜のピンク
    [255, 192, 203],
    [255, 182, 193],
    [255, 160, 180],
    [255, 105, 180],
    // 緑
    [154, 205, 50],
    [144, 238, 144]
  ];

  // colorsからランダムに1つ選択
  var randomIndex = Math.floor(Math.random() * colors.length);
  var color = colors[randomIndex];

  return color;
}

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}
