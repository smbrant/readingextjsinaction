# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_ExtjsInAction_session',
  :secret      => 'a41c837e26afb263387893af66dbda73fa68490d88cc93f9516d6e84b9d45a3499d4a9038af10fb0470c8f4f2f059c670e3654297b5f3f561c4d5836baffbb9f'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
