## Description
ibisのフロントです。

## Usage
.env ファイルに以下の値を定義してください。

NEXT_PUBLIC_FIREBASE_API_KEY=hogehoge  
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=hogehoge  
NEXT_PUBLIC_FIREBASE_DATABASE_URL=hogehoge  
NEXT_PUBLIC_FIREBASE_PROJECT_ID=hogehoge  
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=hogehoge  
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=hogehoge  
NEXT_PUBLIC_FIREBASE_APP_ID=hogehoge  
BASE_URL=http://localhost:3000  
STRIPE_KEY=hogehoge  

※ibis-bffに接続する場合は、BASE_URLをibis_docker_main記載のPORTに
修正してください。
https://github.com/IBis-academic/ibis-docker-main

## Install
npm ci
npm run dev

## Licence
以下に記載。
https://github.com/TakuoIshida/ibis-web/blob/master/LICENSE
## Author
ishida takuo

## deploy
https://ibis-web.vercel.app/
