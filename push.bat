@echo off
echo Pasta atual: %cd%
echo --- Iniciando Sincronizacao ---
git add .
git commit -m "Atualizacao automatica: %date% %time%"
git push origin main
pause