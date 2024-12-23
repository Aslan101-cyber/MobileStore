from flask import Blueprint, render_template, redirect, url_for, request, flash

bp = Blueprint('bp', __name__)

@bp.route('/')
def home():
    return render_template('home.html')

@bp.route('/products')
def products():
    return render_template('products.html')

@bp.route('/about')
def about():
    return render_template('about.html')

@bp.route('/rate')
def rate():
    return render_template('rate.html')

@bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        # Placeholder for actual authentication logic
        valid_username = "user"
        valid_password = "password123"

        if username == valid_username and password == valid_password:
            return redirect(url_for('bp.home'))
        else:
            flash("Invalid username or password.")
            return redirect(url_for('bp.login'))

    return render_template('login.html')

@bp.route('/signup')
def signup():
    return render_template('signup.html')

@bp.route('/contact')
def contact():
    return render_template('contact.html')
