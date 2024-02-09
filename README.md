# assessment
あなたのいいところ診断ゲーム
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="twitter:card" content="summary">
    <meta
      property="og:url"
      content="https://NEKOJIRUJIRUJIRU.github.io/assessment/assessment.html"
    >
    <meta property="og:title" content="あなたのいいところ診断">
    <meta
      property="og:description"
      content="N予備校プログラミング入門コースで制作した、「あなたのいいところ診断」サイトです。"
    >
    <link rel="stylesheet" href="assessment.css">
    <title>あなたのいいところ診断</title>
  </head>
  <body>
    <h1>あなたのいいところは?</h1>
    <p>診断したい名前を入れて下さい</p>
    <input type="text" id="user-name" size="40" maxlength="20">
    <button id="assessment">診断する</button>
    <div id="result-area"></div>
    <div id="tweet-area"></div>
    <script src="assessment.js"></script>
  </body>
</html>
