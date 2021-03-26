## Avanade IHP(Inclusive Hiring Pipelines) Backend
This is backend part of the project with Django.

## Technologies
Project is created with:
* Anaconda: 4.9.2
* Python: 3.8.8
* Django: 3.1.7

## Setup
The first thing to do is to clone the repository:

    $ git clone https://github.com/UCLComputerScience/COMP0016_2020_21_Team9.git
    $ cd COMP0016_2020_21_Team9/bias-detect/bias_backend

Create a virtual environment to install dependencies in and activate it:

    # You may want to change the name 'bias-backend'.
    $ conda create -n bias-backend
    $ conda activate bias-backend

Then install the dependencies:


    (bias-backend)$ conda install --file requirements.txt


Note the '(bias-backend)' in front of the prompt. This indicates that this terminal session operates in a virtual environment set up by Anaconda.

Once conda has finished downloading the dependencies:

    (bias-backend)$ cd bias_backend
    (bias-backend)$ python3 manage.py migrate
    (bias-backend)$ python3 manage.py runserver

And navigate to http://127.0.0.1:8000/bias-detect/
