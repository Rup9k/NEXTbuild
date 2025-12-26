1. Скачиваем папку

2. Открываем папку в vscode

3. Открываем терминал GitBash, прописываем по очереди:

cd backend

source venv/Scripts/activate

pip install django

pip install djangorestframework

pip install django-cors-headers

pip install djangorestframework-simplejwt

после установки, перезагружаем vscode

4. Открываем новый терминал GitBash, прописываем по очереди:

deactivate

cd frontend

npm install

npm start

(мы запустили фронт)

4. Открываем новый терминал GitBash, прописываем по очереди:

cd backend

source venv/Scripts/activate

python manage.py runserver

(мы запустили бэк, локально)

4. Данный для авторицазии и тестирования:

   админ: 
     логин:admin2
     пароль:root
   
   пользователь:
     логин:testuser
     пароль:12345678

   для использования админки(Django) открыть ссылку:

   http://127.0.0.1:8000/admin/
