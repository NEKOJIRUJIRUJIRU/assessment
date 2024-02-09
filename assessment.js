'use strict';

const userNameInput   = document.getElementById('user-name');
const assesmentButton = document.getElementById('assesment');
const resultDivision  = document.getElementById('result-area');
const tweetDivision   = document.getElementById('tweet-area');

assesmentButton.onclick = () => {
  const userName = userNameInput.value;
  if(userName.length === 0) {
  return; //名前が空の場合は関数の処理を終了する。
  }
  console.log(userName);
  resultDivision.innerText = '';  //結果を追加

  //ここから下は名前が空ではない時の処理


  // 診断結果表示エリアの作成
  const header = document.createElement('h3')  //h3タグを作る

  header.innerText = '診断結果'; //内側のテキスト。(中身の文章を設定)

  resultDivision.appendChild(header);  //divの子要素として追加

  const paragraph = document.createElement('p');
  const result = assesment(userName);  //診断結果を取得
  paragraph.innerText = result;
  resultDivision.appendChild(paragraph);
  // TODO ツイートエリアの作成

  
  tweetDivision.innerText = '';
  const anchor = document.createElement('a');
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';

  anchor.setAttribute('href',hrefValue );
  anchor.setAttribute('class','twitter-hashtag-button');
  anchor.setAttribute('data-text','診断結果の文章');
  anchor.innerText = 'Tweet #あなたのいいところ';

 tweetDivision.appendChild(anchor);

const script = document.createElement('script');
script.setAttribute('src','https://platform.twitter.com/widgets.js');
tweetDivision.appendChild(script);
}

const answers = [
    '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
    '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
    '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
    '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
    '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
    '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
    '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
    '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
    '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
    '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
    '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
    '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
    '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
    '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
    '###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
    '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
  ];

  /**
   * 名前の文字列を渡すと診断結果を返す変数
   * @param {string} userName ユーザの名前
   * @return {string} 診断結果
   */
  function assesment(userName){
  // 全文字のコード番号を取得してそれを足し合わせる
    let sum0fcharCode = 0;
    for (let i = 0; i < userName.length; i++) {
       sum0fcharCode = sum0fcharCode + userName.charCodeAt(i);
    }

    //文字コード番号の合計の数で割って添え字の数値を求めます。
    const index = sum0fcharCode % answers.length; // 0 ~ answers.length - 1 の間の数値
    let result = answers[index]
   result = result.replaceAll('###userName###', userName);
    return result;
  }


  console.assert(
    assesment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  console.assert(
    assesment('太郎') === assesment('太郎'),
    '同じ名前で診断した場合に同じ結果になっていません。'
  );
  '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。'

  console.assert(
    assesment('次郎') === assesment('次郎'),
    '同じ名前で診断した場合に同じ結果になっていません。'
  );

  console.assert(
    assesment('今村') === assesment('今村'),
    '同じ名前で診断した場合に同じ結果になっていません。'
  );

  userNameInput.onkeydown = event => {
  if(event.key === 'Enter ')  {
    assesmentButton.onclick();  //ボタンを押した時と同じ関数を実行
  }

  
  }