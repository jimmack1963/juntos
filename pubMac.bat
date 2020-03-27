node touch.js
quasar clean
quasar build -d -m spa -t mat

cp now.json dist\spa\now.json

now deploy "dist/spa" -n "juntos"

read -p "Press enter"

now ls juntos > juntos-mat.txt

cat juntos-mat.txt

read -p "Press enter"

now alias ls


node latestIOS

echo now rm juntos --safe --yes


