This is just a reposiroty for practicing the content of the moralis course React-Web-Development-101.

It can be accesed at:  
https://jplaclau.github.io/react-web-development-101v2/

message to myself: Remember to cd coin-exchange before runing npm start

For some reason I could not deploy this to github pages.

I solved when having --git git added to this section of the package.json:

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build --git git"
