from flask import Flask,render_template,request

app = Flask(__name__,
 template_folder="temp",
    static_folder="static")

@app.route('/',methods=['GET',"POST"])
def front():
   return render_template("front.html")
   
@app.route('/clock',methods=['GET',"POST"])
def clock():
   return render_template("clock.html")

@app.route('/calender',methods=['GET',"POST"])
def calender():
   return render_template("calender.html")

@app.route('/clock/alarm',methods=['GET',"POST"])
def alarm():
   return render_template("alarm.html")

@app.route('/clock/worldclock',methods=['GET',"POST"])
def worldclock():
   return render_template("worldclock.html")

@app.route('/clock/timer',methods=['GET',"POST"])
def timer():
   return render_template("timer.html")

@app.route('/clock/stopwatch',methods=['GET',"POST"])
def stopwatch():
   return render_template("stopwatch.html")

if __name__ == "__main__":
   app.config['TEMPLATES_AUTO_RELOAD'] = True
   app.run(debug=True)