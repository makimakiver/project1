from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/square', methods=['POST'])
def square():
    data = request.get_json()
    number = data.get('number')
    return jsonify({'square': number * number}), 200

if __name__ == '__main__':
    app.run(port=5000)
