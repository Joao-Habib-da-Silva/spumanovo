from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client
from flask import Flask, request
app = Flask(__name__)
account_sid = ''
auth_token = ''
client = Client(account_sid, auth_token)
@app.route('/whatsapp', methods=['POST'])
def whatsapp_webhook():
    incoming_msg = request.values.get('Body', '').strip.lower()
    from_number = request.values('from', '')
    resp = MessagingResponse()
    if 'ola' in incoming_msg:
        client.messages.create(
          from_='whatsapp:+14155238886',
          content_sid='',
          content_variables='{"Gostaria de fazer"}',
          to=from_number
        )
if __name__ == '__main__':
  app.run(debug=True)