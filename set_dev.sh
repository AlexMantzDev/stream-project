cd ./backend;
rm -rf dist;
sed -i 's/NODE_ENV=production/NODE_ENV=development/g' ".env";
cd ../frontend;
sed -i 's/environment: "production"/environment: "development"/' "./src/env/env.ts"
cd ../;