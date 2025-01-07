```toml
name = 'Patch User'
method = 'PATCH'
url = '{{baseUrl}}/users'
sortWeight = 3000000
id = 'dff06c65-fe8b-4584-b6fe-34cb699e1350'

[body]
type = 'JSON'
raw = '''
{
  "email": "aghartur@gmail.com",
  "password": "Password-123"
}'''
```
