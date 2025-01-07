```toml
name = 'CREATE USER'
method = 'POST'
url = '{{baseUrl}}/users'
sortWeight = 2000000
id = '1fe3f1d1-af9a-448b-9a58-00f5f8a4bed1'

[body]
type = 'JSON'
raw = '''
{
  "firstName" : "John",
  "lastName" : "Doe",
  "email": "john@doe.com",
  "password": "Password-123",
}'''
```
