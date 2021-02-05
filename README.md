# drf-angularjs-routing-services24
> Django rest framework and angular js routing base old project.

#### Run the project in your local dev server. Please follow the below instructions.

Actually, the instructions for Ubuntu mac OS will be similar If you develop or run the app on Windows OS I think you will get some little error. I recommend you to if develop the project you may switch Linux base platform or Mac.

## Prerequisites:
- Python 3.6
- Django 2.11

Open in your base/ZSH terminal then run the command:
```base
git clone https://github.com/mbrsagor/drf-angularjs-routing-services24.git
cd drf-angularjs-routing-services24
virtualenv venv --python=python3.6
source venv/bin/activate
./manage.py migrate
./manage.py createsupeuser
./manage.py runserver
```
