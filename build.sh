cd ./backend
rm -rf dist;
npm run build;
cd ../frontend;
npx ng build;
cd ../;
docker compose build;