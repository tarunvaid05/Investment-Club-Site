from flask import Flask, render_template
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, 
           template_folder=current_dir,  
           static_folder=current_dir,    
           static_url_path='')         

@app.route('/')
def home():
    return render_template('login.html')

if __name__== '__main__':
    app.run(debug=True)