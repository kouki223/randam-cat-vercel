//APIキーを使ってAPIを叩く

if (!process.env.CAT_API_KEY) {
    throw new Error("環境変数 CAT_API_KEY が設定されていません。");
}

//process.envは環境変数を保存するためのもの
export const CAT_API_KEY = process.env.CAT_API_KEY;
