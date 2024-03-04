cd ./backend;
rm -rf dist;
sed -i 's/NODE_ENV=production/NODE_ENV=development/g' ".env";
npm run serve;
cd ../frontend;
sed -i 's/environment: "production"/environment: "development"/' "./src/env/env.ts"
npx ng serve;