cd ./backend
sed -i 's/NODE_ENV=development/NODE_ENV=production/g' ".env";
rm -rf dist;
npm run build;
cd ../frontend;
sed -i 's/environment: "development"/environment: "production"/' "./src/env/env.ts"
npx ng build;
cd ../;
docker compose build;