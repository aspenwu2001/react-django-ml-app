from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route('/')
def start():
    return 'menu'

@app.route('/<name>')
def menufun(name):
    if name == 'train':
        return redirect(url_for('train'))
    if name == 'generate':
        return redirect(url_for('generate'))


@app.route('/menu/train')
def train():
   return 'train'

@app.route('/menu/generate')
def generate():
   return 'generate'

if __name__ == '__main__':

    app.debug = True
    app.run()
    app.run(debug = True)
