from flask import Flask, render_template
import sys
application = Flask(__name__)

@application.route('/')
def home():
    return render_template("home.html")


@application.route('/restaurant/add')
def add_restaurant():
    return render_template("add-restaurant.html")

@application.route('/restaurant/list')
def restautrant_list():
    return render_template("restautrant-list.html")

@application.route('/restaurant/detail')
def restautrant_detail():
    return render_template("restautrant-detail.html")


@application.route('/review/add')
def home():
    return render_template("add-review.html")

@application.route('/review/list')
def home():
    return render_template("review-list.html")
    
@application.route('/review/detail')
def home():
    return render_template("review-detail.html")


@application.route('/menu/add')
def home():
    return render_template("add-menu.html")

@application.route('/menu/list')
def home():
    return render_template("menu-list.html")

    
@application.route('/login')
def home():
    return render_template("login.html")

@application.route('/signup')
def home():
    return render_template("sign-up.html")

@application.route('/mypage')
def home():
    return render_template("mypage.html")



if __name__ == "__main__":
    application.run(host='0.0.0.0')